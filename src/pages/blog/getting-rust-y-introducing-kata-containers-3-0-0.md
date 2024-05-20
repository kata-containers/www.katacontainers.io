---
templateKey: blog-post
title: Getting Rust-y — Introducing Kata Containers 3.0.0
author: Kata Containers
date: 2022-10-12T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

Greetings everyone, this is your friendly Kata community manager checking in to update you on what’s new with Kata Containers. If you’re here, then you’re probably already at least somewhat familiar with the container with its own kernel that blew our minds back in 2017.

Original skepticism of a container that’s small, fast, AND has its own kernel has been answered with continued innovation by the Kata community, resulting in KC becoming an increasingly popular container runtime in a growing list of enterprise environments.

The Kata Community has been working hard to complete [Kata Containers 3.0](https://github.com/kata-containers/kata-containers/releases), continuing in the pursuit of creating a highly secure container runtime without sacrificing speed or performance. Beginning with Kata Containers v.2, the community has continued on it’s journey to reengineer key components such as kata-agent in [Rust programming language](https://github.com/kata-containers/kata-containers/tree/main/docs/design/architecture_3.0#rationale-for-choosing-rust), deciding to trade off some design elements for higher performance & lowered overall memory consumption.

![](/img/0_fvhq6IXZ1TRDfFC7.webp)

Substantial updates have been made to the Kata codebase, including implementation of new Rust runtime, optional built-in sandbox functionality with Rust-VMM based Dragonball hypervisor, GPU VFIO passthrough support & more. Check out the Kata Containers 3.0.0 [release notes](https://github.com/kata-containers/kata-containers/releases/tag/3.0.0) for a full rundown on what’s new with KC 3.0.0.

# What users are saying about Kata Containers 3.0

Kata Containers 3.0 has already made a sizable impression with some high profile users & contributors. A few of our friends were gracious enough to share thoughts & opinions on their organization’s experiences with Kata.

> "We are using Kata \[Containers\], improving Kata and contributing to Kata. It’s an interesting experience to cooperate with \[the\] community to define the features for Kata 3.0, to develop new features for 3.0 and to keep up with the release schedule. We are also promoting Kata in the OpenAnolis community. Let’s working together to make Kata "product ready"!"

Tao Ma — Principal engineer, Manager of Operating System Department, Alibaba Cloud China

> "It is my great honor that our team and myself have been active contributors and users of Kata Containers since its first day. I think Kata Containers 3.0 will be the most exciting release for the new features, such as rustified components, built-in sandboxing, and TDX support. In the release cycle of Kata 3.0, we deployed it in our product clusters, which helped the team win the SuperUser Award this year. Let’s keep working together for a better next release."

Xu Wang — Senior staff engineer, Architect of Ant Infrastructure, Ant Group

> "We have integrated KATA into Inspur’s server virtualization system InCloud Sphere and hyper-converged infrastructure system InCloud Rail, we will continuously promote KATA to our customers and grow together with the community."

Alex Yan — Director of Cloud Computing R&D, Inspur Data China

# Upcoming Events

Hearing is great, but there’s nothing like seeing it in person. It’s conference season, & Kata is on the schedule. Here’s a couple of upcoming events where you will find Kata Containers content, linked below.

# KubeCon Detroit 2022

If you’re planning to attend KubeCon US in Detroit Michigan either in-person or virtually, be sure to check out the two Kata Containers presentations on the schedule.

*   Running Isolated VirtualClusters with Kata & Cluster API — [https://sched.co/182I4](https://sched.co/182I4)
*   So, What if I don’t Want My Persistent Storage To Be Yet Another Bindmount? [https://sched.co/182Jc](https://sched.co/182Jc)

# Ubuntu Summit 2022

After a long break, our friends at Canonical have decided to revamp & revise the original Developer Summit — last held in 2012 — into [Ubuntu Summit](https://events.canonical.com/event/2/overview) which will be held in Prague, Czech Republic. Kata Containers community manager Treva Williams will be delivering a presentation on maintaining open source communities in "the new normal." [Register now](https://events.canonical.com/event/2/) if you’d like to check it out!

# OpenInfra PTG

Team Kata will be in the (figurative) building this October 17–21 for [Project Teams Gathering](https://openinfra.dev/ptg/)! It’s not too late to sign up for a FREE ticket if you would like to attend.
