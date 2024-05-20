---
templateKey: blog-post
title: Up for a challenge? Unit testing y’all!
author: Kata Containers
date: 2020-06-09T01:32:05.627Z
category:
  - value: category-edic1zzR0
    label: News & Announcements
---

Want to learn more about the internals of Kata but don’t know where to start?

Are you keen to contribute to Kata?

Can you code in golang or rust?

If you answer yes to those questions, read on…!

**Summary**

We’re looking to increase the unit test coverage for the development versions of the Kata 2.0 (Although we’re focussing on 2.0, these new tests will also be backported where possible). Specifically, we want to increase coverage levels for the following Kata 2.0 components:

*   [runtime](https://github.com/kata-containers/kata-containers/tree/2.0-dev/src/runtime) (written in golang)
*   [the new agent](https://github.com/kata-containers/kata-containers/tree/2.0-dev/src/agent) (written in rust)

The unit test coverage levels have slipped for the runtime and the new agent is so new it still lacks tests in certain areas.

This is an important activity as you have the chance to find (and potentially fix!) bugs before they are unleashed into the wild.

**Details**

There is a top-level issue for each component ([runtime](https://github.com/kata-containers/kata-containers/issues/237), [agent](https://github.com/kata-containers/kata-containers/issues/275)).

Each of those top-level issues has a number of related issues that breaks the work down into smaller chunks (there is an issue per directory/module, or even per file in some cases).

**Tracking**

I’ve added all those task issues into the [Kata 2.0 GitHub project.](https://github.com/kata-containers/kata-containers/projects/2)

**Get involved**

If you’d like to be involved, please let us know by adding a comment to [here](https://github.com/kata-containers/kata-containers/issues/237) or [here](https://github.com/kata-containers/kata-containers/issues/275) and we can help you find an interesting area to work on with us. Conversely, please don’t start writing tests without telling us to avoid disappointment when we discover multiple people are writing the same set of tests!

**Advice**

You should definitely read [this](https://github.com/kata-containers/community/blob/master/CONTRIBUTING.md) first and you may find the [unit test advice](https://github.com/kata-containers/tests/blob/master/Unit-Test-Advice.md) and [Kata test utilities](https://github.com/kata-containers/kata-containers/tree/2.0-dev/src/runtime/pkg/katatestutils) helpful (the latter for golang tests).

Before writing any new tests, please look at the existing tests for inspiration. Note also that some tests must run as root, whereas others must run as a non-privileged user. It’s important to always consider which users your tests should run as (and we have the infrastructure to ensure the tests DTRT).

**Team effort**

If you want to volunteer to write some tests for a particular area and are happy to do that on your own, great! However, please don’t think this is expected — if you volunteer, we’re more than happy to help you out — remember that GitHub issues can be assigned to multiple users.