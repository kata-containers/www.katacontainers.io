---
templateKey: blog-post
title: Kata Containers 4.0.0 Preview
author: Ildiko Vancsa
date: 2026-04-20T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers 4.0.0 release is a significant milestone for the project, completing the shift toward a Rust-first architecture and enhanced support for infrastructure security to power a variety of use cases from multi-tenant Kubernetes environments, secure CI/CD pipelines and enable AI-based applications of all sorts.

# 4.0.0 Release Timeline

The community is actively working on finalizing the contents and polishing out the runtime for the new major release of the project. The current expected timeline for the new release is the following:
- April
  - Active work on code and documentation for the new release
  - Releasing 3.29.0
- May
  - Filling feature gaps
  - Focus on ensuring CI testing on all major HW architectures
  - Releasing 3.30.0
- June
  - Further work on stabilizing CI and comprehensive tests of the new runtime
  - Focus on bug fixes in both the Go and Rust runtimes
  - Polish out documentation
  - Release 3.31.0
- July
  - Release 4.0.0 with runtime-rs as the default Kata runtime

# New Rust-based Default Runtime

The most significant architectural change in 4.0.0 is the promotion of runtime-rs (the Rust-based runtime) to be the default, and with that runtime-go will still be available but in a deprecated state.

## Background

There have been many advantages to have a project like Kata Containers implemented in Rust over Go. The community explored various areas to evaluate what users along with active contributors would gain by taking the leap, including:
- Reduced Memory Footprint: Essential for high-density container deployments.
- Improved Security: Leveraging Rust’s memory safety to further harden the container sandbox.
- Performance: Lower latency and faster startup times compared to its predecessor.

## Deprecation Period for the Go Runtime

While the Rust-based runtime will grab the spotlight, the Go runtime will still stick around for a deprecation period to support users as they switch from one to the other.

What you need to know about this switch:
- The Go runtime becomes deprecated when 4.0.0 is officially released
  - The Go version might be removed no sooner than the 5.0.0 release of Kata Containers
  - No new feature development will be accepted in the Go runtime going forward, however, some exceptions apply, see below
  - The community will still accept and encourage bug and security fixes to the Go runtime
    - Fixes need to be submitted for the Rust runtime as well, where applicable
- The community is considering a grace period to finish ongoing feature development work in the Go runtime, for up to 6 months after 4.0.0 is released
  - Features will be evaluated on a case-by-case basis
  - Where applicable, features will need to be implemented in both the Go and Rust runtimes

## What’s Included in the New Rust Runtime?



2. Accelerated Workloads: Full GPU Lifecycle with CDI
With the rise of generative AI and LLMs, GPU support is no longer optional. Kata 4.0 introduces a unified framework utilizing the Container Device Interface (CDI). This allows for:

Seamless GPU Passthrough: Standardized management of GPU resources within Kubernetes.

AI/ML Optimization: Better performance for hardware-accelerated workloads while maintaining the strong isolation of a VM.

3. Next-Gen Integration: Containerd 2.0 & Sandbox API
Kata 4.0 is designed to align with the latest ecosystem standards. It will feature deep integration with containerd 2.0, specifically leveraging the new Sandbox API.

Simplified Management: A cleaner interface between the high-level container manager and the low-level Kata runtime.

Image Transfer Service: Improvements in how images are handled and shared with the guest VM, reducing overhead during pod creation.

4. Hardened Security: Confidential Computing (CoCo)
Security remains the project’s DNA. Kata 4.0 doubles down on Confidential Computing by maturing support for Intel TDX and AMD SEV-SNP. This ensures that even the host provider cannot peek into the container's memory, making Kata the go-to runtime for zero-trust cloud environments.

5. Enhanced CI/CD Infrastructure
To ensure the stability of such a massive transition, the community has overhauled the CI/CD pipeline. This includes a new CI Dashboard for better visibility and expanded testing across diverse hardware architectures (x86_64, ARM64, and s390x), ensuring that the "default" Rust runtime is production-ready on day one.

Timeline: What to Expect
Unlike minor releases, which follow a monthly cadence, Kata 4.0 is feature-driven.

Current Phase: Finalizing feature parity between the Go and Rust runtimes and stabilizing the Sandbox API integration.

Upcoming Milestones: We expect a series of Release Candidates (RCs) to land in the coming months. These will be critical for community testing and feedback.

General Availability: The goal is a "stable-when-ready" release. We are targeting a launch once our CI signal is green across all supported VMMs (QEMU, Cloud Hypervisor, and Dragonball).

We encourage all community members to test the current development branches and share feedback on the Kata Slack or mailing list. Together, we are building the most secure and efficient runtime for the next generation of the cloud.







Greetings everyone, this is your friendly Kata community manager checking in to update you on what’s new with Kata Containers. If you’re here, then you’re probably already at least somewhat familiar with the container with its own kernel that blew our minds back in 2017.

Original skepticism of a container that’s small, fast, AND has its own kernel has been answered with continued innovation by the Kata community, resulting in KC becoming an increasingly popular container runtime in a growing list of enterprise environments.

The Kata Community has been working hard to complete [Kata Containers 3.0](https://github.com/kata-containers/kata-containers/releases), continuing in the pursuit of creating a highly secure container runtime without sacrificing speed or performance. Beginning with Kata Containers v.2, the community has continued on it’s journey to reengineer key components such as kata-agent in [Rust programming language](https://github.com/kata-containers/kata-containers/tree/main/docs/design/architecture_3.0#rationale-for-choosing-rust), deciding to trade off some design elements for higher performance & lowered overall memory consumption.

![](/img/0_fvhq6IXZ1TRDfFC7.webp)

Substantial updates have been made to the Kata codebase, including implementation of new Rust runtime, optional built-in sandbox functionality with Rust-VMM based Dragonball hypervisor, GPU VFIO passthrough support & more. Check out the Kata Containers 3.0.0 [release notes](https://github.com/kata-containers/kata-containers/releases/tag/3.0.0) for a full rundown on what’s new with KC 3.0.0.

# What users are saying about Kata Containers 3.0

Kata Containers 3.0 has already made a sizable impression with some high profile users & contributors. A few of our friends were gracious enough to share thoughts & opinions on their organization’s experiences with Kata.

> "We are using Kata \[Containers\], improving Kata and contributing to Kata. It’s an interesting experience to cooperate with \[the\] community to define the features for Kata 3.0, to develop new features for 3.0 and to keep up with the release schedule. We are also promoting Kata in the OpenAnolis community. Let’s working together to make Kata "product ready"!"

Tao Ma — Principal engineer, Manager of Operating System Department, Alibaba Cloud China

> "It is my great honor that our team and myself have been active contributors and users of Kata Containers since its first day. I think Kata Containers 3.0 will be the most exciting release for the new features, such as rustified components, built-in sandboxing, and TDX support. In the release cycle of Kata 3.0, we deployed it in our product clusters, which helped the team win the SuperUser Award this year. Let’s keep working together for a better next release."

Xu Wang — Senior staff engineer, Architect of Ant Infrastructure, Ant Group

> "We have integrated KATA into Inspur’s server virtualization system InCloud Sphere and hyper-converged infrastructure system InCloud Rail, we will continuously promote KATA to our customers and grow together with the community."

Alex Yan — Director of Cloud Computing R&D, Inspur Data China

# Upcoming Events

Hearing is great, but there’s nothing like seeing it in person. It’s conference season, & Kata is on the schedule. Here’s a couple of upcoming events where you will find Kata Containers content, linked below.

# KubeCon Detroit 2022

If you’re planning to attend KubeCon US in Detroit Michigan either in-person or virtually, be sure to check out the two Kata Containers presentations on the schedule.

*   Running Isolated VirtualClusters with Kata & Cluster API — [https://sched.co/182I4](https://sched.co/182I4)
*   So, What if I don’t Want My Persistent Storage To Be Yet Another Bindmount? [https://sched.co/182Jc](https://sched.co/182Jc)

# Ubuntu Summit 2022

After a long break, our friends at Canonical have decided to revamp & revise the original Developer Summit — last held in 2012 — into [Ubuntu Summit](https://events.canonical.com/event/2/overview) which will be held in Prague, Czech Republic. Kata Containers community manager Treva Williams will be delivering a presentation on maintaining open source communities in "the new normal." [Register now](https://events.canonical.com/event/2/) if you’d like to check it out!

# OpenInfra PTG

Team Kata will be in the (figurative) building this October 17–21 for [Project Teams Gathering](https://openinfra.dev/ptg/)! It’s not too late to sign up for a FREE ticket if you would like to attend.
