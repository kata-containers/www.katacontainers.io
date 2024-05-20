---
templateKey: blog-post
title: Kata Containers Project Teams Gathering Recap
author: Kata Containers
date: 2021-05-10T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

For people who are not familiar with Project Teams Gathering (PTG), it is an event organized by the Open Infrastructure Foundation. PTG provides meeting facilities allowing various technical community groups working on OpenInfra projects to meet in person or virtually to exchange and get work done in a productive setting.

In mid-April this year, many Kata Containers community members attended the first virtual PTG of 2021. While it was not the same experience as the previous in-person PTGs, the Kata community made the best of the current situation. Unlike the previous PTG, the community shifted the format from delivering presentations to open the "floor" for the community to ask questions, discuss topics that they are interested in and share best practices they have developing the project. With the new format, we’ve been amazed by how many people have joined us online to voice their opinions and collaborate on various topics to advance the project.

During the PTG, Kata Containers community members from eight countries and six organizations including Ant Financial, Apple, IBM, Intel, OVHCloud, and Red Hat convened on Zoom for three hours. During these three hours of discussion, community members approached several topics including plans for the upcoming releases, improvement on the usability of the project, plans for observability and more. See the full list of topics that were discussed and the issues that were opened below:

Kata topics during the PTG:

*   The sourcery that you do on your production deployment
*   Plans for observability
*   Known issues about memory & CPU consumption
*   Plans for the coming 2.1.0-rc0 and 2.1.0 releases
*   Issues related to GPU passthrough, how to not regress once we have those fixed
*   Having a non-costly way to figure out the qemu capabilities on a deployed system
*   Documentation
*   Better using & advertising kata-deploy
*   Taking advantage of the sandboxed-containers operator

As a result of the three-hour effective group discussion, we have the following issues opened:

*   [Docs: Ensure kata-deploy has the most visible instruction installation](https://github.com/kata-containers/kata-containers/issues/1711)
*   [Kata-deploy: Generate a new image on every merged PR](https://github.com/kata-containers/kata-containers/issues/1710)
*   [\[RFC\] Check QEMU capabilities](https://github.com/kata-containers/kata-containers/issues/1709)
*   [Kata-deploy: Add capability to install kata artifacts without needing Docker or Kubernetes installed](https://github.com/kata-containers/kata-containers/issues/1708)
*   [Bpftrace inside Kata Containers?](https://github.com/kata-containers/kata-containers/issues/1707)
*   [Align CI installation & configuration paths with kata-deploy ones](https://github.com/kata-containers/tests/issues/3432)
*   [Consume kata-deploy as part of the kata-containers (Kubernetes) CI](https://github.com/kata-containers/tests/issues/3428)

Thank you to all the community members who have participated in the Kata Containers discussions during the PTG. Special thanks to Fabiano Fidêncio from the Kata Architecture Committee for providing notes from the PTG and giving an overview of the Kata Containers PTG participation during the [OpenInfra Live: Project Teams Gathering Recap](https://www.youtube.com/watch?v=yIt4dJvTQVg&list=PLKqaoAnDyfgo5sOi98QlbMVMhgI_lxFPA&index=2) episode!