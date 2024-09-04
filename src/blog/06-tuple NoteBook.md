---
title: 06-tuple NoteBook
icon: python
date: 2023-07-19 20:40:38
author: 刘奕彤
isOriginal: true
category: 
    - python notebook
    - python 1v1
    - 1v1
tag:
    - python notebook
    - python 1v1
    - 1v1
article: true
timeline: true
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
backToTop: true
toc: true
---

# 1. 创建元组

· 使用小括号创建

· 里面的元素用英文逗号隔开；

```python
tup = ('毒药', '感冒药', '解药')
print(tup, type(tup))

# ---output---
('毒药', '感冒药', '解药') <class 'tuple'>
```

# 2. 列表和元组的对比

```python
a = [1,'hanmeimei',18]    # ----> 列表（list)
b = (2,'lilei,19')        # ----> 元组（tuple)
```



列表和你元组的区别:
· 列表中：元素用方括号 [] 包裹 ; 在元组中，元素用圓括号 () 包裹。

· 表中的元素可以被修改、添加、删除，即列表是可变的数据类型，元組是不可变的数据类型

# 3. 元組是不可变的

但凡我們想修改元组，是会报错

```python
tup = ('毒药', '感冒药', '解药')
tup[0] = 1

# ---output---
Traceback (most recent call last):
  File "C:\Users\TUNG\PycharmProjects\Coder\Day\demo.py", line 2, in <module>
    tup[0] = 1
TypeError: 'tuple' object does not support item assignment
```

# 4. 元组的取值与分析片操作

元组的取值||

​                    \/

```
tup = (2, 'lilet', 19)
print(tup[::2])

# ---output---
（2， 19）
```

```python
tug = (2, 'lilet' , 19)
select = tug[-2]
print(select)

# ---output---
lilet
```

```python
tug = (2, 'lilet' , 19)
select = tug[-1]
print(select)

# ---output---
19
```

```python
tug = (2, 'lilet' , 19)
select = tug[2]
print(select

# ---output---
19
```
