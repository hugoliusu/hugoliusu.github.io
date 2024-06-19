---
title: pygame初識
icon: python
date: 2023-04-17 19:49:59
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

# 0. 目錄

- Python第三方庫
- Pygame的簡單介紹
- 創建窗体，揹景

# 1. Python第三方庫

```python
import pygame # 導入 pygame 庫
# import 導入

#接下來導入 pygame 庫中的 fonty
from pygame.examples import fonty

#運行 fonty 的主函數入口
pygame.examples.fonty.main()  # 運行
```

# 3. 創建窗体，揹景

```py
import pygame # 導入 pygame 庫

#進入游戯時需要加載——可理解為：游戯初始化
pygame.init()  # 調用初始化函數

screen_width = 600  # 窗口宽度
screen_height = 400  # 窗口高度
screen_size = (screen_width,screen_height) # 存放在我們的元組中
screen = pygame.display.set_mode(screen_size) # screen 接收了 pygame 建立的對象，對象之后會學到
```

寫```python   §(*￣▽￣*)§

3.3代碼解析

3.3.0涉及的單詞

- init：初始化(initialization)

- screen：屏幕，瑩光屏
-  width：寬度，廣度
- height：身高；高；高度；高処，高地

3.3.1 import pygame # 導入 pygame 庫

---

4.2單詞

- while:直到……為止，循环（计算机）
- True:真实的；正確的,真（计算机）
- event:事件，大事「你點击鼠标、你拿起手機，這些都是事件」
- get:获得，得到
- type:類型，種類
- quit:停止，戒掉
- sys:系統
- exit:出口，通道，退出（电脑程序）
- display:展示，陳列；顯露，表現
- update: （計算機軟件的）更新；新型，新版

~~~pygame
import sys

import pygame # 導入 pygame 庫

#進入游戯時需要加載——可理解為：游戯初始化
pygame.init()  # 調用初始化函數

screen_width = 600 # 窗口宽度
screen_height = 600  # 窗口高度
screen_size = (screen_width,screen_height) # 存放在我們的元組中
screen = pygame.display.set_mode(screen_size) # screen 接收了 pygame 建立的對象，對象之后會學
pygame.display.set_caption("愛上對方過後就哭了")
# 要想程序持续运行，需要使用到循环
while True:
    # 在
   for event in pygame.event.get() :
       #
       if event.type == pygame.QUIT:
           #
           sys.exit()  #
   #
   pygame.display.update()   #

~~~

~~~python
import sys

import pygame # 導入 pygame 庫

#定义一个列表存儲背景色，采用rgb顏色表示
#可搜尋rgb顏色對照表，選擇自己喜歡顏色的數值
bgcolor = [58,255,255]  # 設置背景色rgb,也可以使用#3AFFFF

#進入游戯時需要加載——可理解為：游戯初始化
pygame.init()  # 調用初始化函數

screen_width = 600 # 窗口宽度
screen_height = 600  # 窗口高度
screen_size = (screen_width,screen_height) # 存放在我們的元組中
screen = pygame.display.set_mode(screen_size) # screen 接收了 pygame 建立的對象，對象之后會學
pygame.display.set_caption("愛上對方過後就哭了")
# 要想程序持续运行，需要使用到循环
while True:
    # 在
   for event in pygame.event.get() :
       #
       if event.type == pygame.QUIT:
           #
           sys.exit()  #
   screen.fill(bgcolor) # screen.fill("3AFFFF") 也可以直接填寫
   #
   pygame.display.update()   #

~~~

可以改颜色

---

理解變量—生活中的例子

考試的時候，我們會有月考。也會有自己的成績，假如你的成績優異，老師要你帶會你的成績表，你會怎樣送呢？

我認爲我會用信封裝。

那如果你也用信封的話，信封也是有空間吧。信封本來是平的，裝了東西之後長肥一點嘛，那個冰箱也一樣，也可以擺東西對吧。那我們用 python 怎樣輸入呢？請看以下代碼

~~~python
~~~

---

```python
n1 = 19
n1 = 100
print(n1)
```

這一個原理是呢，他本來是19的，但是被100覆蓋了，那麼這個答案就會變100，並不會變成119。

---



```python
n1 = 100
n2 = n1
print(n2)
```

这个原理就是變量值的傳遞

---



```python
x = 1
x = x + x/1
print(x)
```

X等於1，X +1等於2。這是為什麼呢，原來X已經等於1了，那麼X +1等於1+1，所以答案就是2了。

---

如何创建变量——赋值问句

变量：通过变量名代表或引用某个值

初始化賦值語句：變量名 = 表達式

​                                           /\

​                                           |

​                                       賦值運算符

 賦值運算符是什麼呢?

 賦值運算符是表達式把變量名改成其他的名字。



在 Python 中，我可以通过编写 my_str = _____ 来创建一个包含字符串 "Hello, Python!" 的变量 my_str



















































