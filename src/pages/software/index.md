---
templateKey: software-page
seo:
  description: >-
    Kata Containers is Apache 2 licensed open source software consisting of six
    components - Agent, Runtime, Proxy, Shim, Kernel and packaging of QEMU 2.11.
  image: /img/android-chrome-192x192.png
  title: Container Virtualization - Open Source VM Software - Kata Containers
  twitterUsername: '@katacontainers'
  url: 'https://katacontainers.io/software/'
title: Software
subTitle: Development activities in Kata Containers
intro:
  buttons:
    - link: 'https://github.com/kata-containers/kata-containers/'
      text: explore on github
  text: >
    Kata Containers is Apache 2 licensed software consisting of six components:
    Agent, Runtime,  Proxy, Shim, Kernel and packaging of QEMU 2.11. It is
    designed to be architecture agnostic,  run on multiple hypervisors and plug
    seamlessly into the containers ecosystem.
architecture:
  columns:
    - icon: /img/logo_ico1.svg
      link: 'https://github.com/kata-containers'
      linkText: Go to Git Repository
      title: Get Kata Containers
    - icon: /img/document_primary-dark.svg
      link: 'https://github.com/kata-containers/documentation'
      linkText: Get Started
      title: View the Documentation
  image: /img/kata-explained1@2x.png
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

Kata requires nested virtualization or bare metal. The Kata Containers runtime has a built-in command (kata-check) to 
determine if your host system is capable of running a Kata Container. [Learn how to use kata-check](http://bit.ly/katacheck).

<div class="columns">
  <div class="column">
    <div class="box is-primary-blue">
      <h4 class="box-title">Distributions</h4> 
      <div class="box-entry">
        Kata Containers is available on many distributions. View the [distro specific install guides](https://github.com/kata-containers/kata-containers/tree/main/docs/install) for: <br /> 
        <div class="columns">
          <div class="column">
            <ul>
              <li>CentOS</li>
              <li>Debian</li>
              <li>Fedora</li>
              <li>OpenSuse</li>
            </ul>
          </div> 
          <div class="column">
            <ul>
              <li>RHEL</li>
              <li>SLES</li>
              <li>Ubuntu</li>
            </ul>
          </div>
        </div>
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
