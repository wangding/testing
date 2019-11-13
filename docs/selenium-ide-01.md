# 第 6 章：SeIDE Web 自动化测试（上）

## 阅读参考资料

- [课程大纲](http://naotu.baidu.com/file/bef0e7fcb4f603e4791304d77b15c421?token=59d1386c1428551f)
- [Selenium IDE 官网](https://www.seleniumhq.org/selenium-ide/)
- [Selenium IDE 快速上手](https://selenium.wangding.in/getting-started.html)

## Hello World

要求：
- 被测网站：无
- 制作自动化测试脚本，打印信息
- 打印字符串：Hello Wold！
- 打印变量 msg，变量 msg 中保存字符串 Hello World！
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [hello-world](https://github.com/wangding/selenium-ide-demo/blob/master/test/hello-world.side)

## 百度搜索

要求：
- 被测网站：https://www.baidu.com
- 制作自动化测试脚本，测试百度搜索功能
- 打开百度网站
- 在搜索文本框中输入字符串 selenium
- 点击"百度一下"搜索按钮
- 验证搜索结果
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [baidu-search](https://github.com/wangding/selenium-ide-demo/blob/master/test/baidu-search.side)

## hosted redmine 网站

要求：
- 被测网站：https://www.hostedredmine.com/
- 制作自动化测试脚本，测试 hosted redmine 网站
- 测试登录身份验证功能
  - 测试账号：`test_2016_1`
  - 测试密码：`Passw0rd!`
- 测试问题管理功能，包括：创建问题、更新问题和删除问题
  - 测试项目：`auto_test_demo`
- 测试退出登录功能
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [hosted-redmine](https://github.com/wangding/selenium-ide-demo/blob/master/test/hosted-redmine.side)
