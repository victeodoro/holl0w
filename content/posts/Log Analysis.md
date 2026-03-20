---
title: Log Analysis
description: Shit, they are on to us. Read these logs and find the attacker.
date: 2026-03-17
type: Article
tags: [Linux, OffSec, Apache2, BlueTeam]
---

## Shit, We Got Hit

Bud, they are on to us. I just received an e-mail from our SIEM saying that we got hit. What happened? What do you mean "you don't know"? Ok, ok, it's not a good time to fight. Let's try to figure it out. 

Download the file. It's a really bad idea, but our web-dev team chose to leave the log file directly at our website `http://businesscorp.com.br/access.log`. At least we just have to cURL from there:

```
bud@myawesomepc:~/$ curl -O http://businesscorp.com.br/access.log
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 6628k  100 6628k    0     0   156k      0  0:00:42  0:00:42 --:--:--  117k

```

Holy shit, this is bad. Look at that file size. Ok, let's delve into it. `cat` file.

```
bud@myawesomepc:~/$ head access.log
182.118.53.93 - - [08/Feb/2015:08:10:21 -0200] "GET / HTTP/1.1" 200 2477 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2251.0 Safari/537.36"
149.129.173.104 - - [08/Feb/2015:19:46:49 -0200] "GET /tmUnblock.cgi HTTP/1.1" 400 522 "-" "-"
82.213.78.2 - - [08/Feb/2015:22:04:52 -0200] "GET /cgi-bin/test-cgi HTTP/1.1" 404 532 "-" "the beast"
82.138.16.125 - - [08/Feb/2015:23:09:41 -0200] "GET /manager/html HTTP/1.1" 404 502 "-" "Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0"
189.36.234.53 - - [09/Feb/2015:06:33:24 -0200] "GET / HTTP/1.1" 200 2533 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36"
...

```

Not so ufesul, but this gave me an idea. Try to filter by IP using `cut` to separate the columns. 

```
bud@myawesomepc:~/$ cut -d " " -f 1 access.log 
182.118.53.93
149.129.173.104
82.213.78.2
82.138.16.125
189.36.234.53
189.36.234.53
...
```

Ok, not so useful again. Too many IPs, but I can see some of them are duplicates. Too many actually. Ok, let's check how many request each of them made. Firstly, sort the IPs using `sort`. This will help the `uniq -c` count exactly how many times each of them appeared. Sort them again using `sort -r` so the higher numbers are listed first. 

```
bud@myawesomepc:~/$ cut -d " " -f1 access.log | sort | uniq -c | sort -nr
  37038 177.138.28.7
    161 189.36.234.53
     49 187.101.118.104
     45 191.181.5.157
     32 199.193.251.194
     31 85.236.52.212
     29 187.38.19.108
     26 201.46.150.143

```

We found them. Let's see what this script kiddie was doing. 

##  Script Kiddie's Fall

Since we found his IP, we can begin checking what he tried exactly. Filter the requests by his IP and put another filter with tools like `nmap` and `nikto`

```
bud@myawesomepc:~/$ cat access.log | grep 177.138.28.7 | egrep "nmap|nikto"
177.138.28.7 - - [13/Feb/2015:02:12:07 -0200] "HEAD /js/jquery-1.10.2.min.js~ HTTP/1.1" 404 182 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; http://nmap.org/book/nse.html)"
177.138.28.7 - - [13/Feb/2015:02:12:08 -0200] "GET /?test=38 HTTP/1.1" 200 7136 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; http://nmap.org/book/nse.html)"
177.138.28.7 - - [13/Feb/2015:02:12:08 -0200] "HEAD /favicon.png HTTP/1.1" 200 255 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; http://nmap.org/book/nse.html)"
177.138.28.7 - - [13/Feb/2015:08:21:14 -0200] "PUT /nikto-test-CkRmtvCL.html HTTP/1.1" 405 609 "-" "Mozilla/5.00 (Nikto/2.1.6) (Evasions:None) (Test:put_del_test: PUT)"
...
```

Yeah, it's definitely a script kiddie. Didn't even try to spoof the HTTP request agent. It seems he let some default scripts running to see what happens. It seems harmless, but, just to be sure, filter his requests with our sitemap to see if he found out about something critical. Don't worry about the command, just run the damn thing.

```
bud@myawesomepc:~/$ grep -f <(grep -oP '(?<=<loc>).*?(?=</loc>)' sitemap.xml) access.log
177.138.28.7 - - [13/Feb/2015:05:26:36 -0200] "GET /AcessoRestrito HTTP/1.1" 301 590 "-" "Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0 Iceweasel/31.4.0"
177.138.28.7 - - [13/Feb/2015:05:26:36 -0200] "GET /AcessoRestrito/ HTTP/1.1" 200 660 "-" "Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0 Iceweasel/31.4.0"
177.138.28.7 - - [13/Feb/2015:05:26:36 -0200] "GET /icons/blank.gif HTTP/1.1" 200 437 "http://www.grandbusiness.com.br/AcessoRestrito/" "Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0 Iceweasel/31.4.0"
...
```

Shit. It's bad. This little bastard got access to our restricted portal. It's time for damage control. 

## Damage Control

Ok, first of all, **BLOCK HIS ASS**. Like now. Enter our `/etc/apache2/apache2.conf`file and make sure that his IP is blocked globally

```
...
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride None

        <RequireAll>
                Require all granted
                Require not ip 177.138.28.7
        </RequireAll>
</Directory>
...
```

Ok, ok. Restart the server now. Some users might complain, but we don't have time for this. In the mean time, I'll contact blue team to block his IP at firewall level too. 

```
bud@myawesomepc:~/$ sudo systemctl reload apache2
```

Done? Good. Now we should add some silly agent blocking, just to avoid these script kiddies. Better hackers might spoof the request agent, for them we add WAF later on. We might aswell set a better logging alternative. Since we have a SIEM, why the hell are we downloading log files directly from the web? And why are these log files public at the first place? Sometimes I don't even know why I work here. Maybe it's because of you, Bud. You did good.