---
templateKey: blog-post
title: Kata Containers — Inspur Case Study
author: Kata Containers
date: 2022-07-25T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

We got to talk with a Kata Containers community member, Li Xianzhuang from Inspur, and hear how his team got started with Kata Containers and how they are using it.

**What does Inspur do?**

Inspur is the world’s second largest server supplier. According to the 2022 Q1 Software-Defined Storage and Hyper-converged Market Report released by IDC on July 15, 2022, Inspur’s hyper-converged market share has entered the top three in China.

**How did Inspur get started with Kata Containers?**

In InCloud Sphere and InCloud Rail, we introduce Kubernetes as a container orchestration component, and Kata Containers as a secure container runtime.

**Describe how you’re using Kata Containers in your environment:**

Kata virtual machines share computing, network and storage resources with our traditional virtual machines, and implementing a compute node can provide both traditional virtual machines and container services.

**How does Kata Containers add value to Inspur?**

Based on InCloud Sphere and InCloud Rail, we provide customers with lightweight and secure container services to meet more customer application scenarios and improve product competitiveness.

**How does the team at Inspur contribute to the Kata community?**

We participate in community contributions. In the process of productization of Kata Containers, we find problems, solve them, and submit Patches and Issues to the community.

**What kind of support do you require to deploy Kata Containers?**

After we commercialize Kata Containers, if a new version of Kata Containers is launched, we are concerned about whether it can be upgraded smoothly to reduce the impact on our customers’ business

**What challenges did your team run into while deploying Kata Containers and how did you overcome them?**

**Challenge:** At present, we know that the Kata virtual machine is set to the configuration desired by the user by hot-expanding the CPU and memory. However, under some architectures such as the Arm architecture, the community has no hot-expanding solutions. We cannot limit the CPU and memory an application can use.

**Solution:** Learn from the experience of other products, and solve the problem that the Kata virtual machine cannot be hot-expanded by incorporating relevant patches into QEMU.

**Looking to the future, what’s Inspur’s plan with Kata Containers?**

First, we will continue to invest deeply in the community and contribute high-quality Patches and Issues. In addition, we will compile and provide Kata installation packages under different architectures to form public components for promotion within the company.