<template>
  <p :class="$style.red">Hello world</p>
</template>

<script setup>
import { ref } from "vue";
const color = ref("");
</script>


<style module scoped lang="scss">
.red {
  color: red;
}
</style>
