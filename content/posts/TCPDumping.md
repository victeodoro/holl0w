---
title: TCPDumping
description: a wild .pcap appears
date: 2026-03-23
type: Article
tags: [Linux, OffSec, tcpdump, Networking]
---

Hey, someone on the blue team just sent a `.pcap` file saying someone let a port scanner running. I know, I know, it's strange someone sending a `.pcap` file thirty minutes after we start the work, but hey, you wanted to work as cybersecurity professional, right? So `tcmpdump` that thing. We need to extract as much information as possible including the `IP protocol`, so use `-v` and `-n`

```
bud@myawesomepc:~/Documents$ sudo tcpdump -vnr portscanlog.pcap
reading from file portscanlog.pcap, link-type EN10MB (Ethernet), snapshot length 65535
17:33:12.681940 IP (tos 0x0, ttl 64, id 2822, offset 0, flags [DF], proto TCP (6), length 60)
    192.168.0.104.39907 > 173.45.93.20.0: Flags [S], cksum 0x2e02 (correct), seq 4094602155, win 29200, options [mss 1460,sackOK,TS val 5349549 ecr 0,nop,wscale 6], length 0
17:33:12.964000 IP (tos 0x0, ttl 52, id 1617, offset 0, flags [none], proto TCP (6), length 40)
    173.45.93.20.0 > 192.168.0.104.39907: Flags [R.], cksum 0xa8df (correct), seq 0, ack 4094602156, win 0, length 0
17:33:12.964593 IP (tos 0x0, ttl 64, id 32671, offset 0, flags [DF], proto TCP (6), length 60)
...
```

Oh, okay. Didn't think it would be a large `.pcap`. Sure, sure, run `cut` it to extract only the `source IPs`. Maybe that will help narrow down if it was really a port scanner and not a desperate client. 

```
bud@myawesomepc:~/Documents$ sudo tcpdump -vnr portscanlog.pcap | cut -d " " -f5 | grep -v "ttl" | sort -u
reading from file portscanlog.pcap, link-type EN10MB (Ethernet), snapshot length 65535
173.45.93.20.0
173.45.93.20.1
173.45.93.20.10
173.45.93.20.100
173.45.93.20.101
173.45.93.20.102
173.45.93.20.103
173.45.93.20.104
...
192.168.0.104.33029
192.168.0.104.33070
192.168.0.104.33094
192.168.0.104.33231
192.168.0.104.33594
192.168.0.104.33809
192.168.0.104.34308
192.168.0.104.34476
192.168.0.104.34527
192.168.0.104.34670
...
```

Okay, that's interesting. This address, `192.168.0.104`, isn't from any specific server. This is what I'm thinking? Filter the source address with this `IP` just to make sure.

```
bud@myawesomepc:~/Documents$ sudo tcpdump -vnr portscanlog.pcap src host 192.168.0.104 | cut -d "," -f1
reading from file portscanlog.pcap, link-type EN10MB (Ethernet), snapshot length 65535
192.168.0.104.39907 > 173.45.93.20.0: Flags [S]
192.168.0.104.38027 > 173.45.93.20.1: Flags [S]
192.168.0.104.49051 > 173.45.93.20.2: Flags [S]
192.168.0.104.43663 > 173.45.93.20.3: Flags [S]
192.168.0.104.34527 > 173.45.93.20.4: Flags [S]
192.168.0.104.58368 > 173.45.93.20.5: Flags [S]
192.168.0.104.54181 > 173.45.93.20.6: Flags [S]
192.168.0.104.58142 > 173.45.93.20.7: Flags [S]
192.168.0.104.49859 > 173.45.93.20.8: Flags [S]
192.168.0.104.35458 > 173.45.93.20.111: Flags [.]
...
```

Yeah, my suspicious was right. This `IP` tried scanning `173.45.93.20` for any open port. Which ones they get it right tho? I'll assume they aren't doing a stealth scan, so try filtering by the `FIN` flag

```
bud@myawesomepc:~/Documents$ sudo tcpdump -vnr portscanlog.pcap src host 192.168.0.104 | cut -d "," -f1 | grep -v "tos" | grep "F\."
reading from file portscanlog.pcap, link-type EN10MB (Ethernet), snapshot length 65535
    192.168.0.104.54614 > 173.45.93.20.21: Flags [F.]
    192.168.0.104.44370 > 173.45.93.20.22: Flags [F.]
    192.168.0.104.59491 > 173.45.93.20.53: Flags [F.]
    192.168.0.104.47995 > 173.45.93.20.80: Flags [F.]
    192.168.0.104.35458 > 173.45.93.20.111: Flags [F.]

```

A simple server actually. I believe we have enough evidence that someone here was trying something and, judging by that `rpcbind` open port, I assume they succeeded. I'll inform the blue team to figure it out who has this address. Our job is done. You did good, Bud.