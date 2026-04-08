---
templateKey: learn-page
seo:
  description: >-
    Kata Containers perform like containers, but provide the workload isolation
    and security advantages of VMs. It combines the benefits of containers and
    VMs.
  image: /img/android-chrome-192x192.png
  title: Learn About the Kata Containers Project
  twitterUsername: '@katacontainers'
  url: 'https://katacontainers.io/'
title: Learn
subTitle: An overview of the Kata Containers project
intro:
  buttons:
    - link: ../collateral/kata-containers-1pager.pdf
      text: project overview
    - link: ../collateral/kata-containers-overview-july22.pdf
      text: Onboarding Deck
    - link: 'https://github.com/kata-containers/kata-containers/releases'
      text: latest software release
  gallery:
    - alt: Architecture diagram
      image: /img/katacontainers_architecture_diagram.jpg
    - alt: Traditional vs Kata diagram
      image: /img/katacontainers_traditionalvskata_diagram.jpg
  text: >
    Kata Containers are as light and fast as containers and integrate with the
    container management  layers—including popular orchestration tools such as
    Docker and Kubernetes (k8s)—while also  delivering the security advantages
    of VMs.
  videos:
    - title: Kata Containers Project Update
      url: 'https://www.youtube.com/embed/FZr1v08Oyic'
    - title: An Intro to Kata Containers
      url: 'https://www.youtube.com/embed/4gmLXyMeYWI'
---
## Demos

* [Kata Containers configured in CRIO + K8s, utilizing both QEMU & Firecracker](https://asciinema.org/a/219790)

## Kata Containers in the News

* [NVIDIA Unveils Zero-Trust Architecture for Secure AI Model Deployment](https://blockchain.news/news/nvidia-zero-trust-architecture-confidential-ai-factories) (Blockchain News | March 2026)
* [Kata containers: the overlooked Kubernetes workload isolation for secure AI](https://www.thestack.technology/kata-containers-kubernetes-isolation-ai/) (The Stack | February 2026)
* [Kata Containers: From Kubernetes Pods to Secure VMs](https://dzone.com/articles/kata-containers-from-kubernetes-pods-to-secure-vms) (DZone | February 2025)
* [Azure Linux: Driving Security in the Era of AI Innovation](https://techcommunity.microsoft.com/blog/linuxandopensourceblog/azure-linux-driving-security-in-the-era-of-ai-innovation/4471034) (Microsoft Linux and Open Source Blog | November 2025)
* [Kata Containers : Bridging The Gap Between Containers And Virtual Machines](https://kalilinuxtutorials.com/kata-containers/) ( KaliLinuxTutorials | January 2025)
* [Enhancing Kubernetes workload isolation and security using Kata Containers](https://aws.amazon.com/blogs/containers/enhancing-kubernetes-workload-isolation-and-security-using-kata-containers/) (AWS Containers Blog | May 2024)

- - -

<h2 id="faq" class="h2_primary_dark"><a href="#faq" aria-hidden="true" class="header-anchor">#</a> FAQ</h2>

#### What's the advantage of Kata Containers?

Kata Containers perform like containers, but provide the workload isolation and security advantages of VMs. It combines the benefits of containers and VMs.

#### Who uses Kata Containers?

Kata Containers is still in its formational stages, but the technical basis for the project--Clear Containers and runV--are used globally at enterprise scale by organizations like JD.com, China's largest ecommerce company (by revenue).

#### Will this require a rebuild of my Docker containers? Does it work with Kubernetes?

Kata Containers is OCI (Open Container Initiative) compliant, the same standard shared by Docker containers as well as the container runtime interface (CRI) for Kubernetes.

#### What's the operating system? Do I get to pick that?

Kata Containers supports Linux (host and guest) for now. On the host side, we have installation instructions for several popular distributions. We also have out-of-the-box support for Clear Linux, Fedora, and CentOS 7 rootfs images through the OSBuilder which can also be used to roll your own guest images.

#### What's the license for Kata Containers?

Kata Containers is open source and licensed under the Apache 2.0 license, which means it is free to use, free to distribute, and does not require modifications to be contributed back to the project. Read more about Apache 2.0.

#### Where is the code?

You can find the code at [github.com/kata-containers](https://github.com/kata-containers). You can find links to the original repositories from Intel and Hyper.sh on the [katacontainers.io](https://katacontainers.io) homepage.

#### Can I contribute to it?

Yes! Kata Containers is open source, which means it relies on contributors like you! After the initial code base merger, all areas of Kata Containers will be open for contribution. Between now and the merger completion, you can contribute:

* Unit tests for agent, shim and proxy
* PR reviews for agent and shim
* OSbuilder support for more distros
* gRPC input (Do we cover it all?)
* Features Requests: Open issues and PRs for any feature that you’d like to see in Kata Containers!

#### How is Kata Containers governed?

Kata Containers is driven by an Architecture Committee. The Architecture Committee, whose members are elected by contributors, oversees architectural decisions, including standardization, and resolves technical disagreements between project maintainers. Kata Containers is managed by the Open Infrastructure Foundation, which provides event organization, code of conduct management, and other administrative support.

#### Are there Kata meetups?

We don't have any scheduled yet, but you can expect to see some on the calendar soon! Want to organize a Kata Containers Meetup? Email info at katacontainers.io to get involved.

#### Is this an OpenStack project?

Kata Containers is managed by the Open Infrastructure Foundation, but is not a part of the OpenStack cloud infrastructure project. From a technical perspective, Kata Containers can be run on OpenStack, but can also be run on other cloud solutions like Azure and Google Cloud Platform. The Open Infrastructure Foundation brings its 8 years of open source project and community management to this new project to provide community support, technical structure, and event management.
