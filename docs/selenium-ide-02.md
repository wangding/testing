# 第 9 章：SeIDE Web 自动化测试（中）

## 阅读参考资料

- [课程大纲](http://naotu.baidu.com/file/2808e24ce835c34ccce45489b75ce486?token=787ca33c65defb65)
- [Selenium IDE 命令](https://selenium.wangding.in/commands.html)
- [Selenium IDE 参数](https://selenium.wangding.in/arguments.html)
- [CSS diner](http://flukeout.github.io/)
- [XPath diner](http://www.topswagcode.com/xpath/)
- [W3CSchool](http://www.w3school.com.cn/)
- [HTML + CSS 基础课程](http://www.imooc.com/learn/9)

## 在线计算器

要求：
- 被测网站：http://www.zxjsq.net/
- 制作自动化测试脚本，测试基础型计算器的功能
- 测试加法功能
- 测试减法功能
- 测试乘法功能
- 测试除法功能
- 运行自动化测试脚本
- 添加必要的注释
- 把自动化脚本文件保存为：`calculator.side`
- 在课程 redmine 网站上，自己所属的团队项目下，提交脚本文件
- 问题的标题是：calculator side
- 问题的附件是上面保存的脚本

示例参考：
- [calculator](https://github.com/wangding/selenium-ide-demo/blob/master/test/calculator.side)

## 获取百度首页信息

要求：
- 被测网站：https://www.baidu.com
- 制作自动化测试脚本
- 打开百度首页，验证 title 信息
- 获取首页 Title 信息，保存为变量，echo 命令打印该变量
- 获取首页文字信息，保存为变量，echo 命令打印该变量
- 运行自动化测试脚本
- 添加必要的注释
- 把自动化脚本文件保存为：`baidu-store.side`
- 在课程 redmine 网站上，自己所属的团队项目下，提交脚本文件
- 问题的标题是：baidu-store side
- 问题的附件是上面保存的脚本

示例参考：
- [baidu-store](https://github.com/wangding/selenium-ide-demo/blob/master/test/baidu-store.side)

## 学习时长统计

要求：
- 被测网站：https://edu.51cto.com
- 制作自动化测试脚本，统计学习时长信息，并打印
- 打开学生学习记录页面
- 获取学习时长数据，并存入变量
- 计算所有学生总学习时长，并打印
- 计算所有学生平均学习时长，并打印
- 运行自动化测试脚本
- 添加必要的注释
- 把自动化脚本文件保存为：`51cto-study-len.side`
- 在课程 redmine 网站上，自己所属的团队项目下，提交脚本文件
- 问题的标题是：51cto-study-len side
- 问题的附件是上面保存的脚本

示例参考：
- [51cto-study-len](https://github.com/wangding/selenium-ide-demo/blob/master/test/51cto-study-len.side)

## 百度搜索变量

要求：
- 被测网站：https://www.baidu.com
- 制作自动化测试脚本，测试百度搜索功能
- 获取百度首页的 title 信息，并存入变量 ttl 中
- 将 ttl 中的字符串，放入百度搜索框
- 点击“百度一下”搜索按钮
- 运行自动化测试脚本
- 添加必要的注释
- 把自动化脚本文件保存为：`baidu-search-var.side`
- 在课程 redmine 网站上，自己所属的团队项目下，提交脚本文件
- 问题的标题是：baidu-search-var side
- 问题的附件是上面保存的脚本

示例参考：
- [baidu-search-var](https://github.com/wangding/selenium-ide-demo/blob/master/test/baidu-search-var.side)

## 定位器

要求：
- 被测网站：https://sample.wangding.in/selenium/locator.html
- 制作自动化测试脚本，测试页面
- 使用 ID 定位器，定位账户字段，在文本框中输入：wangding
- 使用 name 定位器，定位账户字段，在文本框中输入：wangchenxin
- 使用 linkText 定位器，定位 `alert 页面`链接，并触发 click 操作
- 使用 CSS 定位器，定位账户字段，在文本框中输入：louying
- 尝试如下 CSS 定位器的语法
  - id 选择器
  - 类选择器
  - 标签属性选择器
- 使用 XPath 定位器，定位密码字段，在文本框中输入：123
- 运行自动化测试脚本
- 添加必要的注释
- 把自动化脚本文件保存为：`locator.side`
- 在课程 redmine 网站上，自己所属的团队项目下，提交脚本文件
- 问题的标题是：locator side
- 问题的附件是上面保存的脚本

示例参考：
- [locator](https://github.com/wangding/selenium-ide-demo/blob/master/test/locator.side)

## 站长工具网站

要求：
- 被测网站：http://tool.chinaz.com/
- 制作自动化测试脚本，测试网站的六个域名工具
- 打开域名类下面的六个工具页面
- 验证每个工具页面可以正常打开
- 运行自动化测试脚本
- 添加必要的注释
- 把自动化脚本文件保存为：`tools.side`
- 在课程 redmine 网站上，自己所属的团队项目下，提交脚本文件
- 问题的标题是：tools side
- 问题的附件是上面保存的脚本

示例参考：
- [chinaz](https://github.com/wangding/selenium-ide-demo/blob/master/test/tools.side)
