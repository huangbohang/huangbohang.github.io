---
outline: deep
title: 动态修改checkbox勾选框颜色
---


::: warning 产品要求：
> 根据接口传入的颜色，自动改变checkbox中勾选框颜色

> 
:::


<img src="/summary/checkbox_tro.png" width="500" height="520" >    

>

# 代码实现 



::: tip 实现思路
> 利用css var动态生成颜色变量，挂载到组件父节点
> 
:::

```vue
<template>
  <el-checkbox-group v-model="val">
    <el-checkbox
      v-for="(item,index) in list"
      :key="index"
      :style="{'--fill-color':item.color}"
      :label="item.title"
    />
  </el-checkbox-group>

</template>

<script>

export default {
  data() {
    return {
      val: '',
      list: [
        {
          title: '测试1',
          color: '#334CD4'
        },
        {
          title: '测试2',
          color: '#e4393c'
        },
        {
          title: '测试3',
          color: '#123456'
        }
      ]
    }
  },
 
}
</script>
<style lang='scss' scoped>
 ::v-deep .el-checkbox {
       .el-checkbox__label {
         color: var(--fill-color);
       }

       .el-checkbox__input.is-checked .el-checkbox__inner,
       .el-checkbox__input.is-indeterminate .el-checkbox__inner {
         background-color: var(--fill-color);
         border-color: var(--fill-color)
       }

       .el-checkbox__input.is-focus .el-checkbox__inner,
       .el-checkbox__inner:hover {
         border-color: var(--fill-color);
       }
     }

</style>

```

