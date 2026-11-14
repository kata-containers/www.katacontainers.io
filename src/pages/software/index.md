---
templateKey: software-page
seo:
  description: >-
    Kata Containers is Apache 2 licensed software consisting of two main
    components: the Kata agent, and the Kata Containerd shim v2 runtime. It also
    packages a Linux kernel and versions of QEMU, Cloud Hypervisor and
    Firecracker hypervisors.
  image: /img/android-chrome-192x192.png
  title: Container Virtualization - Open Source VM Software - Kata Containers
  twitterUsername: '@katacontainers'
  url: 'https://katacontainers.io/software/'
title: Software
subTitle: Development activities in Kata Containers
intro:
  buttons:
    - link: 'https://github.com/kata-containers/kata-containers'
      text: explore on github
  text: >-
    Kata Containers is Apache 2 licensed software consisting of two main
    components: the Kata agent, and the Kata Containerd shim v2 runtime. It also
    packages a Linux kernel and versions of QEMU, Cloud Hypervisor and
    Firecracker hypervisors.
architecture:
  columns:
    - icon: /img/logo_ico1.svg
      link: 'https://github.com/kata-containers/kata-containers'
      linkText: Go to Git Repository
      title: Get Kata Containers
    - icon: /img/document_primary-dark.svg
      link: 'https://kata-containers.github.io/kata-containers/installation/'
      linkText: Get Started
      title: View the Documentation
  image: /img/katacontainers_architecture_diagram.jpg
  title: Architecture
integration:
  image: /img/katacontainers_kubernetes_integration_diagram.jpg
  table:
    columns:
      - row:
          - text: Firecracker
          - text: QEMU
          - text: Cloud Hypervisor
        title: Hypervisor
      - row:
          - text: x86_64
          - text: aarch64
          - text: ppc64le
          - text: s390x
        title: Architecture support
      - row:
          - text: Nvidia GPU
          - text: FPGA
          - text: QAT
          - text: RDMA
          - text: SRIO-V
        title: Hardware support
    title: Integration Points
  title: Kata Containers Integration with Kubernetes
---

## Requirements

Kata requires nested virtualization or bare metal. See the [hardware prerequisites](https://kata-containers.github.io/kata-containers/installation/#hardware) for supported platforms and host checks.

<div class="columns">
  <div class="column">
    <div class="box is-primary-blue">
      <h4 class="box-title">Installation</h4>
      <div class="box-entry">
        For Kubernetes, install Kata Containers with the kata-deploy Helm chart.
        The <a href="https://kata-containers.github.io/kata-containers/installation/">installation guide</a> also covers prebuilt
        release tarballs and building from source.
      </div>
      <div class="box-actions"></div>
    </div>
  </div> 
  <div class="column">
    <div class="box is-primary-blue">
      <h4 class="box-title">Cloud Service Platform</h4> 
      <div class="box-entry">
        Run Kata Containers on a cloud service platform:
      <div class="columns">
        <div class="column">
          <a href="https://aws.amazon.com/" target="_blank">Amazon Web Services</a><br/> 
          <a href="https://azure.microsoft.com/" target="_blank">Microsoft Azure</a><br/> 
          <a href="https://cloud.google.com/compute/" target="_blank">Google Compute Engine</a><br/> 
          <a href="https://vexxhost.com/" target="_blank">Vexxhost OpenStack Cloud</a><br/>
          <br/><br/>
        </div>
      </div>
    </div> 
    <div class="box-actions"></div>
    </div>
  </div>
</div>

