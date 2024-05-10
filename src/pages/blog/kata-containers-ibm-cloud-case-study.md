---
templateKey: blog-post
title: Kata Containers — IBM Cloud Case Study
author: Kata Containers
date: 2021-09-27T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

Teams from [IBM Cloud](https://www.ibm.com/cloud) have been involved in the [Kata Containers](https://katacontainers.io/) community for a while. They recently participated in an [OpenInfra Live](http://openinfra.live) episode where community members from IBM and AMD talked about how they collaborate on confidential computing and what role Kata Containers plays. You can check out this episode [here](https://youtu.be/-9LtBfwj03Y?t=1222).

We got to talk with a Kata Containers contributor, Simon Kaegi, senior technical staff member at IBM Cloud, and hear how his team got started with Kata Containers and how they are using it.

**How did IBM Cloud get started with Kata Containers?**

Many IBM Cloud teams had been exploring secure container runtimes and their integration with Kubernetes for the past five or so years. Before Kubernetes, we were proponents and contributors in similar aligned efforts to improve docker and containerd. Kata Containers seemed particularly applicable for multi-tenant Kubernetes based solutions and already had some history of use in-house.

**Describe how you’re using Kata Containers in your environment:**

We became more directly involved with Kata Containers when IBM Cloud product teams were looking to secure our Cloud Shell and CI/CD Pipeline SaaS offerings. These workloads were using Kubernetes and the strong isolation Kata Containers provided was a requirement from our security teams. The ease with which Kata Containers could be integrated without altering our code made it the obvious choice. We integrate Kata Containers as a Kubernetes runtime class used for pods where we need stronger guarantees for running arbitrary untrusted workloads.

**How does Kata Containers add value to IBM Cloud?**

Kata Containers allows us to safely run privileged untrusted workloads while protecting our SaaS infrastructure. The Kata Containers community is active and responsive to the secure container runtime issues we’ve found are an increasingly common requirement for multi-tenant cloud services.

**How does the team at IBM Cloud is contributing to the Kata community?**

At this point our team is mainly contributing as users, meaning logging issues when we encounter them, and working with the developers to provide good problem reproducers and regression tests. We’ve participated in the community working group on CI/CD and do our best to share our experience with what we’ve learned. Other teams in IBM Cloud are interested in Confidential Containers however I’m not directly involved there.

**What kind of support do you require to deploy Kata Containers?**

We build our own distribution of Kata Containers using the packaging tools the project provides. We use a custom variant of the kata-deploy daemonset for deploying our distribution.

**What would you like to see improved on Kata?**

We’ve struggled with the filesystem and snapshotter that underlies the Kata Containers guest. If the setup of this area could be simplified Kata Containers would be far easier for users to adopt. The "kata-deploy" deployment definitions are a great start but something along the lines of an operator would help teams with both day 1 and day 2 operations.