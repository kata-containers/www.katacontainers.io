---
templateKey: index-page
seo:
  title: About Kata Containers
  description: Kata Containers is an open source container runtime, building lightweight virtual machines that seamlessly plug into the containers ecosystem.
  url: https://katacontainers.io/
  image: /img/og-image.jpg
  twitterUsername: "@katacontainers"  
header:
  title: The speed of containers, the security of VMs
  subTitle: >- 
    Kata Containers is an open source container runtime, building lightweight 
    virtual machines that seamlessly plug into the containers ecosystem.
  image: /img/hero-image.jpg
  buttons:
    - text: Get Kata Containers 1.10
      link: https://github.com/kata-containers/runtime/releases
mainpitch:
  title: About Kata Containers
  image: /img/kata-explained1@2x.png
  description:
    - text: Kata Containers is an open source community working to build a secure container 
        runtime with lightweight virtual machines that feel and perform like containers, 
        but provide stronger workload isolation using hardware virtualization technology 
        as a second layer of defense.
    - text: Since launching in December 2017, the community successfully merged the best 
        parts of Intel Clear Containers with Hyper.sh RunV and scaled to include 
        support for major architectures including AMD64, ARM, IBM p-series and 
        IBM z-series in addition to x86_64. Kata Containers also supports multiple 
        hypervisors including QEMU, NEMU and Firecracker and integrates with the 
        containerd project among others.
    - text: The Kata Containers community is stewarded by the OpenStack Foundation (OSF), 
        which supports the development and adoption of open infrastructure globally. 
        The code is hosted at GitHub under the Apache 2 license.
features:
  title: Features
  rows:
    - image: /img/security-badge.svg
      title: Security
      text: >
        Runs in a dedicated kernel, providing isolation of network, I/O and memory and can utilize 
        hardware-enforced isolation with virtualization VT extensions.
    - image: /img/compatibiity-badge.svg
      title: Compatibility
      text: >
        Supports industry standards including OCI container format, Kubernetes CRI interface, as 
        well as legacy virtualization technologies.
    - image: /img/performance-growth.svg
      title: Performance
      text: >
        Delivers consistent performance as standard Linux containers; increased isolation without the 
        performance tax of standard virtual machines.
    - image: /img/simple.svg
      title: Simplicity
      text: >
        Eliminates the requirement for nesting containers inside full blown virtual machines; 
        standard interfaces make it easy to plug in and get started.
tables:
  leftTable:
    title: How to Get Involved.
    rows:
      - title: Stay in the loop
        text: >
          <p className="p-simple-item-bullet">Join the mailing list: <a href="http://lists.katacontainers.io">http://lists.katacontainers.io</a></p>
          <p className="p-simple-item-bullet">Slack: <a href="http://bit.ly/katacontainersslack">bit.ly/katacontainersslack</a>  IRC: <a href="#kata-dev">#kata-dev</a></p>      
      - title: Weekly Architecture Meetings
        text: >
          <p>Updates from the community on a weekly basis.</p> 
          <p className="p-simple-item-bullet">
            <a href="https://etherpad.openstack.org/p/katacontainers-2019-architecture-committee-mtgs">View the Etherpad</a>
          </p>        
      - title: Share your story
        text: >
          <p>Are you running Kata Containers?</p> 
          <p className="p-simple-item-bullet">Take the Kata Containers <a href="https://www.surveymonkey.com/r/KataContainers">User Survey!</a>
          </p>       
  rightTable:
    title: Kata Containers in Production
    text: >
      <p>Baidu is <a href="https://katacontainers.io/collateral/ApplicationOfKataContainersInBaiduAICloud.pdf">running Kata Containers in production</a> to support Function Computing, Cloud Container Instances, and Edge Computing. Running or evaluating Kata Containers? Share your feedback in our User Survey.</p> 
    button:
      text: Take the Survey
      link: https://www.surveymonkey.com/r/KataContainers
---
