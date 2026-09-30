---
templateKey: blog-post
title: Contributor Spotlight Series - Ruoqing He
author: Ruoqing He, Ildiko Vancsa
date: 2026-10-06T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

This Contributor Spotlight mini series features the winners of the Kata Containers 4.0 Contributor Awards. In this article the spotlight is on Ruoqing He, the Metal Bender in the Kata community.

Ruoqing He, Member of Technical Staff at Moonshot AI, where he’s working on agent sandboxes, and a contributor to Kata Containers for over 3 years. Connecting ecosystems can be a risky business, but not for the Kata community, because Ruoqing has been pioneering to add RISC-V support, while also creating a bridge between the two communities.

![alt text](/img/Ruoqing_He.jpg)

I asked him a few questions to learn a bit more about his journey and involvement in the project:

# How long have you been contributing to Kata Containers, and what drew you to the project?
My first open source contribution was in 2022, in Alibaba Summer of Code, writing unit tests for the dbs crates of the Dragonball sandbox. That is how I got to know how a Rust VMM is put together, one crate at a time. In 2023, I joined OSPP (Open Source Promotion Plan) and started working on a Kata project, improving the logging of runtime-rs so that logs from each component can be filtered by where they come from. That was my first PR merged into Kata.

What drew me in was RISC-V. My goal at the time was to have secure containers running on RISC-V, and Kata sits on top of the whole virtualization stack: KVM, the rust-vmm crates, a hypervisor, then Kata. None of it supported RISC-V back then. A hypervisor booting Linux on a new architecture is a nice demo, but it is not proven until Kata runs actual container workloads on it, so Kata is where the work had to land.

# What areas of the project do you contribute to?
I mostly focus on code and CI. I introduced RISC-V support across the project: kernel configs, the Go runtime, runtime-rs, virtiofsd, static tarball packaging, and the self-hosted riscv64 runners I set up to build and check them. Along the way I did a fair amount of work on the Rust side of the repository, like setting up the root workspace, centralizing rust-vmm dependencies, bumping the toolchain, and keeping Dragonball building and its tests passing on runners without KVM. Since April 2025, I have also been serving on the Architecture Committee, which gives me a wider view of where the project is heading and what other contributors are blocked on.

# What is one contribution you are particularly proud of and why?
Getting Kata Containers to run on RISC-V, with every piece of it upstream.

I started this work in April 2024, and at that time nothing in the Kata stack supported RISC-V. I actually started in the middle, with StratoVirt, and soon realized that the implementation needed to be done bottom up, since no upstream community would take code that depends on crates in private forks. So in rust-vmm I introduced the riscv64 KVM bindings and ioctls, the AIA interrupt controller interfaces, and RISC-V image loading in linux-loader. Those could not be merged without a CI system to test the RISC-V code and integration, and there was no actual hardware to run one, so I built the CI first: a container with riscv64 kernel, OpenSBI and QEMU, running full system emulation on x86 cloud runners. With the crates released, I moved up to Cloud Hypervisor: the hypervisor, arch and allocator layers, the AIA device, direct kernel boot and later firmware boot, plus a dedicated machine for its RISC-V CI so that the code keeps working after it is merged. In parallel, I enabled StratoVirt RISC-V MicroVM in the openEuler community. Only then I could focus on Kata: kernel fragments, riscv64 in both runtimes and virtiofsd, packaging, and riscv64 build runners. In January 2025, the whole chain worked for the first time, a Kata pod on an openEuler RISC-V host, and I demoed it in the RISC-V devroom at FOSDEM 2025.

The hard part was not any single patch. Each layer had to be merged, released and stable before the next layer could depend on it, I had no hardware to verify on, and I had to work through every reviewer on their questions about carrying a new architecture in shared code. What I am proud of is that none of this is kept in a fork. Anyone who wants Kata on RISC-V now starts from a working stack instead of from zero.

# What has surprised you most about the Kata Containers community?
How willing the maintainers were to take an architecture nobody could buy hardware for. Almost every RISC-V change touched shared build scripts and CI, and they reviewed it on its merits instead of asking me to come back when the hardware is mainstream. The other one is the AC election. I had been contributing for a little more than a year when I ran in 2025, and the community was fine with having someone whose main concern is a new architecture at the table.

# What are you most excited about in the project right now?
AI agents. My work now is running a large number of short-lived sandboxes for agents, and what this workload needs is exactly what Kata has been doing all along: hardware isolation with container ergonomics. Boot time, snapshot and restore, and density are the questions everyone is asking now, and the Rust runtime in 4.0 is a good base to work on them. On the RISC-V side, hardware with the hypervisor extension is finally showing up, so the stack above is about to be exercised on actual silicon.

# What advice would you give to someone just getting started?
Pick one small thing that is broken and fix it properly, end to end. A failing build on one architecture, a lint CI complains about, a version bump nobody got to. Those are quick to review, and they teach you how the repository, the CI and the reviewers work. If your change depends on something below Kata, fix it there first and upstream it. It is slower than working around it, but it is the only work that lasts. With that being said, keep showing up: join the weekly Community Call, read other people's reviews, and be patient with CI.

Check out Ruoqing’s [GitHub profile](https://github.com/RuoqingHe) to learn more about his work, and don’t hesitate to join the [Kata Slack](https://join.slack.com/t/katacontainers/shared_invite/zt-16w1u6usn-sK871qbMxVN8KsCP5Gr56A) to talk to him and fellow project maintainers and contributors.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
