---
templateKey: blog-post
title: Kata Containers at the April 2025 Project Teams Gathering (PTG), Part 2
author: Ildiko Vancsa
date: 2025-04-21T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in April, 2025.

The community had sessions booked on 3 days during the event to discuss topics including release planning, process improvements, and more. This article is the second piece of a two-pieces series and shares the highlights of the community’s discussions at the conference.

# Process Improvements

It is important to continuously revisit the processes and tooling that the community is using for its daily operations, to ensure that they are still efficient and serving the community's interest the best. The PTG sessions provide a great opportunity to spend some time on reviewing processes and discuss ideas to make improvements.

## Security Assessments

Cybersecurity is very important to all open source projects, including Kata Containers. The community started to explore and discuss ideas to ensure that the Kata codebase is stable, free from vulnerabilities and follows industry standards and recommendations in this area.

Session attendees discussed the idea of utilizing the OpenSSF Scorecard process for assessment in the future. The new Cyber Resilience Act also came up due to its requirements on things like having clear and visible vulnerability process and other security-related measures that open source projects are expected to follow. Due to the lack of time contributors decided to follow up on this topic and make decisions after the PTG.

## Installation Process

Over the years multiple ways got introduced to deploy Kata Containers in various environments. While there is extensive documentation to help users to learn about and follow the different processes, many of these options are out of date or very loosely maintained, like kata-manager or some of the operating-system packages.

Currently the main maintained installation options are kata-deploy and a Helm-based approach on Kubernetes clusters. It was brought up during the session that it would be great to revive some installation options, for instance to be able to install Kata from a package on Ubuntu, use it with K3s, install it in public clouds like AWS or run it on NVIDIA Jetson machines. For the latter, a community member has already made Kata work on Jetson machines and was looking for feedback whether it would be useful to maintain that solution upstream. However, Kata is missing a few components upstream, including CI infrastructure, to add support.

One of the challenges that the community is facing is not having access to specialized hardware or public cloud environments. Without being able to test deployment as part of upstream CI test jobs it can be hard to keep the implementation as well as the documentation up to date.

The community’s current preference is to keep focusing on the kata-deploy option along with refreshing documentation on Helm as well as public cloud install guides. Beyond that, there is also an aim to clean up the Kata codebase, which will likely involve deprecating and removing kata-manager.

## Code Cleanup and Maintenance

In both open source and proprietary software development teams often focus more on adding new features and growing the codebase, the maintenance work afterwards is much less fun to do. While this is a very common phenomenon, in open source projects it can also happen that contributors of a feature move on over time and stop maintaining the functionality they added, putting more burden on the active community. To ensure that the Kata codebase remains lean and easy to navigate and maintain, the community needs to continuously monitor how the code evolves and make decisions on removing parts that are no longer in use or in good enough shape to keep.

During this PTG session the community listed some examples on components that are currently candidates for removal, which included:
- Stratovirt hypervisor support
- kata-manager
- runk

Session attendees were in an agreement to remove code that is not well-maintained or used anymore, but will be making the final decision on what to remove will happen after the PTG. This discussion then led to the next conversation, as the community currently doesn’t have a well-oiled deprecation process to rely on.

### Deprecation Process

Session attendees discussed an already existing proposal to create a more formal, multi-stage deprecation process, which included to create and maintain a ‘Deprecated Features’ page in the project’s documentation. The new page would contain the information about what features were removed in which release, and why. Once the proposal to remove a feature is accepted the community will decide on how long it is going to be deprecated before the final removal. The length of the deprecation might vary based on the feature that is being removed.

During the session attendees engaged in a longer conversation about some of the practicalities of the deprecation process. One of the main concerns was to make sure that users of the project have the opportunity to discover that a feature will be removed in an upcoming version of the project. Contributors discussed considerations related to how the community should apply release versioning in this case, and whether or not to follow the semver process and remove features only in major releases, or if they should incorporate the deprecation process into the current monthly release cadence. The community will keep evaluating options and make a decision on the final process after the event. However, contributors were in an agreement that they prefer not to re-introduce the stable-branch process they previously had for releases.

## Toolchain

Making changes to the components of the toolchain that the Kata community is using, like MSRV, Go versions or Dependabot, can often affect downstream users. Contributors utilized the PTG session to discuss strategies to bump versions and make other changes to tools without causing disruptions. The most recent trigger to revisit this topic was a mandatory version bump in the Go version, which was triggered by Dependabot in the process of addressing a CVE.

The current proposal is to bump the Go version every 6 months to stay on a stable release at all times, while for things like MSRV only bump the version when needed, which would follow the process that the Confidential Containers (CoCo) project is applying. As bumping these versions can affect downstream users, the community is looking for a middle ground where they can move forward in a safe and stable way.

It also came up in the past to use Dependabot to bump versions, but the community had issues with it in the past. While increased automation is desired in the processes, contributors still need to sort out some details on how to use and configure Dependabot for that.

# Clean Interfaces Between Kata and Confidential Containers

[Confidential Containers](https://confidentialcontainers.org) is a sandbox project in the CNCF ecosystem, which grew out of a working group under the Kata Containers project. CoCo is relying on Kata Containers, and therefore it is tightly integrated with Kata.

This conversation focused largely on the use case of running Kata in confidential mode but without CoCo, and how to improve the interaction between the two projects along the way.

Due to a large number of dependencies, the attack surface within the guest VM can grow quite large especially with  more features are enabled, which is a concern for users. While CoCo can be viewed as a downstream project from Kata, building a guest can require CoCo components, such as guest pull, attestation agent, which is now being used to verify the init data digest, and confidential data hub. These components are currently integrated in a seemingly ad-hoc way, and attendees used the available time during the session to explore how to make it more stable and clean.

The idea that was brought up during the session was to turn the guest pull and attestation agent into binaries, which could only be executed if present in the deployment, without hardcoding how to access them. However these components are already binaries, currently the kata-agent serves as a process manager for these, which is not ideal. The community has been exploring to implement a systemd-based approach, which got discussed again during the session.

The community agreed that the goal is to keep the Kata runtime lightweight and avoid pulling in unnecessary dependencies when used without CoCo. Next steps will include the implementation to use systemd, improve the flexibility on who can use attestation and how and monitor the init data implementation in CoCo to improve the integration between the two projects.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.13eb68713be1a237cf710f8911ed9f39) which also contains the link to the recording of the session.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
