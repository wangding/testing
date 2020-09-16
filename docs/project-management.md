# 第 3 章：项目管理实战

## 浏览 redmine 官网

- redmine 官网地址：http://www.redmine.org/
- redmine 项目目前总共有多少 bug，多少 bug 没有修复？
- redmine 项目最早的一个 bug 是什么时间提出的？谁提出的？标题是什么？这个 bug 最终是由谁修复的？什么时间修复的？
- 1.0.0（RC）版本中总共有多少个 bug？这些 bug 分那些类？每个类别下面的 bug 有多少个？
- redmine 用的 SCM 是什么系统？根据什么判断的？

## 点亮 redmine 头像

- 在 [hostedredmine 网站](http://www.hostedredmine.com/)上注册账户
- 用 Gravatar 点亮自己的头像

## 项目团队管理

- 指导自己项目团队成员，创建 hostedredmine 账户，并点亮头像
- 在 hostedredmine 网站上创建一个私有项目，将团队成员加入该项目

## 提交 bug

- 在上一步创建的项目中，提交一个 bug
- 参考[bug 模板](http://www.hostedredmine.com/issues/598989)
- 参考[一个具体的 bug](http://www.hostedredmine.com/issues/626704)

## 本地安装 redmine

- 下载 [VMware workstation](https://pc.qq.com/detail/0/detail_21600.html) 安装包（选择**普通下载**）
- 运行上一步下载的安装包，完成 VMware workstation 的安装
- 百度搜索 vmware workstation 的密钥
- win10 任务栏点右键，打开任务管理器窗口，确保 win10 的虚拟化已经启用，参考下图
![win10 任务管理器](https://cdn.jsdelivr.net/gh/wangding/testing@master/docs/img/task-mag.png)
- 如果 win10 虚拟化没有启用，重启电脑（长按 F2 或 F10）进入 BIOS 界面，设置 BIOS 开启虚拟化，参考[这个文章](http://www.jb51.net/diannaojichu/304437.html)
- 打开 bitnami 的 redmine 虚拟机[下载页面](https://bitnami.com/stack/redmine/virtual-machine)
- 点击 `Download .OVA format` 下载按钮
- 用 vmware 虚拟机软件，打开上一步下载的 redmine ova 文件
- 上述操作参考[教学视频](https://www.bilibili.com/video/bv1iy4y1y7hm)（前 8 分钟的内容）
- 启动 redmine 虚拟机，虚拟机启动之后，等待几分钟
- 用浏览器访问 vmware 窗口中提示的网址，输入用户名 admin，密码，登录 redmine
- 在本机的 redmine 上为自己的同学或者同事创建至少六个账户
- 在本机的 redmine 上创建一个 hello 项目，把上一步创建的六个账户加入到项目组中，并分配三种角色，产品工程师、开发工程师和测试工程师
