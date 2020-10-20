---
templateKey: index-page
seo:
  description: >-
    Kata Containers is an open source container runtime, building lightweight
    virtual machines that seamlessly plug into the containers ecosystem.
  image: /img/android-chrome-192x192.png
  title: Kata Containers - Open Source Container Runtime Software
  twitterUsername: '@katacontainers'
  url: 'https://katacontainers.io/'
header:
  buttons:
    - link: 'https://github.com/kata-containers/kata-containers/releases/tag/2.0.0'
      text: Get the Kata 2.0 release
  image: /img/hero-image.jpg
  subTitle: >-
    Kata Containers is an open source container runtime, building lightweight 
    virtual machines that seamlessly plug into the containers ecosystem.
  title: 'The speed of containers, the security of VMs'
mainpitch:
  description:
    - text: >-
        Kata Containers is an open source community working to build a secure
        container runtime with lightweight virtual machines that feel and
        perform like containers, but provide stronger workload isolation using
        hardware virtualization technology as a second layer of defense.
    - text: >-
        Since launching in December 2017, the community successfully merged the
        best parts of Intel Clear Containers with Hyper.sh RunV and scaled to
        include support for major architectures including AMD64, ARM, IBM
        p-series and IBM z-series in addition to x86_64. Kata Containers also
        supports multiple hypervisors including QEMU, NEMU and Firecracker and
        integrates with the containerd project among others.
    - text: >-
        The Kata Containers community is stewarded by the Open Infrastructure
        Foundation, which supports the development and adoption of open
        infrastructure globally. The code is hosted at GitHub under the Apache 2
        license.
  image: /img/kata-explained1@2x.png
  title: About Kata Containers
features:
  rows:
    - image: /img/security-badge.svg
      text: >
        Runs in a dedicated kernel, providing isolation of network, I/O and
        memory and can utilize  hardware-enforced isolation with virtualization
        VT extensions.
      title: Security
    - image: /img/compatibiity-badge.svg
      text: >
        Supports industry standards including OCI container format, Kubernetes
        CRI interface, as  well as legacy virtualization technologies.
      title: Compatibility
    - image: /img/performance-growth.svg
      text: >
        Delivers consistent performance as standard Linux containers; increased
        isolation without the  performance tax of standard virtual machines.
      title: Performance
    - image: /img/simple.svg
      text: >
        Eliminates the requirement for nesting containers inside full blown
        virtual machines;  standard interfaces make it easy to plug in and get
        started.
      title: Simplicity
  title: Features
tables:
  leftTable:
    rows:
      - text: >
          <p className="p-simple-item-bullet">Join the mailing list: <a
          href="http://lists.katacontainers.io">http://lists.katacontainers.io</a></p>
          <p className="p-simple-item-bullet">Slack: <a
          href="http://bit.ly/katacontainersslack">bit.ly/katacontainersslack</a> 
          IRC: <a href="#kata-dev">#kata-dev</a></p>      
        title: Stay in the loop
      - text: >
          <p>Updates from the community on a weekly basis.</p>  <p
          className="p-simple-item-bullet">
            <a href="https://etherpad.openstack.org/p/katacontainers-2019-architecture-committee-mtgs">View the Etherpad</a>
          </p>        
        title: Weekly Architecture Meetings
      - text: >
          <p>Are you running Kata Containers?</p>  <p
          className="p-simple-item-bullet">Take the Kata Containers <a
          href="https://www.surveymonkey.com/r/KataContainers">User Survey!</a>
          </p>       
        title: Share your story
    title: How to Get Involved.
  rightTable:
    button:
      link: 'https://www.surveymonkey.com/r/KataContainers'
      text: Take the Survey
    text: >
      <p>Baidu is <a
      href="https://katacontainers.io/collateral/ApplicationOfKataContainersInBaiduAICloud.pdf">running
      Kata Containers in production</a> to support Function Computing, Cloud
      Container Instances, and Edge Computing. Running or evaluating Kata
      Containers? Share your feedback in our User Survey.</p> 
    title: Kata Containers in Production
---

