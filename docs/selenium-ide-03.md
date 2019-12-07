# 第 10 章：SeIDE Web 自动化测试（下）

## 阅读参考资料

- [课程大纲](http://naotu.baidu.com/file/3eac522d757bf8b4822b37280d5c4ff7?token=2ea0dfb5502d6a4e)
- [Selenium IDE 控制流](https://selenium.wangding.in/control-flow.html)
- [JavaScript 标准参考教程](http://JavaScript.ruanyifeng.com)
- [freecodecamp](https://freecodecamp.cn/)

## 手机归属地查询

要求：
- 被测网站：https://haoma.baidu.com/query
- 制作自动化测试脚本，测试手机号码归属地
- 手机号码归属地[测试案例设计](https://processon.com/view/581805e0e4b09047a82bd47c)
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [mobile](https://github.com/wangding/selenium-ide-demo/blob/master/test/mobile.side)

## 弹窗

要求：
- 被测网站：https://sample.wangding.in/selenium/alert.html
- 制作自动化测试脚本，测试网站的弹窗功能
- 测试 alert 弹框功能，并验证结果
- 测试 confirm 弹框功能，并验证结果
- 测试 prompt 弹框功能，并验证结果
- 测试浏览器弹窗功能，并验证结果
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [pop-window](https://github.com/wangding/selenium-ide-demo/blob/master/test/pop-window.side)

## 两数求和

要求：
- 被测网站：http://www.baidu.com
- 制作自动化测试脚本，定义 x, y 两个变量，计算两个变量的和
- echo 打印求和结果
- alert 弹框显示求和结果
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [sum](https://github.com/wangding/selenium-ide-demo/blob/master/test/sum.side)

## 流程控制

要求：
- 被测网站：http://www.baidu.com
- 制作自动化测试脚本
- 在脚本中定义变量，对该变量做 if 判断，echo 打印相应结果
- 在脚本中定义变量 n = 0，从 0 到 9 循环打印 n
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [flow](https://github.com/wangding/selenium-ide-demo/blob/master/test/flow.side)

## 计算 n!

要求：
- 被测网站：http://www.baidu.com
- 制作自动化测试脚本
- 在脚本中利用 while 循环流程控制，计算 n!
- n = 5，打印 5! = 120
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [factorial](https://github.com/wangding/selenium-ide-demo/blob/master/test/factorial.side)

## 学习时长统计 DDT

要求：
- 被测网站：https://edu.51cto.com/user/
- 制作自动化测试脚本，统计学习时长信息，并打印
- 打开学生学习记录页面
```
user_id-12013438.html
user_id-12013565.html
user_id-12014332.html
user_id-12019997.html
user_id-12014343.html
user_id-12014246.html
user_id-12015479.html
user_id-12017467.html
user_id-12021004.html
user_id-12016847.html
user_id-12017915.html
user_id-12018267.html
user_id-12012840.html
user_id-12019636.html
user_id-12012463.html
user_id-12022278.html
user_id-12022422.html
user_id-12017090.html
user_id-12024390.html
user_id-12022565.html
user_id-12030031.html
user_id-12019737.html
user_id-12022513.html
user_id-12023842.html
user_id-11449294.html
user_id-12111398.html
```
- 获取学习时长数据，并存入变量
- 计算所有学生总学习时长，并打印
- 计算所有学生平均学习时长，并打印
- 学生的学习时长大于平均学习时长，评价为合格，否则为不合格
- 打印每个学生的姓名、学习时长和评价结果
- 将上面所有学生学习记录页面的地址，保存到数组变量中
- 将每个学生的姓名和学习时长作为对象保存到数组变量中
- 通过循环流程控制实现自动化测试脚本
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [study-len-ddt](https://github.com/wangding/selenium-ide-demo/blob/master/test/study-len-ddt.side)


## 百度搜索 DDT

要求：
- 被测网站：https://www.baidu.com
- 制作自动化测试脚本，百度搜索关键字
- 搜索的关键字列表如下
```
Selenium IDE 51CTO
Selenium IDE WEB 自动化测试入门 51CTO
信息科学基础 51CTO
在线思维导图进阶 51CTO
```
- 将上面所有搜索关键字，保存到数组变量中
- 通过循环流程控制实现自动化测试脚本
- 打开百度搜索页面，搜索关键字
- 验证搜索结果页面的 Title 信息
- 将搜索内容及搜索结果的数量信息用 echo 打印出来，格式为：| key word | number |
- 运行自动化测试脚本
- 添加必要的注释

示例参考：
- [baidu-ddt](https://github.com/wangding/selenium-ide-demo/blob/master/test/baidu-ddt.side)
