---
templateKey: blog-post
title: Kata Containers Comes to Azure Kubernetes Services
author: Zvonko Kaiser
date: 2025-12-10T01:32:05.627Z
category:
  - value: category-em6-cxZuI
    label: News & Announcements
---

Microsoft recently launched Pod Sandboxing on Azure Kubernetes Service (AKS), an offering built on top of the Kata Containers project, to [general availability](https://techcommunity.microsoft.com/blog/linuxandopensourceblog/azure-linux-driving-security-in-the-era-of-ai-innovation/4471034). The stack is primarily built upon open sourced technology; [Cloud Hypervisor](https://github.com/cloud-hypervisor/cloud-hypervisor) works as the VMM, while Kata serves as the container runtime.

The feature was conceptualized to give AKS customers a straightforward method to be able to isolate their workloads, a need that becomes especially prelevant in scenarios like multi-tenanted clusters.

# Pod Sandboxing

When looking for a stack to build the AKS offering on top of, Kata presented itself a prime candidate that was compatible with Azure and had a great community behind it.

Pod Sandboxing on AKS allows customers to spin up their workloads in lightweight pod VMs; these pod VMs are equipped with a guest kernel, and are isolated from other pod VMs and the machine host. Behind the scenes, the Kata runtime makes the magic happen. The seamless per workload isolation offered by Kata containers allows for easy adoption by our customers, and in turn solves for a number of scenarios that our customers face. 

# Solving for our Customers

Kata containers powers a solution that helps with a number of use cases we've heard in conversations with our customers. Some of the scenarios we've obeserved include:

- Hosting many different tenants on an AKS cluster and needing some way to effectively isolate tenants' workloads from one another.
- Isolate "untrusted" workloads from other workloads on their clusters.
- Protect specific workloads from the rest of the cluster.
- Limit the impact that [noisy neighbors](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/noisy-neighbor/noisy-neighbor) can have on the rest of the cluster.
- Isolate the blast radius of an app unexpectedly going offline.

Customers that have adopted Kata use it in a variety of ways that best fit their own use cases, but a common thread we hear throughout our conversations is how easily and seamless the solution is. Care was taken to ensure that customers' workloads could easily be lift-and-shifted with minimal effort and the full extent of benefits from Kata containerization could be realized by the customer.

# Looking Ahead

The OpenInfra foundation has a great set of projects that they are incubating well; we're extremely happy that we were able to utilize one of them!

Looking ahead, we hope to build on top of the solid foundation that is our Kata containers solution. We have a variety of features on the roadmap, and hope to solve for a more use cases that can benefit our customers.

If you would like to get started with Pod Sandboxing on AKS, you can get started [here](https://learn.microsoft.com/en-us/azure/aks/concepts-pod-sandboxing). 
