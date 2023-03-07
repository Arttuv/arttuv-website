---
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: "2017-05-11"
title: "Designing for Usability 1985"
tags: ["hci"]
featuredImage: 
    url: "../../../../images/hci-placeholder.png"
    alt: "HCI placeholder"
---

It’s interesting how old many of the usability (and software engineering) ideas are. I run into an old classic: Designing for Usability: Key Principles and What Designers Think (Gould & Lewis, 1985). Gould and Lewis introduce three principles that they argue are vital for creating usable applications, and then they go through common arguments against them and try to justify why these principles matter.

**These three principles for designing for usability are (Gould & Lewis, 1985):**

1. Early Focus on Users and Tasks
2. Empirical Measurement
3. Iterative Design

I remember I’ve read this article years back, but I was still a bit shocked how old these ideas are. Gould and Lewis even say in the paper that they have been recommending these principles since the 1970’s and this paper is about analyzing why these principles are not used and rationalizing why they should be used more.

This writing is a short recap of the paper and what I think is the most important and useful parts.

**Early Focus on Users and Tasks**

This principle emphasizes that designers must get the understanding of who the end users will be and what is the nature of the work expected to be accomplished.

**Empirical Measurement**

Intended users should use simulations and prototypes early in the development process to carry out real work. Their performance and reactions should be observed, recorded and analyzed.

**Iterative Design**

Problems found in empirical user tests must be fixed, which implies that the design must be iterative. Emphasis is on a cycle of design, test and measure, and redesign. This way the development process will ensure that usability goals like “easy to use” or “user friendly” are being met.

## Motivation for Using the Principles

Gould and Lewis have listed a lot of motivations for using these principles, and I’ve listed here the ones that I felt the most importand and most relevant today.

### Design is much harder than one might think

Developers and designers may believe that system design is fundamentally a rational analysis of how a task should be done and there is no need to involve users (Gould & Lewis, 1985). After all, usually you can design really complex parts of the system’s internal logic before implementing them. There are also a lot of user interface design guidelines to help in designing the interface.

Unfortunately, rational analysis doesn’t tell you what you have to analyze and things are left out, and design guidelines can’t predict user actions in every situation (Gould & Lewis, 1985). Systems almost always have to interact with preexisting work methods and mismatches can be a major problem. Guidelines are also bad with choices that are highly dependent on context and should be viewed as informal collection of suggestions which need to be verified empirically.

### Humans are unpredictable

Adding humans to the equation brings a lot of unpredictable behavior (and input) and makes it impossible to get the user interface right the first time. However, this is not a permission for sloppiness and careful design does pay off (Gould & Lewis, 1985). Doing the initial design well gets the first version of the system or prototype closer to the final product and is a good starting point for iterative improvements.

The paper strongly encourages to start interacting with the intended users in the early stages of development.

Designers need to understand the potential users, not just “identify”, “describe” and “stereotype” them. To achieve this the design team should be in direct contact with the users, doing interviews, discussions and actual observations (Gould & Lewis, 1985).

> Just as “insider” knowledge is essential to develop a really useful software, so is an “inside” view of user requirements essential in creating a superior user interface.

### Prototyping is cheap and beneficial

Prototypes can be built with paper and pencil to test the critical features of the interface even before the development begins, which is relatively cheap. Informal or simulated prototypes can also help a new project off the ground and gives something concrete for others to see. User testing still has a price, but it usually isn’t as high as commonly supposed (Gould & Lewis, 1985). Prototypes should not be used to match against user requirements but to find out how easily people can learn and use the prototype and how they react to it. Users should be given simple tasks to carry out and their performance, thoughts and attitudes should be recorded and analyzed. This can be continued throughout the development.

## Recap

The article still sounds very reasonable after 30 years and is worth reading. Iterative development cycle with user testing is a solid way to ensure that user requirements are being met, and is self-evident. I think the most important part is the importance of being in direct contact with the user. This is still undervalued (at least in some places) and often causes (unpleasant) surprises. Often different user groups are not taken into account and the system in production doesn’t work well for every group.

## References

[Gould, J.D., Lewis, C.: Designing for Usability: Key Principles and What Designers Think. Communications of the ACM 28(3), 300–311 (1985)](http://dl.acm.org/citation.cfm?id=3170)