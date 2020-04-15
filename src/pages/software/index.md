---
templateKey: 'software-page'
path: /software
seo:
  title: Software
  description: Development activities in Kata Containers
  url: https://katacontainers.io/
  image: /img/og-image.jpg
  twitterUsername: "@katacontainers"
title: Software
subTitle: Development activities in Kata Containers
intro: 
  text: >
    Kata Containers is Apache 2 licensed software consisting of six components: Agent, Runtime, 
    Proxy, Shim, Kernel and packaging of QEMU 2.11. It is designed to be architecture agnostic, 
    run on multiple hypervisors and plug seamlessly into the containers ecosystem.
  buttons:
    - text: explore on github
      link: https://github.com/kata-containers
architecture:
  title: Architecture
  image: /img/kata-explained1@2x.png
  columns:
    - title: Get Kata Containers
      link: https://github.com/kata-containers
      linkText: Go to Git Repository
      icon: /img/logo_ico1.svg
    - title: View the Documentation
      link: https://github.com/kata-containers/documentation
      linkText: Get Started
      icon: /img/document_primary-dark.svg
integration:
  title: Kata Containers Integration with Kubernetes
  image: /img/katacontainers_kubernetes_integration_diagram.jpg
  table:
    title: Integration Points
    columns:
      - title: Hypervisor
        row:
          - text: Firecracker
          - text: QEMU
          - text: NEMU
      - title: Architecture support
        row:
          - text: X86_64
          - text: arch64
          - text: ppc64le
          - text: s390x
      - title: Hardware support
        row:
          - text: Nvidia GPU
          - text: FPGA
          - text: QAT
          - text: RDMA
          - text: SRIO-V
---

## Requirements

Kata requires nested virtualization or bare metal. The Kata Containers runtime has a built-in command (kata-check) to 
determine if your host system is capable of running a Kata Container. [Learn how to use kata-check](http://bit.ly/katacheck).

<div class="columns">
  <div class="column">
    <div class="box is-primary-blue">
      <h4 class="box-title">Distributions</h4> 
      <div class="box-entry">
        Kata Containers is available on many distributions. View the [distro specific install guides](https://github.com/kata-containers/documentation/tree/master/install) for: <br /> 
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

