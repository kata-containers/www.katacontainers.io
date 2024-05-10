---
templateKey: blog-post
title: 4/26, Kata Containers Weekly Tech Update
author: Kata Containers
date: 2019-04-26T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

April 26, 2019. This update is authored by Kata community member, Graham Whaley.

**\# Overview**

Some of the world were on holiday early in the week, but plenty of stuff still happened in the world of Kata.

One way of getting a feel for progress on the code front is to have a look at the GitHub PR merge history, which can be seen in one form or another by issuing a GitHub query (in the GUI) formed somewhat like "org:kata-containers is:pr is:closed updated:2019–04–19..2019–04–26". Which you can see by following [this link](https://github.com/search?q=org%3Akata-containers+is%3Apr+is%3Aclosed+updated%3A2019-04-19..2019-04-26).

**\# What landed?**

Apprx 54 PRs landed, depending on how you interpret the Github data ;-)

We landed some PRs related to enabling ‘experimental features’ support (Kata release binaries will have experimental features built in, but disabled by default — you can enable them via the config file).

A PR related to the ‘persistent data’ feature landed, which is a key moving forwards with seamless upgrades in the future.

There was a lot of work recently around making smoother (and less painful and resource hungry) releases, including a PR that improves the documents and scripts to help automate the release process.

We landed the agent trace PR — hooray! — which I believe completes our first round of enabling trace for Kata (working and useful), and enables us to move into the second phase (more interoperability).

We added a nice docs table covering which of our CI jobs covers which piece of functionality:  
[https://github.com/kata-containers/ci#ci-job-matrix](https://github.com/kata-containers/ci#ci-job-matrix)

A slew of other fixes related to:  
\- document cleanups  
\- vm template/factory improvements  
\- some distro fixups (RHEL, SUSE etc.)  
\- testing with a new version of NEMU, based off Qemu 4.x  
\- initial testing of integration/move to Qemu 4.x  
\- some s390 additions (kernel configs, upload Jenkins job configs)

**\# Outside the repos**


Salvador posted an excellent blog post this week covering some of our CI/CD infrastructure, and how we work closely with a lot of external partners and parties to bring that to fruition:  
[https://medium.com/kata-containers/kata-containers-testing-and-packaging-powered-by-the-cloud-b752de2ee471](/kata-containers/kata-containers-testing-and-packaging-powered-by-the-cloud-b752de2ee471)

There was also a nice post from Mikka about using hardware acceleration under k8s with Kata and RuntimeClass:  
[https://kubernetes.io/blog/2019/04/24/hardware-accelerated-ssl-tls-termination-in-ingress-controllers-using-kubernetes-device-plugins-and-runtimeclass/](https://kubernetes.io/blog/2019/04/24/hardware-accelerated-ssl-tls-termination-in-ingress-controllers-using-kubernetes-device-plugins-and-runtimeclass/)

**\# What’s coming next week?**

It is the OSF Denver PTG next week — there are a whole bunch of Kata developers there with some focused discussions and effort. You can see details and links off to the agenda items at [https://medium.com/kata-containers/kata-containers-featured-at-open-infrastructure-summit-denver-april-2019-680c7bd3c1c6](/kata-containers/kata-containers-featured-at-open-infrastructure-summit-denver-april-2019-680c7bd3c1c6)

If you are in the area or at the PTG, do come along!

**\# Get involved**

Explore Kata Containers on [GitHub](https://github.com/kata-containers), [KataContainers.io](https://katacontainers.io/) and get involved! Connect with the community via [Slack](http://bit.ly/KataSlack) or IRC Freenode: #kata-dev, [Mailing List](http://lists.katacontainers.io/), [Weekly meetings](https://etherpad.openstack.org/p/katacontainers-2019-architecture-committee-mtgs) and [Twitter.](https://twitter.com/katacontainers?lang=en)