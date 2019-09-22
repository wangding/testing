# 项目管理实战测验题和答案

1. redmine 的特点是什么？  
```
项目管理软件的共同特点：角色安排、任务分解，查看进度等。  
redmine 除了具备上述特点，还有以下特点：  
1. 集成了 bug 管理；  
2. 软件配置管理(版本管理)：  
3. plugin 扩展；  
4. 社交元素等。  
```  
2. 列举项目管理的角色？  
```
项目经理、产品经理、架构师、开发人员、测试人员等。
```  
3. redmine 的中每一个任务的提交历史记录是按怎样的时间顺序排列？  
```
每一个任务的提交历史记录按从早到晚时间顺序排列。
最上方是最早的提交记录，最下方是最新的提交记录。  
```
4. IDE 指什么？IPE 指什么？  
```
IDE, Integrated Development Environment 集成开发环境。
IPE, Integrated Project Environment 集成项目管理环境。
```
5. SCM 指什么？  
```
SCM, Software Configuration Management 软件配置管理。
```
6. 主流的 SCM 有哪些？  
```
主流的 SCM 有 SVN 和 Git。
```
7. plugin 是什么？  
```
它是 redmine 的插件，可以扩展 redmine 的功能。
```
8. WEB 2.0 是什么？  
```
是指一个利用 WEB 平台，由用户主导而生成的内容互联网产品模式。
``` 
9. 在 redmine 上可以看到项目的源代码吗？源代码是在 redmine 写的吗？  
```
在 redmine 上可以看到，但不是在 redmine 中编写的。
``` 
10. 创建一个项目有哪两种形式？  
```
有开放的和封闭的两种形式。
``` 
11. 参与的项目与没有参与的项目显示上有什么区别？  
```
已参与的项目项目名称前添加一颗黄色五角星标志，
没有参与的项目没有这个标志。
``` 
12. 怎样快速定位到自己参加的项目？  
```
主页右上角的下拉选项可快速查找自己参加的项目。
``` 
13. 项目中的导航是什么？  
```
概述、活动、线路图、问题、新建问题、
甘特图、日历、新闻、wiki、文件、配置。
``` 
14. redmine 中的核心功能是什么？  
```
问题和新建问题。
```
15. redmine 中不同类型的问题怎么区分？
```
不同类型的问题添加不同的问题来区分。
``` 
16. 查看问题有哪些视图？  
```
线路图、甘特图和日历。
``` 
17. 活动页面的作用是什么？  
```
判断项目的活跃度，查看最近项目的动态。
``` 
18. 活动选项中的提交动态是按照怎样的时间排列的？  
```
提交动态是按最新到最早排列的。
``` 
19. wiki 的作用是什么？  
```
wiki 可以用来编写项目文件。
``` 
20. 路线图主要展示什么内容？  
```
当在项目中做了版本规划以后，线路图可以用来显示版本进展情况。
``` 
21. 怎样操作可以只查看某一类问题？  
```
打开问题选项中的过滤器，筛选问题。
``` 
22. 甘特图主要展示什么内容？  
```
甘特图是对各种任务推进的情况的一个视图。
``` 
23. 日历主要展示什么内容？  
```
日历主要是以日期的方式查看任务的进展情况。
``` 
24. 哪些角色的人员可以创建新项目？  
```
管理员有权限创建新项目。
``` 
25. 项目的描述支持哪种语言格式？  
```
它支持 wiki 的语言格式。
``` 
26. WBS 指什么？  
```
WBS，Work Breakdown Structure 工作分解结构。
``` 
27. Gravatar 是什么？  
```
Gravater 是一个全球可识别的头像。
``` 
28. 简述如何点亮 redmine 头像？  
```
redmine 系统设置，启用 gravatar；
注册 gravatar 账户；
上传头像。
``` 
29. 项目管理九大知识领域中最重要的几个方面是什么？  
```
范围管理、时间管理、人力资源管理、费用管理、沟通管理、风险管理。
redmine 涉及到的比较重要的是范围管理、时间管理、人力资源管理。
``` 
30. WBS 和上述项目管理的哪些知识领域有关？  
```
WBS 主要与范围管理、时间管理、人力资源管理和费用管理有关。
``` 
31. 简述计划跟踪的过程？  
```
制定计划
实施计划
跟踪计划：记录日志、分析日志
评估成果
```
32. 针对不同规模的任务，
怎样在 redmine 上合理的更新问题进度？
```
对于小型的项目不到一天能完成的任务，可以完成后更新。
对于大型的项目建议每天更新一次。
```
33. redmine 中如何指派任务和领任务？
```
指派任务：项目经理创建项目任务，设置任务的“指派给”字段，完成任务的指派。
领任务：项目经理创建任务，不设置任务的“指派给”字段，
由项目组成员，将任务的“指派给”设置为自己，完成任务的认领。
```
34. redmine 中如何实现版本的迭代？
```
在配置选项中新建版本。
```
35. 如何查看已关闭的项目？
```
过滤器选项中，选择查看已关闭项目。
```
36. redmine 在版本库中查看不同版本代码差异的时候，
红色背景和绿色背景的代码块分别表示什么？  
```
红色代表上一版本中的内容，新版本中已删除。
绿色代表新版本中新增加的内容。
```
37. redmine 中问题的状态有哪些？
```
new、进行中、reopened、resolve、closed、deferred。
```
38. redmine 中问题默认的跟踪标签有哪些？
```
错误、功能、知识、债务、场景、故事、任务、测试案例。
```
39. redmine 中跟测试相关的跟踪标签有哪些？
```
错误、功能、测试案例等。
```
40. 相关的任务如何关联？
```
相关任务可以通过创建子任务进行关联。
```