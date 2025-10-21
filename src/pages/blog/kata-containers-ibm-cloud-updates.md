---
templateKey: blog-post
title: Case Study - IBM Cloud's Continued Journey with Kata Containers
author: Ildiko Vancsa, Simon Kaegi
date: 2025-10-27T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

Teams from IBM Cloud continue to be active contributors and users in the Kata Containers community, deploying the project to secure their Cloud Shell and CI/CD Pipeline SaaS offerings. Since our [previous case study with Simon Kaegi](https://katacontainers.io/blog/kata-containers-ibm-cloud-case-study/) in 2021, IBM Cloud's use of Kata Containers has grown significantly, scaling to support increasingly complex workloads and expanding across multiple architectures.

We reconnected with the IBM Cloud team to learn how their deployment has evolved, what they've learned from running Kata Containers at scale, and how they continue to collaborate with the community.

## What challenge were you trying to solve when setting up IBM's public cloud build service?
Our developer services team faced a scaling challenge with significant security implications. We were experiencing sustained growth of about 10% monthly over several years, and the workload characteristics made traditional containerization inadequate.

The core issue was that most of our work involves building and testing container images. These operations require privileged workloads with access to sensitive system resources, exactly the kind of activity that traditional containers don't isolate well. We needed a solution that could provide customers with flexible, high-performance CI/CD environments while maintaining strict security boundaries, all without compromising on performance as we scaled.

## Why did you choose Kata Containers?
Kata Containers solved our isolation problem without forcing us to abandon our existing infrastructure investments. As an open source container runtime that provides workload isolation using lightweight virtual machines, it gave us hardware-level isolation, the kind of separation we needed for privileged workloads.

The key advantage was seamless integration. Since our workloads run in [Kubernetes](https://kubernetes.io) clusters using [Tekton](https://tekton.dev) as our pipeline orchestrator, Kata Containers plugged directly into our existing stack. We could isolate pods with hardware-level security without the significant performance penalties typically associated with full virtualization.

## What does your deployment look like?
We operate at substantial scale across multiple architectures. At peak loads, we're running a little over 10,000 vCPUs distributed across x86, Power, and s390x environments, with auto-scaling handling the variable workload patterns inherent to CI/CD work.

Our architecture leverages [Cloud API Adaptor](https://github.com/confidential-containers/cloud-api-adaptor) in combination with Kata Containers, which enables us to dynamically allocate resources from large host machines based on real-time demand. This setup spans approximately 400 nodes and supports a diverse range of use cases, from standard container builds to automation workloads that require substantial hardware resources.

The multi-architecture support is particularly important for our customer base, allowing us to provide consistent isolation and security regardless of the underlying platform.

## Have you made any customizations to Kata Containers?
We've taken a pragmatic approach: we use the upstream version of Kata Containers rather than maintaining a custom fork, but we do configure it extensively to meet our operational requirements.

Our customizations include running Kata with a different kernel tailored to our needs, implementing strict network and policy configurations appropriate for our security posture, and integrating it with our custom deployment mechanisms. This gives us the flexibility to operate our infrastructure according to our standards while staying aligned with the upstream project.

Importantly, when we develop improvements or identify fixes, we contribute them back to the open source project. This approach ensures we benefit from community innovations while avoiding the maintenance burden of a divergent fork.

## How do you work with the Kata community?
The Kata community has been essential to our success, particularly given that we're running some non-mainstream configurations across multiple architectures. The community is genuinely responsive and supportive. We can reach out with questions about specific configurations and receive meaningful guidance.

We maintain an active upstream presence, working directly with the community to implement the improvements and fixes we need. This collaborative model benefits both our infrastructure and the broader Kata Containers ecosystem, ensuring that multi-architecture deployments and enterprise-scale use cases remain well-supported.

## What results have you achieved?
The numbers speak to the platform's viability: our Kata-based CI/CD platform has scaled 30 to 40 times over the past five years. That growth has been possible because Kata Containers delivers the combination of performance and isolation that our large-scale, multi-tenant environment demands.

Looking forward, we're well-positioned for continued growth. As AI development accelerates automation, we anticipate the volume of workloads requiring secure isolation will continue increasing. Kata Containers provides the foundation we need to meet that expanding demand without compromising on security or performance.

## About Kata Containers

If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.