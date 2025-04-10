---
templateKey: blog-post
title: Kata Containers at the April 2025 Project Teams Gathering (PTG)
author: Ildiko Vancsa
date: 2025-04-14T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in April, 2025.

The community had sessions booked on 3 days during the event to discuss topics including release planning, process improvements, and more. This article is the first piece of a two-pieces series and shares the highlights of the community’s discussions at the conference.

# Kata 4.0 Release Discussion
Major releases are still planned to be treated somewhat differently from minor versions, as they are rather feature-driven than time-based. The community releases new minor versions on a monthly basis, but major versions are created when larger features or architectural changes get introduced into the codebase, which require more planning.

During the PTG session the community revisited ideas and aims for the next, 4.0 release of the project, which turned into a lengthy discussion. The main work item for the new release is to implement majority of the Kata features in the new Rust runtime, and allow that to become the default runtime. As contributors started to revisit the current status they noticed that there hasn’t been significant progress to it since the last PTG. This observation opened up the discussion whether or not the Rust runtime is still a priority for the community and should remain a target for the 4.0 release.

While the community hasn’t yet reached a conclusion, they discussed a few relevant topic areas to learn about preferences and decide on next steps.

One of the main, but not only, driving factors to implement the runtime in Rust was to add support for the Dragonball hypervisor. The Rust runtime also promises improved performance, smaller memory footprint, increased security, and easier maintenance, since the community has been implementing it with experience under their belts. However, despite of all the benefits the community has been having challenges to get enough clear feedback from users whether or not this change is desired, which make the decision making process harder.

As part of next steps, the community will keep collecting input to build a list of pros and cons so they can make an informed decision about the future of the Rust runtime. If you have a preference or feedback to share with the community, please reach out on one their [communication channels](https://katacontainers.io/community/). The topic will also be discussed on the upcoming Architecture Committee calls to keep up the momentum the community reached during the PTG discussion.

If you’re interested in plans and progress for 4.0, keep an eye on the related [GitHub project](https://github.com/orgs/kata-containers/projects/43).

# Arm Confidential Compute Architecture (CCA) Support

[Arm CCA](https://www.arm.com/architecture/security-features/arm-confidential-compute-architecture) targets to add data protection through a series of hardware and software improvements. It is part of Arm’s support for confidential computing. To leverage the ongoing work the Kata Containers community also has an [ongoing work item](https://github.com/kata-containers/kata-containers/pull/10664) to add Arm CCA guest support to Kata.

As this is a more extensive work item, which relies on upstream development in components that Kata is using and also has hardware dependencies, the community will take a modular approach that allows to move forward step-by-step. If you are interested in this development make sure to review the PR and get in touch with the community to get involved in next steps.

# Testing and Benchmarking

## Kata CI/CD Discussions

Continuously testing the codebase is a priority for the Kata Containers community, which makes CI/CD a recurring topic at the PTGs. This time around the event agenda was packed, which only allowed a small window to discuss this topic.

The main focus was on the gatekeeper tool, which was implemented by the community to be able to skip tests that are not relevant to the change that someone would like to land. Kata has a lot of CI jobs, and it is not very efficient to always run them all, as it can get very resource-intensive and time consuming, especially if some of the test jobs are still somewhat experimental or unstable.

Gatekeeper is not the default tool yet to configure which tests are required and which jobs will be triggered for PRs. The community still needs to finalize the rules that decide which tests are required and which can or should be skipped. During the session attendees agreed to keep configuring and using gatekeeper as part of a trial period until the next PTG, when it can be re-evaluated if it is ready to be the default tool to use in the CI infrastructure.

The Kata Containers community has nightly tests to check that the entire codebase is stable and provides the expected functionality, which ensures that the code quality remains high.

## Performance Testing

When it comes to testing the codebase finding bugs is only one goal, the Kata community also runs tests to check the runtime’s performance. As Kata is targeted to be a lightweight solution that has a comparable performance to traditional container runtimes, it is crucial to understand if any new change introduces performance degradations. However, there are various ways to configure Kata Containers, and the final performance of the software is affected by both the underlying hardware configurations, as well as drivers that are used for things like attaching storage. As the community cannot test everything in their CI system, the PTG session provided a great opportunity to revisit the current status and strategy in this area.

Performance testing in CI environments can get challenging and is certainly a limited option. The community set out to keep doing performance tests as part of their test suites, and to also provide the tests and guidance for users to be able to run them locally. That allows for testing Kata in configurations that the donated CI infrastructure that the community is using doesn’t have.

To tackle a complex challenge session attendees decided to form a task force, to have a group of people who can focus on defining the scope for performance testing and take next steps towards implementation. The group’s goals include, but are not limited to, benchmarking, detect and address regressions, help users to find the best configuration options for their use cases and collect input to make decisions on the new Rust runtime.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.13eb68713be1a237cf710f8911ed9f39) which also contains the link to the recording of the session.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
