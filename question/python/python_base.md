---
outline: deep
title: 学习
titleTemplate: 黄博航的博客
---

## 环境安装：  

https://www.bilibili.com/video/BV1qW4y1a7fU?spm_id_from=333.788.videopod.episodes&vd_source=06b02aaa99a33ee0dc58a24592510bd4&p=4
 

## python基础语法： 

### 各种关键词
    type // 查看数据类型

    str()、int()、float()、bool() // 类型转换

###  字符串的三种定义方式
```python
    # 单引号
    str1 = 'hello world'
    # 双引号
    str2 = "hello world"
    # 三引号、三引号可以换行
    str3 = '''hello world'''
```
### 字符串的拼接
```python
    # 字符串拼接，方式1
    str1 = 'hello'
    str2 = 'world'
    str3 = str1 + str2
    print(str3)
    # 字符串拼接，方式2
    str1 = 'hello'
    str2 = 'world %s' % str1
    print(str2)
    # 字符串拼接，方式3
    str1 = 'hello'
    str2 = 'world'
    str3 = 'str1:%s, str2:%s' % (str1, str2)
    print(str3)
    # %s表示字符串，%d表示整数，%f表示浮点数
    name = 'zhangsan'
    age = 18
    shengao = 1.75
    print('name:%s, age:%d, shengao:%f' % (name, age, shengao))
    # 结果：name:zhangsan, age:18, shengao:1.750000
    # 其中浮点的默认保留6位小数，可以使用%m.nf来控制小数位数，m表示整数位数，n表示小数位数
    print('name:%s, age:%d, shengao:%.2f' % (name, age, shengao))
    # 快速格式化
    name = 'zhangsan'
    age = 18
    shengao = 1.75
    print(f'name:{name}, age:{age}, shengao:{shengao:.2f}')
    #综合应用
    # 股价计算小程序
    name = "A公司"
    stock_price = 19.99
    stock_code = "000001"
    stock_price_deily_grow_factor = 1.2
    growth_days = 7
    # 计算经过growth_days天后的股价
    print(f'''
    公司：{name}，股票代码：{stock_code}，当前股价：{stock_price}元
    每日增长系数：{stock_price_deily_grow_factor}，经过{growth_days}天后的股价为 { stock_price * stock_price_deily_grow_factor ** growth_days:.2f} 元
    ''')
    

    
```


### 数据输入