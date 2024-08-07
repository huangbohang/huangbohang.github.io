---
outline: deep
title: gitlab私有化部署
---

::: warning 产品要求：
> 考虑公司代码托管到腾讯code有一定风险，所以调研之后准备把gitlab私有化部署一下

> 
:::

公司liunx系统使用的是ubuntu 

![alt text](/summary/gitlab-image1.png)

![alt text](/summary/gitlab-image2.png)

![alt text](/summary/gitlab-image3.png)






## 1. 安装依赖

```bash
# 安装包方式安装
## 这个命令下载的文件有一个多G，所以需要等待很久
wget --content-disposition https://packages.gitlab.com/gitlab/gitlab-ce/packages/ubuntu/bionic/gitlab-ce_15.4.3-ce.0_amd64.deb/download.deb

sudo dpkg -i gitlab-ce_15.4.3-ce.0_amd64.deb
```

正常出现如下提示，表示安装成功。

![alt text](/summary/image.png)



## 2. 配置 gitlab

```bash
sudo vim /etc/gitlab/gitlab.rb
```
![alt text](/summary/image-1.png)

可以看到这里咱们配置的对外 ip 为 192.168.2.11，端口为 8081，这样配置好后咱们通过 http://192.168.2.11:8081 访问到 gitlab 登录页了。

## 3. 启动 gitlab
```bash
# 停止gitlab服务

sudo gitlab-ctl stop
​
# 启动gitlab服务
sudo gitlab-ctl reconfigure
​
# 重启所有gitlab组件
sudo gitlab-ctl restart
​
# 启动所有gitlab组件
sudo gitlab-ctl start

```
开机自启动
```bash
# 启用开机自启动
sudo systemctl enable gitlab-runsvdir.service
​
# 禁用开机自启动
sudo systemctl disable gitlab-runsvdir.service
```

## 4. 命令行初始化密码
```bash
# 1) 切换到相应路径下
cd /opt/gitlab/bin/
​
# 2) 打开控制台
sudo gitlab-rails console -e production
​
# 3) 查询用户账号信息并赋值给u
u=User.where(id:1).first
​
# 4) 设置该用户名的密码
u.password=12345678
​
# 5) 确认密码
u.password_confirmation=12345678
​
# 6) 保存信息
u.save!
​
# 7) 退出
exit
```


## 5. 常用命令
```bash
# 停止gitlab服务
sudo gitlab-ctl status # 查看服务；
sudo gitlab-ctl start # 启动；
sudo gitlab-ctl stop # 停止；
sudo gitlab-ctl restart # 重启；
sudo gitlab-ctl reconfigure # 启动配置；
sudo gitlab-ctl tail # 查看日志；
```

## 6. 后续问题

第二天来公司发现进不去了,通过以下命名重启gitlab服务

```bash
# 重启服务
sudo gitlab-ctl start
# 这是打印报错信息
sudo gitlab-ctl start
fail: alertmanager: runsv not running
fail: gitaly: runsv not running
fail: gitlab-exporter: runsv not running
fail: gitlab-workhorse: runsv not running
fail: grafana: runsv not running
fail: logrotate: runsv not running
fail: nginx: runsv not running
fail: node-exporter: runsv not running
fail: postgres-exporter: runsv not running
fail: postgresql: runsv not running
fail: prometheus: runsv not running
fail: puma: runsv not running
fail: redis: runsv not running
fail: redis-exporter: runsv not running
fail: sidekiq: runsv not running
```
然后手动重启服务
```bash
# 重启服务
sudo systemctl start gitlab-runsvdir.service
```
结果一直停在这个地方，没有输出也不退出，感觉像在等待什么东西。在网上搜索答案之后，定位在一个叫做 plymouth-quit-wait.service 的启动服务，该服务未被正确启动，从而把别的任务都堵死了。用sudo systemctl list-jobs可以查看正在启动的任务：

```bash
sudo systemctl list-jobs
JOB UNIT                                 TYPE  STATE
232 watchdog.service                     start waiting
61  setvtrgb.service                     start waiting
2   multi-user.target                    start waiting
206 gitlab-runsvdir.service              start waiting
136 system-getty.slice                   start waiting
214 systemd-update-utmp-runlevel.service start waiting
225 ureadahead-stop.timer                start waiting
141 plymouth-quit-wait.service           start running
1   graphical.target                     start waiting
9 jobs listed.
```

手工杀死这个任务：

```bash
sudo systemctl stop plymouth-quit-wait.service
```

然后重启服务：

```bash
sudo systemctl list-jobs
No jobs running.

```
然后可以正常启动 gitlab-runsvdir.service 和 gitlab ：

```bash
sudo systemctl start gitlab-runsvdir.service
sudo gitlab-ctl start
```


