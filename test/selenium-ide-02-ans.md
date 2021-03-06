# Selenium IDE WEB 自动化测试测验题和答案 02

1. 自动化测试脚本的核心是什么？
```
selenese （命令）
```
2. 常用的七个命令是什么？
```
echo 测试时打印输出文本
store 把信息或数据保存为变量
open 被打开的界面元素
click 被点击（定位）界面元素
verifyTitle 验证标题
verifyText 验证文本
verifyElementPresent 验证元素（图片等）
```
3. echo 命令的作用是什么？
```
直接打印输入的文本，也可打印变量（文本定义的一个变量）。
```
4. Selenium IDE 共有多少个命令？
```
共有 98 个命令。
```
5. Selenium IDE 的命令分为哪三类？
```
Action 动作类命令
Accessors 访问器类命令
Asseritions 断言类命令
```
6. Action 类命令有什么特点？
```
操作应用程序的状态。
操作 UI 元素，调试程序，按键操作，鼠标操作，设置状态等。
```
7. Accessors 类命令有什么特点？
```
访问器类（获取数据）
检查应用程序状态
结果存储在变量中
store 命令为前缀
```
8. Assertion 类命令有哪些特点？
```
验证程序状态是否符合预期。
```
9. Assertion 类命令又可以分为哪三类？
```
asser 断言类
verify 验证类
waitFor 等待类
```
10. Selenium IDE 命令的命令形式是怎样的？
```
一个或多个英文单词，单词之间空格隔开，单词的英文字母都是小写
```
11. 按参数个数命令可以分为哪几类？举例说明每一类命令？
```
按参数个数命令可分为三类。
无参的命令：例如：close、end
一个参数的命令：例如：echo、open、click
两个参数的命令：例如：store、verifyText
```
12. 常见的参数类型有哪几种？
```
variable
locator
pattern
javascipt
```
13. URL 支持路径分哪两种？
```
绝对路径和相对路径。
```
15. 五种定位类型中哪些是简单的？哪些是复杂的？
```
简单定位：ID 定位，Name 定位，LinkText 定位。
复杂定位：XPath 定位，CSS 定位。
```
16. 定位元素的本质是什么？
```
定位元素就是找到 UI 用户界面上需要操作的对象。
```
17. 定位器参数的格式是什么？
```
定位器类型 = 位置
```
20. 常用的五种 CSS 定位器是什么？
```
ID 选择器
类选择器
属性选择器
标记、类和属性选择器
标记和内部文本选择器
```
21. 在使用 XPath 定位器时，使用哪种路径较好？
```
相对路径较好
绝对路径中，如果路径变化，不能正常执行。
```
23. 数组引用有哪两种？
```
下标引用和名称引用。
```
24. 五种定位器中哪种是隐式的？
```
XPath 和 CSS
```
25. 自动化测试脚本常见的三种错误是什么？
```
语法错误
逻辑错误
运行时错误
```
26. 调试脚本的手段有哪些？
```
调试基础知识
断点和起点
单步执行
Find 按钮
页面源代码
辅助定位
echo
注释
```
