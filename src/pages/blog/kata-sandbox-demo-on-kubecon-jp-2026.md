---
templateKey: blog-post
title: A Sandbox Service Built on Kata and PVM
author: Xu Wang
date: 2026-08-09T16:42:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

# Xolis — A Sandbox Service Built on Kata and PVM

At KubeCon Japan 2026, Yu HU from Japan AI and I, [Xu WANG](https://github.com/gnawux), demoed a sandbox service built entirely on open source components — a Kubernetes agent-sandbox CRD running on AWS EKS with Kata runtime-rs on the nodes to create the sandboxes. The sandbox uses the dragonball rust-vmm built into runtime-rs: shim, runtime, and VMM are three-in-one, with no extra processes needed, which minimizes both management and memory overhead. Thanks to Dragonfly and Nydus, image pull times for the sandbox are also drastically reduced.

The demo is open source on GitHub: [gnawux/xolis](https://github.com/gnawux/xolis). The tag `kubecon-japan-2026` captures the exact state of the demo. In the week that followed, I added PVM support — with PVM, the Kata VMM can run on any cloud host, such as any x86 EC2 instance on AWS, without requiring nested virtualization. This makes deployment far more flexible and cost-effective. That version is tagged `demo-with-pvm`. When I have time, I'll continue to make it more production-ready — at the very least, as a usable reference sandbox demo for the Kata community.

## Origin: Making the Community Visible

The idea started at KubeCon EU in Amsterdam in March, 2026, when Huyu and I met at the Kata booth. He came by to ask about Kata and discuss sandbox solutions, and I happened to be there as a retired Kata community member. After a good chat about Kata, and with the KubeCon Japan CFP deadline just around the corner, I suggested we submit a joint talk on a Kata-based sandbox. We hit it off immediately. The community tends to love these kinds of collaborative talks — with both community and local flavor, upstream and real-world application, connecting multiple open source projects and giving the audience something they can actually try themselves — so our proposal was accepted.

In fact, I had been thinking about building something like this for a while. On one hand, e2b had been getting a lot of attention, and it felt somewhat reminiscent of the container cloud services we built years ago. On the other hand, many companies and teams have released their own sandbox projects, and they all benchmark against Kata, claiming to be many times faster or much lighter. But they rarely disclose how their Kata baseline was configured, and judging from their results, I doubt they ever seriously tuned Kata for a fair comparison.

In reality, the dragonball rust-vmm integration has been upstream for a long time — it reached stable status at the end of last year — and it's essentially the same setup Ant Group and Alibaba have been running at scale in production for years. As a single-process, Rust-based sandbox, it was designed from the start for low overhead and easy operations. After extensive testing and validation, this version was officially released on July 21, 2026 as part of Kata Containers 4.0, and I highlighted the milestone on social media on July 29:

> Samuel and I first started pushing for a full Rust rewrite at the Denver Summit in 2019 — from Bo Yang’s `rust-agent` to Fupan’s `runtime-rs`. After we failed to convince CLH to provide a kata-profile, we ended up integrating Alibaba's Dragonball as the built-in `rust-vmm` in the runtime. Ant Group and Alibaba have actually been running this internally for a long time. This afternoon I'll be demoing an `agent sandbox` using the kata-4.0 open-source stack — a single all-in-one Rust binary is just so much cleaner.

## Key Ingredients: Open Source Foundations, Especially PVM

The runtime is essential to a sandbox system, but it's only one piece of the puzzle. My Xolis demo is composed entirely of open source projects — no proprietary components from any large vendor. Broadly, there are two chains:

- **Runtime Plane:** Kubernetes [Agent Sandbox](https://agent-sandbox.sigs.k8s.io/) defines the sandbox behavior and warm pool. Through standard Kubernetes and containerd, it creates Kata sandboxes. The sandbox VMM runs on top of KVM, and with [PVM \(Pagetable-based Virtual Machine\)](https://lpc.events/event/18/contributions/1766/), our KVM no longer needs hardware virtualization support.
- **Image Plane:** Through the image acceleration project [Nydus](https://nydus.dev/), we can use the Nydus accelerated image format — which follows the OCI Image Artifact spec — to lazy-load images from a standard registry with very low latency, and accelerate distribution within the cluster via P2P with [Dragonfly](https://d7y.io/).

Of all of this, I want to highlight PVM in particular. It allows a KVM-based VMM to run without hardware virtualization — no `vmx` flag required on the CPU. That means Kata can run directly inside any VM, whether it's a pre-8th-generation EC2 instance or a VM on any other public cloud. For virtualization-based strongly-isolated containers, this is a big deal: first, we can run and debug Kata environments in any VM, which makes development much easier; second, it greatly expands where we can deploy, making it as unconstrained as a regular container. That's why I like to call Kata with PVM the complete form of Kata.

The PVM patches have been submitted to LKML, and related papers have been presented at SOSP, the top systems conference, and at LPC, the Linux kernel developers conference. If you're interested in the details, you can read the code and papers directly. Briefly, the principle is — on the framework side, it leverages the `pvops` framework that Xen introduced and that has been gradually merged into the kernel since 2007, which enables cooperation between the host and guest kernels; on the isolation side, it employs page tables to provide address space isolation between host and guest — the "P" in PVM stands for PageTable. Building on these existing foundations, PVM adds a paravirtualized KVM driver with minimal changes, enabling KVM virtualization without hardware-assisted via a small kernel patch.

PVM was recently initiated by Lai Jiangshan (laijs), a kernel developer who has been with our team since the hyper.sh days through the Ant Group era, but it's not his first breakthrough in lightweight virtualization. Previously, he leveraged the live migration feature of VMs to perform a local-to-local migration without copying memory, enabling fast VM startup via a "Template" technique. That technique was later ported to Kata by another core member of our team, Peng Tao (bergwolf), and has become the standard approach for accelerating Kata cold starts.

It is thanks to all this open source work — everything except PVM, which is still out-of-tree, are OpenInfra Foundation or CNCF community projects — that we were able to build an Agent Sandbox service in just a week. In fact, even if you don't use Kata, open source contributions like PVM and Nydus may already be powering other teams' "novel solutions" under the hood. Showcasing these mature and efficient pieces from the community is exactly what our demo was about.

## Current Status: What's Done and What's Next

The project currently includes:

- Overall architecture design, documentation, demo materials, and architecture diagrams;
- OpenTofu code for provisioning clusters on AWS, plus code for building AMIs and container images;
- A simple demo service, written mainly in Rust and Python;
- Test code, helper scripts, and necessary patches.

All code and tests were developed with AI agent-assisted programming. The service itself is still fairly simple — scaling it up would require adding a database, multi-AZ deployment, high availability, and so on. Networking is also minimal at the moment; a natural next step would be to enrich it, for example by using Kata's TSI feature to redirect networking from inside the sandbox to outside the container for more fine-grained control. So far only AWS is supported, and only Kubernetes via EKS. For a more complete product, multi-cloud and multi-provider support would be essential.

## Looking Ahead

For now, my priority is to polish the demo and ensure full integration of the various community features. Many old friends from the Kata upstream helped a lot during development, and I hope this project can evolve into a reference use case or demo project for the community.

## About Kata Containers

If you would like to learn more about the project and get involved check out the [website](https://katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
