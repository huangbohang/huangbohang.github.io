<template>
  <div class="examples">
    <h1 class="text">Hello World!!!</h1>
    <p>试试输入blue、red、#000 等这样的文字</p>
    <input type="text" v-model="color" placeholder="请在此输入颜色" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const color = ref("");
</script>

<style scoped lang="scss">
.examples {
  padding: 20px;
  .text {
    color: v-bind(color);
  }
  p {
    margin: 18px 0;
  }
  input {
    border: 1px solid #ddd;
    font-size: 18px;
    padding: 10px;

    color: v-bind(color);
  }
}
</style>
