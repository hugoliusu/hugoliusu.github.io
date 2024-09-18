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

# 6. 元组的拼接

直接使用加号拼接

```python
tug1 = (1, 2, 3)
tug2 = (4, 5, 6)
new_tup = tug1 + tug2
print(new_tup)   # (1, 2, 3, 4, 5, 6)

# ---output---
(1, 2, 3, 4, 5, 6)
```

# 7.元组的排序

## 7.1 小试牛刀「利用现有的知识排序］

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
tup1 = list(tup)
tup1.sort()
tup = tuple(tup1)
print(tup)

# ---output---
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```

## 7.2 使用 sorted()

实际上的 sorted 实现的也就是上面的流程

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
lst = sorted(tup)
print(lst)
tup = tuple(lst)
print(tup)

# ---output---
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```

# 8. zip()

zip() 是一個内置函数，用于将多个可造代对象（如列表、元组或字符串）的相應元素配對并返回一個組選代器。如果你的兩個或更多列表，并且想要它們的相應元素分建一個新迭化器那麽 zip() 函數就非常有用

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
```

可以使用來配對這些列素的元素

```python
zipped = zip(list1, list2)
```

zipped 現在是一個包含元組的迭代器，每個元組都由兩個列表的相應元素成，例如：

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(zipped)
print(list(zipped))

# ---output---
<zip object at 0x00000295EE186400>
[(1, 'a'), (2, 'b'), (3, 'c')]
```



