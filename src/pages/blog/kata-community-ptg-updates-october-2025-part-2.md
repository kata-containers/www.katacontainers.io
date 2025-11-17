---
templateKey: blog-post
title: Kata Containers at the October 2025 Project Teams Gathering (PTG) - Part 2
author: Ildiko Vancsa
date: 2025-11-17T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

The Kata Containers community participated in the recent online [PTG](https://openinfra.dev/ptg/) event in October, 2025.

The community had sessions booked on 3 days during the event to discuss topics including release planning, process improvements, and more. This article is the first piece of a two-piece series and shares the highlights of the community’s discussions at the conference.

# Using AI Tools for Development and Reviews
As AI tools are becoming part of everyone’s daily life in the workspace and otherwise, it also needs to be discussed within open source communities how contributors use these tools as well as treat contributions that were created with the use of AI.

The conversation started with reflecting on the OpenInfra Foundation [Policy for AI Generated Content](https://openinfra.org/legal/ai-policy), which outlines some criteria and processes to submit and review content created with the use of AI. This policy applies to all OpenInfra projects. It is important to have a policy like this in place, as it provides guidelines for the use of AI, and with that it also encourages contributors to take advantage of new technologies as part of their daily work.

It came up during the conversation that the policy doesn’t call out compatibility with the Developer Certificate of Origin (DCO) method that the Kata community is using for contributions. Since the PTG it was confirmed that the use of AI does not conflict with DCO, however, contributors are still responsible for determining whether or not they have the right to submit their contributions.

Session attendees noted that the above policy mainly provides resources to be able to accept contributions created with the use of AI, but it doesn’t cover what tools and how to use to manage their daily work. While AI tools are not sufficient for all aspects of maintaining the project, contributors have good experience with AI doing the first round of code reviews as they seem to catch basic errors. While there were not decisions made during the session, there was an agreement to keep exploring options to use AI throughout the contribution and project maintenance workflows.

# Cyber Resilience Act (CRA) and Its Impact on the Kata Community
The Cyber Resilience Act (CRA) is a new legislation in the European Union, which is already approved by the EU Commission. Relevant agencies and standards bodies are now working on defining the processes and ways for companies to fulfill their obligations according to the law when it takes full affect.

While there are multiple actors defined in the CRA, manufacturers with products sold on the EU market have the most obligations. The CRA intends to ensure that companies are liable for damage that vulnerabilities in their products cause to their users. While the CRA applies widely to all products, many of those depend on or consists of open source software. Due to that circumstance the Kata Containers community utilized the PTG session to discuss how the CRA is going to affect the project.

The session was a good opportunity to clarify that open source communities have very limited responsibilities to fulfill. The Linux Foundation and OpenInfra Foundation are so called open source stewards according to the CRA, which allows them to guide and protect all open source projects they support. As an open source project, the Kata Containers community will need to ensure that they have a clear vulnerability management process, and are capable and ready to receive and handle vulnerabilities that are reported by manufacturers and users.

You can check the Open Regulatory Compliance (ORC) WG [resources](https://github.com/orcwg/cra-hub/blob/main/faq.md) for more information about the CRA and it’s relation to open source.

# Vulnerability Management Team and Process
The community had a longer discussion about vulnerability management, as the process they used in the past needs to be adjusted to the community’s current tools, processes and structure.

It has been decided that the main tool to report and track vulnerabilities and the progress towards fixing them will be GitHub, since the rest of the project’s resources are also stored there. There’s also an agreement that not everyone has, or wants to have, a GitHub account who might uncover and want to report a vulnerability. This opened up the conversation to decide what other ways the community will provide for users, and this discussion lead to revisiting how to structure and maintain the Vulnerability Management Team for the Kata Containers project.

While the conversation is still ongoing to finalize details, contributors came to an agreement on a couple of items. Architecture Committee (AC) members will also act as the Vulnerability Management Team (VMT). These two responsibilities match very well, since the AC members are very engaged to the project’s goals, while also know the project’s architecture, code and the community very well. This will help them to quickly respond to vulnerability reports and work with the community and users to fix them.

The VMT still need to work out the details of the vulnerability management process, which will be reflected in the project’s documentation on GitHub.


For further notes of the discussions at the event, and to access session recordings, please refer to the session [etherpad](https://etherpad.opendev.org/p/r.3bf2b38fb20b467af1a2baf6ba6ab325) which also contains the link to the recording of the session.

# About Kata Containers
If you would like to learn more about the project and get involved check out the [website](https://www.katacontainers.io) for more information or [download the code](https://github.com/kata-containers) and start to experiment with the runtime. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/kata_containers_user_survey) and help the community improve the project based on your feedback.
