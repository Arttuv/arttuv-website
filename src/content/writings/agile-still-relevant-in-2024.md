---
pubDate: "2024-07-22"
title: "Agile - Still Relevant in 2024"
tags: ["dev"]
mastodon: "112840282925802410"
summary: "It has been surprisingly common to see critique towards agile lately. I find it a bit odd, having seen the waterfall world and how much more humane agile has been. It can be easy to overlook how fundamental agile principles remain for surviving fast-paced, complex software projects."
---

Changes to this text
- 2025.01.19: Modified the text a lot and removed parts not relevant to main point

---

## Agile is a mindset to survive in a complex environment

If you knew most of your assumptions about the problem and solution are false, what would be the fastest way to find out which ones, and learn?

Agile ([agile manifesto](https://agilemanifesto.org)) is fundamentally a simple iterative and adaptive mindset to help you work in a complex environment. Having worked through both agile and waterfall-like approaches, I've seen how companies tend to crave for control in the expense of agility. It leads to inefficiency and burnouts.

Different frameworks and models can be designed to implement agile principles and values, but they are not synonymous to "agile". Most of the critique I have seen is towards agile has been more about how these frameworks and models are being sold and applied in companies. 

## Complex environment requires an adaptive approach

Trivialisation is a belief that complex systems (see [Cynefin](https://en.wikipedia.org/wiki/Cynefin_framework)) can be modeled and managed the same way ordered systems can thus resorting to using existing practices better suited to ordered systems (from [Nachbauer, 2021](https://www.sciencedirect.com/science/article/pii/S2666721521000119)).

As one of my more experienced colleagues said, when people try to act in a non-agile way, they want the process to feel easy and safe. Doing intensive planning, getting the predicted deadline dates and starting the work feels safe, and makes "common sense". Unfortunately that safe feeling transitions to the pain towards the end, when the plan meets the reality and the illusion of control breaks.

Agile mindset indicates you should embrace the unknown and face the pain early on, during the process. That way you start learning, and the work actually gets easier and rewarding towards the end.

## Use the agile manifesto to guide your thinking

When you are making decisions on the way of working, take a look at the [agile manifesto](https://agilemanifesto.org):

> **Individuals and interactions** over processes and tools  
> **Working software** over comprehensive documentation  
> **Customer collaboration** over contract negotiation  
> **Responding to change** over following a plan  

> That is, while there is value in the items on  
> the right, we value the items on the left more.

...and consider if the decision you are making is taking you towards left or right, and if it's justified and is following the [principles](https://agilemanifesto.org/principles.html). 

These are no binary choices: Individuals and interactions over processes and tools does not mean, we have zero processes and tools. Responding to change over following a plan does not mean we have zero plans, or that we don't do any design.

Processes tend to outlive their creators, so be wary of how much process you add (especially if you start to consider company-wide policies). You should strive to refuse additions that feel easy because they are based on a non-complex, predictable worldview. 

One practical example is quality control: 

A bug is found in the production, and the first instinct is to add processes to reduce the probability of another bug ever getting in to production. It's more useful to admit it's impossible to have zero bugs, and instead ensure that a) they can't destroy the world, and b) they can be detected and fixed fast (see [DORA](https://dora.dev/quickcheck/)).

## Agile never looks the same

The best process is context dependant. Therefore it's impossible to say what exactly is the optimal process you should always use. However we can say your process should be based on the correct understanding of how the world behaves.

The team should have all the needed knowledge, skills, experience, and most important, the mandate to figure the process out. If you say "we are a Scrum house", it means your teams are not agile: they don't have the freedom to select and come up with their own process to meet the demands of the task at hand.

This doesn't mean it is a wild west: of course the team full of competent professionals takes into account the local software development culture, and proactively seeks to understand what kind of interactions the team should have with the rest of the organisation, other teams and stakeholders.

## Individuals and interactions part is hard

One of the hardest things for the team to do is to bring the peace of mind for those stakeholders that are responsible for the success (money) and / or don't understand how software is built successfully. 

I'm a big fan of showing, not telling: show them every week what has been accomplished and what the way forward looks like.

Have discussions using the running software, whiteboard or mockups as a shared entity, not Jira. No jira traffic light can tell you you are doing OK.

## Agile empowers autonomous cross-functional teams

Context dependency and complexity are some of the reasons why experience is so important in software development. 

When we are doing complicated things, pure skill is enough. In complexity, you also need the experience to detect patterns and evaluate what could be the best way forward when you can't *know* it.

Individuals more often than not don't have broad and deep enough skills and experience: you need a team. As diverse (experience, background, skills) a team as possible.

A team must be autonomous so it can adapt to the changes in its environment fast. It must be cross-functional to own the experience all the way to the end users, to optimize the feedback cycle.

If a team like that is motivated and willing to have a shared responsibility over the outcome (not output), you can throw them any problem in any environment, and they will come up with a process needed to solve it.

## Conclusion

Ultimately, agile is about empowered people, continuous learning, and rapid adaptation. Whether you follow Scrum, Kanban, XP, or another framework, remember to revisit the underlying principles. If your process feels stiff or worthless ceremonies, question whether it’s truly agile and supporting the work. Give your teams autonomy, embrace experimentation, and you’ll find that agility is alive and well in the face of complexity.