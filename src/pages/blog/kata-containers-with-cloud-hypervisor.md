---
templateKey: blog-post
title: Kata Containers with Cloud Hypervisor
author: James O. D. Hunt
date: 2022-03-01T01:32:05.627Z
category: 
  - label: Cloud Hypervisor
    id: category-A7fnZYrE1
---

**by James O. D. Hunt, Senior software engineer at Intel R&D Labs. Kata Containers developer.**

## Overview

This article gives a brief overview of Kata Containers including details of how it is configured and how it creates a container.

It then provides some details on the various parts of a Kata Containers system that can be changed, including the hypervisor used to host containers, and why you might want to change it.

Finally, it discusses Cloud Hypervisor and shows how easy it is to switch to using this modern, lean, fast and secure rust-based hypervisor to host your Kata containers.

## Scope

Kata Containers provides two runtimes:

  * The default runtime, written in the golang language.
  * A newer runtime, written in the rust language.

The runtimes are very similar but there are small differences. This post only applies to the default golang runtime.

> **Note:**
> 
> For further details, see: [kata-containers/kata-containers#8702](https://github.com/kata-containers/kata-containers/issues/8702). 

## Requirements

This post assumes you are running a recent version of Kata Containers, specifically [version 3.3.0 or newer](https://github.com/kata-containers/kata-containers/releases).

To check the version of Kata Containers you are using or have just installed, run:

    $ kata-runtime --version

We also assume you are running on one of the following CPU architectures (required for Cloud Hypervisor):

  * An x86–64 (Intel or AMD CPU) system
  * An aarch64 (“ARM 64”) system

To check the CPU architecture of your system, run one of the following commands:
    
    $ arch
    $ uname -m

## Permissions

The permissions of certain Kata binaries are currently overly restrictive. To allow you to call the kata-manager script directly as shown later in this post, run the following commands:

    $ sudo chmod 755 /opt/kata/bin/kata-manager*
    $ export PATH=$PATH:/opt/kata/bin

Alternatively, call the kata-manager script using sudo(1) by specifying its full path in all the examples below. For example, to show the kata-manager usage statement:

    $ sudo /opt/kata/bin/kata-manager -h

> **Note:**
>
> For further details, see: [kata-containers/kata-containers#9373](https://github.com/kata-containers/kata-containers/issues/9373).

## TL;DR

If you are already familiar with Kata Containers and just wish to try it out with Cloud Hypervisor, jump to the [Switch to Cloud Hypervisor](https://medium.com/p/c1af575eae05#142a) section.

## What is Kata Containers?

[Kata Containers](https://katacontainers.io/), or just Kata, is an open source project that allows you to run containers using lightweight virtual machines (VMs). It slots seamlessly into your container ecosystem so you don’t need to change the way you work: you just get all the additional benefits of running containers in a hardware isolated environment.

Even if you are already familiar with Kata, you may not realise that it is a pluggable system. A standard installation provides a default configuration that will “just work”. This is very helpful to allow you to evaluate how easy it is to slot Kata into your environment.

## Containers with knobs on

If you want to maximise the benefits of Kata and your hardware, you should consider customising your configuration.

Kata offers many configuration “knobs” that you can modify to suit your scenario. Using these knobs, you can change most parts of the Kata system.

By default, Kata provides a secure and fast experience, but for particular use-cases, you can enable additional security option, or potentially boost performance significantly.

## Configuration

Kata is configured using a [TOML](https://toml.io/) format file called `configuration.toml`. TOML is a human and machine readable format, and the default configuration files provided with Kata are well commented to explain what all the many options do.

## Kata supports stateless systems

The [Kata runtime](https://github.com/kata-containers/kata-containers/tree/main/docs/design/architecture#runtime) component can read file from multiple locations. By default it will read files from the `/etc/kata-containers/` directory but fall back to reading "pristine" configuration files from the installation directory (usually `/opt/kata/`). The beauty of this design is that if you wish to perform a full "reset" and revert back to using the known good pristine configuration files, all you need to do is delete (or move aside) you configuration file in `/etc/kata-containers/`.

> **Note:**
>
> The paths used by Kata may differ if you have a custom system. To determine the paths that Kata uses, run the following command which lists the configuration file paths Kata will look for (the first file found will be used):
> 
> `$ kata-runtime --show-default-config-paths`

## Kata supports configuration snippets

In addition to supporting different configuration files, Kata also allow you to create “`config.d`" configuration fragments, sometimes called "drop ins" or "snippets".
Configuration advice

Note that care is needed to modify the configuration as some options are incompatible with each other or can interact with other options. Please read the comments in the configuration file carefully.

Since Kata supports stateless systems, the commended approach to modifying the default packaged (“pristine”) configuration is to create a localcopy of the pristine configuration. That way, if anything goes awry, it’s easy to [reset back to a working environment](https://gist.github.com/jodh-intel/5cdc3e11729852558eee1e1af85ed063#kata-supports-stateless-systems).

## Pluggable architecture

Kata uses a pluggable architecture. Although the official releases provide a working system, you can change all aspects of the Kata environment. For example, you can change:

  * The runtime type.
  * The Kata rootfs image or `initrd` / initramfs used to boot the VM.
  * The kernel used to boot the minimal VM (called the “guest kernel”).
  * The configuration file.
  * The configuration file options.
  * The hypervisor used to create the VM to host your container.

The last bullet is the main subject of this post.

> **Note:**
>
> For further details, see the [Kata Containers architecture documentation](https://github.com/kata-containers/kata-containers/tree/main/docs/design/architecture).

## Hypervisors

In simple terms, Kata creates a container as follows:

  1. The Kata Containers runtime is started by the container manager.
  2. The runtime reads the Kata Containers configuration file.
  3. The runtime starts your chosen (configured) hypervisor.
  4. The hypervisor creates and boots a virtual machine (VM) using the Kata rootfs image and the Kata guest kernel.
  5. The Kata agent starts running inside the VM environment.
  6. The Kata agent starts and creates a “traditional Linux container” inside the VM (note the multiple layers of isolation!)
  7. The Kata agent runs your chosen workload inside the container which is hosted inside the VM.

## Why would I want to change the hypervisor?

The current default hypervisor for Kata is QEMU. This was chosen since:

  * It is a common and popular system.
  * It runs on lots of different architectures.
  * It provides a huge array of features.

So, why would you want to try an [alternative hypervisor](https://github.com/kata-containers/kata-containers/blob/main/docs/hypervisors.md)? There are many reasons but in general terms you may decide that some of the other hypervisors that work with Kata are more appropriate for your use-case:

  * Maybe you would like to try running a rust program?
  * Maybe you want to run the smallest, most basic hypervisor that fulfills your needs rather than a huge “do everything” system like QEMU.
  * Maybe you don’t need every possible feature?
  * Maybe you only want to create containers on a single architecture?
  * Maybe you want to be able to create containers much faster?
  * Maybe you want additional security?
  * Maybe you need a particular feature not available in QEMU?
  * Maybe you would prefer to run a simpler hypervisor than QEMU?

## Why Cloud Hypervisor?

Cloud Hypervisor (CH or CLH), is a modern hypervisor, written in the [rust language](https://www.rust-lang.org/). It was specifically written to be small, fast and secure by default.

Cloud Hypervisor, as its name suggests, was *designed* for cloud based scenarios such as for running container workloads. It is highly optimised, blazingly fast and “just works”: you don’t need complex setup steps to use it.

Although Cloud Hypervisor does not provide every feature that QEMU does, it provides all the features that most people would need to run their workloads.

Additionally, Cloud Hypervisor has a blossoming community and a fast-paced rate of development. New features are being added all the time. And it’s also good to know that Cloud Hypervisor provides a lot of tests and documentation. Plus, it is fuzz-tested constantly to ensure code quality and security remain at the forefront of the development focus. Finally, it’s a very approachable system: it does provide lots of command-line options, but you can just run it with no options and configure it entirely using the JSON language. Finally, it supports the OpenAPI standard meaning you can easily look up API details in its OpenAPI YAML specification file.

## Do I need to manually install Cloud Hypervisor?

No. If you install a Kata containers [release](https://github.com/kata-containers/kata-containers/releases), for example using the [“automatic” method](https://github.com/kata-containers/kata-containers/tree/main/docs/install#automatic-installation), your system will contain Kata Containers *and* the main hypervisors and their associated configuration files!

## Hypervisor configuration

Since each [Kata hypervisor](https://github.com/kata-containers/kata-containers/blob/main/docs/hypervisors.md) offers its own set of features, Kata provides a configuration file for each of them.

## Switch to Cloud Hypervisor

Sounds great. How do I try out Cloud Hypervisor then?

Simple! All you need to do is run a single command on your Kata system:

    $ kata-manager -S clh

> **Note:**
>
> Running the command above performs the following steps:
>
> - Creates the `/etc/kata-containers/` if it does not exist.
>
> - Copies the appropriate pristine configuration file for the specified hypervisor into that directory.
>
> - Creates a symbolic link in that directory so that your chosen hypervisor will be used by default.

That’s it! Now, just create your container as normal using `containerd`, `kubernetes`, or Docker. Once the container is running, you will see a `cloud-hypervisor` process running. To check this, run:

    $ ps -ef | grep cloud-hypervisor

In fact, you can install and configure your system to use Cloud Hypervisor all in one go by simply running the following on a system that doesn’t already have Kata installed:

    $ bash -c "$(curl -fsSL https://raw.githubusercontent.com/kata-containers/kata-containers/main/utils/kata-manager.sh) -H clh"

See the [*kata-manager*](https://github.com/kata-containers/kata-containers/blob/main/utils/README.md) documentation for further details.

## I love it, but how do I switch back to the default hypervisor to compare?

To switch back to the default Kata hypervisor (currently QEMU), just run:

    $ kata-manager -S default

## How do I reset my system fully?

Simple. If you didn’t have any custom files in the `/etc/kata-containers/` directory before, just delete the directory:

    $ sudo rm -rf /etc/kata-containers/

Alternatively, “move aside” the directory by renaming it. Something like this:

    $ sudo mv /etc/kata-containers/ /etc/kata-containers.DISABLED/

Now, all subsequent Kata Containers will use the pristine configuration files (normally found in `/opt/kata/share/defaults/kata-containers/`) rather than your modified versions.

## Further reading

  * The [main Kata Containers site](https://katacontainers.io/)
  * [Kata Containers on GitHub](https://github.com/kata-containers/kata-containers)
  * The [main Cloud Hypervisor site](https://www.cloudhypervisor.org/)
  * [Cloud Hypervisor on GitHub](https://github.com/cloud-hypervisor/cloud-hypervisor)
  * The [Kata Manager documentation](https://github.com/kata-containers/kata-containers/blob/main/utils/README.md)

## Want to join the Kata Containers community?

If you are interested in learning more about Kata Containers and getting involved with the project and its vibrant community, see [our community documentation](https://github.com/kata-containers/community).

## Take the Kata Containers survey

The Kata Containers community is always keen to receive feedback from its users. Please consider taking [the Kata Containers survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) as this will help us to help you!
