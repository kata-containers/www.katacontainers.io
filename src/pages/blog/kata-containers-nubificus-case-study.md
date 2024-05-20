---
templateKey: blog-post
title: Kata Containers - Nubificus Case Study
author: Kata Containers
date: 2021-09-22T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

[Nubificus Ltd](https://nubificus.co.uk/) is a software consultancy tackling complex virtualization problems. It targets ultra-fast application spawning and execution at the edge and in the cloud. Teams at Nubificus are day-to-day users of open-source software. Currently, they actively use and contribute to open source projects like [Kata Containers](https://katacontainers.io/).

We got to talk with a Kata Containers contributor, Anastassios Nanos at Nubificus, and hear how his team got started with Kata Containers and how they are using it.

**What does Nubificus do?**

Nubificus targets users and businesses that need hassle-free & interoperable deployment of compute-intensive applications in heterogeneous and resource-constrained environments. One of our partners, a software house dealing with Computer Vision problems, needs to process huge amounts of data at the Edge (online), and transfer asynchronously part of it to the cloud for additional processing (offline). Running exactly the same container image both at Edge devices and the Cloud unleashed a completely different experience for them, as they are able to exploit hardware acceleration on cloud spot instances for offline processing while spawning containers at small form-factor devices at the Edge.

**How did Nubificus get started with Kata Containers?**

At Nubificus, we explore lightweight virtualization solutions for edge, low-power devices. We are developing a novel framework that enables hardware acceleration for Serverless computing. To achieve this, we build on popular open-source system software stacks and finetune their behavior to match our customer needs, ranging from computer vision Machine learning (ML) inference to data analytics and pre-/post-processing.

Kata Containers provides the ideal glue to match container technology with virtualization silos, as the technology ensures isolated execution for workloads in extreme multi-tenant environments, such as a serverless platform.

**Describe how you’re using Kata Containers in your environment:**

Kata Containers enable containers to be seamlessly executed in virtual machines (VMs). Kata Containers are as light and fast as containers and integrate with the container management layers, while also delivering the security advantages of VMs.

We build on Kata Containers to enable seamless, burden-free deployment of lightweight container functions on Kubernetes while ensuring strict tenant isolation offered by the virtualization layers. On top of the core functionality, we customize the stack bringing in two important enhancements:

*   First, we integrate our hardware acceleration framework with Kata Containers to provide GPU/FPGA execution to workloads running as containers. We mostly use the AWS Firecracker virtual machine monitor (VMM), but our approach is not limited to a specific VMM (QEMU/QEMU-lite or cloud hypervisor could work as well).
*   Second, we add our own VMM "backend" to Kata Containers to account for ultra-fast boot times for generic workloads and unikernels. We build a tiny VMM that resides in the Linux Kernel and is able to spawn a range of Unikernels (Unikraft, Rumprun, OSv etc.) as well as a generic Linux VM.

**How does Kata Containers add value to Nubificus?**

Kata Containers brings us the needed Open Container Initiative (OCI) glue to interface with the upper-layer software stack, in order to showcase the merits of our projects. We are more than happy to give back to the community by contributing to the project in any way.

**What kind of support do you require to deploy Kata Containers?**

We would like to upstream our changes so that we could deploy our framework at scale in a more straightforward way. First, this would involve presenting our solution and brainstorming with the community, which so far has been extremely friendly and useful, as per the validity of the idea, the best way to integrate it, etc. If our approach is of interest to the community we would like to discuss the technicalities of integrating upstream. Ideally, we would like to see our framework being used by members of the community.

**What would you like to see improved on Kata?**

One thing that needs a bit more attention and polishing is aarch64 support, which, from our side, we try to debug/test but we’re missing the necessary hardware platforms. A reach out to big vendors to donate some hardware could be one way to go!