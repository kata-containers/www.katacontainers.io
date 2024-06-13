---
templateKey: blog-post
title: Kata Containers 3.5.0 Release Update
author: Kata Containers
date: 2024-06-19T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

The Kata Containers community has been making improvements to the project’s release process to be able deliver new versions more frequently, aiming for a monthly minor release cadence.

The latest [3.5.0](https://github.com/kata-containers/kata-containers/releases/tag/3.5.0) release focuses on improving the project's stability, security, and compatibility through various bug fixes, updates, and new features. Key updates include enhanced support for NVIDIA GPUs, improvements in the runtime and agent components, and enhancing the container creation process and storage handling. Additionally, this version updates critical dependencies like ‘golang’ and ‘libseccomp’ for enhanced security.

# Key Themes for the New Release

1. Bug Fixes

The new release brings increased stability and better performance. Some of the most affected areas include:
- ‘runtime-rs’: Fixed cleanup after VM start failure with Dragonball and the contribution of ‘RTC struct’.
- ‘build’: Improved build messages and fixed tarball build in Docker, to ensure a smoother development experience.

2. Security Enhancements

The kata-agent now includes the latest ‘libseccomp’ v2.5.5 to improve security. Please note that this library is licensed under [GNU LGPL-2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html). The version used by Kata Containers is not modified from the upstream version, and you can find the complete source code for the library attached for full compliance.

In addition, ‘rootfs’ is now built with≈ with ‘AGENT_POLICY=yes’ by default for increased security and stability.

3. New Features and Compatibility

Support for NVIDIA GPU configurations and IOMMU in QEMU VMs were added to enhance hardware compatibility. Furthermore, to make it easier to test Kata Containers with Confidential Containers (CoCo) a new configuration option was added when using QEMU. This allows developers to configure Kata for CoCo without requiring ‘TEE’ hardware and with that enable developers implement/test/debug platform agnostic code on their workstations.

For a complete list of updates, please check out the ‘What's Changed’ section of the [3.5.0 release documentation](https://github.com/kata-containers/kata-containers/releases/tag/3.5.0).

# User Benefits

The 3.5.0 release brings enhanced performance and reliability to users. The integration of NVIDIA GPU support expands the potential for high-performance workloads, while the various bug fixes and stability improvements reduce the likelihood of runtime issues. Enhanced security through updated dependencies and better policy management ensures safer container operations. Furthermore, the new features and improved compatibility make it easier for developers to deploy and manage Kata Containers across different environments, thereby simplifying the overall development and maintenance process.


# About Kata Containers

If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.