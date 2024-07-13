#!/usr/bin/env bash
# 在这里编写项目的提测脚本
#!/bin/sh
dns=blog
name=vitepress-$dns
# 发布
echo send project $name:
rsync -arz docs/.vitepress/dist/ root@www.hu77.top:/root/home/$name/

echo you can visit http://$dns.hu77.top/
