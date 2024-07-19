<template>
  <div>
    <span @click="loadComponent" class="beautiful-button" v-if="!componentLoaded">查看示例</span>
    <component v-if="componentLoaded" :is="loadedComponent"></component>
  </div>
</template>

<script setup>
import { ref, defineProps, defineAsyncComponent } from "vue";

const componentLoaded = ref(false);
const loadedComponent = ref(null);
const props = defineProps({
  name: {
    type: String,
    default: "TextDemo",
  },
});
 
const examplesComponent=defineAsyncComponent(()=>import("./examples.vue"))
const examples1Component = defineAsyncComponent(()=>import("./examples1.vue"))
const TextDemoComponent = defineAsyncComponent(()=>import("./TextDemo.vue"))
const TextDemo1Component = defineAsyncComponent(()=>import("./TextDemo1.vue"))
const getComponent = (name) => {
  switch (name) {
    case "examples":
      return examplesComponent;
    case "examples1":
      return examples1Component;
    case "TextDemo":
      return TextDemoComponent;
    case "TextDemo1":
      return TextDemo1Component;
    default:
      return null;
  }
};




const loadComponent = () => {
  if (loadedComponent.value) {
    return;
  }
  loadedComponent.value = getComponent(props.name);
  componentLoaded.value = true;

};
</script>
<style scoped lang="scss">
    .beautiful-button{
        margin:20px 0;
    }
</style>
