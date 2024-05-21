---
templateKey: blog-post
title: Kata Containers at the April 2024 Project Teams Gathering (PTG)
author: Kata Containers
date: 2024-05-21T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in April, 2024.

The community had one 5-hour session booked during the event to discuss topics including release process and planning, runtime and hypervisor updates, re-scheduling the Architecture Committee (AC) calls, and more. The time block also allowed for a joint discussion with the [Confidential Containers (CoCo)](https://www.cncf.io/projects/confidential-containers/) project, to ensure smooth and efficient collaboration between the two groups. This article shares the highlights of the community’s discussions at the conference.

# Kata AC Meeting Improvements
The Kata AC and community meets every week on a one-hour conference call. This group meeting serves as a platform to discuss new feature ideas, talk about ongoing development and testing activities, and so forth. The meeting is currently in a time slot that is very inconvenient for folks in the APAC region, which is why contributors started to discuss the rescheduling of the meeting to make it more accessible for active community members. The current aim is to find one time slot that is EU-APAC friendly and another time slot that is somewhat friendly to people in Americas, and alternate between the two weekly.

In addition to the meeting time, session attendees also brought up ideas about how to utilize the meeting time more efficiently.

# Kata Containers on PVM
Fupan Li gave a presentation to describe [PVM](https://dl.acm.org/doi/abs/10.1145/3600006.3613158), which is a new project developed by Ant Group and Alibaba, and talked about how PVM can serve as a hypervisor for Kata Containers. The presentation also contained benchmarking results and a demo of using the two projects together. PVM is a high-performance guest hypervisor for KVM that is transparent to the host hypervisor and assumes no hardware virtualization support. By using this project, users could avoid performance degradation and other issues that comes from nested virtualization, which is often used when running Kata workloads in public cloud environments, when supported. Using Kata and PVM together could also help further improve the CI and test environments that the community has been using to ensure high code quality.

The PVM community is working with the kernel community to have some required changes accepted. Kata can set up an experimental kernel to start setting up and testing with PVM, but it should not be set as default to avoid maintenance issues and overhead, since both the host and guest kernel needs to be patched.

# Runtime and Hypervisor Updates
The Go and Rust-based runtimes are a frequent discussion topic within the Kata community. During the PTG session, attendees used the opportunity to discuss runtime as well as hypervisor updates, plans and next steps.

## Runtime-rs Update
The project had several big improvements since the last update in October, 2023:
- PCI VFIO Device Support
  - Including support for basic PCI topology, hot-plug and hot-unplug PCI devices
- vhost-net support
- vhost-user-net support
- and more

“Exclusive” new features (features not available in the Go runtime):
- FD (File Descriptor) Passthrough support: Dragonball to allow other host programs to pass a FD to the Dragonball process directly. This increases I/O speed and reduces CPU utilization. Adding this feature was part of a student mentorship project.
- Sandbox API: new interface between containerd and the low-level runtime. More information is available here: https://github.com/kata-containers/kata-containers/pull/7274

Future plans include:
- TDX support in Dragonball
- Finalize the Sandbox API
- Further GPU enhancements to support AI and other workloads

Contributors also raised the question whether or not to switch over to runtime-rs as the default runtime, but no decision was made during the session.

## Hypervisor Updates

### QEMU
Good progress since the last PTG. Runtime-rs support was only a proof-of-concept 6 months ago, but it is more feature rich, with networking support and full capabilities of running containers. The team is planning to improve device support , and looking for feedback about which QEMU feature users need the most to be supported.

### Cloud Hypervisor
It was already mostly feature-complete at the time of the previous PTG, and the team has added new features and enhancements still:
- Updated for the new Cloud Hypervisor
- Fixed TAP and IP addresses handling in the VM networking config
- Added network hot-plug support that enables Docker
- Full-thread vCPU handling
- and more

Currently working on:
- getting CI to make it fully operational, need to resolve an issue around device mapper between CH and K8s, which is a CI config issue currently
- Memory resize and guest memory block size APIs
- TDX support
- and more

The team is looking for people to test the Cloud Hypervisor support and give feedback or help fixing issues and further enhance this feature.

### Firecracker
- No major updates, rebasing over main to resolve any conflicts
- Might be ready to merge the initial version into main to reduce maintenance burden on the team maintaining this effort

# Release Discussion

Discussing the ongoing release cycle and upcoming roadmap items is a common topic for PTG sessions. Kata contributors utilized their session to discuss recent changes in the Kata release process and take a look at the upcoming 4.0 release.

## Release Process

Recent changes in the release process were made with the intention to make it much simpler to cut a new release. The community decided to eliminate the need for a stable branch and focus on making minor releases available more frequently. Session attendees agreed to aim for a time-based release cycle for minor releases with monthly cadence.

The community touched on the release process as well, which is somewhat automated. The person who’s cutting the release will need to bump the version number, using semver, and then run the release workflow process, which is very similar to the automation that is being executed for PRs.

Release announcements didn’t always happen in the past for minor releases, which contributors agreed to always include moving forward. When in doubt, you can always find information about the latest release on the ‘Releases’ GitHub page: https://github.com/kata-containers/kata-containers/releases

## Kata Containers 4.0
Major releases are still planned to be treated somewhat differently from minor versions, as they are still feature-driven. The community releases new major versions of the Kata Containers project when there are enough big changes in the codebase to do so.

During the PTG session attendees discussed ideas and aims for the next, 4.0 release of the project:
- Runtime-rs to be the default runtime
  - With support for QEMU and Cloud Hypervisor
  - GPU support
  - etc
- Containerd bump to 2.0
  - This will pick up some new features such as Sandbox API and image transfer service which should be stable in this release to help support the runtime-rs and CoCo work

If you’re interested in plans and progress for 4.0, keep an eye on the related [GH project](https://github.com/orgs/kata-containers/projects/43).

# Joint Session with the CoCo Community
Confidential Containers is a sandbox project in the CNCF ecosystem, which grew out of a working group under the Kata Containers project. CoCo is relying on Kata Containers, and therefore it is tightly integrated with Kata.

The integration work started on an experimental branch, which the communities are now working on to integrate into the main branch with the rest of the Kata codebase. Contributors often refer to this activity as ‘merge-to-main’. During the PTG session attendees took a quick look at the progress of the integration work, and determined that it is currently on track. There was also an agreement between the two communities that some further planning is required to be able to finish this work item by the time of the Kata 4.0 release.

Review bandwidth has been an issue in the past, which contributors talked about during the PTG session. One of the outcomes of the conversation was to focus on defining smaller tasks, which can lead to faster progress, especially if the two communities keep synchronizing plans and priorities.

The release discussion continued during the joint community session as well, with checking on the CoCo community’s upcoming plans. Session attendees were in an agreement to release a 0.9.0 version of CoCo, with a disclaimer that this is only an experimental release and should not be considered production-ready. The CoCo team has more work to plan for 0.10.0.

# Kata CI Discussion
Testing the codebase is a high priority for the Kata Containers community, which results in continuously increasing test coverage. During the PTG discussion contributors highlighted that the CI system and test suits need maintenance work to reduce inefficiencies and failures. Due to the large number of jobs that are running continuously the CI often becomes unreliable, which can delay merging PRs, which are otherwise ready.

The community identified a few next steps to start making improvements, such as:
- Look into and identify dependencies
- Look into GH runners and identify what's running where and what could run on a GH free-runner
- Look into flaky tests and jobs, and fix or eliminate them

There were a few volunteers during the discussion to form a task force and keep making progress in the above areas.

# Documentation
Majority of the Kata Containers documentation is on GitHub, in the various repositories. This is a great strategy for developers, and hands-on users, who are looking into the code just as much as the available features of the project. It came up in the past to create a centralized view to access, at least the user-facing documentation, in one place.

The PTG was a great opportunity to gather more recent feedback and preferences from the community. The conclusion during the session was to keep the centralized documentation a wishlist item, with gathering more feedback about preferences that both users and developers have. Currently there is no bandwidth in the community to carry out the required work, and then maintain the centralized view of the available content.

# Project Maintenance
Last, but not least, contributors touched on some further project maintenance related items, such as the current number of open PRs and GH issues.

There are some processes that the community implemented a while ago, which might not serve the project well anymore. An example to that is the need to create a GitHub issue for any small change in the code base, or t o an existing process. These issues don’t always get closed, for various reasons. The community put automation in place to find old issues and warn the reporter about closing them if there’s no further activity on them. The trial version of the ‘stale bot’ worked efficiently, and the community is now considering to extend the time period for which it is configured to filter the existing GH issues.

There is a high demand in the Kata community for new features and implementing new ideas, which doesn’t always match with the available review bandwidth. This can result in PRs being open for a longer period of time, and sometimes being abandoned by the PR author. Contributors discussed ways to filter out old, and potentially stale, PRs with the attempt to clean up the ones that are too out of date and are not being worked on anymore. One of the ideas was to apply the stale bot to old PRs as well, beyond just GH issues.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
