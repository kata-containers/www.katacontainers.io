---
templateKey: blog-post
title: Kata Containers Version 2.0 Ships with Rust Agent for Improved Security, Performance With 10x Footprint Reduction
author: Kata Containers
date: 2020-10-21T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---
**_Kata Containers 2.0 delivers significant improvements in observability and manageability for building secure container infrastructure._**

![](/img/1_p6Nvo3VVk-8AzEaE3DpKEQ.webp)

**On Monday, October 19,** the Kata Containers community has issued version 2.0 of the software. Kata Containers provides a way of isolating containerized workloads with security comparable to virtual machines (VMs) without the performance burden of full VMs. This solution offers a fast and secure deployment option for anything from highly regulated workloads to untrusted code, spanning public and private cloud, containers-as-a-service and edge computing use cases.

Check out the [mailing list](http://lists.katacontainers.io/pipermail/kata-dev/2020-October/001567.html) for the official announcement!

Kata Containers 2.0 delivers improved performance and observability enhancements as the community continues to address the challenge of providing secure, light, fast and agile container management technology across stacks and platforms:

*   One of the most fundamental changes is a rewrite of the Kata Containers agent. To help reduce the attack surface and reduce memory overhead, the agent was rewritten in Rust. The main benefit users will see is a 10-fold improvement in size, from 11MB to 300KB. This rewrite and refactoring also introduces utilizing [ttRPC](https://github.com/containerd/ttrpc), ttRPC moving away from GRPC. ttRPC further reduces the binary size and protocol overhead.
*   Kata Containers 2.0 offers significant improvements around observability and manageability. Kata Containers now provides metrics about the runtime itself, the VMM, as well as the guest kernel, all in Prometheus format. This will help administrators with understanding the infrastructure impact of running Kata Containers and will help users and developers better understand workload performance.
*   This release added support for the Cloud Hypervisor VMM, up to the same level of support as QEMU. Cloud Hypervisor is an open source Virtual Machine Monitor (VMM) that runs on top of KVM. The project focuses on exclusively running modern, cloud workloads, on top of a limited set of hardware architectures and platforms.
*   Kata-agent-ctl, a useful developer tool to aid in agent API debugging, was added to the 2.0 release.
*   Kata 2.0 supports shimv2 api solely to simplify code and reduce attack surface further. This also means kata-shim and kata-proxy used in 1.x are no longer required.

"Kata Containers 2.0 is an exciting release for the community," said Xu Wang, senior staff engineer at Ant Group. "In the 2.0 development cycle, we kept working on weaving Kata into the cloud native infrastructure fabric invisibly by reducing the overhead and improving operability and debuggability. At Ant Group, Kata Containers is running on thousands of nodes and over 10,000 CPU cores, and part of our deployment has been upgraded to a 2.0 pre-release version. We believe the isolation provided by Kata Containers will be the cornerstone of our financial-grade infrastructure architecture."

Check [https://github.com/kata-containers/kata-containers/releases/tag/2.0.0](https://github.com/kata-containers/kata-containers/releases/tag/2.0.0) for more information about Kata 2.0 and its download availability.

Upcoming on the software roadmap, the community is developing features to allow users to pull container images inside a sandbox for advanced security and isolation as well as better IO stream handling.

**Kata Containers Community Continues to Expand**

Over the Kata Containers 2.0 development timeframe, the Kata Containers community added almost 4,000 changes from 167 contributors and 26 organizations including Adobe, Alibaba, ARM, Atlassian, Baidu, CrayGoogle, Microsoft, NVIDIA, and Orange. The Architecture Committee just completed an election last month and includes members from Ant Group, Apple, Intel and Red Hat. [Current infrastructure donors](https://katacontainers.io/supporters/) include AWS, Google Cloud, Microsoft, PackageCloud, Packet and Vexxhost.

The Kata Containers community has grown since it was announced at KubeCon in December 2017, and open source contributors passionate about container security are invited to get involved. Contributors can expect to work upstream across multiple infrastructure and container orchestration communities, including Kubernetes, containerd / CRI-O, Docker, OCI, CNI, QEMU, rust-vmm, cloud-hypervisor KVM and OpenStack. Get started by connecting with the Kata Containers community.

**Meet the Kata Containers Team at Open Infrastructure Summit This Week, October 19–21**

Members of the Kata Containers community are presenting on the project and use cases at the Open Infrastructure Summit, being held virtually this week. The sessions videos will be available on the [Summit platform](https://summit.openinfra.dev/a/schedule) to watch all week on demand! Kata Sessions include:

*   Changpeng Liu and Xiaodong Liu: [Building High Efficient Storage Infrastructure for Secure Container on Top of SPDK](https://summit.openinfra.dev/a/event/24601)
*   Kailun Qin: [Kata \* TEE = A Lego-Like Two-way Sandbox for Seamless Security and Privacy](https://summit.openinfra.dev/a/event/24714)
*   Bin Liu: [Observability in Kata Containers 2.0](https://summit.openinfra.dev/a/event/24587)
*   Fupan Li and Wei Yang: [The Practice and Landing of Kata Containers in Ant Group and Alibaba Group](https://summit.openinfra.dev/a/event/24589)
*   Yan Song: [Toward Next Generation Container Image](https://summit.openinfra.dev/a/event/24645)
*   Hongliang Tian, Tianjia Zhang and Yutong Jin: [Towards Enclave-as-a-Container with Inclavare Containers and Occlum](https://summit.openinfra.dev/a/event/24630)
*   Jose Carlos Venegas Munoz: [Cloud Hypervisor and Kata Containers: A Path Towards Modernization](https://summit.openinfra.dev/a/event/24697)

**Get Involved**

Connect with the Kata Containers community:

*   Freenode IRC: [#kata-dev](http://webchat.freenode.net/?channels=kata-dev)
*   Website: [katacontainers.io](https://www.katacontainers.io/)
*   Developer Mailing List: [lists.katacontainers.io](http://lists.katacontainers.io/cgi-bin/mailman/listinfo)
*   Twitter: [@KataContainers](https://twitter.com/KataContainers)