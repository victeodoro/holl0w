---
title: Linux Service Management
description: Notes from Desec Novo Pentest Profissional's course
date: 2026-03-16
type: Note
tags: [Linux, OffSec]
---

- To start a service, you can use both the `systemctl start foo`or `service foo start` commands, being the main difference the order of the parameters
```
victor@victeodoro:~$ systemctl status docker
○ docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; preset: enabled)
     Active: inactive (dead)
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com

victor@victeodoro:~$ service docker status
○ docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; preset: enabled)
     Active: inactive (dead)
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com

```
- To stop a service, choose between the commands `systemctl stop foo` and `service foo stop`
- To make a service available from the boot of the system, you may need to enable them using `systemctl enable foo` or `service foo enable`. To prevent this behavior, you can use the `disable` instead.