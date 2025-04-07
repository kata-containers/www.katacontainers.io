---
templateKey: blog-post
title: Kata Containers at the April 2025 Project Teams Gathering (PTG)
author: Ildiko Vancsa
date: 2025-04-11T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in April, 2025.

The community had sessions booked on 3 days during the event to discuss topics including release planning, CI process and dashboard plans and updates, and more. Having multiple time blocks earlier in the day enabled the community in APAC to participate in more discussions while also allowed for a joint discussion with the [Confidential Containers (CoCo)](https://www.cncf.io/projects/confidential-containers/) project, to ensure smooth and efficient collaboration between the two groups. This article shares the highlights of the community’s discussions at the conference.

# Kata 4.0 Release Discussion
Major releases are still planned to be treated somewhat differently from minor versions, as they are still rather feature-driven than time-based. The community releases new minor versions on a monthly basis, but major versions are created when larger features or architectural changes get introduced into the codebase, which require more planning.

During the PTG session the community revisited ideas and aims for the next, 4.0 release of the project, which turned into a lengthy discussion. The main work item for the currently planned 4.0 release is to implement majority of the Kata features in the new Rust runtime, to allow that to become the default runtime. As contributors started to revisit the current status they noticed that there hasn’t been significant progress to it since the last PTG. This observation opened up the discussion whether or not the Rust runtime is still a priority for the community and should remain a target for the 4.0 release.

While the community hasn’t yet reached a conclusion, they discussed a few relevant topic areas to learn about preferences and decide on next steps.

One of the main, but not only, driving factors to implement the runtime in Rust was to add support for the Dragonball hypervisor. The Rust runtime also promises improved performance, smaller memory footprint, increased security, and easier maintenance, since the community has been implementing it with experience under their belts. However, despite of all the benefits there doesn’t seem to have enough requests coming in from users, which would make it easier for contributors working for vendor companies to justify the remaining effort to finish the runtime.

As part of next steps, the community will keep collecting input to build a list of pros and cons so they can make an informed decision about the future of the Rust runtime. If you have a preference or feedback to share with the community, please reach out on one their [communication channels](https://katacontainers.io/community/) to share.

If you’re interested in plans and progress for 4.0, keep an eye on the related [GitHub project](https://github.com/orgs/kata-containers/projects/43).

# Arm Confidential Compute Architecture (CCA) Support

The [Arm CCA](https://www.arm.com/architecture/security-features/arm-confidential-compute-architecture) targets to add data protection through a series of hardware and software improvements. It is part of Arm’s support for confidential computing. To leverage the ongoing work the Kata Containers community also has an [ongoing work item](https://github.com/kata-containers/kata-containers/pull/10664) to add Arm CCA guest support to Kata.

As this is a more extensive work item, which relies on upstream development in components that Kata is using and also has hardware dependencies, the community will take a modular approach that allows to move forward step-by-step. If you are interested in this development make sure to review the PR and get in touch with the community to get involved in next steps.

# Kata CI Discussions
Testing the codebase is a high priority for the Kata Containers community, which results in continuously increasing test coverage. During the PTG discussions contributors touched on different aspects of the current CI system that the Kata community is actively using. The session also included a presentation from Boston University students, who are working on a CI dashboard project in Kata, as part of a mentorship program in partnership with the university.


## The Future of Kata CI


## Performance Testing

# Process Improvements
It is important to continuously revisit the processes and tooling that the community is using for its daily operations, to ensure that they are still efficient and serving the community's interest the best. The PTG sessions provide a great opportunity to spend some time on reviewing processes and discuss ideas to make improvements.

## Security Assessments



## Deprecation Process


# Joint Session with the CoCo Community
[Confidential Containers](https://confidentialcontainers.org) is a sandbox project in the CNCF ecosystem, which grew out of a working group under the Kata Containers project. CoCo is relying on Kata Containers, and therefore it is tightly integrated with Kata.

The joint session focused largely on topics that were brought up as a follow-up to the Kata Containers 4.o conversation. As the Kata community is working on the Rust runtime, they also need to take into account what features and functionality the CoCo project depends on. The community is tracking missing features and now added hardware support, including Trusted Execution Environment (TEE) support, which is needed by CoCo.

## Clean Interfaces Between Kata and CoCo


# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
