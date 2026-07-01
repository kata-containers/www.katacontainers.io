---
templateKey: blog-post
title: Open Source for the AI Era - Join the Kata Containers Community at OpenInfra Summit Asia
author: Allison Price
date: 2026-07-01T01:32:05.627Z
category:
  - value: category-em6-cxZuI
    label: News & Announcements
---


As AI moves from experimentation to production, one question is becoming increasingly important: how do you safely run untrusted, autonomous workloads at cloud scale?

That question is at the heart of this year's [KubeCon + CloudNativeCon + OpenInfra Summit Asia + PyTorch Conference China 2026.](https://www.lfasiallc.com/kubecon-cloudnativecon-openinfra-summit-china/) Under the theme "Open Source for the AI Era," developers, operators, and infrastructure architects will explore the technologies building the next generation of AI infrastructure.

This year's event showcases how secure sandboxing with Kata Containers has evolved from a cloud infrastructure capability into a foundational technology for AI agents, confidential computing, and production AI platforms.

Whether you're running Kubernetes, OpenStack, or building the infrastructure that powers enterprise AI, these sessions highlight where Kata Containers is headed next.

# Kata Containers 4.0: Built for the Agent Era
[From Cloud to AI: How Kata Containers 4.0 Reinvents the Sandbox for the Agent Era](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/?id=1220661)

Kata Containers began by securing cloud-native workloads. Version 4.0 expands that vision dramatically.

This session introduces many of the capabilities shaping the future of the project, including:
- A new Rust-based runtime focused on memory safety and performance
- Multi-hypervisor support across diverse infrastructures
- Template-based startup enabling sub-100ms sandbox launches
- Expanded Confidential Computing support
- Secure sandboxing beyond Linux, including Windows and Android environments

As AI agents become increasingly autonomous, fast, secure, hardware-isolated execution environments, like Kata Containers 4.0, have become critical infrastructure.

# Finding Performance Bottlenecks Before They Find You
[Uncovering Hidden Bottlenecks in Kata Containers on OpenStack with Prometheus](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/?id=1225339)

Strong workload isolation shouldn't come at the cost of operational visibility.

Running Kata Containers on OpenStack introduces additional infrastructure layers that can hide performance issues from traditional monitoring tools. CPU steal time, memory pressure, and storage contention often occur below the application layer, making them difficult to diagnose.

This session demonstrates practical techniques for correlating host-level metrics with workload behavior using Prometheus and SAR, giving operators the observability needed to confidently deploy Kata Containers in production OpenStack environments.

If you're operating cloud infrastructure, this session offers actionable guidance for improving both performance and reliability.

# AI Agent Sandboxing Built Natively on OpenStack
[Secure AI Agent Sandboxing with OpenStack Zun and Kata Containers](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/?id=1224832)

As AI agents begin executing LLM-generated code, the security boundary around those workloads becomes just as important as the models themselves.

Rather than relying on external sandboxing services, this session demonstrates how OpenStack can provide secure agent execution using native services:
- Zun for container lifecycle management
- Glance for sandbox image management
- Neutron for tenant isolation
- Kata Containers for isolation with lightweight virtual machines

You'll also see how this architecture integrates with GPU scheduling and broader AI agent infrastructure to support large-scale production deployments.

For organizations already investing in OpenStack, this session shows how existing infrastructure can become the secure execution layer for enterprise AI.

# Lessons From Running AI Agents at Enterprise Scale
[What We Learned Securing AI Agents at Scale on Multi-Tenant Kubernetes Clusters](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/program/schedule/?id=1218010)

Traditional Kubernetes multi-tenancy was built around trusted workloads. AI agents change that assumption.

This session shares real-world lessons from operating hundreds of autonomous AI agents inside shared Kubernetes clusters. Rather than relying on a single security mechanism, the platform combines multiple layers of protection, including:
- Kata Containers VM isolation
- OIDC-based agent identities
- NetworkPolicy enforcement
- Kubernetes admission controls
- Governance guardrails and auditing

The result is a defense-in-depth architecture designed specifically for autonomous software.

Although presented in Chinese, the architectural concepts will be highly relevant for anyone building secure enterprise AI platforms.

# Join the Kata Containers Community in Shanghai
AI infrastructure is quickly becoming infrastructure for autonomous systems. That means secure isolation, hardware-backed trust, and observability are no longer optional, they're foundational.

At this year's OpenInfra Summit Asia, the Kata Containers community will guide you through how technologies originally developed to secure cloud-native workloads are now helping secure the next generation of AI agents.

If you're attending the event, be sure to add these sessions to your schedule. Whether you're an OpenStack operator, Kubernetes platform engineer, or AI infrastructure architect, you'll come away with practical ideas for building secure, production-ready AI platforms using open source.

See you in Shanghai!

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.