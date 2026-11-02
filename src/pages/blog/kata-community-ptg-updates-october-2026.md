---
templateKey: blog-post
title: Kata Containers at the October 2026 Project Teams Gathering (PTG)
author: Ildiko Vancsa
date: 2026-11-03T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in October, 2026.

The community had sessions booked on 3 days during the event, where they focused mainly topics around processes, sustainability and security.

# Collaboration and Contribution Workflows
The Kata Containers project has contributors from all around the globe working for different companies or building their own solutions with the runtime. Working together as a cohesive team over time requires revisiting processes and practices.

## Tracking progress and priorities
The community maintains a Laundry List, which is a list of items that are related to the overall maintenance of the project tooling and resources, rather than listing feature-related items. Contributors used the opportunity to discuss how well this process has been working. People noted that the items on the list are too high-level for efficient tracking, and they would benefit from being broken down into tasks that are easier to make progress on between the weekly meetings, where the list is most often reviewed.

Another tracker the community has just started to use focuses on the upcoming releases and helps monitoring features in progress. As this is a newer initiative, the PTG gave a good opportunity for the community to check how well it’s been working. The process received mixed reviews, however, there was consensus that it makes cutting releases much more manageable. Maintainers agreed to make a more active use of labels on PRs that they review to make the process smoother, and keep using and evaluating the tracker till the next PTG.

## Contribution process
The Kata community’s practices have been following a more hands-on type of contribution model, where people open issues and come with some initial code when trying to add new functionality to the runtime. While this process enables a fast-paced contribution workflow, it sometimes makes it harder to follow how the runtime’s architecture is changing and can make long-term maintenance tasks more complicated. The community is currently working on a lightweight contribution workflow to be added to the project’s documentation.

Once the process is fully settled and documented, it’ll also be added to the project’s Agents.md file.

# Susutainability
The codebase and processes of every mature open source project become more complex over time, and require periodic review and maintenance. In continuation of the discussions about processes, the community evaluated what the project needs to remain easy maintain and contribute to.

## Project maintenance
During the session contributors noted various challenges that the project is facing, but the main focus was on the difficulty to find time to do maintenance tasks as most downstream companies prioritize feature work and high-priority bug fixes. The latter makes it very challenging for contributors at times to find the time to work on documentation, the CI system and other parts of the project that still needs ongoing attention from the community.

Session attendees discussed the idea of having a maintenance release, which would mean a 4-week cycle spent on the project’s tooling and resources. People noted that these cycles often don’t end up being as productive as as people would hope, and eventually decided to park the idea for now.

In order to take next steps contributors decided to create a maintenance board, which will be reviewed periodically along with milestones for upcoming releases. The intention is to discuss maintenance priorities together with feature targets, and schedule time for both in every release cycle.

## CI system
Markus Rudy held a short CI presentation on doing testing locally, which is not as straightforward with Kata at times as people would hope. The presentation and discussion that followed explored how the current test infrastructure is built upstream. People noted that the current system relies on a lot of variables and the configuration is customized in a way that makes it hard to execute locally. It is always encouraged that contributors run tests locally before submitting their changes, and companies who use open source projects like Kata Containers also run thorough testing and evaluation before putting the project in production use.

Maintainers and contributors agreed to set a goal to simplify the test system. Volunteers are still welcome to join this process!

## Deprecation process
The community is about to finalize the deprecation process for features and functionality that is no longer maintained and will be removed from the codebase.

During the PTG session project maintainers and contributors also discussed what the criteria should look like to decide when to remove code from the codebase. One of the key evaluation criteria is whether or not the feature or code block still has active maintainers involved in the project. While baseline functionality should not be evaluated like this, when it comes to supported hypervisors and hardware options, the community can get more selective to ensure a secure codebase that can be efficiently maintained over time by the people and companies who’re involved in the community. This is also inline with the community ‘lean & mean’ initiative. Firecracker was one of the components that was discussed as a candidate to be deprecated, but it received interest from community members to keep it actively maintained.

# Security 
One part of the work that the Vulnerability Management Team (VMT) is doing is to evaluate vulnerability reports to decide whether or not they are valid in the scope and context of Kata. Currently there is a higher number of reports that the VMT needs to attend to, and not all of them are valid. Sometimes the reason is that the vulnerability is outside of the project’s scope, which can be hard to decide for someone who’s not actively involved in the project. Having a threat model would help with this challenge.

## Threat model
A threat model describes a project’s security boundaries, and explains what are and what are not protected under the scope of the project. Having one for Kata that is actively maintained can help both users as well as VMT members with faster and more consistent triaging of reported issues.

The current document that contributors are relying on is not entirely up to date and has items included that should rather be part of a technical documentation. People also noted that the Confidential Containers project needs to be highlighted in Kata’s threat model, however, it should not become part of it. The updated document is also set to list what’s out of scope for the project. By the end of the session there was a volunteer to work on updating the threat model for Kata.


For session recordings and more detailed notes, check out the [session etherpad](https://etherpad.opendev.org/p/r.0b17f3f768aa1c6cb0b1a206cf73f47c).

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
