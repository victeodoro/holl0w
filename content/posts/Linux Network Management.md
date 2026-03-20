---
title: Linux Network Management
description: Notes from Desec Novo Pentest Profissional's course
date: 2026-03-16
type: Note
tags: [Linux, OffSec]
---

- `ifconfig` command shows the configured interfaces, such as ethernet, wireless and loopback interfaces
- You may change the ip address of an interface using `ifconfig eth0 <ip> netmask <netmask>`, but this setting won't be saved
- You can add permanent settings to a interface editing the file `/etc/network/interefaces`:
```
# interfaces(5) file used by ifup(8) and ifdown(8)
# Include files from /etc/network/interfaces.d:
source /etc/network/interfaces.d/*

auto eth0
iface eth0 inete dhcp
```
- After editing the file, you may restart the network service by using both `sudo systemctl restart networking` and `/etc/init.d/networking restart`. This should change the configured interface. 
- You set a static IP address by changing the configuration a bit:
```
# interfaces(5) file used by ifup(8) and ifdown(8)
# Include files from /etc/network/interfaces.d:
source /etc/network/interfaces.d/*

auto eth0
iface eth0 inete static
address 192.168.0.100
netmask 255.255.255.0
gateway 192.168.0.1
```
- You can use `dhclient` command to manage interfaces at a DHCP network
- Using the command `route` you may see created routes, such as the gateway, from each interface you have:
```
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         _gateway        0.0.0.0         UG    600    0        0 wlo1
192.168.0.0     0.0.0.0         255.255.255.0   U     600    0        0 wlo1
```
- You can delete a route using the command `route del default`. This will delete the route to "default" destination, in which case deletes your gateway route.
- Without a gateway route, you don't have Internet access. To recreate the gateway route, use the command `route add default gw 192.168.0.1` so you can access the Internet again.
- You can use the `netstat` command to check network connections. You can choose from a bunch of different flags that change the output. For example, you could list (`-l`) the number port (`-n`) of any TCP connections (`-t`) showing the name of the protocol used (`-p`)
```
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address    Foreign Address   State       PID/Program name    
tcp        0      0 0.0.0.0:22       0.0.0.0:*         LISTEN      1874/sshd
tcp        0      0 :::22            :::*              LISTEN      1874/sshd
```