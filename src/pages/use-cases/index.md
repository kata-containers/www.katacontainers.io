---
templateKey: use-cases-page
seo:
  description: >-
    Kata Containers is open source, which means it relies on contributors like
    you! All areas of the Kata Containers community are open for contribution.
  image: /img/android-chrome-192x192.png
  title: 'Users - Kata Containers case studies and more'
  twitterUsername: '@katacontainers'
  url: 'https://katacontainers.io/use-cases/'
title: Users
subTitle: 'Kata Containers case studies and more'
blogUrl: 'https://medium.com/kata-containers/'
---
Are you a Kata Containers user? Please take a few moments to fill out the **[Kata Containers User Survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey)** to provide feedback and information around your deployment. All information is confidential to the Open Infrastructure Foundation unless you designate that it can be public.

<br />
<a name="AntGroup"></a>

## Ant Group

Ant Group, the leading peer-to-peer payments processor in China, does automatic online payment transactions on China's largest digital payment platform. Kata Containers’ features such as the network isolation with dedicated kernels and performance jitter are critical for Ant Group’s use case.

With Kata Containers, teams at Ant Group are still sharing the same host kernel. They have a hypervisor layer, and they run different pods in different guest operating systems (OS). With this guest OS level isolation, Ant Group no longer shares a lot of host kernel threads, allowing their service performance to be much more stable with Kata.

**Learn more about how Ant Group built a Cloud Workload Protection Platform (CWPP) using Kata Containers and eBPF in their most recent [whitepaper](/collateral/kata-containers-ant-group-cwpp-ebpf_whitepaper.pdf)**

**Read Kata Containers best practices at Ant Group in its [whitepaper](/collateral/kata-containers-ant-group_whitepaper.pdf).**

**Watch how teams at Ant Group deploy large scale Kata Containers in production on [YouTube](https://www.youtube.com/watch?v=-9LtBfwj03Y&t=590s).**

<br />

- - -

<br />
<a name="Alibaba"></a>

## Alibaba Group

Kata Containers is not only valued for its security isolation, but also valued for providing resource isolation and fault isolation. In Alibaba Group and Ant Group, thousands of tasks are scheduled and running on Kata Containers. Some of those tasks are sensitive to resources and response time. 

In fact, in order to avoid interference, putting those tasks in Kata Containers is not enough. There are other isolation methods that are used combined with Kata Containers such as scheduling isolation, LLC isolation and more.

**Learn more about Alibaba Group’s use case on [YouTube](https://www.youtube.com/watch?v=XZ6AwoJFPFI&list=PLKqaoAnDyfgpJ1lAfR1iv7RN7IUhlmaEQ&index=3).** 

<br />

- - -

<br />
<a name="AMD"></a>

## AMD

With confidential computing, customers have to have absolute trust that data is not being exposed. In regulated environments, where governments are putting stricter rules like heath data in place, it has to be ascertained that the hypervisors can get access to the data, but it sees no value in it. Encryption plays a key role so the confidential or container based workloads can be coupled with the technologies that are coming out like AMD Secure Encrypted Virtualization (SEV).

With the 2018 Kata Containers prototype that AMD has had in place with the SEV technology, it’s been possible for AMD to offer confidentiality, meaning that they can turn it on and the containers would run in an encrypted mode. Teams at AMD are currently in the process of investing in Kata Containers. They are working with the community and teams at IBM to further explore needs and opportunities for confidential computing technology.

**Learn about confidential computing and the role Kata Containers plays at AMD on [YouTube](https://www.youtube.com/watch?v=-9LtBfwj03Y&t=1221s).** 

<br />

- - -

<br />
<a name="Baidu"></a>

## Baidu

Baidu offers AI Cloud and Edge Computing services at massive scale by leveraging innovative cloud technologies such as Kubernetes, Kata Containers and OpenStack. Teams at Baidu not only utilize the greater isolation offered by Kata Containers, but also integrate Kata Containers within its customers’ OpenStack infrastructures. 

Baidu believes that Kata Containers represents a highly secure and practical container technology for the following reasons:
- Kata Containers is a highly secure container technology that uses lightweight virtual machines to isolate containers.
- Kata Containers has high performance and reliability, along with additional security, as compared to traditional containers. 
- Because Kata Containers is an Open Container Initiative (OCI) compatible runtime, it works seamlessly with container orchestration solutions such as Kubernetes. 
- Kata Containers is widely supported in the industry and has a well-developed and active open source community. 

**Read more about the Application of Kata Containers in Baidu AI Cloud in this [white paper](https://katacontainers.io/collateral/ApplicationOfKataContainersInBaiduAICloud.pdf).**

<br />

- - -

<br />
<a name="Huawei"></a> 

## Huawei

Huawei is running Kata Containers in production in two environments: Cloud Container Instance (CCI), the first serverless Kubernetes on public cloud, and Cloud Container Engine (CCE) turbo, a complete Kubernetes service provided by the Huawei cloud.

With Kata Containers enabled, customers from Huawei are able to use CCE turbo as a platform to provide their own Software as a service (SaaS) or Platform-as-a-Service (PaaS) without the security concern of the runC container. Kata Containers also connects the network on Huawei cloud CCI.

**Watch how Huawei is using Kata Containers in production on [YouTube](https://www.youtube.com/watch?v=-9LtBfwj03Y&t=1993s).**

<br />

- - -

<br />
<a name="IBM"></a>

## IBM Cloud

Teams from IBM Cloud have been involved in the Kata Containers community for a while. They became more directly involved with Kata Containers when IBM Cloud product teams were looking to secure their Cloud Shell and CI/CD Pipeline SaaS offerings. These workloads were using Kubernetes and the strong isolation Kata Containers provided was a requirement from their security teams. 

The ease with which Kata Containers could be integrated without altering their code made it the obvious choice. They integrated Kata Containers as a Kubernetes runtime class used for pods where they need stronger guarantees for running arbitrary untrusted workloads.

**Read more on how IBM is using Kata Containers on [Kata Containers Blog](https://medium.com/kata-containers/kata-containers-ibm-cloud-case-study-c8189514ec9c).**

<br />

- - -

<br />
<a name="Northflank"></a>

## Northflank Ltd

Northflank’s mission is to enable developers to focus on what they are best at, which is writing, delivering and deploying applications. To do that, Northflank is removing infrastructure complexity by simplifying application deployment in the cloud or on bare-metal. As open source projects, like Kata Containers is key to achieve their goals, they are also actively contributing to the project.

Northflank’s customers often rely on shared infrastructure, where multi-tenancy, security and isolation are critical features to be able to run and manage untrusted images and containers. Through their Platform as a Service (PaaS) offering Northflank teams are able to test Kata in various scenarios in production on a large scale, which enables developers to report and fix bugs and avoid any regressions.

**Read more on how Northflank got started with Kata Containers and how they are using it on [Kata Containers Blog](https://katacontainers.io/blog/kata-containers-northflank-case-study/).**

<br />

- - -

<br />
<a name="Nubificus"></a>

## Nubificus Ltd

Nubificus Ltd is a software consultancy tackling complex virtualization problems. It targets ultra-fast application spawning and execution at the edge and in the cloud. Teams at Nubificus are day-to-day users of open-source software. Currently, they actively use and contribute to open source projects like Kata Containers.

Teams at Nubificus build on Kata Containers to enable seamless, burden-free deployment of lightweight container functions on Kubernetes while ensuring strict tenant isolation offered by the virtualization layers. Kata Containers brings them the needed Open Container Initiative (OCI) glue to interface with the upper-layer software stack, in order to showcase the merits of them projects.

**Read more on how Nubificus got started with Kata Containers and how they are using it on [Kata Containers Blog](https://medium.com/kata-containers/kata-containers-nubificus-case-study-39a1b7f63a2c).**

<br />

- - -

<br />
<a name="NVIDIA"></a>

## NVIDIA

NVIDIA has been involved in Kata Containers as sensitive data processing is a use case that is crucial for them, and it requires a transition from traditional to secure, isolated environments. They chose Kata Containers for confidential container enablement because it ensures security while maintaining container flexibility, and supports advanced scenarios like GPUDirect RDMA. A key aspect of NVIDIA's strategy is the lift-and-shift approach, allowing seamless migration of existing AI/ML workloads to these confidential environments, while combining LLMs with GPU-accelerated computing - leveraging Kubernetes for effective orchestration and striking a balance between computational power and data privacy.

**Learn more about [NVIDIA's Kata Containers strategy](https://www.youtube.com/watch?v=a3HzBmPuw5g) to support AI/ML workloads**
