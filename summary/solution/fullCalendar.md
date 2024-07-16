---
outline: deep
title: FullCalendar 中 24:00 修改成00:00
---


::: warning 产品要求：
> 在项目中，因为需要用到日历，于是引入了fullCalendar，但是发现它的零点显示是为24：00，很有歧义

> 
:::


<img src="/summary/20201216132834238.png"  >    

>
# 代码实现 


[https://fullcalendar.io/docs/moment-plugin](https://fullcalendar.io/docs/moment-plugin) 参考链接：引入@fullcalendar/moment插件，然后	

```js
// 配置选项加上这两块代码,即可	
slotLabelFormat: 'HH:mm',
eventTimeFormat: 'HH:mm',
```


还有一个不是办法的办法

```js
// 配置问卷 locale 改成 en-GB 这样可以变成00：00，但是整个语言就变成英文了
// locale: 'en-GB',
locale: cnLocale,
```


最后效果


<img src="/summary/20201216133818274.png"  >    


