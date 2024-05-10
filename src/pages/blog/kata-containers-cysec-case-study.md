---
templateKey: blog-post
title: Kata Containers — Cysec Case Study
author: Kata Containers
date: 2022-06-06T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

We got to talk with a Kata Containers contributor, Matthieu Legré from Cysec, and hear how their team got started with Kata Containers and how they are using it.

![](/img/1_CIVWh914VLhwPLzE4j5JHg.webp)

**What does Cysec do?**

[Cysec](https://www.cysec.com/) is a European startup commercializing a secure platform for containers. This platform, called ARCA Trusted OS, is composed of a container-specific OS, a Kubernetes orchestrator with security settings and a set of containerized cryptographic services. A Trusted Computing Base (TCB) ensures the integrity and confidentiality of ARCA when it is deployed in digital infrastructure. In addition, ARCA Trusted OS is compatible with the confidential computing context provided by AMD-SEV feature. When running on AMD CPUs, ARCA allows containers to run in confidential VMs where the confidentiality and integrity of their data and code are protected by a hardware-based Trusted Execution Environment (TEE).

**How did Cysec get started with Kata Containers?**

Cysec offers to run its orchestration platform with several runtimes such as runc or gVisor to propose different levels of isolation between the OS and the workloads. Naturally, Cysec got interested in the Kata Containers project to still increase its isolation between workloads and OS. By making containers run in dedicated VMs, Kata Containers approach contains system intrusion more efficiently with respect to other runtimes.

Furthermore, when the Kata Containers runtime is executed in a confidential computing context, it is possible to deploy containers in different VMs on the same platform. This means that the confidentiality and integrity of the data and code of each container is protected by a dedicated key. This provides a strict isolation of code and data of several applications executed on the same CPU.

**Describe how you’re using Kata Containers in your environment:**

Kata Containers has been integrated in the list of runtimes supported by our ARCA Trusted OS in the release 1.5.0 accessible since March 2022. ARCA users can choose which runtime they prefer depending on their use-case. Kata Containers runtime is particularly recommended when ARCA Trusted OS is deployed on bare metal infrastructure supporting AMD-SEV features.

**How does Kata Containers add value to Cysec’s product?**

Kata Containers allow Cysec to increase the number of use-cases that can be addressed by ARCA Trusted OS. First, Cysec can now propose a solution to end-users that would like to benefit from the scalability and agility of containers without losing the higher level of isolation between applications and infrastructure provided by VMs. Second, the combination of Kata Containers and confidential computing context allows our end-users to securely exploit the same platform for containers with different business purposes opening cost reduction possibilities for their infrastructure.

**How does the team at Cysec contribute to the Kata community?**

We haven’t contributed to kata-containers on the compatibility with AMD SEV but we have reported some issues or contributed to the compatibility of kata-containers with GNU Linux.

**What kind of support do you require to deploy Kata Containers?**

We might require support from the Kata Containers project and contributors for maintenance and integration issues (i.e. the fact of having Kata-containers on ARCA Trusted OS requires maintenance on our side). We cannot list any specific issues, they will come through our maintenance journey. For example, currently we are investigating the fact that qemu 6.2 has a breaking change with regards to the Kata Containers project. We have already opened an issue with maintainers. As of time of this writing qemu 6.2 is expected to be integrated into Kata 2.5.0.

**What challenges did your team run into while deploying Kata Containers and how did you overcome them?**

As mentioned previously, Cysec engineering team encountered some issues with the compatibility of Kata Containers with our container-specific Linux OS. Our team was able to overcome these issues by reporting them to the Kata Containers community and by contributing with a fix.

From Cysec end-user point of view, the use of Kata Containers runtime is pretty simple in terms of configuration. However, the environments supporting Kata Containers are pretty limited for the moment. Our end-users can use this runtime only when ARCA Trusted OS is deployed on bare metal.

**What can be improved?**

*   As far as we know, there is no public cloud provider offering the possibility to use Kata Containers in a confidential computing context. That’s probably not under the control of the Kata community
*   Furthermore, Kata Containers runtime doesn’t look appropriate to run on small processors that can be deployed in the far edge. It could be very interesting to bring the enhanced isolation capacity of Kata Containers runtime in edge networks deploying containers at the far edge.