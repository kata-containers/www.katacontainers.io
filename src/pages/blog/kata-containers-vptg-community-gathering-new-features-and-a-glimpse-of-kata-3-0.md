---
templateKey: blog-post
title: "Kata Containers vPTG: Community Gathering, New Features, and A Glimpse of Kata 3.0"
author: Kata Containers
date: 2021-10-26T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

![](/img/1_AhlsOx7vCouNaWsGhUrTwA.webp)

On October 19, the Kata Containers community got together at the virtual PTG and had quite a few interesting discussions. The vPTG time slots overlapped with Kata’s weekly architecture meeting. So the community decided to have an extended architecture meeting and bring in presenters of various topics. The meeting was moderated by Tao Peng from Ant Group and Samuel Ortiz from Apple, both of whom are long-time Kata contributors and architecture committee members. About 24 community members joined the meeting and spent three hours on discussions around performance tuning, internationalization, and various new features aiming at the Kata 3.0 timeframe.

# Performance Tuning

The vPTG kicked off with a practical area that most Kata Containers users would care about, performance. Eric Ernst started by introducing his latest efforts to better integrate Kata Containers with Kubernetes. Right now Kata does not know the size of vCPU and memory of a pod until all of its containers are created. If we know its size at the very first container creation, we can do more optimizations. For example, the vCPU topology can be mapped to the one on the host. And guest memory can be preallocated and NUMA topology can be considered. With these optimizations in mind, Eric proposed a Kubernetes CRI (Container Runtime Interface) change that adds both sandbox resource and podoverhead resource descriptions to the LinuxPodSandboxConfig structure. It is then passed to container runtimes when creating new pods. [The PR is now merged](https://github.com/kubernetes/kubernetes/pull/104886) and the next step is to modify containerd and CRI-O to pass the information down to Kata Containers.

Passing sandbox size is easy, but another area that Eric is working on is more difficult. He wants to change the Kubernetes CSI to teach it to pass down raw block volume information to container runtime without mounting on the host. The work is known as [Direct Assigned Volumes](https://github.com/egernst/kata-containers/blob/da-proposal/docs/design/direct-assign-volume.md). Instead of working around it with a JSON file, Eric now pursues an upstream approach that modifies Kubernetes CSI. Similar work is under experiment on the CNI part by Tao Peng as well. Archana Shinde mentioned that the last time when she tried to change CNI for direct assignment, the tap device lost connection after being moved to a container’s network namespace. The discussion didn’t go further but obviously, more work and experiments are needed in this area.

# I18n

Although Kata Containers has been an open and international project, it is primarily developed and documented in English. There is certainly a language barrier for some countries. Bin Liu took the liberty and created a Kata Containers gitbook in Chinese. He asked the community’s opinion about multiple languages. There is certainly a lot of interest in seeing multiple language support in the community. But the concern is real as well. There may just not be enough contributors to maintain translated documents. And when translated documents are out of sync and outdated, they do harm to new users silently.

# UniKernel and WebAssembly-runtime

WASM is another hot direction in recent, if not more than recent years. Teawater from Ant Group showed a demo of integrating Kata Containers, unikernel, and WASM runtime, to run WASM applications inside Kata. The reason for using an unikernel is not that obvious but as teawater explained, WASM runtime doesn’t need a full operation system and unikernel is a good fit for WASM runtime due to its simplicity. The demo shows the possibility for Kata Containers to support WASM applications and WASM FaaS (Function As A Service).

![](/img/1_6Tuoepi8XokpUv9A6ynRQw.webp)

# Runk — standard OCI runtime based on Kata agent

It is clearly a hot topic to rustify container components. Recently, Manabu Sugimoto from Sony looked at making a rust version of a new component, based on kata-agent. He took advantage of the rust agent and added an OCI-compatible command-line wrapper for kata-agent, runk.

Compared with runc, runk is faster and has a smaller memory footprint, which is expected when comparing Go and rust programs. There is still work to make runk pass oci-runtime-tool validation. The PR is still under review and the community is delighted by the work and would like to merge it as soon as possible.

There is another rustified runc project, youki, as mentioned by Manabu Sugimoto. The community would like to invite youki creator to one of the future architecture committee meetings and discuss how to cooperate between the two projects.

![](/img/1_tUYzWFmmVf8RGshgDGIpNg.webp)

# Integrated Rust Runtime

Running probably the largest production deployment of Kata Containers, Alibaba and Ant Group have been pioneers in Kata Containers evolvement as well. Gerry Liu, a chief architect of the Alibaba Cloud Sandbox project, presented their work on the integrated rust runtime.

Ever since the rust version of the kata-agent was introduced last year, people have been asking whether it makes sense to rewrite the go runtime shim with rust. There is certainly a lot of work to make it happen, but the value is also obvious — a rust runtime shim can be built together with a rust VMM, into a single runtime binary. So one less process to manage and Kata Containers architecture gets simplified again!

![](/img/1_IFWJ2lNNFrcGvIJS88D3sg.webp)

There were concerns that this could be pretty disruptive especially since Gerry talked about the shimv3 interfaces. Tao explained that shimv3 is just a proposal placeholder. When the code is first open-sourced, it will be shimv2 only. And shimv3 should be designed and developed incrementally as community work.

Gerry said the code is still being cleaned up and he expected it to be ready by the end of the year. Gerry asked how Alibaba can contribute the feature to the Kata community. It is a fairly large codebase and people have various thoughts. Samuel expressed his concern about merging such a large codebase and it would be almost impossible to review. So he wanted to keep it in a separate repository in the Kata Containers organization. Tao worried that it is against the target of maintaining all code in a single repository, which is one of the primary changes we’ve done in Kata 2.0 frame. Then he proposed to keep it in a separate repository at first, where it can be reviewed and revised properly, with a goal of merging it in the main Kata Containers repository. Samuel agreed that it can be an option. The community didn’t come to a conclusion but would like to invite Gerry to present and explain more details about the feature in future architecture committee meetings.

![](/img/1_lHqK-Uadct5gT14TUVAMPA.webp)

# Confidential Containers

Samuel Ortiz has been leading the development of Kata Containers’ usage in the confidential container use case. He gave an introduction to the confidential container work. New CPU technologies, like Intel TDX, IBM SE and AMD SEV, have opened new opportunities in the confidential computing area. Unlike their ancestors, TDX, SE and SEV do not require users to recompile their application just to be contained in a TEE (Trusted Execution Environment).

When running containers with the new confidential computing technologies, Kata Containers become a natural fit. However, there are still problems to solve. How to keep container images confidential from the host, is the very first of many. Normally, a container runtime (containerd or CRI-O), would download a container image from the remote registry locally, before creating and starting a new container. But with confidential computing, container images are not supposed to be accessed by any components on the host. To address this issue, kata-agent, the daemon running inside the virtual machine, has developed new abilities to download and manage container images. New APIs have been added to kata runtime shim to facilitate the functionality as well. With the cooperation of containerd and some additional attestation work, the new workflow would allow confidential containers to run without exposing container images to anyone on the host.

![](/img/1_oJ6GZS_j9QtFQ9bj1o_zJg.webp)

The focus of the confidential container architecture version 0, is to solve the problem of guest component trustability and container image privacy. To do it, an external third party component, the Key Broker Service, and an attestation agent are introduced to attest all components in the guest. And container images are pulled and unpacked inside the guest rather than on the host. Of course, containers are running in a TEE environment created by TDX, SE or SEV. With such an architecture, we can ensure that all the components in the guest can be trusted and container workloads are not leaked to the host.

Confidential containers still have a long way to go. But as an emerging new technology, it is certainly drawing a lot of community attention. Tao asked what the plans were after the image pulling inside the guest. Samuel answered that they want to look at how to completely seal the pod, meaning no containerd or runtime on the host, with some sort of parallel control plane through a secure channel. And other TEE technologies like SGX are also under consideration.

# A Glimpse of Kata 3.0

Time is fast. With all the discussion above, the community spent all three hours allocated to vPTG. So the remaining two topics, podman support and Kata 3.0 feature discussion, were pushed to the next week’s architecture committee meeting.

All the presentations are ongoing work in the Kata community. Among them, confidential containers, and the integrated rust runtime, are the most important ones per your editor’s view. Confidential Containers, while being still at its early stage, expands Kata Containers threat model from protecting the infrastructure to also protecting the workloads. The integrated rust runtime, on the other hand, continues to innovate with cloud-native virtualization in mind and makes all Kata components work better together.

The Kata 3.0 roadmap just started to reveal itself. There is certainly more work to do and more features to design. And the community looks forward to building a more solid virtualized container solution together.