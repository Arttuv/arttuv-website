---
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: "2023-07-05"
title: "No-Estimates"
tags: ["dev"]
featuredImage: 
    url: "/images/ai-burndown-chart.jpeg"
    alt: "Cartoon version of a burndown or burn-up chart."
summary: "Estimating software work is difficult, as we usually are in a complex, not complicated domain, and we know what the solution will look like and how long it took to create, after it has been validated with the end users. Days, weeks, months -scale should be enough for estimation, and if you need more detailed than that, you should probably stop and think why, and how to change that."
mastodon: "110692189541870209"
---
I did a post about [not asking people to commit to fulfill a forecast](https://arttuv.com/writings/commitment-vs-forecast) a while back. I wanted to emphasize that I'm a big fan of no estimates and what [37signals](https://37signals.com) is doing with their "appetites":
- [No Estimates talk by Allen Holub (YouTube)](https://youtu.be/QVBlnCTu9Ms)
- [37signals: Your Estimates Suck (blog post)](https://world.hey.com/dhh/your-estimates-suck-2b9f8445)
- [Your Estimates Suck (podcast) (this has more stuff than the article)](https://37signals.com/podcast/your-estimates-suck/)

I honestly think that estimations in all shapes and forms take the focus out of what we are really doing and is mostly harmful. Estimation has a wrong premise of being able to predict what happens in a complex environment and leads to roadmap-driven feature factory. The focus will be on output instead of outcomes and causes suboptimal results and unmotivated (and burned out) people.

![Cartoon burn-up chart](/images/ai-burndown-chart.jpeg "Cartoon burn-up chart (midjourney)")

The only positive thing about estimates is that you need to go through the idea and your assumptions in detail. However, nothing prevents you from planning and going through the problem without playing the estimation game. In addition, if you don't do the formal estimation, you don't give an illusion that it is possible or useful to estimate software in that detail.

## Outcomes, not output

You commit on fulfilling a need of the user, not delivering a feature. How you fulfill that need in the end might look quite different than what your first assumption was. You know the final design, and how long it took, when it is verified with the happy users, most likely after multiple iterations.

This all does not mean that you wouldn't have *any* idea how long implementing a feature takes. Especially if you have worked with the same code base longer. You learn what is usually easy and what is usually hard, and know what is so new the team has not even tried it yet. 

Over time, the team usually has a pretty good hunch what could be achieved in a day, week, or month.

It is not forbidden to talk about how long something might take based on those earlier experiences, as long as everyone in the team understand what it means. Talking with people outside the team needs caution because when you talk about time, it is easily understood as commitment and added to the calendars.

Estimation scale of "days, weeks, months" should be enough.

## Complex landscape

Why I feel strongly about estimates is that I have experienced how
- harmful it can be for the people working
- people higher in the hierarchy can avoid understanding how complex the world is and what kind of processes it requires, if we agree to do estimates

This means we have dysfunctional organizations in which different groups don't understand the reality in the same way, and that leads to burnouts, unnecessary conflict and bad business outcomes when focus is in output and deadlines, instead of outcomes. Cynefin is an easy to understand guide to figure out in which kind of an environment you are, and what kind of tools work in that environment ([Cynefin in Wikipedia](https://en.wikipedia.org/wiki/Cynefin_framework)). Understanding the difference between "complicated" and "complex" seems to be the key.

If you have a hard deadline with fixed scope, you have a huge business risk, and getting rid of that should be your top priority. If nothing else is possible, you should start the work on that item first: it goes to the front of the queue due to risk management needs.

Estimation has a wrong premise of being able to predict what happens in a complex environment. Instead of committing to fixed scope and date, you commit on having shippable product with flexible scope ready at all times.

The flexible part is scope. There is a trap there, however. When you cut the scope, you need to make sure the solution is enough from the user point of view: It needs to fulfill a need and do it well. You don't ship crap - if needed, you exclude the whole functionality until it is good enough. 

As said in the 37Signals podcast, it is important to keep on shipping, to have that predictable cadence - you just don't always have all the things you might have thought.

It is important to note, that if you are trapped in a feature factory, cutting scope doesn't really help. You'll be forced to cut functionality to fit the promised schedule, but after the deadline, you don't have time to iterate - the next item on the roadmap is pushed to the team and the same game of cutting scope starts. 

What you are missing in that environment are honesty and effective feedback loops.

The end result is a pile of "MVP" implementations, none fulfilling the end user needs. Jira raports and excels look OK, though. The shit hits the fan when the product gets to the hands of the real users.

## Start the change

I try to stick to the basics: 
- Agree on the "days, weeks, months" scale, if estimation is being done
- Always talk about outcomes, what we want to achieve with each "ticket", instead of focusing on output (this was the first step on moving towards outcome based roadmaps in the book [Inspired](https://www.svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/), p. 293). How you verify the outcome etc.
- Keep the focus on implemented application and designs, not Jira traffic lights. 
- Stay alert when managers or customers start to talk about dates and content. 
- When there really is a fixed date, that is your highest priority risk: Finish this content first.

It is good to try to understand what the organizations's view on software development is. As Skelton and Pais write in Team Topologies
> "The reason so many organizations experience so many problems with software delivery is because most organizations have an unhelpful model of what software development is really about."

Being aware of the local software development culture makes it easier to reason about the issues you face, and lays a starting point for changing that.