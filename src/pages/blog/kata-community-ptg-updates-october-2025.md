---
templateKey: blog-post
title: Kata Containers at the October 2025 Project Teams Gathering (PTG)
author: Ildiko Vancsa
date: 2025-11-11T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in October, 2025.

The community had sessions booked on 3 days during the event to discuss topics including release planning, process improvements, and more. This article is the first piece of a two-piece series and shares the highlights of the community’s discussions at the conference.

# Turning Kata Containers into a Default Secure Container Runtime
With the increased focus on cybersecurity and the rise of AI in all industries, it is a pivotal moment for the Kata Containers project to further grow and establish itself as a key component in a the container ecosystem. In order to capture this opportunity, the community needs to work together to increase and strengthen the project’s visibility, influence and position on the market.

The goal of this conversation was to explore how the community can reach the above mission and ensure that the runtime is ready to support current and emerging use cases, especially in the AI space. As contributors collected goals to achieve, they also started to explore what actions and steps they need to take to reach them.

Contributors started to talk about this topic at the recent OpenInfra Summit Europe, the PTG session was a continuation of that discussion., focusing on three main topic areas.

## Goals
Attendees started the conversation with what they would like to achieve, and concluded that they would like to first and foremost increase the adoption of the Kata Containers project. With gaining more users, the aim is to further grow the number of active contributors in the community.

## Messaging
Session attendees in both occasions were in an agreement that more education is needed to help potential new users to understand what Kata Containers is, why they need it and how they can use it. Contributors explored the concept of sharing more information about why traditional containers do not fulfill security requirements, and how Kata Containers fills that gap. Furthermore they also talked about relevant certification and compliance efforts in the space, like DORA and GDPR, and how to ensure the Kata runtime fits into these.

While it is a crucial first step to help business decision makers to understand why Kata Containers is a key part of their success and sustainability, their teams need to be able to deploy and integrated the runtime into their systems.

## Enhancements to the project
The PTG session was a great opportunity for the community to dive deeper into next steps, and have a focused conversation about challenges like refreshing the project’s documentation. The community is planning to focus on accurately documenting the steps to deploy and configure the project first. Session attendees started to explore ideas to increase bandwidth and focus on creating content that helps people and companies to utilize the runtime for their use cases.

Ideas included having a sprint to update the currently existing documentation, involving interns to review and test the accuracy of the content and utilizing methods of automation, including the CI system or AI to catch and fix issues.

# Rust runtime / Kata 4.0 Release Discussion
The Kata community has been working on the Rust runtime for a little while now. The goal is to achieve feature parity with the Go runtime, and when that happens the Rust runtime will become the default and the Go runtime will be deprecated. The community is set out to get better performance, more stability and easier maintenance once the switch happens as part of the 4.0 release of the runtime.

Contributors made great progress on the new runtime recently, and started to get close to closing the gap. During the PTG session attendees took a look at the current status of the Rust implementation work, and started to look into any remaining blockers. Contributors were in an agreement that CI test coverage is a non-negotiable, and will also be used to asses the feature completion for the new runtime.

The Kata community is working closely with the Confidential Containers (CoCo) project in the CNCF ecosystem. As Kata serves as the vehicle for CoCo, the community would like to make sure that the integration between the two projects will keep working after the switch, and that the Rust runtime delivers all critical functionality for CoCo to keep functioning the same or rather better than with the Go runtime. During the PTG session attendees agreed to set up a discussion with the CoCo community, to ensure good progress and a smooth switch.

If you’re interested in plans and progress for 4.0, keep an eye on the related [GitHub project](https://github.com/orgs/kata-containers/projects/43).

# Toolchain Policy
This was a short conversation during the event, the goal here was to ensure that the Kata community treats its toolchain and dependencies in a way that fits both the community’s needs and is manageable for users as well. This includes things like Golang and Rust versions, and versions of other dependencies.

With the Rust version, the community is aiming to stay no more than 2 versions behind the latest upstream version. While some users of the project will need to adjust their toolchains to be able to follow, it is important to the community to bring in newer versions of dependencies, not just for new functionality but also for bug fixes and stability. The N-2 policy will be widely applied to other dependencies as well, which will be documented in the project’s documentation on GitHub after the event.

# Deprecation Process and Project Maintainers
The community has shifted to a monthly cadence to cut new minor releases, which has been working out well. The changes in processes for feature development and bug fixing also call for revisiting processes to remove code that is no longer used and maintained.

As with all communities and code bases, people move on and features become unused and unmaintained from time to time. The Kata community is no exception, and have some areas of the codebase where the maintainers of those features are not around anymore. The community would like to ensure that they have a way to give a warning to users about functionality that’s not actively maintained, and also have a process to deprecate and eventually remove code if no maintainers show up to revive it. This PTG session targeted to discuss what the deprecation process for Kata Containers should look like, and how to keep the list maintainers up to date for the codebase, which includes the CI just as much as features.

## What, When and How to Deprecate
The tests that are running in the CI system are always telling whether or not the jobs and corresponding code have active maintainers around. Currently the community sets jobs non-required or experimental if they keep failing, as that still allows people to go an fix them up. This still burns a lot of resources over time if no one steps up. There is a process outlined in a [GitHub issue](https://github.com/kata-containers/kata-containers/issues/10534), which the community will review and finalize after the event.

The community also discussed examples of code areas to deprecate, which included Stratovirt and Docker support and kata-manager, some which are having active users but not active maintainers. Session attendees did not make a decision for these features during the PTG. Contributors also noted that they need to do a better job at documenting what the runtime does actively support upstream. And the other half of the process will also need to be defined to outline how unsupported features can go back into the the state of maintained.

Furthermore, the community also needs to explore communication channels, to ensure that users receive information about deprecations and list of features that are in risk due to not having active maintainers to keep them up.

## Maintaining the Project Maintainers List
Contributors are also recognizing that having a more defined community structure would be beneficial, and started to look into examples fro the ecosystem, like the Linux kernel and QEMU. During the PTG session attendees noted that Kata Containers doesn’t currently have a clear structure such as QEMU does, which makes it harder to map maintainers to files and folders. This resulted in outdated information about who the maintainers are in the different relevant files on GitHub. Kata folks discussed to look into areas that are covered by CI jobs, which could be a good option for the community to define maintainer groups.

The community will finalize the deprecation process and project maintainer structure after the event, and will periodically revisit these structures to ensure they function and serve the community well.


For further notes of the discussions at the event, and to access session recordings, please refer to the session [etherpad](https://etherpad.opendev.org/p/r.3bf2b38fb20b467af1a2baf6ba6ab325) which also contains the link to the recording of the session.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
