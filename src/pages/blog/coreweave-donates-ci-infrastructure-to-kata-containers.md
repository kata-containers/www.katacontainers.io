---
templateKey: blog-post
title: CoreWeave and Kata Containers - Growing Collaboration and Donated CI Infrastructure
author: Landon Clipp
date: 2026-11-10T16:00:00.000Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

CoreWeave is donating compute to the Kata Containers project for upstream CI. The first focus is **Firecracker testing**, an area where the project has wanted better hardware coverage for a long time. This post explains how CoreWeave uses Kata today, what we've been contributing upstream, and what the new CI infrastructure looks like.

# Why Kata matters to CoreWeave

CoreWeave runs Kubernetes ([CKS](https://docs.coreweave.com/products/cks)) directly on bare-metal nodes. That works well for performance. But more and more workloads need a stronger boundary than a shared host kernel can give: AI agents running code a model generated, sandboxes that run user-submitted code, multi-tenant inference, and dev environments for untrusted users.

Kata Containers lets us run individual Pods inside lightweight VMs while keeping the normal container workflow. Users keep using Kubernetes and OCI images, and each workload gets its own guest kernel and a hardware-enforced isolation boundary.

Today, CKS ships several Kata-based RuntimeClasses, documented in our public [container runtimes reference](https://docs.coreweave.com/products/cks/container-runtimes/reference):

- **`cw-kata-qemu`**: Kata with QEMU for CPU workloads, using the upstream Kata configuration.
- **`cw-kata-qemu-kvm`**: Kata with QEMU and a custom guest kernel, for workloads that need nested virtualization.
- **`cw-kata-nvidia-gpu`**: Kata with QEMU and **VFIO GPU passthrough**, currently on NVIDIA RTX PRO 6000 Blackwell PCIe systems.

Kata also backs the VM-isolated sandboxes in [CoreWeave Sandboxes](https://docs.coreweave.com/products/sandboxes/gpu-sandboxes). Running untrusted code next to a real GPU is one of the hardest isolation problems in AI infrastructure right now, and Kata is how we solve it.

# Exploring Firecracker

Alongside QEMU, we're actively evaluating **Firecracker** as a Kata hypervisor. We've deployed an experimental Firecracker-backed RuntimeClass using devmapper-backed root filesystems. With it, we're:

- **Benchmarking Pod startup** end to end through Kubernetes, comparing Kata+Firecracker with Kata+QEMU using the same guest kernel and image.
- **Testing snapshot/restore**, which could change sandbox startup costs by restoring a pre-booted VM instead of cold-booting one.
- **Testing GPU passthrough in Firecracker**, including guest-visible PCIe and NUMA topology.
- **Closing the Firecracker feature gap between the Go runtime and runtime-rs**: block-device removal, VMM metrics and logging, health checks, version checks, rate limiting, and process-state recovery.

All of this work depends on Firecracker staying healthy upstream. For example, when the project proposed moving to Firecracker 1.17.0, we booted Kata/Firecracker pods on our own nodes to confirm the version bump didn't cause regressions. Right now that kind of check is ad hoc and depends on whoever has the right hardware. **We'd like it to be something upstream CI does on every change.**

# Contributing upstream

CoreWeave's approach is to send fixes upstream instead of maintaining a private fork. Over the past year, CoreWeave engineers have contributed to Kata in several areas.

**GPU and device support**
- The agent now converts `CDI_VISIBLE_DEVICES` into CDI GPU requests, giving Kata guests a standard way to inject GPU devices into sidecar containers.
- `nvswitch`-class devices can now be passed through, which was a blocker for NVLink/NVSwitch topologies.
- Hugepage size is now detected at runtime instead of being assumed.
- **In review:** a `gpudirect_clique` option for QEMU ([#14326](https://github.com/kata-containers/kata-containers/pull/14326)) that turns on GPU peer-to-peer inside multi-GPU Kata VMs. In our testing on an 8x RTX PRO 6000 node, P2P went from unsupported to working on all 56 GPU pairs.

**Documentation and project infrastructure**
- Migrated the Kata documentation site to mkdocs-material and ported the Helm chart docs.
- Wrote the Kata 4.0 quick-start guide and expanded the installation and drop-in configuration docs.
- Stopped full CI runs on docs-only pull requests, so contributors spend less time waiting on CI.
- Pointed katacontainers.io at the new documentation site.

**Review and community**
- Reviewed two dozen pull requests from other contributors, including runtime-rs cold-plug GPU support, EROFS snapshots, kata-deploy drop-in configs, and QEMU PCIe root-port sizing.
- Joined community meetings and the PTG, and brought in feedback from running Kata on GPU infrastructure at scale.

# Donating CI infrastructure

The next step is giving the project hardware to run on. CoreWeave has set up a **dedicated organization for the Kata Containers project**. The first capacity is an **8x NVIDIA RTX PRO 6000 Blackwell bare-metal node**.

Here's the plan:

1. **A dedicated CKS cluster** in the Kata org, separate from CoreWeave's internal infrastructure.
2. **GitHub Actions Runner Controller (ARC)**, with self-hosted runners registered to the `kata-containers` GitHub organization.
3. **Firecracker first.** The first workflows will target Kata+Firecracker, so hypervisor bumps and runtime changes get tested on real hardware before they merge.
4. **GPU coverage after that.** The node has GPUs, so it can later run Kata GPU passthrough tests as well.

We're working with the Architecture Committee on runner labels, which workflows to move first, and a support contact for runner issues. Kata maintainers who want to try the infrastructure before it's connected to CI can be invited to the org.

# What's next

This is the beginning of a longer-term commitment. Kata is a core part of how CoreWeave runs isolated workloads, and the project's health matters to us directly. We plan to keep sending GPU, Firecracker, and snapshot/restore work upstream, keep reviewing, and grow the CI infrastructure as the project's needs become clear.

If you're a Kata contributor and want to help design the Firecracker CI jobs, or you have tests you've wanted to run on real GPU hardware, find us in the [Kata Containers Slack](https://katacontainers.slack.com) or at the weekly community meeting.

A big thank you to the Kata community and the Architecture Committee for being such welcoming collaborators. We're excited to give back.
