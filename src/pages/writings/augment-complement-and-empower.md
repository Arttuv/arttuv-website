---
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: "2020-05-03"
title: "Augment, Complement and Empower Human Cognitive Skills"
summary: "Expert group for EU has published Ethics Guidelines for Trustworthy AI. The document specifies a list of requirements the systems should meet to be considered trustworthy. They also define a rough framework and an assessment list to offer guidance on practical implementation. The objective is to empower humans and offer them meaningful work instead of replacing them. Augmenting human abilities is an approach I'm happy to advocate for."
tags: ["hci"]
featuredImage: 
    url: "/public/images/human-in-the-loop.png"
    alt: "Human in the loop"
---
The expert group for the EU has published [guidelines to promote Trustworthy AI](https://ec.europa.eu/futurium/en/ai-alliance-consultation). By Trustworthy AI they mean an AI that is
* Lawful
* Ethical
* Robust

The document specifies a list of requirements the systems should meet to be considered trustworthy. They also define a rough framework and an assessment list to offer guidance on practical implementation. The objective is to empower humans and offer them meaningful work instead of replacing them. The document doesn’t concentrate on the ”lawful” part - AI should follow the applicable local laws and regulations.

I like the approach this expert group has taken towards AI. Total autonomy is still too hard (and then we get to the human-autonomy teaming) and I think there is a lot of potential in augmenting humans and empowering them using AI. Most importantly, the focus is too often in technology and how to replace human users.

![Human in the Loop](/public/images/human-in-the-loop.png)

To give a short overview, here are the **principles** and **requirements** for Trustworthy AI.

**Principles**

* Respect for human autonomy
* Prevention of harm
* Fairness and explicability

**Requirements**
* Human agency and oversight
* Technical robustness and safety
* Privacy and data governance
* Transparency
* Diversity, non-discrimination, and fairness
* Environmental and societal well-being
* Accountability

From the human-computer interaction point of view, I’d like to highlight ”respect for human autonomy” and the corresponding requirement for ”human agency and oversight”. 

The document states that AI systems should be designed to ”augment, complement and empower human cognitive, social and cultural skills”. This viewpoint is human-centric aiming to keep humans relevant and their work meaningful. The system should allow a meaningful opportunity for human choice securing also the human oversight.

Sometimes it feels like this is the value that is easiest to forget. Laws and regulations (and even public attention) make sure you don’t create a system that causes harm or is unfair, but often it feels like nobody is thinking about the end-users who will need to interact with the system and **do the tasks that the AI is not able to**. 

## Keep Them In The Loop

Oversimplifying the situation: 

Engineers want to see how novel AI systems they can create, and the procurer wants to automate as much as possible to get cost and time savings. This can lead to a situation in which everything that can be automated, will be automated, and humans need to care about the incoherent collection of random tasks that are left behind. If you are not actively part of the work the system does, it’s hard to understand what is happening and you start to lose the skills that are needed when the system fails.

**David A. Mindell** has described this problem in [Our Robots, Ourselves](https://www.goodreads.com/book/show/24611446-our-robots-ourselves) comparing two solutions for performing landings in bad weather.

Fully autonomous landing systems turn pilots into observers that may have a hard time understanding what the system is doing, and why. It may be hard for them to intervene if the system fails because they are out of the loop. On the other hand, they may also lose the skills to do the landing manually.

Heads up displays use a different approach by providing additional information to the pilot, who then makes the decisions and is handling the flying. The same tools can be used in good and bad weather making the experience similar in each situation. This means they are learning all the time and landing in bad weather is not a completely different experience.

I’m advocating this augmentation approach whenever it makes sense. Often keeping the human in the loop, or "coupled to the dynamics of an environment" as [Stanton et al. describes it](https://doi.org/10.1080/00140139.2017.1278796), is beneficial and also socially and ethically viable. It helps to keep the users informed on what happens which is important for security. There is also the concern about security and on who should we put the ultimate trust on (see for example [Andrew Rae](https://www.researchgate.net/profile/Andrew_Rae/publication/224384227_The_Operator_or_the_Automation_In_Whom_Should_We_Place_Ultimate_Trust/links/00b4952209eaa3ab6f000000/The-Operator-or-the-Automation-In-Whom-Should-We-Place-Ultimate-Trust.pdf)? In general, I’d say that human users should always be able to override AI decisions (and in a meaningful way as well), but it’s not always that simple.

**Human Oversight**

For human oversight the document lists three different approaches:
* Human-in-the-loop (HITL): Human intervention in every decision cycle
* Human-on-the-loop (HOTL): Monitoring  the system’s operation
* Human-in-command (HIC): Overseeing the overall activity of the AI system and deciding when and if and how to use the system in any situation

If I'm understanding correctly, I’d say that an autonomous landing system would mean human-on-the-loop, HUD system human-in-the-loop, and entity deciding which one to use and how it affects the pilots and safety would be human-in-command.

## The Design Perspective

Ethics Guidelines for Trustworthy AI lists principles and requirements and assessment lists, but making sure we design systems that fullfill the requirements is not easy. Also the document itself emphasizes that often different requirements are in conflict and you need to make informed decisions to balance between them. 

How do you ensure human agency and make sure users can self-assess and challenge the system? If security is at all of the importance and the work requires special skills that should be kept up to pubDate: I’d say keep end-users as much in-the-loop as possible and concentrate on giving them "superpowers" by utilizing improved sensor technology, increased amounts of data and advanced analytics that can be done with it.

For understanding the work and environment of the end-users and how to improve them with technology there are a lot of good tools from Beyer's & Holtzblatt's Contextual Design to everything under the human-centered design umbrella. There are tools for [designing to support situation awareness](/writings/designing-to-support-dsa) and tools to measure the SA. Task analysis can be used to analyze the work and help to decide how different tasks should be allocated to both AI and humans, and what kind of information is needed to transfer SA. Providing training environments in which humans and automation can learn to work together will be important when AI is being added to systems.

The real value of this document is on helping to create an ethical starting point and requirements for the design of the system. Even keeping the users in the center of the design is hard when there are money and technical viewpoints competing - with ethics it might be even harder. 

## References

[Ethics Guidelines for Trustworthy AI](https://ec.europa.eu/futurium/en/ai-alliance-consultation)

[Our Robots, Ourselves](https://www.goodreads.com/book/show/24611446-our-robots-ourselves)

[Stanton, N. A., Salmon, P. M., Walker, G. H., Salas, E., & Hancock, P. A. (2017). State-of-science: situation awareness in individuals, teams and systems. Ergonomics, 60(4), 449–466.](https://doi.org/10.1080/00140139.2017.1278796)

[Image is from Iconfinder (Flatart)](https://www.iconfinder.com/icons/3957659/allocation_human_online_outsource_outsourcing_icon)