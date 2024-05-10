---
templateKey: blog-post
title: "Kata Containers 3.0.0 Arrives: Faster, More Secure, Support for New Environments"
author: Kata Containers
date: 2022-10-11T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

**AUSTIN, Texas, October 10, 2022 —** Today, the open source project Kata Containers issued version 3.0.0 of the software. Kata Containers is a secure container runtime with lightweight virtual machines that feel and perform like containers but provide stronger workload isolation using hardware virtualization technology as a second layer of defense. This solution offers a fast and secure deployment option for anything from highly regulated workloads to untrusted code, spanning public and private cloud, containers-as-a-service and edge computing use cases.

![](/img/1_e7A7KFX4JEP4y5E9SIM4hw.webp)

Since launching in 2017, Kata Containers has been embraced by users who value "the speed of containers with the security of virtual machines." Kata Containers 3.0.0 builds on software’s most valuable features: security, speed and compatibility with a wide variety of environments and hardware.

\*\*\*[Download Kata Containers 3.0.0](https://github.com/kata-containers/kata-containers/releases)\*\*\*

**Key Features of Kata Containers 3.0.0**

*   A newly written runtime implementation in Rust and an optional integrated Rust hypervisor, further reducing Kata Containers resource consumption and management complexity.
*   Rust removes the overhead of the GO runtime.
*   Integrated Rust hypervisor ensures that Kata Containers only spawn one host component for each POD.
*   Aligns with the popular trends in the Linux community to rustify core software stack.
*   Improved hypervisor support, making Kata Containers more accessible to a wider range of environment configurations.
*   Newly added support for GPUs, such as VFIO ([Virtual function I/O](https://docs.kernel.org/driver-api/vfio.html#id5)), which allows safe, non-privileged, userspace drivers and PCI(e) devices in general.
*   Upgrade to cloud-hypervisor v26.0 with several improvements to cloud-hypervisor support for Intel TDX.
*   Code updates to support the latest stable Linux Kernel release.
*   Each deployment of the Kata Container runtime includes its own kernel for increased security & container isolation. The kernel in Kata Containers 3.0.0 has been updated to run v5.19.2.
*   Increased compatibility with leading cloud-native technologies.
*   Kata Containers supports popular runtimes including (but not limited to) Kubernetes, CRI-O, Containerd and OCI v1.0.0-rc5 Runtime specification.
*   Additional security enhancements, including
*   Signature verification support with image-rs and offline filesystem KBC
*   Support for static resource management functionality in Rust runtime, significantly improving speed and security
*   Support for cgroupv2, adopting the latest Linux kernel cgroups features

Read more about the features of Kata Containers 3.0.0 in the [release notes](https://github.com/kata-containers/kata-containers/releases).

"There’s a lot of excitement in the Kata Containers community around how the improved hypervisor support in Kata Containers 3.0.0 expands compatibility with a number of popular environment configurations and hardware technologies, such as GPUs," said Treva Williams, technical community manager at the Open Infrastructure Foundation. "Kata community members are constantly seeking ways to improve and do not shy away from a challenge, such as rewriting Kata in Rust. Switching to Rust significantly increases speed, performance and safety, so the community’s hard work in making the switch pays huge dividends for Kata users and future contributors as well."

**Kata Containers Valued by Users**

"We have integrated Kata Containers into Inspur’s server virtualization system InCloud Sphere and hyper-converged infrastructure system InCloud Rail, and we will continuously promote Kata Containers to our customers and grow together with the community." — Alex Yan, director of Cloud Computing, [Inspur Data CN](https://en.inspur.com/)

"It is my great honor that our team and I have been active contributors and users of Kata Containers since its first day. I think Kata Containers 3.0.0 will be the most exciting release for the new features, such as Rustified components, built-in sandboxing and TDX support. In the release cycle of Kata 3.0.0, we deployed it in our product clusters, which helped the team win the [Superuser Award](/kata-containers/ovhcloud-ant-group-win-superuser-awards-for-large-scale-deployment-of-openstack-innovative-use-of-d5d7275ea9ce) this year. Let’s keep working together for a better next release." — Xu Wang, senior staff engineer, [Ant Group](https://www.antgroup.com/)

**Resources:**

*   [AMD Case Study](https://www.youtube.com/watch?v=-9LtBfwj03Y&t=1221s)
*   [Inspur Case Study](/kata-containers/kata-containers-inspur-case-study-757a9e8e21ef)
*   [Cysec Case Study](/kata-containers/kata-containers-cysec-case-study-40e7a03084f3)
*   [Exotanium Case Study](/kata-containers/kata-containers-exotanium-case-study-7771ceaa91d5)
*   [Baidu Case Study](https://katacontainers.io/collateral/ApplicationOfKataContainersInBaiduAICloud.pdf)
*   [Ant Group Case Study](https://katacontainers.io/collateral/kata-containers-ant-group_whitepaper.pdf)

**Kata Containers Community Continues to Expand**

Over the Kata Containers 3.0.0 development timeframe, the Kata Containers community added almost 4,000 changes from 235 [contributors][1] and 26 organizations including Adobe, Alibaba, ARM, Atlassian, Baidu, Bytedance, Inspur, Google, Microsoft, NVIDIA, Orange, Red Hat and ZTE. The Architecture Committee currently includes members from Ant Group, Apple, Intel and Rivos. [Current infrastructure donors](https://katacontainers.io/supporters/) include AWS, Google Cloud, Microsoft, PackageCloud, Packet and Vexxhost.

The Kata Containers community has grown since it was announced at KubeCon in December 2017, and open source contributors passionate about container security are invited to get involved. Contributors can expect to work upstream across multiple infrastructure and container orchestration communities, including Kubernetes, containerd / CRI-O, Docker, OCI, CNI, QEMU, rust-vmm, cloud-hypervisor KVM and OpenStack. Get started by connecting with the Kata Containers community.

**Confidential Containers Announces First Release**

While developing the 3.0.0 release of Kata Containers, several members of the community simultaneously aided in development of the first release of [Confidential Containers](https://confidentialcomputing.io/), an open source project currently in the CNCF sandbox, that integrates existing [Trusted Execution Environments](https://en.wikipedia.org/wiki/Trusted_execution_environment) (TEE) infrastructure support and technologies with cloud native technologies.

Confidential Containers is an outgrowth of the [container isolation](https://github.com/kata-containers/kata-containers/blob/main/docs/use-cases/using-Intel-SGX-and-kata.md) feature in Kata Containers, expanded to integrate existing TEE infrastructure support which, among other key security features, allows cloud native application owners to enforce better application security requirements by enabling the protection of in-use data by performing computation in a hardware-based TEE. After many months of development by a dedicated and passionate team of contributors, the CoCo team has completed the Confidential Containers Kubernetes operator. Support for Kata 3.0.0 has been included with the [Confidential Containers v0.1.0](https://github.com/confidential-containers/documentation/releases) release, available for download in the project’s GitHub.

Download the latest release of [Confidential Containers v0.1.0](https://github.com/confidential-containers/documentation/releases) or check out the [Quickstart guide](https://github.com/confidential-containers/documentation/blob/v0.1.0/quickstart.md) on Github to try it out for yourself.

**About Kata Containers**

Kata Containers is an open infrastructure project of the Open Infrastructure Foundation. Delivering the speed and performance of containers with the security of virtual machines, Kata Containers is designed to be architecture agnostic and is compatible with Open Container Initiative (OCI) images as well as the container runtime interface (CRI) for Kubernetes. Kata Containers is hosted on Github under the Apache 2 license. Connect with the Kata Containers community:

*   Freenode IRC: [#kata-dev](http://webchat.freenode.net/?channels=kata-dev)
*   Website: [katacontainers.io](https://www.katacontainers.io/)
*   Developer Mailing List: [lists.katacontainers.io](http://lists.katacontainers.io/cgi-bin/mailman/listinfo)
*   Twitter: [@KataContainers](https://twitter.com/KataContainers)
*   Slack：[slack channel](https://join.slack.com/t/katacontainers/shared_invite/zt-16w1u6usn-sK871qbMxVN8KsCP5Gr56A)

**About the Open Infrastructure Foundation (OpenInfra Foundation)**

The [OpenInfra Foundation](http://openinfra.dev/) builds communities who write open source infrastructure software that runs in production. With the support of over 110,000 individuals in 187 countries, the OpenInfra Foundation hosts open source projects and communities of practice, including infrastructure for AI, container native apps, edge computing and data center clouds. Join the OpenInfra movement: [www.openinfra.dev](http://www.openinfra.dev/)


[1]: https://katacontainers.biterg.io/app/kibana#/dashboard/690980f0-2886-11e9-b662-975152e57997?_g=(refreshInterval:(pause:!t,value:0),time:(from:'2022-07-25T04:00:00.000Z',mode:absolute,to:'2022-09-28T23:35:56.078Z'))&_a=(description:'Custom+Overview+Panel+for+OpenStack',filters:!(('$state':(store:appState),meta:(alias:'Empty+Commits',disabled:!f,index:git,key:files,negate:!t,params:(query:'0',type:phrase),type:phrase,value:'0'),query:(match:(files:(query:'0',type:phrase)))),('$state':(store:appState),meta:(alias:Bots,disabled:!f,index:git,key:author_bot,negate:!t,params:(query:!t,type:phrase),type:phrase,value:true),query:(match:(author_bot:(query:!t,type:phrase))))),fullScreenMode:!f,options:(darkTheme:!f,useMargins:!t),panels:!((embeddableConfig:(title:'Reps+Activities'),gridData:(h:16,i:'115',w:8,x:0,y:0),id:'3adcbac0-86ce-11e9-867b-b3a40099cad5',panelIndex:'115',title:'Key+metrics',type:visualization,version:'6.8.6'),(embeddableConfig:(title:'Reps+Events'),gridData:(h:16,i:'116',w:24,x:8,y:0),id:c881d3c0-86cd-11e9-867b-b3a40099cad5,panelIndex:'116',title:'Development+activity',type:visualization,version:'6.8.6'),(embeddableConfig:(title:Reports,vis:(legendOpen:!f,params:(config:(searchKeyword:''),sort:(columnIndex:!n,direction:!n)))),gridData:(h:16,i:'117',w:16,x:32,y:0),id:e5d88cb0-86ce-11e9-867b-b3a40099cad5,panelIndex:'117',title:Repositories,type:visualization,version:'6.8.6'),(embeddableConfig:(title:Events,vis:(legendOpen:!f,params:(config:(searchKeyword:''),sort:(columnIndex:!n,direction:!n)))),gridData:(h:16,i:'118',w:24,x:0,y:16),id:fc6599e0-86cf-11e9-867b-b3a40099cad5,panelIndex:'118',title:Contributors,type:visualization,version:'6.8.6'),(embeddableConfig:(title:Representatives%2FCountries),gridData:(h:16,i:'119',w:24,x:24,y:16),id:'3d842220-86d0-11e9-867b-b3a40099cad5',panelIndex:'119',title:Organizations,type:visualization,version:'6.8.6'),(embeddableConfig:(title:Pulls,vis:(legendOpen:!f)),gridData:(h:12,i:'123',w:16,x:0,y:32),id:'3f83ac90-86d9-11e9-867b-b3a40099cad5',panelIndex:'123',title:'Corporate+diversity+evolution:+proposed+changes',type:visualization,version:'6.8.6'),(embeddableConfig:(title:DockerHub,vis:(legendOpen:!f)),gridData:(h:12,i:'124',w:16,x:16,y:32),id:'6dc12dc0-86da-11e9-867b-b3a40099cad5',panelIndex:'124',title:'Corporate+diversity+evolution:+issue+creation',type:visualization,version:'6.8.6'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:12,i:'125',w:16,x:32,y:32),id:c0cddc20-86da-11e9-867b-b3a40099cad5,panelIndex:'125',title:'Corporate+diversity+evolution:+ML+posts',type:visualization,version:'6.8.6')),query:(language:lucene,query:(query_string:(analyze_wildcard:!t,default_field:'*',query:'*'))),timeRestore:!t,title:Overview,viewMode:view)