<template>
  <figure>
    <div class="place-holder" v-if="!isFinshImg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        v-if="!isFinshImg"
      >
        <path
          fill="currentColor"
          d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
        ></path>
      </svg>
    </div>

    <img
      :src="getImg(item)"
      loading="lazy"
      @load="load"
      @error="load"
      :alt="item.name"
    />
  </figure>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const isFinshImg = ref(false);
const load = (val) => {
  isFinshImg.value = true;
};

const getImg = (item) => {
  return `/demoPage/${item.name}/snapshot.png`;
};
</script>
<style scoped lang="scss">
figure {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .place-holder {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      var(--vp-c-bg-soft) 25%,
      var(--vp-c-bg-soft-up) 37%,
      var(--vp-c-bg-soft) 63%
    );
    background-size: 400% 100%;
    animation: el-skeleton-loading 1.4s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    svg {
      width: 22%;
      height: 22%;
      color: var(--vp-c-text-light-1);
      fill: currentColor;
    }
  }

  img {
    background: var(--vp-c-bg-soft);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@keyframes el-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}
</style>
