---
title: 01-variable
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

## 1.理解变量——生活中的例子

### 1.1从字面意思去理解

- 变 : 变化
- 量 : 大小

### 1.2举个例子

假如，你是班級當中的課代表，每個月需要統計班級中每個學生的月考成績。月考成績會每個月一張紙，每張紙上都會依次記下每個學生的成績越到成績，例如：

1. 彭可奇：99

2. 鍾梓濱：97

3. 郎林肯：96.5

4. 高忟安：95.5

5. 林杋麟：89

6. ……

某一天，老師要看劉奕彤1月，2月，3月的成績作爲課代表的你需要怎麽辦。——總不能直接把每個月的月考成績單直接給老師，顯然是不合適的。我們應該把劉奕彤一月，二月，三月的成績，接著給老師。
那么，为什么我们不一开始就会每一个学生分配一个信封📨？（也可以是档案袋）信封在一开始是偏的，当我們放东西（数据）进去之后，是不是鼓起来了？
——是不是变化了？是不是有大小呢？显然是的

类仙人的有：冰箱 ，不也是在我们当前所处的案间中，开群空间。

所以，变量不就是在计算机的内存当中开辟空間，来存储数据。

## 2.如何创建变量——赋值语句

### 1. 变量：通过变量名代表或引用某个值。

- 女娲捏了泥人，泥人没有生命，女娲挥了挥手柳条，赐给泥人生命,此时，泥人可以代表说是女娲的后人。「變量：泥人，值：女媧」
- 全国人代表大会,是由广大人民群众投票🗳️选举,他们的权利不是自己获取的，所以他们可以说：「我代辰的是广大民群众的意志。」「变量：人大代表，值：人民群众亅

### 2.初始化複製語句：變量名 = 表達式

- 變量名：就是这个空间，我们叫他什么名字；
- 表達式：类似数学表达；

~~~python
a = 1
a = a + 10 + 2
print(a)
~~~



```python
x = 1 # 1 賦值給了 x,x 代表 1
x = x + 10 # x + 10 等價于 1 + 10 最後得出 11, 11 賦值給 x
print(x)  # print 打印，輸出
# 井號是用來注釋，注解，解釋某一行代碼的功能或者作用

#---output---
11
```

```python
name1 = "lilei"
name2 = name1
print(name2)


name1 = "lilei"
name1 = "hanmeimei"
print(name1)

#---output---
lilei
hanmeimei
```

:::

## 3.探究 print

### 3.1 同時輸出多個數據

```python
a = 1
b = 1
c = 1
print(a,b,c)

# ---output---
1 2 3 
```

從輸出的結果可以看出，print同時輸出多个变量，每个值之间默认以空格间隔。
那么，我们可以修改这个默认空格间隔么？——答案显然是可以的

使用sep

### 3.2 sep修改多个变量同时输出的间隔

```python
a = 1
b = 2
c = 3
print(a , b , c , sep="12345678910")

# ---output---
1123456789102123456789103
```

### 3.3 end 修改輸出結尾方式

```python
a = 1
b = 1 
c = 1
print(a, end="\n\n\n")
print(b)
print(c)

# ---output---
1


1
1
```

```python
a = 1
b = 1
c = 1
print(a, end="Hugo is hugo") # 我们可以修改成不换行的字符串
print(b) # 这行的输出就会紧接着上面输出的结尾输出
print(c)
```

:::

### 3.4 end和sep可以同时使用

```python
a = 1
b = 2
c = 3
print(a , b , c , sep="12345678910", end=" love hugo")

# ---output---
1123456789102123456789103 love hugo
```

## 4. 进阶的赋值方法

### 4.1 多个变量同时赋予相同的值

```python
a = b = c = 1
print(a, b, c)

# ---output---
1 1 1
```

### 4.2 多个变量同时赋予相同的值

```py
a, b, c = 1, 2, 3
print(a, b, c)

# ---output---
1 2 3
```

## 5.变量名的命名规则：

- 大小写英文、数学和＿的结合、且不能用数字开头；

- 系統关键词不能做变量名使用；        

    ​         获取关键字列表： help('keywords ')

- Python中的变量名区分大小写。

- 变量名不能包含空格、但可使用下划线来分隔其中的单词。

- 不要使用python的内置函数名称做变量名

```python
Here is a list of the Python keywords.  Enter any keyword to get more help.

False               class               from                or
None                continue            global              pass
True                def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
break               for                 not                 
```

:::code-tabs

@tad Code 1

```python
n = "A"
N = "a"
print(n)  # 如果变量不区分大小写的话，输出什么结果？—— a
# 但是，它区分大小写，所以输出的是A

# ---output---
A
```

@tad Code 2

```python
# 不能用数字开头
a121iy212c21 = "a" # 大小写英文、数学和＿的结合、且不能用数字开头；
```

@tad Code 3

```python
X  -> user name = "hugoliu"
V  -> user_name = "hugoliu"
```

@tad Code 4
```python
 print = "aiyc" # 不能使用python内置函数名命名
print(print) # python 分不清
```

@tab Code5

```python
# 关键词不能当作变量名
await = "aiyc"
print(await)  # await 在 Python当中有特殊功能，比如 while
```

```python
lst = ['毒药', '解药', '感冒药']
str = lst[::-1]
print(str)

# ---output---
['感冒药', '解药', '毒药']
```





