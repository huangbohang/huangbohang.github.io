<template>
  <div>
    <span @click="loadComponent" class="beautiful-button" v-if="!componentLoaded">查看示例</span>
    <TextDemo />
  </div>
</template>

<script setup>
import TextDemo from "./TextDemo.vue";

import { ref, defineProps } from "vue";
const componentLoaded = ref(false);
const loadedComponent = ref(null);
const props = defineProps({
  name: {
    type: String,
    default: "TextDemo",
  },
});
const loadComponent = () => {
  if (componentLoaded.value) {
    return;
  }
  componentLoaded.value = false;
  import(`./${props.name}.vue`).then((component) => {
    loadedComponent.value = component.default;
    componentLoaded.value = true;
  });
};

</script>
<style scoped lang="scss">
    .beautiful-button{
        margin:20px 0;
    }
</style>
