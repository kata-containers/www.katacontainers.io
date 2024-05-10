---
templateKey: blog-post
title: Kata Containers — Exotanium Case Study
author: Kata Containers
date: 2022-01-18T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

[Exotanium, Inc](https://exotanium.io/). is a cloud resource optimization and management platform that uses cutting-edge distributed container infrastructure as well as Artificial Intelligence (AI) and Machine Learning (ML) to help enterprises reduce spending in the cloud by up to 90%, while enhancing both operational security and performance.

We got to talk with a Kata Containers community member, Zhiming Shen who is the Co-founder & CTO at Exotanium Inc., and hear how his team got started with Kata Containers and how they are using it.

**How did Exotanium get started with Kata Containers?**

Exotanium is building a solution for enabling live container migration in public clouds. Our solution is based on virtualization technologies, and we need a system that can connect cloud-native container-based architectures with virtualization platforms. As the most popular secure container runtime based on virtualization, Kata Containers is an excellent fit for our technology.

**Describe how you’re using Kata Containers in your environment:**

We modified Kata Containers into a distributed container runtime architecture and added live container migration capabilities. Since Kata Containers hides all the complexity of the underlying virtualization platform, migrations can be performed in a way that is completely transparent to an orchestration layer, such as Kubernetes. As a result, Exotanium X-Spot can provide live migration capability to applications without the requirements of modifying either the application or the orchestration.

**How has your team participated in or contributed to the Kata Containers project?**

We have some components developed for the Kata Container architecture that can potentially benefit the community. We are working on finalizing our open-source strategy and hope that we can start contributing soon.

**How does the Kata Containers add value to Exotanium?**

Kata Containers provides an excellent layer between container runtime and virtualization platforms. It is a very active community, and the solution has been well tested and is very robust.

**What other open source technologies does Kata interact with in your environment?**

We make use of the Linux kernel and Xen hypervisor alongside Kata in our environments.

**What kind of support do you require to deploy Kata Containers?**

We developed our own packages and container images for deploying kata containers to optimize deployment within our environment.

**What would you like to see improved on Kata?**

Integration of Kata Containers with common orchestration and automation platforms, such as AWS EKS, is still a challenge. At this point, we are developing our solution based on Kata Containers v1.x. Upgrading to Kata Containers v2 requires a lot of effort and we are looking forward to more documentation and best practices guidelines. Docker support is also important to us, so it would be great to see better Docker integration for the latest version of Kata Containers.