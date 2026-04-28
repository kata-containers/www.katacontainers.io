---
templateKey: blog-post
title: Kata Containers at the April 2026 Project Teams Gathering (PTG)
author: Ildiko Vancsa
date: 2026-05-04T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in April, 2026.

The community had sessions booked on 3 days during the event, where they focused on preparing for the upcoming 4.0.0 release of the project and also covered topics around security and processes.

# Kata 4.0 Release Discussion
The Kata community is now in the final phase of putting together to long-anticipated 4.0.0 release of the runtime. As all major releases of the project, it is not driven by a specific timeline. For this release specifically, the target is a bigger architectural change under the hood. With switching over to the Rust-based runtime variant, the desire is to keep functionality while making the runtime safer, more performant and the codebase more maintainable.

During the PTG session the community revisited the remaining tasks that are essential to complete before the release, along with discussing the timeline and what happens once the new version becomes available.

If you’re curious about what you can expect in the new release, check out the [Kata Containers Release 4.0.0 Preview blog post](https://katacontainers.io/blog/release-4-0-0-preview/).

## Configuration differences between the Go and Rust runtimes
While the expected behavior of the runtime and ways to configure it should not change drastically, there are some differences between the two versions due to them being implemented in different programming languages, which in some cases resulted taking slightly different approaches in how things are implemented.

Kata contributors are currently working through a configuration gap analysis to map the current state of differences between the two runtime variants. With the results they will be able to create better documentation, and in some cases even tooling, to help users to move from the Go runtime over to runtime-rs.

The PTG session was a great opportunity to discuss how to fill out and use the gap analysis document, and identify a sub-group from the community to focus on reviewing and updating the document.

## What’s still maintained in Kata?
Re-implementing the Kata runtime in a new language has some additional perks, namely, the community has had a chance to re-evaluate what is still maintained and what pieces are candidates for deprecation, or some cases, complete removal.

Deprecating and removing underutilized and under-, or not at all, maintained code and tests ensures the longterm sustainability of the codebase. It also makes it easier to run tests and maintain the CI/CD pipeline for the project. As Kata has been organically developing over the years the codebase grew to a significant size. To get to an initial analysis the community relied on AI along with long-time maintainers in the project to get to an initial view of what is maintained in the project to what extent.

During the PTG session contributors and maintainers glanced through the current state of the document and made some updates. The community will finish reviewing the document and take next steps accordingly before 4.0.0 gets released.

# Processes
Processes aren’t always fun to follow, and they can be similarly less exciting to talk about. However, the longer sessions at the PTG help providing the space and time for contributors to revisit whether the processes that the community is using are still serving them well, or if it is time to make adjustments. This time around session attendees talked the deprecation process and the contribution workflow.

## Deprecation process for the Go runtime
Having a clear deprecation process is crucial for the success of the project, as it allows maintainers to removed unmaintained pieces of the codebase and keep it stable, robust and sustainable over time.

As the community is about to put out a new major release, they discussed a special case of the deprecation process focusing on the timeframe and approach to the future of the Go runtime after the 4.0.0 release gets published. Session attendees discussed the following aspects:
- How does the community approach feature development work on the Go runtime?
  - Time window to keep the runtime open to accept feature-related code and tests
- How long will the community keep the Go runtime in deprecated state before removing, or at least marking it unmaintained?
- There was a rough consensus during the meeting that the Go runtime will not be removed prior to the availability of the 5.0.0 release

Check out the [Kata Containers Release 4.0.0 Preview blog post](https://katacontainers.io/blog/release-4-0-0-preview/) blog post to learn more about the timeline and planned details of the deprecation of the Go runtime in 4.0.0 and beyond.

## Contribution process
Planning for a new release provided a great opportunity to revisit the practices and workflow that the community using to propose and implement new functionality in the Kata Containers project.

One the challenges that the community has been battling is to find a balance between requiring GH Issue to be raised for most things and keeping them at bay as opposed to having open issue to accumulate. Without automation issues raised to describe bugs or feature ideas remain open, and when there are too many open issues it’s also hard to figure out which ones are still valid and what strategy to apply when closing them. This part of the PTG session was focusing on figuring out what a good contribution workflow looks like in the Kata Containers project that will work best for the current community and newcomers alike.

The discussion circulated around two big areas. One is the above challenge of when to start requiring a contributor to raise a new GH Issue. The other end of the scale is how to keep processes as minimalistic as possible to keep the community inviting and easy to participate in. In today’s competitive environment you don’t want to risk driving off new contributors because you set the bar too high.

Session attendees came to rough consensus on implementing a lightweight workflow and requiring an RFC (Request for Change) document only in case of more complex ideas and feature proposals, and otherwise will keep encouraging established and new contributors to have code available in the form of PR(s) early on. The project’s documentation is being adjusted accordingly.

## Lean and mean
This discussion was closely connecting to the conversation about the deprecation process, in an attempt to keep the code base tighter but well maintained and tested.

The conversation touched on the still large number of open issues, and the community’s efforts on removing code that is not used and maintained anymore. One of the current challenges the community is hitting is the lack of a formal deprecation process, along with the clear criteria when it starts and ends. Without the process definition it is hard to move forward with identifying code bits that are likely not well maintained and underutilized, and therefore would be good candidates for removal over time if no one steps up to maintain them.

One item that session attendees noted are CI-related code snippets and functionality, which are not directly user facing, but they highly affect the community’s ability to keep continuously testing the Kata codebase upstream. These parts are currently candidates to be reviewed and cleaned up, starting with the use of the ShellCheck tool that is used to check for bugs in shell scripts the community is using to deploy and test the codebase. A contributor volunteered during the session to start working on the cleanup in bit-sized changes. The community will also pay more attention to making checks mandatory and fixing issues more actively moving forward.

Contributors checked on a few more items that they’ve been having on their radar for potential deprecation and removal, for example the pmem implementation in both runtimes.

## Kata Architecture Committee election process timing

This time around the Kata Containers Architecture Committee election was overlapping with the PTG. While it doesn’t make the election impossible to run, session attendees discussed whether or not the community should be more intentional about avoiding the overlap, or maybe utilizing it.

One idea that came up is to have a debate session with the candidates as part of the PTG session. While this would be great to have, with timezone barriers and other conflicts that might make it hard for candidates and the electorate to make it to a dedicated session. The community will keep the idea in mind and evaluate it before the next election round happens in a half year.

Keep an eye out for the next Kata AC election in case the timeline would shift from the previously used ones.

# Security

The session attendees briefly checked on the progress with the vulnerability management process. A contributor who’s currently working on refreshing the process documentation noted that he only needs to do some final touches before the changes are ready for review, but since they are straightforward the community didn’t spend time to discuss it further during the PTG session.

## Threat model

The desire to discuss the threat models for Kata came up during a previous PTG session and so the community touched on it again and determined that there are some prerequisites to be able to discuss this topic efficiently.

For example, the threat model changes based on whether Kata is used standalone or together with the Confidential Containers CNCF project. Contributors need to keep increasing the coverage in documentation on what functionality is implemented in code, especially when it comes to the integration between the two projects. Beyond that, the two communities have also been working on making the integration more clear through well-defined interfaces. As these work items move forward the community will also put some time into identifying and documenting the threat models.

# Kata Containers scope and practices

As the Kata Containers project is evolving with moving to the Rust based runtime, adding more functionality and keep being closely integrated with the Confidential Containers CNCF project it is important to check on the project’s goals and mission from time to time. While the community didn’t go into a detailed information during this PTG, this topic might be on the agenda for the next occasion of the event.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
