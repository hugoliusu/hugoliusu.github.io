---
title: 05-list NoteBook
icon: python
date: 2024-8-8 21:00:53
author: 刘奕彤
isOriginal: true
category: 
    - 分类1
    - 分类2
tag:
    - 标签1
    - 标签2
article: true
timeline: true
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
backToTop: true
toc: true
---

# 1. 列表結構

· 利用 中括號 表示列表

· 列表内的元素用 逗號 隔開

· 注意是 英文輸入法 下的逗號

```python
student1 = ['lilei', 18, 'class01', 201901]
student2 = ['hanmeimei', 19, 'class2', 201902]
print(student1)
print(student2)

# ---output---
['lilei', 18, 'class01', 201901]
['hanmeimei', 19, 'class2', 201902]
```

列表的 可变性：可以修理列表的内容。

· 字符串强制轉換成列表

```python
string_to_list = list('Bornforthis')
print(string_to_list)

# ---output---
['B', 'o', 'r', 'n', 'f', 'o', 'r', 't', 'h', 'i', 's']
```

# 2. 獲取列表中的某個元素



## 2.1. 列表下標的組成

編程語言中通常 第一個位置的編號是0。

![](./05-list NoteBook.assets/Image20240529194533.png)

## 2.2. 提取單個元素

中括號内數字指定元素位置

```python
grade = ['hanmeimei', 19, 'class02', 201902]
print(grade[-1])  # 98

# ---output---
201902
```

## 2.3. 獲取列表中連續的幾個元素

![](./05-list NoteBook.assets/Image202454514165151.jpg)

· 中括號内用 起姑位置：結束位置 描述

· 注意：不包括結束位置的元素

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:6])  # [2, 3, 4, 5]

# ---output---
[2, 3, 4, 5]
```

· 更細緻的用法起始位置：結束位置：步長

· 注意：不包括結束位置的元素

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[1:7:2])  # [1, 3, 5]

# ---output---
[1, 3, 5]
```

```python
numbers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
print(numbers[0:11:2])  # [1, 3, 5]

# ---output---
['a', 'c', 'e', 'g', 'i']
```

```python
student2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
print(student2)

student2[3:] = list('12345')
print(student2)

# ---output---
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
['a', 'b', 'c', '1', '2', '3', '4', '5']
```

```python
numbers = [1, 5]
print(numbers[1:1])  # 因為[1:1]前面的1可以到5,但是後面不可以把数量是5,so 到[]

# ---output---
[]
```

```python
numbers = [1, 5]

numbers[1:1] = [2, 3, 4] # 因為[1:1]前面的1可以到5,但是後面不可以把数量是5,但[1:1]是[2, 3, 4],So 是[1, 2, 3, 4, 5]
print(numbers)

# ---output---
[1, 2, 3, 4, 5]
```

```python
numbers = [1, 2, 3, 5, 6]
position = int(input('Enter position: '))
value = int(input('Enter value: '))
numbers[position:position] = [value]
print(numbers)

# ---output---
# Enter position: 3
# Enter value: 4
# [1, 2, 3, 4, 5, 6]
```

# 5. 在列表的特定位置插入元素「.insert(index, element)」

.insert(index, element) 是一個列表的基本方法，用于在列表的指定位置插入個元素

它的基本語法是：

```python
list,insert(index, element)
```

index : 指定要插入元素的位置。索引從 0 開始。如果指定的索引超出了列表的當前長度「不會報錯」，則元素將被加到表的末尾。

element : 這是你想要插入列表的元素

```python
numbers = [1, 2, 3, 5, 6]
numbers.insert(3, 4)
print(numbers) # [1, 2, 3, 4, 5, 6]
```

# 7. 修改列表中的元素

1.单个元素修改

```python
name = ['lilei','hanmeimei']
print('before:',name)

name[0] = 'madongmei'
print('after:', name)

# ---output---
before: ['lilei', 'hanmeimei']
after: ['madongmei', 'hanmeimei']

```

```python
let = ['a', 'b', 'c', 'hugoliu']
print('before:',let)

let[3] = '安琪拉'
print('after:', let)

# ---output---
before: ['a', 'b', 'c', 'hugoliu']
after: ['a', 'b', 'c', '安琪拉']
```

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

numbers[1:5] = ['one', 'two', 'three', 'four']
print('after:', numbers)

# ---output---
before: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
after: [0, 'one', 'two', 'three', 'four', 5, 6, 7, 8, 9, 10]
```

4.多个元素修改

```
let = ['a', 'b', 'c', 'hugoliu']
print('before:',let)

let[1:3] = ['h', 'i']
print('after:', let)

# ---output---
before: ['a', 'b', 'c', 'hugoliu']
after: ['a', 'h', 'i', 'hugoliu']
```

5.元素数量不一样

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

numbers[1:5] = ['one', 'two']
print('after:', numbers)

# ---output---
before: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
after: [0, 'one', 'two', 5, 6, 7, 8, 9, 10]
```

6.元素数量不一样 & 字符串自动拆开成列表

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

numbers[1:5] = 'bornforthis'
print('after:', numbers)

#---output---
before: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
after: [0, 'b', 'o', 'r', 'n', 'f', 'o', 'r', 't', 'h', 'i', 's', 5, 6, 7, 8, 9, 10]
```

·多个元素修改情况下，可以使用的对象：

。列表

。元组

。集合「不按集合原本的顺序」

。字符串

。字典「放进去的是key」

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

numbers[1:5] = {'a':1, 'b':8}
print('after:', numbers)

# ---output---
before: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
after: [0, 'a', 'b', 5, 6, 7, 8, 9, 10]
```

·多个元素改情况下，不可以的对象：

。布尔型

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

numbers[1:5] = true
print('after:', numbers)

# ---output---
Traceback (most recent call last):
 File "C:\Users\TUNG\PycharmProjects\Coder\Day\e.g.py", line 4, in <module>
    numbers[1:5] = True
TypeError: can only assign an iterable
before: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# 8.向列表添加元素

## 8.1.添加单个元素「.append()」

```python
let = ['钥匙', '毒药']
print('before:', let)
let.append('解药')
print('after:', let)

# ---output---
before: ['钥匙', '毒药']
after: ['钥匙', '毒药', '解药']
```

## 8.2.添加多个元素「.extend()」

```python
inventory = ['钥匙', '毒药', '解药']
inventory.extend(['迷药', '感冒药'])
print(inventory)

# ---output---
['钥匙', '毒药', '解药', '迷药', '感冒药']
```

```
lst = ['钥匙', '毒药']
user_input = input('Enter something you like ヾ(≧▽≦*)o :>>> ')
lst.append(user_input)
print(lst)

# ---output---
Enter something you like ヾ(≧▽≦*)o :>>> 解藥
['钥匙', '毒药', '解藥']
```

## 9.1 del

del 需要指定列表中要删除的单个元素或多个元素，如果不指定元素，则刪除整个变量

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
del student_list[0]
print(student_list)

# ---output---
['韩梅梅', '马冬梅']
```

如果不指定删除的元素素，则删除整个变量

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
del student_list
print(student_list)

# ---output---
Traceback (most recent call last):
  File "C:\Users\TUNG\PycharmProjects\Coder\Day\20240814.py", line 3, in <module>
    print(student_list)
NameError: name 'student_list' is not defined
```

## 9.2 pop()

pop() 函数默认删除列表中的最后一个元素，也可以传参数指定要删除元素的下标

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
student_list.pop()    # 默认删除最后一个
print(student_list)

student_list.pop(0)    # 删除 student_list 的0号位
print(student_list)

# ---output---
['李雷', '韩梅梅']
['韩梅梅']
```

## 9.3 remove()

remove() 指定删除列表中某个元素，例如：remove(‘aiyc’) 则指定册除列表中的 ‘aiyc’ 元素。

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
student_list.remove('韩梅梅')
print(student_list)

# ---output---
['李雷', '马冬梅']
```

# 10. 两个列表相加~

直接使用加号加就可以ヾ(≧▽≦*)o

```python
numbers1 = [0, 1, 2, 3, 4]
numbers2 = [5, 6, 7, 8, 9]
print(numbers1 + numbers2)

# ---output---
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

# 11. 判断某个元素是否存在于列表中「Value in Sequence」

```python
inventory = ['钥匙', '毒药', '解药']
print('解药' in inventory)
print('迷药' in inventory)

# ---output---
True
False
```

# 12. 获取列表中某个元素重复的次数「.count()

```python
numbers = [0, 1, 1, 2, 3, 4, 1]
print(numbers.count(1))

# ---output---
3
```

# 13. 获取列表中某个元素第一次出现的位置「.index」

·用 列表.index（元素）来获取，如果元素不存在则会报错。

```python
numbers = [0, 1, 1, 2, 3, 4, 1]
print(numbers.index(1)) # 1

# ---output---
1
```

# 14. 列表排序

使列素内的元素从小大排列，直接修改本身。如果里面指定 reverse=True 则列表降序排列。

```python
numbers = [2, 1, 4, 3, 7, 6, 5, 0, 9, 8]
numbers.sort()
print(numbers) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers = [2, 1, 4, 3, 7, 6, 5, 0, 9, 8]
numbers.sort(reverse=True)
print(numbers)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# ---output---
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 14.2 sorted(list,revese=False)

sorted(list,revese=False) 将列表进行小到大排序，排序后列表不变，返回新列表。reverse默认false，如果设置为true则返回降序排序。

```python
lst = [9, 8, 10, 7, 6, 5, 4, 2, 1, 0]
new_let = sorted(lst)
print(new_let)

# ---output---
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## 14.3 练习

题目:

将一串字符串 '132569874' 转换成列表并将其输出；
对其中偶数下标的元素进行降序排列，奇数下标的元素不变。

答案:

```python
str_to_list = list('132569874') # 字符串转换成列表
print(str_to_list)
even_position = str_to_list[::2] # 提取偶数下标的数据
even_position.sort(reverse=True) # 偶数下标的降序排列
str_to_list[::2] = even_position # 把排序好的数据放回去/切片复制
print(str_to_list) # 只是print

# ---output---
['1', '3', '2', '5', '6', '9', '8', '7', '4']
['8', '3', '6', '5', '4', '9', '2', '7', '1']
```

转换成列表

对其中奇数下标的元素进行升序排列

```python
lst = list('liuyichen')
odd_num = lst[1::2]
# print(odd_num)
odd_num.sort()
lst[1::2] = odd_num
print(lst)

# ---output---
['l', 'c', 'u', 'e', 'i', 'i', 'h', 'y', 'n']
```

# 15.reverse()

反转列表中的元素。

```python
lst = ['毒药', '解药', '感冒药']
lst.reverse()
print(lst)

# ---output---
['感冒药', '解药', '毒药']
```

# 16.列表的深浅拷贝

## 16.1.所存在的问题

```python
x = ['毒药', '解药', '感冒药']
y = x
print(f'Original:\n\tx: {x}\n\ty: {y}\n\tid_x: {id(x)}\tid_y:{id(y)}')
y[0] = '消炎药'
print(f'After:\n\tx: {x}\n\ty: {y}\n\tid_x: {id(x)}\tid_y:{id(y)}')

# ---output---
Original:
	x: ['毒药', '解药', '感冒药']
	y: ['毒药', '解药', '感冒药']
	id_x: 1741162722048	id_y:1741162722048
After:
	x: ['消炎药', '解药', '感冒药']
	y: ['消炎药', '解药', '感冒药']
	id_x: 1741162722048	id_y:1741162722048
```
