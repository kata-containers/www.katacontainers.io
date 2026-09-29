---
templateKey: blog-post
title: Contributor Spotlight Series - Landon Clipp
author: Landon Clipp, Ildiko Vancsa
date: 2026-09-29T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

This Contributor Spotlight mini series features the winners of the Kata Containers 4.0 Contributor Awards. In this article the spotlight is on Landon Clipp, the Kata community’s Documentation Beautifier.

Landon is a Senior Systems Engineer - Kernel at CoreWeave and a contributor to Kata Containers for a little over a year. In the 4.0 release cycle Landon built a new documentation website for the Kata Containers project for users to be able to find information they need easily, so documentation is not a sore subject for the project anymore.

![alt text](/img/Landon_Clipp.jpeg)

I asked him a few questions to learn a bit more about his journey and involvement in the project:

# How long have you been contributing to Kata Containers, and what drew you to the project?
I’ve been contributing for a little over a year now. My journey with Kata started as a research project at the company I worked for at the time called Lambda. I was investigating how to make the project work on our infrastructure. I eventually took that experience to CoreWeave where I am now leading secure container runtime projects for their cloud platform. It has been a joy working closely with my Nvidia partners on the project, and I’m most of all appreciative of the many ways in which I’ve learned from the many talented folks who dedicate their careers to this technology, especially Zvonko Kaiser and Fabiano Fidêncio.

# What areas of the project do you contribute to?
Most of my work involves making the existing technology compatible with CoreWeave infrastructure. I’ve made many contributions to the Go runtime, the Rust runtime, NVRC, and probably more prominently I have dedicated time to revamping the documentation system. Open source projects often struggle with a coherent documentation strategy, and I consider working on it to be an easy way to garner good will in any community.

# What is one contribution you are particularly proud of and why?
CoreWeave is obsessive about GPU observability, which in my opinion is a primary contributor to our massive success. It also poses significant challenges when introducing an entirely new mode of computation, like Kata, because so much of the existing infrastructure assumes one way of doing things.

To that end, the contribution I’m most proud of is the VISIBLE_CDI_DEVICES feature which allows sidecar containers in a pod to snoop on the devices that have been passed through to the main workload pod. This was a major advancement in my journey at CoreWeave because it unblocked one of the most critical pieces of our infrastructure and allowed Kata to be substantially compatible with our observability stack.

# What has surprised you most about the Kata Containers community?
Kata is ancient in technological terms. There are so many vested interests, perspectives, approaches, cultural differences, and history that all inform the directions the project has taken over the years. It is a global project in every sense of the term. What has surprised me is how global borders seem to not exist. All of our contributors share a love of technology and the traditional things that divide the world seem to not matter in this context. I’m especially surprised at the advancements folks in the APAC region have made over the years. They have made me think in new ways I wouldn’t have otherwise.

# What are you most excited about in the project right now?
The Rust runtime conversion is the most significant advancement of course, and I’m dedicated to helping CoreWeave along in this transition. However, I am more selfishly excited to employ GPU-based Kata Containers in production at CoreWeave. This will easily be a career defining achievement for me, and doing this successfully at one of the most prolific AI infra companies on the planet will be a step function for the AI industry as a whole. Additionally, this will unlock a whole rainbow of new product possibilities for us, so it is truly only the beginning.

# What advice would you give to someone just getting started?
GPUs are such difficult devices to work with, and anyone who wants to effectively employ them inside of secure container runtimes like Kata need to be connected with the people who have spent a significant amount of time wrestling with it. Documentation can only go so far. Connect with us on Slack, attend our talks at the various conferences throughout the world, and take us out for some beers. We’re all friendly folks and would love to talk your ear off!

Check out Landon’s [GitHub profile](https://github.com/LandonTClipp), [LinkedIn](https://www.linkedin.com/in/landonclipp) and [blog](https://topofmind.dev/blog/category/system-design/) to learn more about him and his work, and don’t hesitate to join the [Kata Slack](https://join.slack.com/t/katacontainers/shared_invite/zt-16w1u6usn-sK871qbMxVN8KsCP5Gr56A) to talk to him and fellow project maintainers and contributors.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
