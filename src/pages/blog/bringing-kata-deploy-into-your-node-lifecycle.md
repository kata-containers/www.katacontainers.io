---
templateKey: blog-post
title: Bringing kata-deploy into your node lifecycle
author: Fabiano Fidêncio
date: 2026-11-02T00:00:00.000Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

Many teams running Kata Containers already have a controller responsible for
managing their Kubernetes nodes. That controller decides when a node can undergo
maintenance, how workloads should be drained, how many nodes can change at once,
and when a node can return to service.

Installing and upgrading Kata Containers needs to fit into that lifecycle. With
kata-deploy's finite installation stages, we can reuse Kata's installation logic
within those existing workflows. The recently merged [NodeWright][3] integration
provides one example of this approach—and we expect more.

**A runtime installation changes the host**

Kata Containers provides isolation for workloads, but installing it involves
changes to the infrastructure those workloads depend on. The installer places
binaries, guest kernels, and other artifacts on the host, updates the container
runtime configuration, and, depending on the Kubernetes distribution and
configuration, restarts the relevant service. Node preparation can also involve
kernel modules and SELinux policy. These are privileged host operations. [Kata
deployment documentation][1]

This makes runtime installation an intrusive operation, as it is for any
container runtime. Treating it like an ordinary application rollout misses the
operational consequences: changing the service responsible for starting pods
requires coordination with the workloads already using that node.

For an existing node, that means deciding when disruption is acceptable and how
to handle it. For a newly provisioned node, it means keeping workloads from
arriving before the runtime is ready. Across a fleet, it means controlling how
many nodes undergo the change together.

Where an existing controller already owns these decisions, Kata installation
should participate in its workflow.

**Finite stages provide integration points**

kata-deploy's Job deployment model breaks installation into ordered stages that
perform their work and exit. This creates useful boundaries for another
lifecycle manager: it can invoke a stage, observe success or failure, and decide
whether the node may advance.

The installer exposes commands for preparing the host, checking prerequisites,
installing artifacts, and configuring the container runtime. Cleanup has
corresponding stages for reverting the runtime configuration and removing
artifacts. The NodeWright adapter calls these commands directly. [Installer
integration][2]

These finite stages let us divide responsibility clearly. kata-deploy supplies
the knowledge of how to install and remove Kata. The lifecycle manager supplies
the policy governing when that work happens, which nodes it affects, and what
evidence is required before proceeding.

Stage boundaries also make failures actionable. A failed prerequisite check can
stop installation before runtime configuration changes. A failed installation or
validation step can keep a node out of service while the operator investigates.
Integrators still need to define retry, recovery, and upgrade policies; finite
execution gives them concrete points at which to apply those policies.

**NodeWright puts this into practice**

NodeWright manages host customizations through a Kubernetes operator. Its
Kata Containers package connects NodeWright's rollout, drain, and package
lifecycle controls to kata-deploy's finite installer commands. The [initial
integration][4], merged on October 28, 2026, targets Kata's NVIDIA CPU runtime
profile.

In that integration, host preparation runs Kata's policy, module-loading, and
prerequisite stages. Runtime changes participate in NodeWright's cordon and
drain workflow, while kata-deploy performs the installation and any required
service restart.

The same approach applies when upgrading Kata or changing its configuration:
NodeWright coordinates the node, and kata-deploy handles the runtime changes.

Completion also includes a functional check: the package creates a temporary pod
using the Kata RuntimeClass on the affected node, waits for successful guest
execution, and confirms that the pod has been removed. Failure blocks
completion. This ties the node's lifecycle to evidence that Kata can actually
run a workload. [Package lifecycle documentation][5]

For newly provisioned nodes, NodeWright can keep workloads from being scheduled
until the required runtime setup completes. [Runtime-required behavior][6]

The package has a specific runtime scope and documented prerequisites. Its
broader significance is the integration pattern: an existing node controller can
incorporate Kata's installer into the lifecycle it already manages.

**Bring your lifecycle manager**

We expect NodeWright to be one of several integrations. Different environments
will have different controllers, maintenance policies, provisioning systems, and
definitions of readiness. We want kata-deploy's finite stages to support those
differences while keeping Kata installation knowledge shared upstream.

If you already manage node lifecycles, we encourage you to explore how these
stages fit into your workflow—and come back to the Kata Containers community
with what you learn.

Tell us where a stage boundary is missing, where failure reporting needs
improvement, or where recovery is difficult to coordinate. Bring your proposed
integration, including the rough edges. We want to work with you to improve
these deployments and make Kata Containers easier to operate within the systems
you already trust to manage your nodes.

[1]: https://github.com/kata-containers/kata-containers/blob/main/docs/helm-configuration.md
[2]: https://github.com/NVIDIA/nodewright-packages/blob/main/kata-containers/skyhook_dir/run-inner.sh
[3]: https://github.com/NVIDIA/nodewright
[4]: https://github.com/NVIDIA/nodewright-packages/pull/172
[5]: https://github.com/NVIDIA/nodewright-packages/blob/main/kata-containers/README.md#configuration-and-lifecycle
[6]: https://github.com/NVIDIA/nodewright/blob/main/docs/user-guide/runtime-required.md
