---
templateKey: blog-post
title: Kata Containers — Northflank Case Study
author: Kata Containers
date: 2022-05-12T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---
[Northflank](https://northflank.com/) enables developers to deploy, scale, monitor, and backup services in minutes with the ease of use of Heroku and the pricing and comprehensiveness of AWS. Northflank’s comprehensive PaaS can be experienced in your cloud account or as a managed service.

We got to talk with Kata Containers contributors, Cameron McDermott and Will Stewart at Northflank, and hear how their team got started with Kata Containers and how they are using it.

**How did Northflank get started with Kata Containers?**

One way to use Northflank is to self-serve through multi-tenant infrastructure. Security and isolation are essential when users are running untrusted images and containers.

We looked at several methods to provide runtime isolation which included Seccomp, Apparmor, rootless containers, Kata Containers, and other sandboxed runtimes.

There are tradeoffs for these solutions and we asked ourselves many questions, some of which were:

*   Can the majority of container images be built and run out of the box?
*   Can the containers run and operate with similar performance profiles for CPU, RAM, disk and network?
*   If an unpatched CVE was to be abused, which solution would provide the best defense?
*   How easy is it to install, operate and debug in a production environment?

We found that in almost all cases Kata was the right choice, provided you leverage the best suited virtual machine monitor (VMM) for the targeted workload. Today we use QEMU, Cloud Hypervisor and Firecracker.

**Describe how you’re using Kata Containers in your environment:**

All services, builds, jobs and stateful workloads are deployed in a number of Kubernetes clusters across AWS, GCP, Azure, and bare-metal providers. Every pod is orchestrated by K8s which utilises Containerd to spawn the workload. Every workload has an associated runtime class assigning the relevant Kata version and VMM. The efficiency of containers and the security of virtual machines in an easy-to-use package ensures that all workloads remain effectively segregated. We maintain a close-to-source version of Kata which we often update and test new kernel and virtual machine monitor versions, allowing us to incorporate new features and stay patched against the latest vulnerabilities.

**How does Kata Containers add value to Northflank?**

Kata empowers us to deploy untrusted workloads with the assurance of relative safety in the case of container escape events and kernel vulnerabilities. The performance, stability, and frequency of updates in the Kata code base allow Northflank to provide a stable service to a variety of customers with a diverse set of use-cases. Kata in combination with other tooling used at Northflank provides defense in depth.

**How does the team at Northflank contribute to the Kata community?**

As a platform as a service, we have the ability to test Kata against all manner of workloads. This position allows us to identify and report back any issues we find in the micro-VM setup. Our end-to-end testing tools build and deploy from 100s of common repositories, which allows us to ensure the stability of our platform and discern any regressions across Kata versions. We then work with the Kata team to aid, where we can, in debugging and fixing these issues.

**What kind of support do you require to deploy Kata Containers?**

We deploy Kata across a variety of cloud and bare-metal providers, depending on the situation we make use of a custom kata-deploy DaemonSet or a set of cloud-init scripts when provisioning nodes. Patching these installs is as simple as deploying a new version of the DaemonSet with a new Kata build.

**What challenges did your team run into while deploying Kata Containers and how did you overcome them?**

Deploying Kata across a number of cloud providers has presented some of the bigger engineering feats we have had to tackle. The most prominent of these was provisioning Kata on Google Cloud. By default Google Cloud VMs in GKE do not support nested virtualization and instead require the machine images to be altered to enable this feature. At Northflank we have developed a process and a set of tools that support running custom node images with KVM and virtualization enabled to support Kata in the GKE environment.

The majority of the other challenges stem from our users deploying a wide range of products and services that all require different sets of features and requirements. For builds, we have had to enable different settings on virtiofs to support snapshotting the filesystem during the build process. We have also had to tweak kernel features that are not enabled by default in Kata and therefore require custom builds to support these.

**Looking to the future**

We see that the future for Kata is very bright, with exciting new features and performance optimizations on the horizon.

*   The addition of confidential computing gives our platform the ability to offer additional secure runtime environments that would take years to offer without the work of the Kata community.
*   Migration of the Kata shim from Golang to Rust will improve provisioning speed, memory consumption and simplify the number of moving parts.
*   Introduction of Virtio-BLK for directly assigned volumes looks to be a positive choice for stateful workloads.

Our current experience with Kata Containers has been very promising and we are excited for the future that we can develop with the community.