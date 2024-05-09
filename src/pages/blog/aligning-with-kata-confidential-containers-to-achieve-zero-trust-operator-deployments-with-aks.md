---
templateKey: blog-post
title: Aligning with Kata Confidential Containers to achieve zero trust operator deployments with AKS
author: Amar Gowda
date: 2023-04-21T01:32:05.627Z
category: 
  - label: Features & Updates
    id: category-6-wjkXzEM2
---

Written by [Amar Gowda](https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/681343#profile) | Microsoft

# Announcement

Confidential containers on Azure Kubernetes Service (AKS) leveraging [Kata confidential containers](https://github.com/confidential-containers/) open-source project are coming soon to Azure. If you would like to be part of the preview, please express your interest here [https://aka.ms/cocoakspreview](https://aka.ms/cocoakspreview)

# Zero Trust with Confidential containers

Zero trust cloud architecture is a security framework that focuses on maintaining security and **protecting data** by assuming that no device or user should be automatically trusted, even if they are within the network perimeter.

In a cloud hosted container platform, applications that handle sensitive personally identifiable information (PII) and Intellectual Property (IP) seek enhanced security and threat control to be in place. This is to shield the data they process and the code they run from known and unknown adversaries. The highest isolation and integrity of the environment is often dictated by the data compliance and cyber security teams.

Confidential virtual machines (VMs) based on AMD’s SEV-SNP hardware backed Trusted Execution Environments (TEEs) provide the underlying core capabilities like integrity for code and data in use, protection of data in memory from Azure operator, and remote cryptographic verification through attestation — all while running existing unmodified applications.

VM based TEEs can run a full Linux kernel and make it easy to achieve running unmodified applications natively, but the trust boundaries can be different compared to [application-level enclaves](https://learn.microsoft.com/en-us/azure/confidential-computing/confidential-nodes-aks-overview). To enable isolation like an application enclave and achieve higher level of protection from VM admins, confidential containers on AKS run in dedicated “_child VMs_” per pod. Every child VM comes with its own memory encryption key with AMD SEV-SNP protections and the lifecycle of a child VM is associated with the lifecycle of the confidential Kubernetes pod.

By running the Kubernetes pods at this isolation level using nested virtualization, customers can benefit from app isolation from the parent VM and the tenant OS admin (operator of that VM), while still meeting the need of natively running any Linux container.

To foster an ecosystem with broad Kubernetes workload support, the [Kata Confidential Containers](https://github.com/confidential-containers) (CoCo) open-source sandboxed Cloud Native Cloud Foundation (CNCF) project provides an ideal set of building blocks and security constructs to achieve the following security goals:

*   Helps protect data from your own operator (your Azure tenant admin, Kubernetes admin).
*   Help protect data from a cloud provider/operator.

![](https://miro.medium.com/v2/resize:fit:231/0*U_V1d1t1r-DQE_4w)

![](https://miro.medium.com/v2/resize:fit:322/0*ZQiAiEY3-GgfL3Me)

With added isolation for your workloads from other pods, host VM OS, and Kubernetes software in a single AKS container host, this deployment architecture is ideal for developers who want to **run existing OCI compliant containers** without negligible impact on existing DevOps practices. Confidential containers run as part of AKS agent nodes making finding an ideal balance between DevOps and Developers.

# The Open-Source Community Alignment

The goal of the Kata Confidential Containers (CoCo) project is to standardize confidential computing at the container level and simplify its consumption in Kubernetes. This is to enable Kubernetes users to deploy confidential container workloads using familiar workflows and tools. We are also taking our C[onfidential containers on Azure Container Instances (ACI)](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-confidential-overview) learning to community with [container enforcement policy/full attestation](https://github.com/microsoft/kata-containers/tree/cc-msft) and OCI image snapshotter with DM verity enforcement.

To improve our product goals of transparency and to enable a cross-industry open-source software effort, [Kata CoCo](https://github.com/confidential-containers) and [Cloud- Hypervisor](https://www.cloudhypervisor.org/) Virtual Machine Monitor (VMM) combined with Microsoft hypervisor were chosen as the foundation for AKS support. Confidential containers on AKS leverage the base underling technology stack that enables “[Kata VM Isolated Containers on AKS for Pod Sandboxing](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/preview-support-for-kata-vm-isolated-containers-on-aks-for-pod/ba-p/3751557)” but using specific Azure confidential computing (ACC) VM sizes.

As confidential computing matures to mainstream, Microsoft will continue to contribute by hardening the security and isolation to shape future releases based on customer and community learnings.

# Product design principles

Confidential containers on AKS are designed with these principles based on customer feedback and will evolve as needs change.

1.  **Transparency:** The confidential container environment where your sensitive application is shared**, you can see and verify if it is safe.** All components of the Trusted Computing Base (TCB) are to be open sourced.
2.  **Auditability**: Customers shall have the ability to verify and see what version of the CoCo environment package including Linux Guest OS and all the components are current. Microsoft signs to the guest OS and container runtime environment for verifications through attestation, also releases a **secure hash algorithm** (SHA) of guest OS builds to build a string audibility and control story.
3.  **Reproducibility**: Although it is hard to get to the exact hash of the full runtime environment, an OSS first approach with well-documented build instructions will be provided. Ability to verify what is running in the cloud and what is available to audit.
4.  **Full attestation:** Anything that is part of the TEE shall be fully measured by the CPU with ability to verify remotely. The hardware report from AMD SEV-SNP processer shall reflect container layers and container runtime configuration hash through the attestation claims. Application can fetch the hardware report locally including the the report that reflects Guest OS image and container runtime.
5.  **Code integrity:** Runtime enforcement is always available through customer defined policies for containers and container configuration, such as immutable policies and container signing.
6.  **Isolation from operator:** Security designs that assume least privilege and highest isolation shielding from all untrusted parties including customer/tenant admins. This includes hardening existing Kubernetes control plane access (kubelet) to confidential pods.
7.  **Ease of use:** Supporting all unmodified Linux containers with high Kubernetes feature conformance.

As we work through these design principles and ratify them openly, we aim to bring these contributions to community projects such as Kata CoCo and Cloud-Hypervisor.

# Scenarios/Use cases

Confidential containers are attractive for deployment scenarios that involve sensitive data (for instance, PII or any data with strong security needed for regulatory compliance). Some examples of common scenarios with containers are:

*   Privacy preserving big data analytics using Apache Spark analytics job for fraud pattern recognition in the banking sector.
*   Running self-hosted GitHub runners to secure code signing as part of Continuous Integration and Continuous Deployment (CI/CD) DevOps practices.
*   Machine Learning inferencing and training of ML models using an encrypted data set from a trusted source and only decrypting inside a confidential container environment for purposes of privacy preserving ML inference.
*   Building big data clean rooms for ID matching as part of multi-party computation in industries like retail with digital advertising.
*   Building confidential computing zero trust landing zones to meet privacy regulations for application migrations to cloud.

# Looking forward

If you would like to get first access to confidential containers on AKS, please express your interest here [https://aka.ms/cocoakspreview](https://aka.ms/cocoakspreview). See below for answers to various questions.

We also welcome you to join the [confidential containers community,](https://github.com/confidential-containers/) participate in the [weekly meetings](https://docs.google.com/document/d/1E3GLCzNgrcigUlgWAZYlgqNTdVwiMwCRTJ0QnJhLZGA/edit#heading=h.qo5uv6tg7dfy) to share your problems, contribute with us, and shape the projects that solve your zero trust requirements in a public cloud.

# Frequently Asked Questions (FAQ)

1.  **Question**: Do I need to modify my existing containers or choose an OSS project wrapper to run containers? **Answer**: No. Standard OCI compliant containers with any programming languages will run as is unmodified.
2.  **Question**: Are new Azure VM sizes needed to run this feature on AKS? **Answer**: Yes. New Confidential computing capable child VM sizes DCA\_CC\_v5, ECA\_CC\_v5 are needed to use this feature.
3.  **Question**: Do these CoCo pods run in their own secure environment or VM? **Answer**: Yes, confidential pod runs within its own TEE protected with a unique memory encryption key. Many containers can run in a single VM just like a [VM with application enclaves](https://learn.microsoft.com/en-us/azure/confidential-computing/confidential-nodes-aks-overview).
4.  **Question**: What regions will this feature be available? **Answer**: One United States (US) region and one Europe region during limited preview.
5.  **Question**: Are there any Azure services that need to be trusted by default? **Answer**: No. Only container runtime components and a lite weight container optimized Linux kernel with requited container runtime is part of your trust boundary.
6.  **Question**: What is a confidential child VM that is used for running confidential containers on AKS? **Answer**: [Nested virtualization](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization#how-nested-virtualization-works) is a feature that allows running a Virtual Machine Hypervisor inside an Azure virtual machine (VM). This is helpful to isolate the child VM’s from each other and from the parent operating system. By making these nested VM confidential using AMD SEV-SNP based hardware level protection.

Reposted with permission from our friends at [Microsoft](https://microsoft.com). The original article can be found [here](https://techcommunity.microsoft.com/t5/azure-confidential-computing/aligning-with-kata-confidential-containers-to-achieve-zero-trust/ba-p/3797876).