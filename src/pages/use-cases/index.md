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
Are you a Kata Containers user? Please take a few moments to fill out the [Kata Containers User Survey](https://www.surveymonkey.com/r/KataContainers) to provide feedback and information around your deployment. All information is confidential to the Open Infrastructure Foundation unless you designate that it can be public.

<br />

## Ant Group

Ant Group, the leading peer-to-peer payments processor in China, does automatic online payment transactions on China's largest digital payment platform. Kata Containers’ features such as the network isolation with dedicated kernels and performance jitter are critical for Ant Group’s use case.

With Kata Containers, teams at Ant Group are still sharing the same host kernel. They have a hypervisor layer, and they run different pods in different guest operating systems (OS). With this guest OS level isolation, Ant Group no longer shares a lot of host kernel threads, allowing their service performance to be much more stable with Kata.

Watch how teams at Ant Group deploy large scale Kata Containers in production on [YouTube](https://www.youtube.com/watch?v=-9LtBfwj03Y&t=590s).

<br />

- - -

<br />

## Alibaba Group

Kata Containers is not only valued for its security isolation, but also valued for providing resource isolation and fault isolation. In Alibaba Group and Ant Group, thousands of tasks are scheduled and running on Kata Containers. Some of those tasks are sensitive to resources and response time. 

In fact, in order to avoid interference, putting those tasks in Kata Containers is not enough. There are other isolation methods that are used combined with Kata Containers such as scheduling isolation, LLC isolation and more.

Learn more about Alibaba Group’s use case on [YouTube](https://www.youtube.com/watch?v=XZ6AwoJFPFI&list=PLKqaoAnDyfgpJ1lAfR1iv7RN7IUhlmaEQ&index=3). 

<br />

- - -

<br />

## AMD

With confidential computing, customers have to have absolute trust that data is not being exposed. In regulated environments, where governments are putting stricter rules like heath data in place, it has to be ascertained that the hypervisors can get access to the data, but it sees no value in it. Encryption plays a key role so the confidential or container based workloads can be coupled with the technologies that are coming out like AMD Secure Encrypted Virtualization (SEV).