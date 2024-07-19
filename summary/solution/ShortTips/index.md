---
outline: deep
title: Web 应用中的存储方式
titleTemplate: 黄博航的博客
---

<script setup>
import DynamicComponents from './index.vue'
</script>

## 文字智能适配背景

<DynamicComponents name='TextDemo' />

::: details 点我查看代码

<<< ./TextDemo.vue{23}
:::

## 点点点加载中效果

<DynamicComponents name='TextDemo1' />

::: details 点我查看代码
<<< ./TextDemo1.vue
:::

## css 中使用 js 变量

<DynamicComponents name='examples' />

::: details 点我查看代码
<<< ./examples.vue
:::

## template 中使用 style 变量

<DynamicComponents name='examples1' />

::: details 点我查看代码
<<< ./examples1.vue
:::

## 表单提交

在 Vue 中，表单提交默认会刷新页面，因此需要阻止默认行为。可以使用 `@submit.prevent` 来阻止默认行为，并调用提交方法。
不推荐子元素使用 `@click.prevent`，因为点击按钮时，会触发两次提交事件。
::: details

```html
<form @submit.prevent="submit">
  <input type="text" name="name" placeholder="请输入姓名" />
</form>
```

:::
