---
templateKey: blog-post
title: Kata Containers at the October 2024 Project Teams Gathering (PTG)
author: Ildiko Vancsa
date: 2024-11-05T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in October, 2024.

The community had sessions booked on 3 days during the event to discuss topics including release planning, CI process and dashboard plans and updates, and more. Having multiple time blocks earlier in the day enabled the community in APAC to participate in more discussions while also allowed for a joint discussion with the [Confidential Containers (CoCo)](https://www.cncf.io/projects/confidential-containers/) project, to ensure smooth and efficient collaboration between the two groups. This article shares the highlights of the community’s discussions at the conference.

# Kata 4.0 Release Planning
Major releases are still planned to be treated somewhat differently from minor versions, as they are still rather feature-driven than time-based. The community releases new minor versions on a monthly basis, but major versions require more planning and larger features or architectural changes to land.

During the PTG session attendees revisited ideas and aims for the next, 4.0 release of the project. The two main areas that contributors discussed were CI and the current runtime situation in the project. The current CI system and jobs have some room for improvement, and it is a priority for the 4.0 release to get these in line. The community had further discussions on this topic, outside of the 4.0 release scope, which are summarized in this article below.

Kata Containers currently has two runtimes, one is written in Go, and the newer runtime is written in Rust. The two versions are currently not identical in functionality, the Rust runtime needs to be more feature complete before becoming the default runtime. The community needs further conversations to make a decision on what features are mandatory for the Rust runtime, and they will also need to decide when to deprecate the Go version. Having the Rust runtime as the default is one of the main tasks to complete before announcing a 4.0 release of the project.

Further topics that came up were hypervisor support in the Rust runtime, the state of the Sandbox API, and dependencies like containerd, which the community is waiting on to release its 2.0 version.

If you’re interested in plans and progress for 4.0, keep an eye on the related [GitHub project](https://github.com/orgs/kata-containers/projects/43).

# Kata CI Discussions
Testing the codebase is a high priority for the Kata Containers community, which results in continuously increasing test coverage. During the PTG discussions contributors touched on different aspects of the current CI system that the Kata community is actively using. The session also included a presentation from Boston University students, who are working on a CI dashboard project in Kata, as part of a mentorship program in partnership with the university.

## Boston University Mentorship Program Updates - CI Dashboard Demo
Kata Containers is currently relying on GitHub actions to run tests on new changes that get proposed to be part of the codebase and documentation. Since the community stopped using Jenkins, they don’t have a proper CI dashboard to see the status and statistics of test runs. Contributors from the Kata and CoCo communities have been working together to identify what they would like to have in a CI dashboard, if it existed. To help with this work, building a CI dashboard is the main task in the mentorship program for the students, who came to present their work during the PTG.

The presentation started with a short introduction of the student team who is working on this project. The team described their task and introduced technology options, including pros and cons, that are available to build a solution. Their presentation ended with a quick demo of the dashboard they already built, which have features like:
- Clickable links
- Filtering
- Sorting

The community appreciated the existing functionality and gave feedback with further ideas, like adding a few charts, to implement before the mentorship program ends in December.

## The Future of Kata CI
During the previous PTG, contributors highlighted that the CI system and jobs need maintenance work to reduce inefficiencies and failures. To start addressing the issues, they created a sub-group with CI as their focus area, and their main work item got the codename [Tailorbird](https://github.com/kata-containers/kata-containers/issues/9506), which is a bird that is mostly green with a few yellow spots.

This PTG session provided a good opportunity to check on progress and determine next steps for the focus group. While the team made progress and improvements to the CI and CI jobs, it was clear that they haven’t reached the ideal state yet. While CI jobs had clear runs, there are still some which are failing or unstable; disabling these jobs is an option, but not a good solution. The decision during the session was to leave the related GitHub issue open, which describes the desired outcome of the Tailorbird initiative.

Further improvements, cleanup and maintenance work that the community is planning includes:
- Ensure that every current and new CI jobs have maintainers
- Increase coverage, including different hardware architectures
- Revisit and fix currently disabled jobs, where applicable

# Process Improvements
It is important to continuously revisit the processes and tooling that the community is using for its daily operations, to ensure that they are still efficient and serving the community's interest the best. The PTG sessions provide a great opportunity to spend some time on reviewing processes and discuss ideas to make improvements.

## Maintaining the Kata GitHub Organization
The Kata Containers project's code base is hosted on GitHub. People have different levels of permissions to be able to submit changes, perform reviews, manage and activate CI jobs, and handle further administrative tasks. Furthermore, there are teams that you can set up in your GitHub organization, which Kata has several of.

As the GitHub organization of the project has been evolving since the creation of Kata Containers, the Architecture Committee recognized the need to perform some maintenance work and ensure that only active community members have permissions over tasks and settings on GitHub. Beyond the general need to update the list of owners, admins and teams, Kata contributors used the time at the recent PTG to discuss who should be eligible to take which role within the organization. While the AC and community haven't made decisions yet, priorities for moving forward included:
- Ensure to have multiple people with the ability to carry out every critical task
- Reduce the number of 'owners' and 'admins' in the GitHub organization, to make sure that everyone has a clear set of responsibilities, and don't have too many of those at the same time
- Identify the teams that are still relevant to the project today and make sure that the member lists are up to date

The Kata AC will keep working on creating a plan to move forward with the above goals and tasks.

## Updating the Definition and Criteria of Active Contributors to the Project
While discussing roles within the Kata Containers GitHub organization, the definition of 'maintainers', 'committers' and 'active contributors' had come up. The AC would like to ensure that people who take on any active role are active members of the community. The concept of 'active contributor' is also used during the Kata Containers AC elections, as the electorate list, as both candidates as well as the electorate need to be active in the project.

During the conversation about active contributors, it came up that there might be people who don't upload patches with code or documentation changes, but only perform reviews and other key tasks, which don't result in merged commits. The automated process to generate the electorate list for AC elections currently relies on a script, which checks who are the contributors with merged commits in the past 12 months. The AC and community are now considering to enhance that process to capture contributors who don't commit code as part of their involvement.

# Joint Session with the CoCo Community
[Confidential Containers](https://confidentialcontainers.org) is a sandbox project in the CNCF ecosystem, which grew out of a working group under the Kata Containers project. CoCo is relying on Kata Containers, and therefore it is tightly integrated with Kata.

The joint session focused largely on topics that were brought up as a follow-up to the Kata Containers 4.o conversation. As the Kata community is working on the Rust runtime, they also need to take into account what features and functionality the CoCo project depends on. The community is tracking missing features and now added hardware support, including Trusted Execution Environment (TEE) support, which is needed by CoCo.

In general, it is challenging to implement features that need specific hardware, or hardware features, as not everyone has the expertise and the community also needs access to physical hardware to run tests. People who work for hardware vendors need to pick up some of these items, to ensure that the new runtime is feature complete. An aim is to work with vendor companies to have the required functionality implemented and tested, while developers working on the Rust runtime will review and approve related code changes. If this is not possible, then the current Rust developers need to almost blindly port related features between the two runtimes, but this scenario is currently not favored. During the session contributors discussed these options in more detail to identify steps they can take regardless of which route they take.

The merge-to-main activity also came up during the session, which is the effort to merge the feature branch that implements the CoCo integration into Kata, into the main branch of the Kata repository. The two communities had some bandwidth issues in the past that delayed finishing this task in a timely fashion. The conclusion during this PTG session was that the effort is now about 90% there and contributors are overall satisfied with where they are currently. They touched on a few outstanding items, which are still in the works, but they are not critical features.

The last topic that came up was about whether to add systemd to the initrd and stop the guest components being managed by the kata-agent, which is not a systems management process. One feature that influences is [initdata](https://github.com/confidential-containers/confidential-containers/issues/171), which CoCo will start to rely on. Either Kata can manage init data, or there can be a separate daemon which runs before Kata starts. Contributors discussed some details of the different approaches, but have not made decisions yet on how to move forward.


The above items are only highlights of what contributors talked about during the PTG sessions, for further notes of the discussions please refer to the session [etherpad](https://etherpad.opendev.org/p/r.67cf0d0bf6e655af20054015873a3bae) or check out the recordings of the discussions, which are also linked from the etherpad.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
