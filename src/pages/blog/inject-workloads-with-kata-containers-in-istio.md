---
templateKey: blog-post
title: Inject Workloads with Kata Containers in Istio
author: Kata Containers
date: 2023-03-13T01:32:05.627Z
category:
  - value: category-6-wjkXzEM2
    label: Features & Updates
---

Written by [Steve(Huailong) Zhang](https://github.com/zhlsunshine)

[**Kata Containers**](https://github.com/kata-containers), which is a merger of two existing open source projects - **Intel Clear Containers** and **Hyper runV**, is an open source project and community working to build a standard implementation of lightweight Virtual Machines (VMs) that feel and perform like containers, but provide the workload isolation and security advantages of VMs.

Based on the definition above, it’s natural for me to think about how to achieve the Kata Containers as one of multiple container runtimes in Istio to inject the workload. The good news is that I successfully deployed it in my environment, and this blog will introduce what benefits we can get from Kata Containers and how to deploy it.

# What’s the benefit of using Kata Containers?

Kata Containers is designed to provide greater isolation between containers while still maintaining the performance and efficiency provided by other runtimes. There is one critical difference for Kata Containers to be a special container runtime: Kata runtime enforces a deeper level of isolation between containers than other runtimes by following below two points:

*   Each pod runs its own kernel instead of sharing the host system’s kernel with the host and other containers using `cgroups` in Kata
*   Kata Containers can take advantage of security features provided by hardware-level virtualization (meaning virtualization that is built into CPUs and made available using VT extensions)

However, it’s different from common virtual machines to take a minute or two for starting and wasting a fair amount of hardware resources on establishing container isolation, Kata starts just as fast and consumes resources just as efficiently as other containers. The containers become more secure with the lowest cost：

![](https://miro.medium.com/v2/resize:fit:700/1*q7K7H-fGSzfEYUCKKHuHIA.png)

# How to deploy workload injection with Kata Containers in Istio:

Environment Prepared

*   Containerd 1.5.6
*   Kata Runtime v3.0.2
*   Kubernetes Cluster via kubeadm (do not use Kind) v1.23
*   Istio v1.17-dev

## Install Kata Containers

There are 6 methods to install Kata Containers via the installation guides found [here](https://github.com/kata-containers/kata-containers/blob/main/docs/install/README.md) and [here](https://github.com/kata-containers/kata-containers/blob/main/docs/install/README.md). I have tried two of them (Using snap and Manual), and I recommend the `manual` method because it’s mess to me when using snap. So let’s get into [Manual guides](https://github.com/kata-containers/kata-containers/blob/main/docs/install/container-manager/containerd/containerd-install.md).

Key highlights:

1.  After untarring the Kata Containers package, move all files into `/opt/kata` or `/$HOME/opt/kata` directory, depending on your system & user. Once complete, there should be four files — `bin` , `libexec`, `runtime-rs`, and `share` under `/opt/kata` .

2.  Copy `/opt/kata/share/defaults/kata-containers/configuration.toml` into `/etc/kata-containers/configuration.toml` Note: Please choose the corrected configuration file for you, and create the `/etc/kata-containers` directory if it does not exist.

3.  Create 5 symbolic links (symlinks) for Kata Containers installation files by following commands:
    
    <pre>$ ln -s /opt/kata/bin/kata-runtime /usr/local/bin/kata-runtime</pre>

    <pre>$ ln -s /opt/kata/bin/containerd-shim-kata-v2 /usr/local/bin/containerd-shim-kata-v2</pre>

    <pre>$ ln -s /opt/kata/bin/kata-monitor /usr/local/bin/kata-monitor</pre>

    <pre>$ ln -s /opt/kata/bin/kata-collect-data.sh /usr/local/bin/kata-collect-data.sh</pre>

    <pre>$ ln -s /opt/kata/bin/qemu-system-x86_64 /usr/local/bin/qemu-system-x86_64</pre>

Please refer to [Kata Containers installation guides](https://github.com/kata-containers/kata-containers/blob/main/docs/install/README.md) for more detail.

## Configure Containerd correctly

This content is included in [Configuring Containerd to use Kata Containers](https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/containerd-kata.md#configuration), however, I just want to simplify the `plugins` configuration for Containerd by using [RuntimeClass](https://kubernetes.io/docs/concepts/containers/runtime-class/) as shown below:

    [plugins."io.containerd.grpc.v1.cri".containerd]

    default_runtime_name = "runc"

    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes]

    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata]

    runtime_type = "io.containerd.kata.v2"

    privileged_without_host_devices = true

    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata.options]

    ConfigPath = "/opt/kata/share/defaults/kata-containers/configuration.toml"

    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]

    runtime_type = "io.containerd.runc.v2"

    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]

    SystemdCgroup = true

In this configuration, I define two types of runtime: `runc` and `kata` and default by `runc`.

Note: If Containerd configuation is changed, you will need to reload & restart services using the commands `sudo systemctl daemon-reload` and `sudo systemctl restart containerd`.

## Configure kubelet correctly

This content is included in [Configure kubelet to use Kata Containers](https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/how-to-use-k8s-with-containerd-and-kata.md#configure-kubelet-to-use-containerd), the configuration file `/etc/systemd/system/kubelet.service.d/10-kubeadm.conf` is below:

    $ Environment="KUBELET_EXTRA_ARGS= — container-runtime=remote — container-runtime-endpoint=unix:///run/containerd/containerd.sock — cgroup-driver=systemd"

# Inject workloads with Kata Containers in Istio

Generally, there should be no difference when installing k8s cluster and Istio, demonstrated below as I install cluster via `kubeadm` command:

    $ kubeadm init — cri-socket=unix:///run/containerd/containerd.sock — pod-network-cidr=10.244.0.0/16 — v=5 — ignore-preflight-errors=all`

_Then install Istio via istioctl command_ `istioctl install -y`

Based on the **Containerd** configuration from before, `runc` is the default container runtime, which can be verified with the command: `$ sudo systemctl status containerd`

![](https://miro.medium.com/v2/resize:fit:700/1*tOj55ay6VP4khFj2RE-v_g.png)

I use [RuntimeClass](https://kubernetes.io/docs/concepts/containers/runtime-class/) to launch the Kata Containers, using the `yaml` file `kata-runtimeclass.yaml` below:

    apiVersion: node.k8s.io/v1  
    kind: RuntimeClass  
    metadata:
      name: kata-runtime  
    handler: kata

The `RuntimeClass` `CustomResource` (CR) name is `kata-runtime` and the `handler` field is specified as `kata`. Create this CR by command:

    $ kubectl apply -f kata-runtimeclass.yaml

I use `httpbin` as an example by using `httpbin.yaml`, however, there should be a little change for it, and the final yaml is below:

    apiVersion: v1  
    kind: ServiceAccount  
    metadata:  
    name: httpbin  
    - -  
    apiVersion: v1  
    kind: Service  
    metadata:  
    name: httpbin  
    labels:  
      app: httpbin  
      service: httpbin  
    spec:  
    ports:  
    - name: http  
    port: 8000  
    targetPort: 80  
    selector:  
    app: httpbin  
    - -  
    apiVersion: apps/v1  
    kind: Deployment  
    metadata:  
    name: httpbin  
    spec:  
    replicas: 1  
    selector:  
      matchLabels:  
      app: httpbin  
      version: v1  
    template:  
      metadata:  
      labels:  
        app: httpbin  
        version: v1  
      spec:  
      runtimeClassName: kata-runtime  
      serviceAccountName: httpbin  
      containers:  
      - image: docker.io/kennethreitz/httpbin  
        imagePullPolicy: IfNotPresent  
        name: httpbin  
        ports:  
        - containerPort: 80

Be mindful of the presence of an extra `runtimeClassName: kata-runtime` field in the `containers` section of the Deployment. I have already defined the `RuntimeClass` CR as `kata-runtime`. Another important note is that the `httpbin` ServiceAccount is required, because Kata Containers needs a cluster role.

Now it is time to deploy this service using the following command:

    $ kubectl apply -f <(istioctl kube-inject -f httpbin-hsm.yaml)

Verify the workload as demonstrated below:

![](https://miro.medium.com/v2/resize:fit:700/1*Lt3zxarW27GOvcuJda1wtA.png)

There should be a new Runtime Class Name property, as is shown in the above red rectangle box.

![](https://miro.medium.com/v2/resize:fit:700/1*H1WS3UwDBdUJoAWub2Lmfg.png)

Besides the Containerd `containerd-shim-runc-v2`, there are also other processes for Kata Containers shown in the above red rectangle box, such as `containerd-shim-kata-v2`, `virtiofsd` and `qemu-system-x86_64`. This is because I deploy a service which requires Kata Containers to inject in Cluster.

# Conclusion

*   Basically, there are not many differences for using Kata Containers with other generic container runtimes in Istio from my use case: deploy `httpbin` and `bookinfo`, but we still need to verify more other things, such as network CNI situations, Istio CNI enablement and so on.
*   There may be multiple container runtimes according to different requirements in Istio later in the same environment at the same time, and we need to be aware of this.

# About the author

[Steve(Huailong) Zhang](https://github.com/zhlsunshine) has worked for Alcatel-Lucent, Baidu and IBM to engage in cloud computing research and development. Huailong is currently working for Intel China as a cloud-native software engineer, focusing on cloud-native service mesh technical fields. He is an Istio maintainer and Linkerd developer. He also leads and participates in Istio’s Dual Stack feature support work (to be officially released in [Istio 1.17](https://istio.io/latest/news/releases/1.17.x/announcing-1.17/#istio-dual-stack-support)).
