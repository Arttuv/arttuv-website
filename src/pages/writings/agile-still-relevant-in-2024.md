---
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: "2024-07-22"
title: "Agile - Still Relevant in 2024"
tags: ["dev"]
mastodon: "112840282925802410"
---
Over 2023 and 2024 there has been quite a lot of critique against agile, which seems quite strange to someone who has started their studies and career around 2006, 5 years after the [agile manifesto](https://agilemanifesto.org).

The critique naturally is aimed towards what has become to mean agile over these 20 years: What ever marketers want to sell you at any given time, namely most often [Scrum](https://ronjeffries.com/articles/016-09ff/defense/), or some poor bastards may even live in the world of SAFe. Often, a process is sold to a rigid organization, which then mandates a ‘standardized’ application, claiming to be ‘agile’: ‘We are a Scrum house, this is how you should do things...' _and then proceeds to explains Scrumfall_.

If this is what "agile" has been to you, I understand that it doesn't feel like something you'd want.

Agile is fundamentally a mindset. Different frameworks and models are designed to implement its principles, but they are not synonymous to "agile".

## Before agile: Deceitful predictability

I see the birth of agile as a reaction to what software development too often looked like: a waterfall as it is most commonly understood. One cycle of specification-planning-implementing-testing-releasing process (details and the number and names of phases vary), with fixed schedule and budget.

Linear waterfall model is easy to understand and makes "common sense". This makes it especially pleasant for people who may not have exprience from software development and who want to have predictability (stakeholders, business people, etc.). It can also produce good enough results, if the environment is static and it's already clear what we are building and how (and there are no unknowns and especially no unknown unknowns), and if the end user experience is not important.

Most software development does not happen in a static environment (competition changes, people change) nor do we know what the solution should exactly be when we start the development (people behave in a way that is difficult to predict, and end user don't know what they want if you ask them). Software is rarely "finished". Rather it is an evolving entity until it gets discontinued.

Waterfall-like processes intend to bring predictability and clarity to a world that is neither: organisations using those processes are unable to adapt fast enough and base their plans on assumptions that do not hold.

## Agile: Admitting the world is unpredictably complex

Agile mindset is about admitting that the environment is quite complex, not static, and that affects the way we should be growing our software products and services. Complexity means it's impossible to predict the future, no matter how well you think you are planning it. You need to go forward in small steps and learn as much as you can, and use those learnings to guide you further.

A better term for agile might be adaptive.

Complex environment can feel out of control, if you are used to thinking that you "invest x amount of money and time and get y". That's often the premis in a public tender: We want to get Y, tell us how many moneys and times you would need to make it happen (X), and we'll pick the cheapest one.

That does not work: schedules and budgets will get overrun, and the end user experience will be as bad as it can be still fulfilling the bare minimum of the contract. Another option is that it will be ridiculously expensive when all the surprises need to be baked in to the price, but usually this option does not get selected due to the price dictating the tender.

## Face the friction, early

It is easier to apply the waterfall-type of thinking that works in a static environment, and refuse to face the real complexity of reality. Some organisations do this by buying the software from subcontractors by dictating the contracts (if they have the economical power), or by demanding impossible work performance from their employees (quite often a pathological organisation by [Westrum culture classification](https://dora.dev/capabilities/generative-organizational-culture/)).

It doesn't mean these people are mean or want to take advantage of others. It's quite a natural tendency to try and have some order in your environment, and that's what waterfall-like processes and contracts bring: artificial peace of mind and clarity right now. 

The price for this artificial peace of mind will be paid when the end result does not meet the expectations.

As one of my more experienced colleagues said, when people try to act in a non-agile way, they want the process to feel easy and safe. Unfortunately they will feel the pain in the end, when the illusion of control breaks when it is forced to face reality.

Agile mindset indicates you should embrace the unknown and face the pain early on, during the process, and then the end will be easy and rewarding.

## Agile, The Good Parts

Agile mindset means internalizing conventions that answer to the needs of an unpredictable and complex complex environment ([see Cynefin for explanation](https://en.wikipedia.org/wiki/Cynefin_framework) of complex, compicated and simple domains): You can't predict the future, or how people will see your new product or service and choose to use it. 

There will be surprises. Your assumptions will be proven wrong, and at that point you'll need to learn and change your direction. This means smaller iterations, getting feedback from the real world fast, and inspecting and adapting along the way.

When you are making decisions on the way of working, take a look at the [agile manifesto](https://agilemanifesto.org):

> **Individuals and interactions** over processes and tools  
> **Working software** over comprehensive documentation  
> **Customer collaboration** over contract negotiation  
> **Responding to change** over following a plan  

> That is, while there is value in the items on  
> the right, we value the items on the left more.

...and consider if the decision you are making is taking you towards left or right, and if it's justified and is following the [principles](https://agilemanifesto.org/principles.html). 

These are no binary choices: Individuals and interactions over processes and tools does not mean, we have zero processes and tools. Responding to change over following a plan does not mean we have zero plans, or that we don't do any design.

Processes tend to outlive their creators, so be vary of how much process you add. You should strive to refuse additions that feel easy because they are based on a non-complex, predictable worldview. 

One practical example is quality control: A bug is found in the production, and the first instinct is to add processes to reduce the probability of another bug ever getting in to production. It's more useful to admit it's impossible to have zero bugs, and instead ensure that a) they can't destroy the world, and b) they can be detected and fixed fast (see [DORA](https://dora.dev/quickcheck/)).

## Agile, The "it depends" Parts: Context

The best process is context dependant. Therefore it's impossible to say what what exactly is the optimal process you should always use. However we can say your process should be based on the correct understanding of how the world behaves.

The team should have all the needed knowledge, skills, experience, and most important, the mandate to figure the process out. If you say "we are a Scrum house", it means your teams are not agile: they don't have the freedom to select and come up with their own process to meet the demands of the task at hand.

This doesn't mean it is a wild west: of course the team full of competent professionals takes into account the local software development culture, and proactively seeks to understand what kind of interactions the team should have with the rest of the organisation, other teams and stakeholders.

## Agile, The Hard Parts: Individuals and Interactions

One of the hardest things for the team to do is to bring the peace of mind for those stakeholders that are responsible for the success (money) and / or don't understand how software is built successfully. 

I'm a big fan of showing, not telling: show them every week what has been accomplished and what the way forward looks like. 

Have discussions using the running software, whiteboard or mockups as a shared entity, not Jira. No jira traffic light can tell you you are doing OK.

## Autonomous teams are your best bet

Context dependency and complexity are some of the reasons why experience is so important in software development. 

When we are doing complicated things, pure skill is enough. In complexity, you also need the experience to detect patterns and evaluate what could be the best way forward when you can't *know* it. 

Individuals more often than not don't have broad and deep enough skills and experience: you need a team. As diverse (both experience and background) a team as possible.

A team must be autonomous so it can be agile (adapt to the changes in its environment). It must be cross-functional to own the experience all the way to the end users, to optimize the feedback cycle.

If a team like that is motivated and willing to have a shared responsibility over the outcome (not output), you can throw them any problem in any environment, and they will come up with a process needed to solve it.

Agile mindset is something that the team should have, and what the organisation should enable.