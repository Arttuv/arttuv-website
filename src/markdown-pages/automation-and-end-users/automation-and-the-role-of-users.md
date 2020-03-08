---
path: "/writings/automation-and-the-role-of-human-operators"
date: "2019-06-28"
title: "Automation and the role of human operators"
---

Automation and analytics are good means to improve operator and overall system performance. Ever increasing amount of data means that in many situations human operators are no longer able to keep up with the pace, and using software to help is a must.

Below is a graph of one way how the work of human operators may change, when systems become networked and analytics start being used in optimizing the actions.

![](Human-skill-performance-1.png)

In the first graph human operators are actively engaged in using the system and making decisions. Performance varies by operator, and there may be local peaks or drops in performance – it depends heavily on the expertise of individuals. 

![](Human-system-performance-optimization.png)

In the second graph the system has been changed so that everyone works with the same networked system, which is able to do analysis on the data it gets, and makes decisions. The role of the operators is changing to data providers and system supervisors. They may not be able to directly alter the decisions of the overall system. It is noteworthy that they may not even have all the relevant information to make decisions.

The performance of the system can be optimized and there should be no local, unanticipated lows. At the same time, there may not be peaks in the performance either – consistent performance in good and in bad.

## Potential Problems

Combining ever increasing levels of automation to the work of human operators seems to be surprisingly hard and may cause many kinds of problems to the end users working with automation. When the level of automation rises and approaches autonomy, the complexity of the system increases, which means that **mental models of the end users must also be complex – understanding what the system does is hard**.

![Mental models. Image from Flatart (Iconfinder).](iconfinder_100_user_process_success_man_thinking_4307927.png)

Of course this may not be a problem it the users don’t need to understand everything. But in many work environments, like in industry or military, users are ultimately in response and should be able to

1. notice when automation is not up to the task and
2. be able to handle the task that automation failed
   
Of course, this is not always easy. Endsley has written in her article (Endsley 2017), that there seems to exist an automation conundrum, which means that the more reliable and robust the automation is, the lower the situation awareness of the human operators will be, and less likely they will be able to take over manual control, if the situation demands it. Endsley has reasoned that this phenomenon may set some kind of limit to the usable level of automation in security critical situations.

Endsley also notes, that some researchers talk about the irony of automation – automation works when mental workload is low anyway (the situation is not complex), but fails when mental workload is high (the situation gets tricky), ever increasing the load on operator (Endsley 2017).

Some performance gains may fail to realize because often it’s necessary to guarantee some minimum level of performance to maintain safe and secure level of operation.

## Security

Andrew Rae has considered automation in security critical environments in his article The Operator or The Automation: In Whom Should We Place Ultimate Trust. One approach to security is, that system design should prevent dangerous system states. Another approach is that human operator is the ultimate link in security. Andrew notes, that these two are in conflict when system avoiding to enter unsafe state limits the options of human operator to recover from a dangerous situation. Automation may fail to detect the state of the system as a whole, and “unsafe” operation by the user may actually be the least dangerous action, even if it wasn’t envisioned by the system designers.

Always trusting humans is not the final answer, because there have also been many incidents in which human operators have explicitly disabled safety features thus causing the disaster (think Chernobyl). Rae concludes that trustworthiness of the actor should determine the ultimate authority – but calculating that trustworthiness is probably the big question.

## Final Thoughts

Based on studies done on automation, it seems apparent that special caution should be taken when designing automation for work domains, especially when security is of importance. Security critical or not, it should be ensured that the role of human operator stays coherent and meaningful, even if it potentially hinders the overall system peak performance.

I’ve been considering using situation awareness as the framework for designing automation. You can read my blog post on Designing to Support (Distributed) Situation Awareness. I can’t help but think that systemic view on SA (distributed situation awareness) by Stanton et al. might be an invaluable approach to design.

## References

M. Endsley, Autonomous Horizons: System Autonomy in the Air Force (2015)

M. Endsley, From Here to Autonomy – Lessons learned From Human-Automation Research (2017)

Rae, A. J., The Operator or The Automation: In Whom Should We Place Ultimate Trust? (2008)