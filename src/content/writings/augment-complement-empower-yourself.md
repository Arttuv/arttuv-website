---
pubDate: "2025-08-01"
title: "Augment, Complement and Empower Yourself"
summary: "LLMs are helpful and should be used with intent. Use them as tools to enhance your
abilities while deliberately maintaining the fundamental skills you need to perform when the automation fails."
tags: ["hci"]
---
LLMs seem to be helpful, but how should we use them? It is already known from the studies on automation that using automation will change us and our work. LLMs are much more advanced tools than traditional automation, but I think human factors and human-computer interaction studies regarding automation will help us predict what kind of changes we'll experience. 

The title references [my earlier post on the EU's trustworthy AI guidelines](https://arttuv.com/writings/augment-complement-and-empower/). I believe that the intent behind the guidelines: **augment**, **complement**, and **empower**, also works well for thinking about how to use LLMs.

This is for at least three reasons: the irony of automation, adverse skill degredation and complacency.

## The irony of automation

The irony of automation (see [irony of automation](https://psycnet.apa.org/record/2017-05527-001)) refers to the observation that automation tends to work well when the user's mental workload is low, but fails when the mental workload is high. We succeed in automating simple actions, but real life is often complex. When something unexpected happens, automation can break down, leaving the user unprepared because they've become a passive observer. Without active participation, it's hard 'to become and remain coupled to the dynamics of their environment' and maintain situational awareness ([Stanton et al. 2017](https://pubmed.ncbi.nlm.nih.gov/28051356/)).

## Inadvertent skill degradation

We lose the skills we don't use. We also don't get any better if we don't actively try to improve our skills. Sometimes this can happen unplanned, if you don't design your work so that your essential skills stay up to date. Studies on automation have shown that increasing the automation in systems often lead to cognitive skill degradation (for example [Volz et al. 2016](https://journals-sagepub-com.libproxy.tuni.fi/doi/abs/10.1177/1541931213601043)).

## Complacency

Complacency regarding automation and artificial intelligence usage (for example [Endsley 2023](https://doi-org.libproxy.tuni.fi/10.1080/00140139.2023.2243404)) means we may fail to maintain proper oversight, critical thinking and adaptation over using them. When the LLM seems to be performing well in the task you give it, it may be difficult to stay engaged and to critically evaluate what it has produced. We get overly reliant on LLM and fail to detect obvious issues in the work as we just assume it is OK and don't verify it properly. Maintaining a realistic understanding of the LLM's capabilities is important to not fall into the trap of complacency and thinking yout are performing better than you actually are.

## Recent studies on the effects of LLM usage

LLMs are so advanced compared to any other automation, that it seems probable it will cause different issues. Preprint by [Kosmyna et al. studied](https://www.researchgate.net/publication/392560878_Your_Brain_on_ChatGPT_Accumulation_of_Cognitive_Debt_when_Using_an_AI_Assistant_for_Essay_Writing_Task) the effects of using search engine or LLM to help writing essay, compared to no external help. 

The results seem to indicate that while LLMs offer short term benefits in task work, they may also cause longer term issues: 1) brain connectivity seemed to decrease the more external help was used, 2) LLM users reported less ownership over the essays they had written, and 3) they had more difficulties to quote essays they had just written compared to search engine or no-help groups.

My personal experience aligns well with this preprint. I have been using LLMs to support my coding work for over an year now. Often using LLMs helps tremendously, for example when trying to debug an issue or trying to figure out how certain thing in a codebase has been done, or just by offering a really smart context-aware autocomplete to ease the burden of typing - you know you need a generic React component, and based on the context Cursor will deliver just that pretty nicely.

However, this means I have not personally written every single line I commit, and reading code is different compared to writing it. It requires a lot of willpower and skill to really read through the code and determine if it makes sense. 

Working a long time with one codebase / product is beneficial because you learn the domain and you learn the codebase. As noted in the study, I think I don't remember as precisely the features I have implemented with the help of LLM.

I've struggle multiple times to answer when someone asks some detail about the feature I have done. Naturally one can't remember every single detail (I know some people that do and they are scary, scary good), and it's more important to know where to find the information. But this has happended often enough that I have started to pay attention to it.

## Design your work: Use LLMs intentionally

When you are planning features including advanced automation in your product to be used by your users, you should pay attention to the task design: does the work that is being left to the users make sense and does it form a consistent whole. Are the automated features bullet proof, or is it possible that the automation works in easy cases, but leaves users helpless when stakes are higher? What are the essential skills the users should retain and be able to perform even if the automation fails?

Similarly, I think it would be beneficial to design your own work and consider what are the essential skills you need to retain while also getting help from LLMs in your work.

As a software developer, I want to retain the understanding of the whole, and how to design systems. Even though it's super nice that LLMs can help with the syntax, I think I still need to type code myself so I can (with the help of the compiler) produce code that actually compiles (for example so that I don't need to be pausing to wait the LLM all the time). At least in the primary languages I use. I also must have the skills to debug the system even if LLMs are sometimes really good at guessing what an error message might indicate. I need to have really good understanding of the databases.

Tradeoffs will change during the time as LLMs get better. If some capability requires a network connection to a hosted model, there is a high probability it will not always be available. Some capabilities can be fulfilled with a small local model, in which case I'd say it is OK to rely on it.

## So how do I use LLMs, then?

I try to force myself to think. First I'll work by myself, and then use LLMs to critique my work. I can ideate with them or ask them to find weaknesses in my thinking or plan. I can use LLM to do a critical code review on that code I have done. I can use LLM to refactor the code once it already works and just need to be organized better: extracting smaller components, common functions, adding internationalization support, etc.

Since it is beneficial to know the codebase you are working with, I can use LLM to help me learn how features have been implemented in the codebase. How does the authentication work, are there any issues, etc. It helps to have an entity to discuss and debate about the code while learning it.

I hope I can get the most help from LLMs this way also enhancing my traditional and LLM skills. Instead of being a single developer in a team, I'm a developer + LLM pair working together and complementing each other.

An LLM augmented developer, if you will.