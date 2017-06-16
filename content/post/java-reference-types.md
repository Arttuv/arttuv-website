+++
date = "2017-06-15T21:46:54+03:00"
draft = true
title = "Reference types in Java"
+++

Differences between references in Java can be explained by **reachability**. This is what [Java API Specification](https://docs.oracle.com/javase/7/docs/api/java/lang/ref/package-summary.html#reachability) says about reachability:

> Reachability from strongest to weakest:

> An object is **strongly reachable** if it can be reached by some thread without traversing any reference objects. A newly-created object is strongly reachable by the thread that created it.

> An object is **softly reachable** if it is not strongly reachable but can be reached by traversing a soft reference.

> An object is **weakly reachable** if it is neither strongly nor softly reachable but can be reached by traversing a weak reference. When the weak references to a weakly-reachable object are cleared, the object becomes eligible for finalization.

> An object is **phantom reachable** if it is neither strongly, softly, nor weakly reachable, it has been finalized, and some phantom reference refers to it.

> Finally, an object is **unreachable**, and therefore eligible for reclamation, when it is not reachable in any of the above ways.

Strong reference is the most common one, like:
{{<highlight java>}}
StringBuilder builder = new StringBuilder();
{{</highlight>}}
Soft, Weak and Phantom references have their own classes:
 {{<highlight java>}}
SoftReference<T>
WeakReference<T>
PhantomReference<T>
{{</highlight>}}
Weak and soft references (or indefinite references) in Java allow objects to be reused (Oaks, 2014, p. 208). Usually they are **used to cache the result of a long calculation or a database lookup rather than to reuse a simple object**. The advantage is that indefinite references will eventually be reclaimed by the garbage collector (Oaks, 2014, p. 209), and the JVM can free up space if the heap starts running low. 

The disadvantage is that **indefinite references have a slightly greater effect on the efficiency of the garbage collector**. Indefinite references (like SoftReference<T> or WeakReference<T>) are just like any other object – they consume memory and they are referenced strongly by other objects. It takes at least two GC cycles for an indefinite reference to be reclaimed by the garbage collector. 

The referent will stick around until the JVM decides that the object has not been used recently enough (Oaks, 2014, p. 210). When that happens, the first GC cycle frees the referent, but not the indefinite reference object itself. All strong references to the indefinite reference object must be cleared before the object can be reclaimed by the garbage collector.

# Soft reference

Soft references are used when the object has a good chance of being reused in the future, but you want to let the garbage collector reclaim the object if it hasn’t been used very recently (Oaks, 2014, p. 212). This calculation also takes into consideration how much memory the heap has available. Soft references are essentially one large, least recently used (LRU) object pool. Getting good performance from them is to make sure that they are cleared on a timely basis.

Soft reference is freed during a GC cycle only if the referent is not strongly referenced elsewhere and if the soft reference has not recently been accessed. Based on Oaks, the calculation is as follows:

{{<highlight java>}}
long ms = SoftRefLRUPolicyMSPerMB * AmountOfFreeMemoryInMB;
if (now - last_access_to_reference > ms)
    free the reference
{{</highlight>}}

First value is set by the flag *–xx:SoftRefLRUPolicyMSPerMB=N*, with the default value of 1000. The second value is the amount of free heap after the GC cycle (Oaks, 2014, p. 213). Soft references are reclaimed more frequently if SoftRefLRUPolicyMSPerMG flag is decreased. 

JVM will clear all soft references if it completely runs out of memory or starts thrashing too severely, which prevents OutOfMemoryError but is not ideal. SoftRefLRUPolicyMSPerMB value should be lowered if GC logs indicates that a very large number of soft references are being cleared unexpectedly.

> Too many soft references can easily fill up the entire heap and they should be used with caution (Oaks, 2014, p. 214).

# Weak reference

Weak references should be used when the referent will be used by several threads simultaneously – otherwise the weak reference is too likely to be reclaimed by the garbage collectors (Oaks, 2014, 214). Only weakly referenced objects are reclaimed at every GC cycle. This is where weak reference greatly differs from soft reference: weak reference is immediately freed when strong references are removed.

However, reference objects are just like any other Java objects: they are created in the young generation and eventually promoted to the old generation (Oaks, 2014, p. 214). If the referent of the weak reference is freed while the weak reference itself is still in the young generation, minor GC will free the weak reference quick. If the weak reference has been promoted to the old generation, it will not be freed until the next concurrent or full GC cycle.

> Weak reference is not like a soft reference that is freed more quickly: softly referenced object will usually be available for minutes or even hours, but a weakly referenced object will be available only for as long as its referent is still around (Oaks, 2014, p.215).

## Weak reference collections

JDK provides two classes that utilize indefinite references: **WeakHashMap** and **WeakIdentityMap**. Using these classes is convenient, but they have two costs. First, indefinite references can have a negative effect on garbage collector. Second, the class itself must periodically perform an operation to clear all the unreferenced data in the collection.

For example WeakHashMap uses weak references for its keys. When the weakly referenced key is no longer available, WeakHashMap must clear out the value in the map that used to be associated with that key. This operation is carried out every time the map is referenced. This means that the weak reference and its associated value won’t be freed until the map is used again, and on the other hand the performance of operations on the map is unpredictable.

# Phantom reference 

Phantom reference objects (**PhantomReference<T>**) are enqueued after the collector determines that their referents may otherwise be reclaimed (Java API, 2017). They can be used for scheduling pre-mortem cleanup actions. In order to ensure that reclaimable objects remain reclaimable, the referent of a phantom reference may not be retrieved – the get method always returns null. 

Garbage collector appends registered reference objects to **ReferenceQueue<T>** after the appropriate reachability changes are detected (Java API, 2017). PhantomReference may then be retrieved by using the remove() or poll() methods of the ReferenceQueue. At that point the object itself is no longer reachable (remember that PhantomReference.get() always returns null), so you should keep track of any resources that need to be freed by other means. Extending PhantomReference is one option.

## Finalizable Phantom Reference

**FinalizablePhantomReference<T>** is an extension of the PhantomReference<T> providing **finalizeReferent()** method that streamlines process and eliminates the need for polling ReferenceQueue<T>.


# References 

Oaks, S (2014) Java Performance: The Definitive Guide, Sebastopol, California: O’Reilly Media.

[Java API API Specification,](https://docs.oracle.com/javase/7/docs/api/java/lang/ref/package-summary.html), (14.6.2017)

[Java API Specification, Reachability](https://docs.oracle.com/javase/7/docs/api/java/lang/ref/package-summary.html#reachability), (16.6.2017)

[Guava API Specification](https://google.github.io/guava/releases/snapshot/api/docs/com/google/common/base/FinalizablePhantomReference.html), (14.6.2017)

