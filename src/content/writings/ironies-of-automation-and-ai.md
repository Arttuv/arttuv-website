---
pubDate: "2026-04-19"
title: "The Ironies of Automation and Artificial Intelligence"
summary: "Pointing to learnings from decades of automation research that we should take into account when building LLM-powered systems."
tags: ["hci"]
mastodon: "116433008977243133"
---

We in the IT industry have been automating the work of humans for what, almost a century, and we have learned a lot along the way, even though it sometimes feels like we also forget a lot. Most of those learnings apply directly to AI-powered tools we are now developing (and using ourselves). Two papers I want to highlight in particular are Lisanne Bainbridge's "Ironies of Automation" (1983) and Mica Endsley's "Ironies of Artificial Intelligence" (2023).

Automating work is not as straightforward as it might seem. Bainbridge summarises findings from automating industrial processes: an environment in which automation tries to either replace humans or replace some of their work, while humans still need to be skilled and in charge of the situation whenever the automation breaks down.

> There is some concern that the present generation of automated systems, which are monitored by former manual operators, are riding on their skills, which later generations of operators cannot be expected to have.
> - Bainbridge, 1983

>The level of skill that a worker has is also a major aspect of his status, both within and outside the working community. If the job is 'deskilled' by being reduced to monitoring, this is difficult for the individuals involved to come to terms with. It also leads to the ironies of incongruous pay differentials, when the deskilled workers insist on a high pay level as the remaining symbol of a status which is no longer justified by the job content.
>- Bainbridge, 1983

Mica R. Endsley has written a paper called "Ironies of Artificial Intelligence" (2023) acknowledging the importance of the paper by Bainbridge, but also extending the topic by adding new observations from using AI to automate work. AI is still "just" automation, but it is opaque, complex, changing, and somewhat unexplainable. While being more capable than traditional automation, it's also harder to reason about, and Endsley also emphasises the out-of-the-loop issues coming from losing situational awareness.

These two papers are essential for IT professionals designing LLM-powered tools to understand the dynamics of automating human work: what changes for the people who live with these systems. As a sidenote, it's important to understand how to use these tools to perform your own work ([Augment, Complement and Empower Yourself](/writings/augment-complement-empower-yourself/)) as well.

I think there is also a need for ideology. My approach to system design is to augment and amplify humans, and that guides my design choices. Replacing human work is not intellectually interesting. Helping humans be something *more* is. David A. Mindell has described the relation between humans and machines in a way that resonates with me.

For example in *Our Robots, Ourselves* he goes through examples how technology has tried to replace humans, and argues we should instead defend the human agency and control over their own work. Referencing studies over automation in aviation and related incidents he notes that pilots still have a critical role in flying:

>"Pilots are the glue that hold integrated systems together, making up for imperfections in protocols, communications, interfaces, or procedures."
>- David A. Mindell, *Our Robots, Ourselves*

Automating actions does not mean that humans are not needed; it changes the way humans work. Mindell continues:

>These findings suggest that new technologies ought to enhance human problem solving, not eliminate it. If possible, automation ought to aid humans in their tasks without distancing them from the machine, and without alienating them from their professions.
>- David A. Mindell, *Our Robots, Ourselves*

This has been my guiding thought in building tools for professionals, and it's the approach I apply to designing LLM-powered systems.

This is not easy, however, because automation tends to lead to skill atrophy, increased complexity, increased cognitive workload when something goes off, and so on ("Ironies of Automation"). It is difficult to take over if you have dropped out of the loop and you have lost the skills.

## Ironies of Automation

Bainbridge notes that even though the objective of automation has been to replace humans, in the end most automated systems end up needing humans for "supervision, adjustment, maintenance, expansion and improvement" and thus systems we build end up being human-machine systems.

The actual irony is that the more advanced a system is, the more crucial the contributions of humans tend to be: automation can make the human's job more essential and difficult. Not easier and less important. Human user needs to both monitor that the system is working correctly, and also intervene when it doesn't.

Monitoring a system, when you are not an active participant yourself, is a notoriously difficult task. Vigilance studies (Bainbridge references [Mackworth, 1950](https://psycnet.apa.org/record/1951-03484-000)) have found that it is just not a realistic ask for a human. The person doing the monitoring also needs a good understanding of the system to know when something is going wrong and when to intervene.

Those skills to intervene and to make right choices and actions in the time of need must be acquired and maintained. Training alone does not build skills that could be actively used, or at least the training would need to be continuous and be done with simulators that are close enough to the reality. To really understand a system, the user needs to be doing actions and see the feedback. Over time that understanding fades away due to the nature of our long-term memory (Bainbridge, 1983), unless the user periodically refreshes the knowledge. Simulators also have limits, as it's impossible to simulate error conditions we don't know exist.

Bainbridge also reminds us that the situation when automation fails is often a stressful one, and that is not a good condition for human decision making.

When designers try to reduce human errors by automation, they may introduce new kinds of errors.

## Ironies of AI

Endsley has studied automation and situation awareness (SA) for decades, and SA is also integral in their paper "Ironies of Artificial Intelligence" (2023). One cornerstone they reference is from an earlier paper, "From Here to Autonomy: Lessons Learned from Human-Automation Research" (2017), called *automation conundrum*:

>The more automation is added to a system, and the more reliable and robust that automation is, the less likely that human operators overseeing the automation will be aware of critical information and able to take over manual control when needed. More automation refers to automation use for more functions, longer durations, higher levels of automation, and automation that encompasses longer task sequences.
>- Mica R. Endsley (2017), automation conundrum

Referencing Bainbridge and earlier studies on automation, Endsley states:

>Deskilling, increases in system complexity, increases in cognitive workload, and decreases in SA remain fundamental problems to be addressed with AI systems.
>- Mica R. Endsley, 2023

AI amplifies earlier automation risks by being opaque and more difficult to understand: it is difficult to form a realistic mental model of such a system, especially if it evolves over time.

Endsley lists five Ironies of Artificial Intelligence:

>Irony 1: Artificial intelligence is still not that intelligent
>- Endsley, 2023

ML-based systems do not understand causation and are unable to predict or simulate what could happen in a new situation they have not experienced yet.

>Irony 2: the more intelligent and adaptive the AI, the less able people are to understand the system
>- Endsley, 2023

ML-based systems don't contain clear logic or rules, and forming an accurate mental model of them is difficult, and even more difficult if it evolves over time.

>Irony 3: the more capable the AI, the poorer people's self-adaptive behaviours for compensating for shortcomings
>- Endsley, 2023

This is related to situation awareness: people are bad at determining their own SA and when using a capable AI, don't realise they should pay more attention to overcome the lost SA due to complacency, reduced engagement and the lack of understanding the AI.

>Irony 4: the more intelligent the AI, the more obscure it is, and the less able people are to determine its limitations and biases and when to use the AI
>- Endsley, 2023

Even the developers of the systems may not fully understand its limitations and biases, and because these systems often are quite opaque to the users, it's nearly impossible for them to compensate.

>Irony 5: the more natural the AI communications, the less able people are to understand the trustworthiness of the AI
>- Endsley, 2023

The fluent natural language without cues to determine correctness makes it difficult to calibrate trust towards the AI.

In general, Endsley argues that as AI-systems get more advanced, more issues people will have understanding them, compensating for their shortcomings, noticing their limitations and biases and judging the trustworthiness of the AI. LLM-based systems can communicate confidently with fluent language, which makes it difficult for humans to detect when they are hallucinating or wrong.

## Don't add bullshit jobs to the world

Graeber's 'bullshit jobs' idea (*Bullshit Jobs*, 2018) is a reminder that the danger isn't just automating work: it's scaling meaningless work. When designing LLM systems, the goal shouldn't be to produce more output faster, but to eliminate work that shouldn't exist and support people in doing work that actually matters.

As Bainbridge and Endsley note, one irony is that the pursuit to automate everything that can be automated leaves the human to handle a random selection of tasks that could not be automated. There is a risk that their work does not make sense anymore. When people are in control of the process, their tools have good ergonomics, and their work consists of varied tasks, it seems to contribute to feelings of achievement (Bainbridge, 1983, referencing [Ekkers et al., 1977](https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780080220123500106)).

You want humans to be able to continue without help when the need arises after the automation breaks down.

To make it concrete, consider using LLMs for coding. It is easy to prompt an LLM to produce more code than a human can read, let alone understand, and it can seemingly work. When deployment outpaces understanding, developers will not be able to make sense of an incident in production. That leads to a stressful situation in which they are not ready or capable to step in and fix the system quickly enough.

## The design philosophy

If you want rock solid operations which fully benefit from the intelligence and imagination of your employee, you build the system around them. Keep them entangled to the dynamics of the environment, so they have situational awareness, and build the realistic understanding of the system they are part of. Ensure their work forms a compelling whole attributing to the feelings of achievement and mastery.

- Keep the human in the loop of doing, not just monitoring
- Design for the failure case, not the happy path: What skills the user must retain to take over, what kind of support can the system provide to prepare the user for the takeover
- Expose the system's reasoning to the user. Consider coding agents: they tell what code files they are reading, what skills they're applying, and what they base their decisions on
- Provide confidence cues in LLM output so users can calibrate its trustworthiness
- Always consider the user's work as a whole, don't just automate everything that can be automated.

While you are designing systems for others, you can use the same principles when designing your own work ([Augment, Complement and Empower Yourself](/writings/augment-complement-empower-yourself/)). 

## References

Bainbridge, Lisanne. “Ironies of Automation.” *Automatica* 19, no. 6 (1983): 775–79. https://doi.org/10.1016/0005-1098(83)90046-8.

Endsley, Mica R. “From Here to Autonomy: Lessons Learned from Human-Automation Research.” *Human Factors* 59, no. 1 (2017): 5–27. https://doi.org/10.1177/0018720816681350.

Endsley, Mica R. “Ironies of Artificial Intelligence.” *Ergonomics* 66, no. 11 (2023): 1656–68. https://doi.org/10.1080/00140139.2023.2243404.

Graeber, David. *Bullshit Jobs: A Theory*. Simon & Schuster, 2018.

Mindell, David A. *Our Robots, Ourselves: Robotics and the Myths of Autonomy*. Viking, 2015.