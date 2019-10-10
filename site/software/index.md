---
title: Software
subhead: Development activities in Kata Containers
description: Development activities in Kata Containers
---

Kata Containers is Apache 2 licensed software consisting of six components: Agent, Runtime, Proxy, Shim, Kernel and packaging of QEMU 2.11. It is designed to be architecture agnostic, run on multiple hypervisors and plug seamlessly into the containers ecosystem.
<br>

<a href="https://github.com/kata-containers" class="button is-primary-dark is-rounded">
  <span>EXPLORE ON GITHUB</span>

  <span class="ico">
    <img src="../.vuepress/theme/svg/arrow-left.svg" alt="Learn More" />
  </span>
</a>

<br>
<br>
<br>
<br>


## Architecture

  <!-- <a href="/assets/img/kata-explained1@2x.a43936f5.png">
    <img
      src="../.vuepress/theme/images/kata-explained1@2x.png"
      alt="title"
    />
  </a> -->
  <image-modal imgurl="../images/kata-explained1@2x.png" />

<br>

<div class="columns">
  <div class="column">
    <div class="box is-green">
     <div class="box-text"><div class="software-icon"><figure class="image is-64x64">
      <img src="../.vuepress/theme/svg/logo_ico1.svg">
      </figure></div><h3 class="is-software">Get Kata Containers</h3>
      <a href="https://github.com/kata-containers" class="a-primary-blue" >
        Go to Git Repository &nbsp <img src="../.vuepress/theme/svg/arrow-left_primary-dark.svg" class="a-primary-blue">
      </a></div>
    </div>
  </div>
  <div class="column">
    <div class="box is-green">
     <div class="box-text"><div class="software-icon" style="align-content: middle"><figure class="image is-64x64">
      <img style="height: 56.13px" src="../.vuepress/theme/svg/document_primary-dark.svg">
      </figure></div><h3 class="is-software">View the Documentation</h3>
      <a href="https://github.com/kata-containers/documentation" class="a-primary-blue">
        Get Started &nbsp <img src="../.vuepress/theme/svg/arrow-left_primary-dark.svg">
      </a></div>
    </div>
  </div>
</div>

<br>
<br>
<br>
<br>

## Kata Containers Integration with Kubernetes:

  <!-- <a href="/images/Airship_Diagram_SimplifiedArchitecture.jpg">
    <img
      src="/images/Airship_Diagram_SimplifiedArchitecture.jpg"
      alt="title"
    />
  </a> -->
  <image-modal imgurl="/images/katacontainers_kubernetes_integration_diagram.jpg" />

<p><hr /></p>
<p>&nbsp;</p>

<div class="container1">
  <h2 class="features">Integration Points</h2>
</div>


<div class="container2">

<div class="columns">

  <div class="column col1">
  
  <h4 class='is-centered'>Hypervisor:</h4>
    <span>Firecracker</span>
    <span>QEMU</span>
    <span>NEMU</span>
  </div>
  
  <div class="column">
    <h4>Architecture support:</h4>
    <span>X86_64</span>
    <span>arch64</span>
    <span>ppc64le</span>
    <span>s390x</span>
  </div>

  <div class="column col3">
    <h4>Hardware support:</h4>
    <span>Nvidia GPU</span>
    <span>FPGA</span>
    <span>QAT</span>
    <span>RDMA</span>
    <span>SRIO-V</span>
  </div>

</div>

</div>

<br>
<br>
<br>
<br>


## Requirements

Kata requires nested virtualization or bare metal. The Kata Containers runtime has a built-in command (kata-check) to determine if your host system is capable of running a Kata Container. [Learn how to use kata-check](http://bit.ly/katacheck).



<div class="columns">

  <div class="column ">

  <box withActions title="Distributions">
    Kata Containers is available on many distributions. View the [distro specific install guides] () for:

  <br/>

  <div class="columns">
    <div class="column"> 
      <ul><li>CentOS</li><li>Debian</li><li>Fedora</li><li>OpenSuse</li></ul>
    </div>
    <div class="column">
      <ul><li>RHEL</li><li>SLES</li><li>Ubuntu</li></ul>
    </div>
  </div>

  </box>


  </div>
  
  <div class="column">
    
  <box withActions title="Cloud Service Platform">
    Run Kata Containers on a cloud service platform:

  <div class="columns">
  <div class="column">
    <a href="https://aws.amazon.com/" target="_blank" >Amazon Web Services</a><br/>
    <a href="https://azure.microsoft.com/" target="_blank" >Microsoft Azure</a><br/>
    <a href="https://cloud.google.com/compute/" target="_blank" >Google Compute Engine</a><br/>
    <a href="https://vexxhost.com/" target="_blank" >Vexxhost OpenStack Cloud</a><br/><br/><br/>
  </div>
  </div>

  </box>

  </div>

</div>
