---
templateKey: blog-post
title: Kata Containers Comes to Azure Kubernetes Services
author: Jack Jiang
date: 2026-02-17T01:32:05.627Z
category:
  - value: category-em6-cxZuI
    label: News & Announcements
---

Shared infrastructure, like what Azure Kubernetes Service (AKS) provides, can grow large and complex. Clusters in AKS can scale up and host multi-tenant workloads, which is posing various challenges that call for strong workload isolation.

When using traditional containers, users have the option to rely on namespaces for logical isolation, which is often not sufficient, or invest in physical infrastructure for physical isolation, which can get very expensive. Neither of these options is ideal. To address this need without the need to invest in more hardware, Microsoft recently announced [General Availability](https://techcommunity.microsoft.com/blog/linuxandopensourceblog/azure-linux-driving-security-in-the-era-of-ai-innovation/4471034) of the Pod Sandboxing feature that is based on the Kata Containers project. The stack is primarily built upon open sourced technology; [Cloud Hypervisor](https://github.com/cloud-hypervisor/cloud-hypervisor) works as the VMM, while Kata serves as the container runtime.

# Pod Sandboxing

Pod Sandboxing on AKS allows cluster operators to spin up their workloads in lightweight pod VMs, which are equipped with a guest kernel, and are isolated from both other pod VMs and the machine host. Behind the scenes, the Kata runtime makes the magic happen. The seamless per workload isolation offered by Kata Containers allows for easy adoption by our customers, while being applicable in various scenarios.

Kata Containers was an easy choice, since it was already compatible with Azure and could be enabled by a simple configuration change, and had a great community around it.

When setting up Pod Sandboxing, users are able to get up and running with minimal changes needed. 

- Users start with setting up an AKS node-pool with Kata enabled
   
   ```bash
   az aks create --resource-group katarg --cluster-name katacluster --workload-runtime KataVmIsolation --node-vm-size <insert a supported SKU of your choice>
   ```
   
- In their deployments, users simply add a one liner to have the workload utilize the Kata container runtime

   ```yaml
   kind: Pod
   apiVersion: v1
   metadata:
     name: kata-pod
   spec:
     runtimeClassName: kata-vm-isolation
     containers:
     - name: kata
       image: mcr.microsoft.com/aks/fundamental/base-ubuntu:v0.0.11
   ```

# The Need for Isolation

Kata containers powers a solution that helps with a number of use cases we've heard in conversations with our customers. Some of the scenarios we've obeserved include:

- Host different tenants on an AKS cluster and effectively isolate their workloads from one another.
- Isolate "untrusted" workloads while still be able to utilize the cluster resources to run additional workloads.
- Protect specific workloads from the rest of the cluster.
- Set resource limit and reduce the impact that [noisy neighbors](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/noisy-neighbor/noisy-neighbor) can have on the rest of the cluster.
- Limit the blast radius of an incident, which in this case is the pod VM.

Our customers who have adopted Kata use it in a variety of ways that best fit their own use cases, but a common feedback we hear throughout our conversations is how simple and seamless the solution is. To share an example on how easy the integration is, a cluster operator has to add only one line to their pod’s configuration YAML file to deploy it as a Kata pod.

# What’s next?


Kata Containers already provides us a solid foundation, and we have a variety of features on the roadmap to implement and provide robust and scalable infrastructure for our customers.

Check out the Pod Sandboxing [documentation](https://learn.microsoft.com/en-us/azure/aks/concepts-pod-sandboxing) to get started with the feature on AKS. If you'd like to take Pod Sandboxing for a spin with some scenarios to illustrate the functionality, check out our [AKS Labs](https://azure-samples.github.io/aks-labs/docs/security/pod-sandboxing-on-aks)!

# About Kata Containers

If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
