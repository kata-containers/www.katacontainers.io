---
templateKey: blog-post
title: Inside Ant Group’s Secure Container Platform - Lessons in Isolation, Observability, and Real-time Protection
author: Fupan Li
date: 2025-07-23T01:32:05.627Z
category:
  - value: category-em6-cxZuI
    label: News & Announcements
---

At Ant Group, we have been using Kata Containers since 2019, and we are proud to share a new white paper that dives deep into one of our use cases: building and operating a Cloud Workload Protection Platform (CWPP) using Kata Containers and eBPF. The white paper, [published today](https://katacontainers.io/collateral/kata-containers-ant-group-cwpp-ebpf_whitepaper.pdf), offers technical insights and practical guidance focused on container security at scale.

Kata Containers provide strong isolation by running each container in a lightweight virtual machine with its own kernel, mitigating entire classes of vulnerabilities while eBPF enables dynamic, low-overhead policy enforcement at the system level, without relying on brittle kernel modules or intrusive instrumentation. By combining these technologies, we built a scalable, easy-to-maintain CWPP system capable of detecting and stopping sophisticated attacks across containers, including reverse shells, fileless malware, and policy drift. This platform includes fine-grained application-level controls, real-time threat auditing, and resilient architecture that supports secure innovation, such as AI code execution, without sacrificing performance or reliability. It’s been critical to ensuring our environment is secure and reliable.

As more organizations adopt containerized environments to power sensitive workloads, security challenges like container escape, large attack surface and outdated system components, including the kernel, remain top concerns. When applying prevention and protection, it is also important to keep the infrastructure easy to maintain and manage, while ensuring real-time action, like through policy enforcement at runtime. We have decided to address these challenges head-on by integrating the strong isolation of Kata Containers with the programmability and low overhead of eBPF, and we want to share this architecture and learnings with the broader community.

Whether you're running public-facing apps or developing secure AI agents, learn how to:
- Prevent container escape with hypervisor-level isolation
- Apply application-specific security policies using in-container eBPF
- Audit and block malicious behavior in real time, without kernel panics or system disruption
- Simplify security operations across diverse workloads with flexible kernel versions and decoupled policy delivery

One of the purposes of this white paper is to share our experience, hoping that more practitioners can utilize the independent kernel characteristics of Kata for further innovation and application. We will also be going more in depth at the [OpenInfra Summit Europe](https://summit2025.openinfra.org/) on the 18th of October in our session, [Enhancing Container Security with Kata Containers and eBPF at Ant Group](https://summit2025.openinfra.org/a/schedule#view=calendar&title=Enhancing%20Container%20Security%20with%20Kata%20Containers%20and%20eBPF%20at%20Ant%20Group).

# About Kata Containers

If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.