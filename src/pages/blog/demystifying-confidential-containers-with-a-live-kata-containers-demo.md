---
templateKey: blog-post
title: Demystifying Confidential Containers with a Live Kata Containers Demo
author: Tao Peng
date: 2023-07-13T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

**Contributed by** [**Tao Peng**](https://github.com/bergwolf) **| Staff Engineer, Ant Group**

On Jun 13, 2023, during the [Openinfra Summit Vancouver](https://openinfra.dev/summit/vancouver-2023) keynote, Xu Wang and Tao Peng, two engineers from [Ant Group](https://www.antgroup.com/en), co-presented a session on explaining [Confidential Containers](https://github.com/confidential-containers) with a live Kata Containers demo.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sOmoFOLaR7A?si=QmrMpflzaAlAjekQ&amp;start=5952" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Kata Containers](https://github.com/kata-containers/kata-containers) has undergone more than five years of development, with several architectural changes implemented along the way. Initially designed to protect infrastructure, the platform has grown to also safeguard container workloads, which led to the creation of the Confidential Containers (CoCo) project. Although unfamiliar to many attendees, Xu and Tao used the keynote session to present high-level designs of coco and demonstrated its capabilities through a live demo featuring a language model based on Meta’s llama open-source model. The demo showcased Kata Confidential Containers’ ability to enable users to securely store sensitive data and models on third-party hosted hardware.

![](https://miro.medium.com/v2/resize:fit:700/0*Q4E9M7J3jJbjYSts)

Xu initiated the session by introducing the latest upgrade of Kata Containers, version 3.0. This upgrade streamlines the components of Kata by blending the hypervisor into the newly written `Rust` runtime. As a result, there is only one process for each pod on the host, whereas in Kata 2.0, there were at least two processes. This modernization helps to enhance the deployment complexity and reduce the memory footprint of Kata Containers.

![](https://miro.medium.com/v2/resize:fit:700/0*8QPSSZKDpNWkzGEh)

Following that, Xu proceeded to provide an overview of the live demo architecture, which featured an integration of Kubernetes, containerd, and [Kata Confidential Containers](https://techcommunity.microsoft.com/t5/azure-confidential-computing/aligning-with-kata-confidential-containers-to-achieve-zero-trust/ba-p/3797876). A key broker service was utilized as a standalone entity to assist in attesting the confidential environment. The container image was encrypted and stored in a standard Docker container registry.

The demo was run on an [Alibaba Cloud](https://us.alibabacloud.com/en) server with AMD SEV capability to encrypt the guest memory so that the workloads running inside Kata Containers cannot be read from the host.

![](https://miro.medium.com/v2/resize:fit:700/0*NqW0fuYr-GkHXg6u)

Subsequently, Tao initiated the live demo by launching a new pod with `kubectl`. The creation of the pod took around 30 seconds, with a significant part of the time spent on pulling the container image due to the larger size of the LLM image. Following this, it was demonstrated that the pod could not be accessed using `kubectl exec` since the `exec` API is blocked by `kata-agent`. Despite this, it was possible to log in to the pod using a pre-configured SSH key and proceed with model serving.

![](https://miro.medium.com/v2/resize:fit:700/0*TQivDTtOigEiEcv9)

During the live demo, a chatbot-like application was used that accepted prompts and produced responses in the command line. Xu posed a few inquiries, such as “explain the theory of relativity” and “write a bubble sort program in `go`”. Additionally, he prompted the AI model to compare two Kata presentations at the summit based on their session titles. The AI model responded quickly to these questions, which delighted the audience and resulted in several rounds of applause.

![](https://miro.medium.com/v2/resize:fit:700/0*9iXCpXbJdk_q6a7-)

The live demo was executed flawlessly, leaving the audience thoroughly impressed with the AI’s capability to comprehend and answer such complex questions. Additionally, the demo effectively demonstrated how Kata Containers is empowering AI users to secure their data and models using Confidential Containers technology.

For those interested in watching the entire Kata Containers keynote and demo, please visit [the link provided here.](https://youtu.be/sOmoFOLaR7A?list=PLKqaoAnDyfgqsxQDbLj4LVpKiZSDbntuC&t=5975)
