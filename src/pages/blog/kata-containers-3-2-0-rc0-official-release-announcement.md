---
templateKey: blog-post
title: Kata Containers 3.2.0-RC0 Official Release Announcement
author: Kata Containers
date: 2023-09-05T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

[Kata Containers](https://github.com/kata-containers/kata-containers) is a secure container runtime that provides strong enterprise-ready isolation based on hardware virtualization technology. It combines the advantages of strong isolation of virtual machines with the rapid deployment of containers and the experience of quick startup. Kata Containers is available in public clouds, private clouds, and container services, and has been widely used in many business scenarios such as [function](https://help.aliyun.com/zh/fc/product-overview/what-is-function-compute) [computing](https://www.alibabacloud.com/product/function-compute).

After several months of development and iteration, Kata Containers recently released the first Release Candidates version of 3.2.0: [Kata Containers 3.2.0-RC0](https://github.com/kata-containers/kata-containers/releases/tag/3.2.0-rc0). Compared with the previous version 3.1.x, the revised version adds more functions in support of GPU devices, confidential containers and [Rust](https://www.rust-lang.org/) runtime, and also makes the new version of Kata Containers more stable.

Download early adopters Kata Containers 3.2.0-RC0 version from the official Kata Containers Github:

[https://github.com/kata-containers/kata-containers/releases/tag/3.2.0-rc0](https://github.com/kata-containers/kata-containers/releases/tag/3.2.0-rc0)

Compared with version 3.1.X, Kata Containers 3.2.0 mainly adds support for the following features:

# Added support for multiple architectures

Starting in 3.2.0, the Kata Containers release version has added support for `aarch64`, `s390`, and the released version package contains `kata-static-3.2.0-{arm64, s390x, amd64}.tar.xz` and other compressed packages. Users can directly download the release package and deploy it on `aarch64` or `s390` machines, saving the trouble of compiling and deploying from source code. In addition, starting from version 3.2.0, Kata Containers renamed the `aarch64` and `x86_64` architectures to `arm64` and `amd64`, respectively.

# Upgraded support for Nydus to 2.2.0.

To learn more about the new features of Nydus 2.2.0, please refer to: [https://github.com/dragonflyoss/image-service/releases.](https://github.com/dragonflyoss/image-service/releases.)

# Merged the built-in Dragonball hypervisor of Kata Containers from the Dragon Lizard community into the Kata Containers project.

In version 3.2.0, we moved the built-in [Dragonball vmm](https://github.com/openanolis/dragonball-sandbox) to the Kata Containers project. From now on developers will not need to submit code on multiple projects when contributing code to Dragonball vmm. In addition, it also enables developers to test. The submitted patch does not need to rely on external code warehouses, adding convenience for developers to contribute code to Kata Containers vmm.

# Added the debugging function of entering the kata vm virtual machine from the host.

Users can use the `kata-ctl` command to quickly enter the kata guest system, enabling some debugging operations to be performed.

# Enhanced GPU support

Added support for Confidential Containers to GPU devices. In the Confidential Computing sandbox, in order to avoid the destructiveness caused by hot plugging of `PCI-e` devices to [Confidential Containers](https://github.com/confidential-containers), the GPU device is inserted into the Confidential Container by cold plugging for containers in production. use. In addition, through the enhancement of VFIO devices, it can better support the management of GPU devices.

# Runtime-rs adds a device management subsystem.

`runtime-rs` adds the abstraction of device management, and manages all devices used by sandbox and containers through the device management module, including support for block devices, network devices, vfio devices, and other device types.

In addition to the features above, several bugs in previous versions have also been fixed. Future releases of Kata Containers 3.2.x will bring a more complete and stable Kata security container runtime.

# Original Chinese release

Kata Containers是一个基于硬件虚拟化技术提供强业务隔离的安全容器运行时，它将虚拟机的强隔离优势融入到了容器的极速部署与快速启动的使用体验中，在公有云、私有云、容器服务以及函数计算等诸多业务场景中得到了广泛的使用。

经过几个月的开发和迭代，Kata Containers于近日发布了3.2.0的第一个Release Candidates版本：3.2.0-RC0。该版本相较之前的3.1.x在对GPU设备的支持，机密容器以及rust runtime上增加了更多的功能，同时也使得新版Kata Containers更加稳定。

下载尝鲜Kata Containers 3.2.0-RC0版本：

[https://github.com/kata-containers/kata-containers/releases/tag/3.2.0-rc0](https://github.com/kata-containers/kata-containers/releases/tag/3.2.0-rc0)

相较于3.1.X版本，Kata Containers 3.2.0主要增加了以下功能：

**1\. 发布版本增加了对多架构的支持。**

从3.2.0开始，Kata的发布版本里面增加了对aarch64, s390的支持，发布的版本包中包含了kata-static-3.2.0-{arm64,s390x,amd64}.tar.xz等压缩包，用户可以直接下载release的软件包部署在aarch64或者s390等架构的机器上，省去了从源码编译部署的麻烦。另外从3.2.0版本开始，Kata Containers将aarch64和x86\_64架构分别改为了arm64和amd64。

**2\. 将对Nydus的支持升级到了2.2.0.**

详细了解Nydus 2.2.0的新增功能，可参考：[https://github.com/dragonflyoss/image-service/releases](https://github.com/dragonflyoss/image-service/releases) 。

**3\. 将Kata Containers内置的hypervisor dragonball从龙蜥社区转移到了Kata Containers项目下面。**

我们将Kata Containers的内置vmm dragonball挪到了Kata 3.2.0版本中，从此，开发者在对vmm贡献代码时，不需要在多个项目上提交代码。此外，开发者在测试提交的patch时不再需要依赖外部代码仓库，简化了Kata vmm代码贡献流程。

**4\. 增加了从host主机进入Kata vm虚拟机内部的调试功能。**

用户可利用kata-ctl命令快速进入kata guest虚拟机系统，在guest系统中进行调试，快速定位guest系统中出现的一些问题。

**5\. 强化了对 GPU的支持**

增加了机密容器对GPU设备的支持，在机密计算sandbox里，为了避免pcie设备热插给机密容器带来的破坏，将GPU设备通过冷插的方式插入到机密容器内部供业务容器使用。另外，通过对VFIO设备的增强，可以更好地管理GPU设备。

**6\. runtime-rs增加了设备管理模型子系统。**

runtime-rs增加了对设备管理的抽象，将sandbox和容器使用的所有设备通过设备管理模块进行统一管理，包括对block设备、网络设备、vfio设备以及其它设备类型的支持。

除了上述重要功能外，在3.2.0-rc0版本中，还修复了之前版本存在的一些错误。未来Kata Containers 3.2.0的发布，将会带来一个特性更加完善、更加稳定的Kata安全容器运行时。
