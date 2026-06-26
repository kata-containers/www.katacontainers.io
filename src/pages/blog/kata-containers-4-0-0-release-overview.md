---
templateKey: blog-post
title: Kata Containers 4.0.0 Brings You a New Rust Runtime
author: Ildiko Vancsa
date: 2026-07-22T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

The Kata Containers community is excited to share with you that the 4.0.0 release of the runtime is now available!

This is a significant step for the project, which has been in the works for an extended period of time. The new release brings a new runtime that provides the same functionality as previous versions, but it is now built on a completely new foundation.

The Kata Containers community picked the Rust programming language as an evolution path for the runtime, for an enhanced support for infrastructure security to power a variety of use cases from multi-tenant Kubernetes environments, secure CI/CD pipelines and enable AI-based applications of all sorts.

This article gives an overview of what’s in the new major release of the Kata Containers project. Please note that the list of supported architecture models and features is only a highlight and not a comprehensive overview.

# New Rust-based Default Runtime
The most significant architectural change in 4.0.0 is the switch to runtime-rs (the Rust-based runtime) as the default, while the original Go runtime will remain available but in a deprecated state.

## Background
There have been many advantages to having a project like Kata Containers implemented in Rust over Go. The community explored various areas to evaluate what users along with active contributors would gain by taking the leap, including:
- **Reduced Memory Footprint:** Essential for high-density container deployments.
- **Improved Security:** Leveraging Rust’s memory safety to further harden the container sandbox.
- **Performance:** Lower latency and faster startup times compared to its predecessor.

## Go Runtime Moving Forward
While the Rust-based runtime will grab the spotlight, the Go runtime will still stick around for a deprecation period to support users as they switch from one to the other.

**What you need to know:**
- The Go runtime is now deprecated
  - The Go runtime may be removed no sooner than the 5.0.0 release of Kata Containers
    - 5.0.0 is currently forecast to happen in the first quarter of 2028
  - No new feature development is accepted in the Go runtime going forward
  - The community still accepts and encourages bug and security fixes to the Go runtime
    - These fixes have to be submitted for the Rust runtime as well, where applicable
- The community opened up a grace period to finish ongoing feature development work in the Go runtime, ending some time in the first quarter of 2027
  - Features are evaluated on a case-by-case basis
  - Features need to be implemented in both the Go and Rust runtimes, where applicable

# Highlights from the New Rust Runtime
The community has been working hard to reach a close state to feature parity between the two variants of the runtime, where possible. This section gives a sneak peek into runtime-rs, without a comprehensive overview.

## Hypervisor Support
The virtualization layer is one of the pillars of Kata Containers, and the project has been providing flexible options for users to use the VMM solution that best fits their needs.
runtime-rs currently supports the following hypervisors:
- QEMU
- Cloud Hypervisor
- Dragonball

### Dragonball - a new, built-in VMM

Dragonball is a dedicated hypervisor, added by Alibaba and Ant Group, which now serves as the default built-in virtual machine monitor (VMM) in runtime-rs.

## Supported Hardware Architectures and Accelerators
It is important for the community to make the runtimes available on different hardware architectures. For runtime-rs these include:
- x86_64 (amd64)
- ARM (aarch64)
- IBM s390x

**GPU support:** Both runtimes support GPU passthrough with NVIDIA hardware when using QEMU.

# Container Orchestration System Compatibility
Kata Containers was designed to integrate seamlessly into existing container orchestration engines to become a vessel to package and manage workloads. This is the primary operating model for the Rust-based runtime as well, which works with:
- Kubernetes
- Docker (only tested with QEMU upstream)
- nerdctl

## Deploying runtime-rs

The Kata community has been working on consolidating the supported deployment options for runtime to provide a more stable and elevated user experience. In line with that, the available deployment options for the new runtime are:
- kata-deploy
- From source

Check out and deploy the new [4.0.0 release](https://github.com/kata-containers/kata-containers/releases/tag/4.0.0) today! Learn how to set up the release on the [new Kata Containers documentation webpage](https://kata-containers.github.io/kata-containers/).

# About Kata Containers

If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
