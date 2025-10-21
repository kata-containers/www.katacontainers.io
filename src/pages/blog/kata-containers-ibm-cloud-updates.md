---
templateKey: blog-post
title: Case Study: IBM Cloud's Continued Journey with Kata Containers
author: Ildiko Vancsa, Simon Kaegi
date: 2025-10-27T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

Teams from IBM Cloud continue to be active contributors and users in the Kata Containers community, deploying the project to secure their Cloud Shell and CI/CD Pipeline SaaS offerings. Since our [previous case study with Simon Kaegi](https://katacontainers.io/blog/kata-containers-ibm-cloud-case-study/) in 2021, IBM Cloud's use of Kata Containers has grown significantly, scaling to support increasingly complex workloads and expanding across multiple architectures.

We reconnected with the IBM Cloud team to learn how their deployment has evolved, what they've learned from running Kata Containers at scale, and how they continue to collaborate with the community. In this follow-up interview, they share insights from operating a large-scale production environment that continues to expand.

# What challenge were you trying to solve when setting up IBM's public cloud build service?
We needed to provide customers with flexible, high-performance CI/CD environments while maintaining security and efficiency. Our developer services team supports a growing user base, with workload volume increasing by about 10% monthly over several years. Most of this work involves building and testing container images, which requires privileged workloads and access to sensitive system resources. Traditional containerization doesn't provide adequate isolation for this type of work, so we needed a solution that could scale without compromising performance or security.

# Why did you choose Kata Containers?
Kata Containers is an open source container runtime that provides workload isolation using lightweight virtual machines. Since our workloads run in Kubernetes clusters, it integrates seamlessly with our existing infrastructure. We use [Tekton](https://tekton.dev) as our pipeline orchestrator, and Kata Containers allows us to isolate pods with hardware-level isolation without significant performance penalties.

# What does your deployment look like?
We use auto-scaling to handle variable workloads, reaching peak loads of a little over 10,000 vCPUs across multiple architectures, including x86, Power, and s390x environments. By combining [Cloud API Adaptor](https://github.com/confidential-containers/cloud-api-adaptor) with Kata Containers, we can dynamically allocate resources from large host machines based on demand. This flexibility supports a range of use cases, from container builds to automation workloads that require substantial hardware resources.

# Have you made any customizations to Kata Containers?
We use the upstream version of Kata Containers rather than maintaining a custom fork. However, we configure the runtime to meet our needs—running it with a different kernel, implementing strict network and policy configurations, and using our custom deployment mechanisms. This approach gives us a robust solution for operating our infrastructure, which currently spans approximately 400 nodes. We also contribute improvements and fixes back to the open source project.

# How do you work with the Kata community?
The Kata community is responsive and supportive. We can reach out with questions and guidance on configurations, even for non-mainstream use cases. We actively work upstream to implement the improvements and fixes we need, which benefits both our infrastructure and the broader ecosystem.

# What results have you achieved?
Our Kata-based CI/CD platform has scaled 30-40x over the past five years. Kata Containers provides the performance and isolation we need for our large-scale, multi-tenant environment. As automation increases with AI development, the volume of workloads requiring secure isolation will continue to grow, and Kata Containers positions us well to handle that demand.

# About Kata Containers

If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
