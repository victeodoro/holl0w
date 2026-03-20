---
title: Linux Packet Management
description: Notes from Desec Novo Pentest Profissional's course
date: 2026-03-16
type: Note
tags: [Linux, OffSec]
---

- Every Linux distro commonly stores it's package repositories list at `/etc/apt/sources.list`, however you may find the same information at `/etc/apt/sources.list.d/official-package-repositories.list`. From these repositories, you can install the programs and tools
```
deb http://http.kali.org/kali kali-rolling main non-free contrib
# deb-src http://http.kali.org/kali kali-rolling main non-free contrib
...
```
- To update the package list, use the command `sudo apt update`
- To upgrade every installed package, use the command `sudo apt upgrade`. Alternatively, you can use the `-y` flag to ignore the confirmation check
- If you need to search for a specific package, you can use `apt search foo`
```
victor@victeodoro:~$ apt search php
p   golang-github-phpdave11-gofpdi-dev - Go Free PDF Document Importer
p   icinga-php-library                 - Icinga PHP Library for Icinga Web 2
p   icinga-php-thirdparty              - Icinga PHP Thirdparty libraries for Icinga Web 2
p   kdevelop-php                       - PHP plugin for KDevelop 
```
- To install a new package, use the command `sudo apt install foo` 
- To delete a package, use the command `sudo remove foo`. You too can use the `-y` flag
- `dpkg` is another tool you can use to manage packages. You can install `.deb` files with `dpkg` similar to Windows and its `.exe` files, though I would still recommend to install them with `apt` since any inconsistencies would be solved as well.