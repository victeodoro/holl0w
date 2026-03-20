---
title: Saving Time On Linux
description: Notes from Desec Novo Pentest Profissional's course
date: 2026-03-16
type: Note
tags: [Linux, OffSec]
---

- `grep` is a command you can use to find something in the middle of a large text. For example, when analyzing a log file, you might wanna check only the lines that has the keyword `error`. To do that, you could use the command `cat` in order to show the file content, pipe it down `|` the output to `grep` and then specify the keyword:
```
victor@victeodoro:~$ cat logging.txt | grep "error"
[ERROR]: Can't access database service
```
- You could pass the `-v` flag to `grep` to change it's behavior, showing everything that don't match the specific string
```
victor@victeodoro:~$ cat logging.txt | grep -v "warning"
[ERROR]: Can't access database service
```
- Instead of piping the output of another command, you can use `grep` directly too if you have a static file:
```
victor@victeodoro:~$ grep -v "warning" logging.txt
[ERROR]: Can't access database service
```
- `egrep` is a variation of `grep` that allows combining multiple filters with regular expressions, functional pretty much exactly as `grep`
```
victor@victeodoro:~$ egrep -v "nologin|/bin/false" /etc/passwd
root:x:0:0:root:/root:/bin/bash
sync:x:4:65534:sync:/bin:/bin/sync
victor:x:1000:1000:victor:/home/victor:/bin/bash
```
- `awk` is a very, **very** powerful command that you can use to do pretty much anything related to text processing of a file. I would probably need to read a lot and create an article specific to `awk` to just touch the surface about how many thing it does, but here it goes a silly example of me reading the passwd file and fetching only the usernames
```
victor@victeodoro:~$ awk -F : '{print $1}' /etc/passwd
root
daemon
bin
sys
sync
games
...
```
-  It isn't a specific command, but the `>` operator can be used to throw the output of another command into a file. You can use it pretty much with anything that displays an output
```
victor@victeodoro:~$ awk -F : '{print $1}' /etc/passwd > usernames.txt
victor@victeodoro:~$ ls usernames.txt
root
daemon
bin
sys
sync
games
...
```
- `cut` is a command that, well, cuts the lines of a file. It allows to split the lines based on a defined parameter using the `-d` flag and fetch column by column with the `-f<number>,<number>,...`
```
victor@victeodoro:~$ cut -d : -f1,6 /etc/passwd
root:/root
daemon:/usr/sbin
bin:/bin
sys:/dev
sync:/bin
```
- `sed` is a command that can be used to replace a specific string to another one `sed 's/3RR0R/ERROR' logging.txt`
