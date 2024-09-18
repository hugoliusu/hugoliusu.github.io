---
title: 07-python-dict
icon: python
date: 2023-09-18 18:40:59
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

# 1.如何創建一個電話簿

我們現在有下面的聯係人：

| 姓名        | 手機號 |
| :---------- | ------ |
| 李雷        | 123456 |
| 韓梅梅      | 132456 |
| 大衛        | 154389 |
| Mr.Liu      | 131452 |
| Bornforthis | 180595 |
| Alexa       | 131559 |

如何用以往學過的知識構建一個具有用戶輸入查詢功能的電話簿。

|變量、數字型、列表、元組、字符串。

程序運行效果：

。測試一：

```python
Enter your search name:李雷
The 李雷 phone number is : 123456
```

上面的問題應該要了些兩個點：

1 . 如何用已有的知識去完成位置的新任務，畢竟不可能包含全部各種需求索要的數據類型。

2 . 字典存在的意義，從上面的題目完成後應該要掌握到ヾ(≧▽≦*)o(⊙_⊙

```python
name = ['李雷', '韓梅梅', '大衛', 'Mr.Liu', 'Bornforthis','alexa']
numbers = [123456, 132456, 154389, 131452, 180595]

s = input('Enter your search name:')
position = name.index(s)
number = numbers[position]
print(f"The {s} phone number is : {number}")

# ---output---
Enter your search name:李雷
The 李雷 phone number is : 123456
```

```python
name = ['李雷', 123456, '韓梅梅', 132456, '大衛', 154389, 'Mr.Liu', 131452, 'Bornforthis', 180595, 'alexa', 131559]

s = input('Enter your search name:')
position = int(name.index(s))
print(f"The {s} phone number is : {name[position + 1]}")

# ---output---
Enter your search name:李雷
The 李雷 phone number is : 123456
```

