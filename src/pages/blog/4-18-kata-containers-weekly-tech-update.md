---
templateKey: blog-post
title: 4/18, Kata Containers Weekly Tech Update
author: Kata Containers
date: 2019-04-22T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

April 18, 2019. This update is authored by Kata community member, James Hunt.

**\# Intro**

The Rota Team \[1\] are going to start summarising what’s been happening weekly, so folk can get a regular update on the pulse of the project. This is the first such summary so savour it ;)

**\# Why?**

We’re putting these summaries together because Kata generates a lot of github activity. Even if you are keeping up with that firehose, it can be difficult to understand the big picture and easy to miss the details as they flash by. Conversely, it’s also important to realise that if the mailing list/irc/slack happens to be quiet one day, that doesn’t mean nothing is going on — far from it! ;)

Hopefully, these regular mails will deal with both scenarios and provide a gentle way to get an insight into the project \[2\].

**\# Scene setting**

Having said all the above, it actually has been a relatively quiet week :) Lots of folk have been "heads down", focusing on particular features and issues (which you’ll hear about soon), and others are on holiday. It’s also a short week this week (and next) for some of us. So, excuses out of the way, what happened this "week"…?

**\# What landed**

\- Release work: the Release Team has been busy with lots of backport and alpha release PRs across the repos. These are not new releases but a backlog due to a few tests failing which caused CI failures. We’ve been investigating the failures and aside from the obvious immediate fixes have been thinking about ways to improve our processes and the CI (more info at a future date…)

\- Linter fixes: we recently switched from gometalinter to golangci-lint. The shift has been relatively painless (thanks Ganesh!) but a few issues needed to be resolved.

\- SLES in the CI: Thanks to Gaby, we added SLES support to our CI! [https://github.com/kata-containers/ci/pull/142](https://github.com/kata-containers/ci/pull/142)

We’ve had an impressive run of Jenkins changes recently as Debian and RHEL were also added recently — take a look: [http://jenkins.katacontainers.io/](http://jenkins.katacontainers.io/). We have more Jenkins goodness that should land next week, so stay tuned!

\- CI: We added Q35 machine type CI tests:

[https://github.com/kata-containers/ci/pull/144](https://github.com/kata-containers/ci/pull/144)

We added yet another CI test dimension.

\- CI: Salvador started to map out the various CI combos we test with into a mega-table. If you don’t know what our CI does, this will give you an idea of some of the complexity it has to deal with: it’s an impressive beast! Take a look:

[https://github.com/kata-containers/ci/pull/146/files](https://github.com/kata-containers/ci/pull/146/files)

\- Runtime: A small but important PR that fixes how ephemeral volumes are treated: [https://github.com/kata-containers/runtime/pull/1439](https://github.com/kata-containers/runtime/pull/1439)

\- Runtime: a VMCache/VM templating fix landed to allow both features to work together: [https://github.com/kata-containers/runtime/pull/1409](https://github.com/kata-containers/runtime/pull/1409/files)

To learn about these features, look at your configuration.toml file. But also take a look at the documents here: [https://github.com/kata-containers/documentation/tree/master/how-to](https://github.com/kata-containers/documentation/tree/master/how-to)

**\# Get involved**

We currently have 52 PRs in the queue \[3\] that are potentially ready to land. That’s 52 chunks of bugfix and feature goodness that you \*cannot\* currently take advantage of (bad!)

If you’d like to help get that juicy new code merged so you and others can benefit, please consider helping us out by reviewing PRs:

\- [https://github.com/kata-containers/community#join-us](https://github.com/kata-containers/community#join-us)

\- [https://github.com/kata-containers/community/blob/master/PR-Review-Guide.md](https://github.com/kata-containers/community/blob/master/PR-Review-Guide.md)

\- [https://github.com/kata-containers/community/blob/master/CONTRIBUTING.md](https://github.com/kata-containers/community/blob/master/CONTRIBUTING.md)

No previous experience necessary and we only bite when eating! So if you’d like to join us Krazy Kats, that would be purrrfect! Reviewing PRs also happens to be one of the best ways to learn about Kata — just dive in!

But maybe that isn’t your thing? Maybe you’re more of a Jenkins Guru, or a Test Code Maestro, a Documentation Zealot, a Deft Debugger, a Process Warrior, a Rock Star Dev, a l33t Packager or a Community God? Whatever your skills and passions, given the scope of the project and the breadth of materials in our repos, I think it’s safe to say we can find you something shiny and tantalising :)

**\# Finally**

To reiterate, this is a very brief summary of what actually landed this week. It’s far from comprehensive. It’s also worth reiterating that this is just a summary of what actually \*landed\*. Lots of new PRs were raised this week so we might want to consider distilling those too in a future weekly roundup. What do folk think?

**\# Fun Fact**

All the static analysis checks we run in our CI are collected in \[4\]. These checks aren’t just for code — we check documentation, license headers, URLs, commits, vendor changes and more. You can run this script on a dev box and specify which class of checks to run if you want to give it a spin.

The script is also due to get a couple of interesting additions soon… but I’m going to leave you in suspense: you’ll have to read about them in future summary mails! ;)

Cheers,  
James

\[1\] — [https://github.com/kata-containers/community/wiki/Review-Team-Rota](https://github.com/kata-containers/community/wiki/Review-Team-Rota)  
\[2\] — If you want more/less detail, or more/less bad jokes, let us know!  
\[3\] — See, I told you we’d been busy ;)  
\[4\] — [https://github.com/kata-containers/tests/blob/master/.ci/static-checks.sh](https://github.com/kata-containers/tests/blob/master/.ci/static-checks.sh)

Explore Kata Containers on [GitHub](https://github.com/kata-containers), [KataContainers.io](https://katacontainers.io/) and get involved! Connect with the community via [Slack](http://bit.ly/KataSlack) or IRC Freenode: #kata-dev, [Mailing List](http://lists.katacontainers.io/), [Weekly meetings](https://etherpad.openstack.org/p/katacontainers-2019-architecture-committee-mtgs) and [Twitter.](https://twitter.com/katacontainers?lang=en)