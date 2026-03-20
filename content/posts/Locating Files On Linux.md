---
title: Locating Files On Linux
description: Notes from Desec Novo Pentest Profissional's course
date: 2026-03-16
type: Note
tags: [Linux, OffSec]
---

- You can use the `locate` command to find a specific files. `locate` will search all the system for that specific match, but it's important to have it's database updated. To do that, run the command `updatedb` everytime you add or move a file:
```
victor@victeodoro:~$ locate node
/home/victor/.node_repl_history
/home/victor/.asdf/downloads/nodejs
/home/victor/.asdf/installs/nodejs
...
victor@victeodoro:~$ updatedb
```
-   You can use the command `whereis` to find information about a specific program. It's quite useful to find information such as the binary path, the man file etc.:
```
victor@victeodoro:~$ whereis ssh
ssh: /usr/bin/ssh /etc/ssh /usr/share/man/man1/ssh.1.gz
```
- If you only wanna know the binary path, use `which` instead
```
victor@victeodoro:~$ which node
/home/victor/.asdf/shims/node
```
- Other command you may use to find files is `find`, by far the most useful since it allows you to create complex queries and use regular expressions at will:
```
victor@victeodoro:~$ find ./ -name '*.pdf'
./Documents/Bud.pdf
./Documents/Valtari.pdf
```
