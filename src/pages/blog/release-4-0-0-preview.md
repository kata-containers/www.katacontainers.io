---
templateKey: blog-post
title: Kata Containers 4.0.0 Preview
author: Ildiko Vancsa
date: 2026-04-28T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers 4.0.0 release is a significant milestone for the project, completing the shift toward a Rust-first architecture and enhanced support for infrastructure security to power a variety of use cases from multi-tenant Kubernetes environments, secure CI/CD pipelines and enable AI-based applications of all sorts.

This article will give a preview of what’s coming in the new major release of the Kata Containers project. Please note that the list of supported architecture models and features is only a highlight and not a comprehensive overview.

# 4.0.0 Release Timeline

The community is actively working on finalizing the contents and polishing out the project for the new major release. The current forecasted timeline for 4.0.0 is the following:
- May
  - Filling feature and documentation gaps
  - Focus on ensuring CI testing on all major HW architectures
  - Releasing 3.30.0
- June
  - Further work on stabilizing CI and running comprehensive tests on the new runtime
  - Focus on bug fixes in both the Go and Rust runtimes
  - Polish out documentation
  - Release 3.31.0
- July
  - Release 4.0.0 with runtime-rs as the default Kata runtime

# New Rust-based Default Runtime

The most significant architectural change in 4.0.0 is the switch to runtime-rs (the Rust-based runtime) as the default, while the original Go runtime will remain available but in a deprecated state.

## Background

There have been many advantages to have a project like Kata Containers implemented in Rust over Go. The community explored various areas to evaluate what users along with active contributors would gain by taking the leap, including:
- Reduced Memory Footprint: Essential for high-density container deployments.
- Improved Security: Leveraging Rust’s memory safety to further harden the container sandbox.
- Performance: Lower latency and faster startup times compared to its predecessor.

## Deprecation Period for the Go Runtime

While the Rust-based runtime will grab the spotlight, the Go runtime will still stick around for a deprecation period to support users as they switch from one to the other.

What you need to know:
- The Go runtime becomes deprecated when 4.0.0 is officially released
  - The Go runtime may be removed no sooner than the 5.0.0 release of Kata Containers
    - 5.0.0 is currently forecast to happen 18 months after 4.0.0 is released
  - No new feature development will be accepted in the Go runtime going forward, however, some exceptions apply, see below
  - The community will still accept and encourage bug and security fixes to the Go runtime
    - These fixes will have to be submitted for the Rust runtime as well, where applicable
- The community is considering a grace period to finish ongoing feature development work in the Go runtime, for up to 6 months after 4.0.0 is released
  - Features will be evaluated on a case-by-case basis
  - Features will need to be implemented in both the Go and Rust runtimes, where applicable

If you haven’t yet started looking into runtime-rs, the 4.0.0 release will be a great opportunity to not just start exploring it, but also start taking the steps to move your current deployment over to the new runtime. You can also reach out and work with the community if you identify any remaining gaps to close them.

## Highlights from the New Rust Runtime

The community has been working hard to reach a close state to feature parity between the two variants of the runtime, where possible. Functionality that had already reached the state of deprecated or unmaintained will not be available in the new runtime, while it already has some features that are not available in the original Go runtime. This section gives a sneak peek into runtime-rs, without a comprehensive overview.

### Hypervisor Support

The virtualization layer is one of the pillars of Kata Containers, and the project has been providing flexible options for users to use the VMM solution that best fits their needs.

runtime-rs will initially support the following hypervisors:
- QEMU
- Cloud Hypervisor
- Firecracker
- Dragonball - a special hypervisor created by the Ant Group that runs in the same process as the Rust-based containerd shim

### Hardware Architectures and Accelerators

It is important for the community to make the runtimes available on different hardware architectures. For runtime-rs these include:
- Arm
- Intel/AMD (x86_64)
- IBM s390x
- IBM PowerPC
- RISC-V - experimental in runtime-rs only

GPU support: Both runtimes support GPU passthrough with NVIDIA hardware when using QEMU.

### Container Orchestration System Compatibility

Kata Containers was designed to integrate seamlessly into existing container orchestration engines to become a vessel to package and manage workloads. This is the primary operating model for the Rust-based runtime as well, which will work with:
- Kubernetes
- Docker - only tested with QEMU upstream

### Deploying runtime-rs

The Kata community has been working on consolidating the supported deployment options for runtime to provide a more stable and elevate user experience. In line with that, the available deployment options for the new runtime will be:
- From source
- kata-deploy

The new Rust-based runtime is already in place, which means that you can download the code and start testing it in your environment in preparation to make the move from Go to Rust. As the Kata Containers project is open source, please [reach out to the community](https://katacontainers.io/community/) with any questions, feedback and help out with the final touches of the release. Whether you help testing, reviewing, adding code or documentation your contributions are always welcome!

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.

