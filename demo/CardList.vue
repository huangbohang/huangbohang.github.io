<template>
  <div class="card-list" ref="cardListRef">
    <template v-for="(item, index) in CardListData" :key="index">
      <div
        class="card-list-item"
        @click="openDialog(item, $event)"
        :animate-class="'active'"
      >
        <p>
          <ImageItem :item="item" />
        </p>
        <span>{{ item.name }}</span>
      </div>
    </template>
  </div>
  <div
    class="dialog"
    v-if="dialogVis"
    @click="closeDialog"
    :class="{ 'before-close': beforeClose, 'before-open': beforeOpen }"
  >
    <div
      class="dialog-content"
      :style="{ transformOrigin: `${transformLeft}px ${transformTop}px` }"
    >
      <div class="preview-iframe">
        <iframe
          :src="getPreView(activeItem)"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>

      <p>
        <a @click.stop :href="getCode(activeItem)" target="_blank" class="beautiful-button">简易源码</a>
        <a
          @click.stop
          class="beautiful-button"
          :href="`https://github.com/huangbohang/huangbohang.github.io/blob/main/public/demoPage/${activeItem.name}/index.html`"
          target="_blank"
          >完整源码</a
        >
      </p>
    </div>
  </div>
  <span class="top-icon" @click="scrollTop">🔝</span>
</template>

<script setup>
import useStyle from "./hooks/useStyle.js";
import useAnimate from "./hooks/useAnimate.js";
import ImageItem from "./ImageItem.vue";
import CardListData from "./CardList.json";
import { ref, onMounted, onBeforeUnmount } from "vue";
const dialogVis = ref(false);
const activeItem = ref({});
const cardListRef = ref(null);
const codeVis = ref(false);

useStyle();

const getPreView = (item) => {
  const { name } = item;
  return window.location.origin + `/demoPage/${name}/index.html`;
};
const getCode = (item) => {
  return `${window.location.origin}/demo/source/${item.name}.html`;
};

const transformLeft = ref(0);
const transformTop = ref(0);
const beforeClose = ref(false);
const beforeOpen = ref(false);

const openDialog = (item, event) => {
  activeItem.value = item;
  dialogVis.value = true;

  const { clientX, clientY } = event;

  transformLeft.value = clientX - document.documentElement.offsetWidth * 0.1;
  transformTop.value = clientY - document.documentElement.clientHeight * 0.1;

  beforeOpen.value = true;

  setTimeout(() => (beforeOpen.value = false), 500);
};

const closeDialog = (e) => {
  beforeClose.value = true;
  codeVis.value = false;

  setTimeout(() => {
    dialogVis.value = false;
    beforeClose.value = false;
  }, 500);
};
const scrollTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth", // 让滚动平滑进行
  });
};
onMounted(() => {
  useAnimate(cardListRef.value);
});
</script>
<style lang="scss">
$colors: (
  "start": #03a9f4,
  "middle-1": #f441a5,
  "middle-2": #ffeb3b,
  "end": #09a8f4,
);
.card-list {
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  gap: 1%;
  margin-top: 16px;
  position: relative;

  .aside {
    display: none;
  }

  .card-list-item {
    flex-basis: 32.3%;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    transform: scale(0);
    opacity: 0;
    &:hover {
      p {
        &::after {
          background-color: rgba(0, 0, 0, 0.25);
        }
        img {
          transform: scale(1.25);
        }
      }
    }
    p {
      width: 100%;
      height: 200px;
      position: relative;
      &::after {
        transition: background-color 0.2s;
        content: "";
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      img {
        transition: 0.3s;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }

    span {
      padding-top: 12px;
    }
  }
}

.dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  overflow: auto;
  background: rgba(0, 0, 0, 0.25);
  &.before-close {
    .dialog-content {
      animation: dialog-close 0.5s;
      animation-fill-mode: forwards;
    }
  }
  &.before-open {
    .dialog-content {
      animation: dialog-open 0.5s;
      animation-fill-mode: forwards;
    }
  }
  &-content {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 80%;
    // opacity: 1;
    height: 80%;
    overflow: hidden;
    border-radius: 20px;
    transform-origin: 100px 100px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transform: scale3d(0) translate(-50%, -50%);

    .preview-iframe {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: var(--vp-c-bg);
    }
    .code-iframe {
      width: 100%;
      height: 80%;
      position: absolute;
      transform: translate(-100%, 0);
      bottom: 0;
    }
    p {
      display: flex;
      gap: 10px;
      position: absolute;
      right: 20px;
      top: 20px;

      // a {
      //   /* 相对定位 */
      //   position: relative;
      //   padding: 5px 20px;
      //   cursor: pointer;
      //   text-align: center;
      //   text-decoration: none;
      //   text-transform: uppercase;
      //   font-size: 14px;
      //   color: #fff;
      //   /* 渐变背景 */
      //   background: linear-gradient(
      //     to right,
      //     map-get($colors, "start"),
      //     map-get($colors, "middle-1"),
      //     map-get($colors, "middle-2"),
      //     map-get($colors, "end")
      //   );
      //   /* 背景渐变色大小 */
      //   background-size: 400%;
      //   /* 圆角 */
      //   border-radius: 50px;
      //   z-index: 1;
      // }
      // /* 发光效果 */
      // a::before {
      //   content: "";
      //   position: absolute;
      //   top: -5px;
      //   left: -5px;
      //   bottom: -5px;
      //   right: -5px;
      //   /* 渐变背景 */
      //   background: linear-gradient(
      //     to right,
      //     map-get($colors, "start"),
      //     map-get($colors, "middle-1"),
      //     map-get($colors, "middle-2"),
      //     map-get($colors, "end")
      //   );
      //   /* 背景渐变色大小 */
      //   background-size: 400%;
      //   /* 圆角 */
      //   border-radius: 50px;
      //   /* 位于按钮之下 */
      //   z-index: -1;
      //   /* 设置模糊度 显示发光效果 */
      //   filter: blur(20px);
      // }
      // /* 鼠标移入执行动画 */
      // a:hover {
      //   /* 动画：名称 时间 infinite是无限次播放 */
      //   animation: streamer 8s infinite;
      // }
      // a:hover::before {
      //   animation: streamer 8s infinite;
      // }
      // /* 接下来定义动画 */
      // @keyframes streamer {
      //   100% {
      //     /* 背景位置 */
      //     background-position: -400% 0;
      //   }
      // }
    }
  }
}
@keyframes dialog-open {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes dialog-close {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

@media (max-width: 960px) {
  .card-list {
    &-item {
      flex-basis: 49%;
    }
  }
}
@media (max-width: 768px) {
  .card-list {
    &-item {
      flex-basis: 100%;
    }
  }
}
.active {
  transform: scale(1) !important;
  opacity: 1 !important;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.top-icon {
  position: fixed;
  right: 5%;
  bottom: 20px;
  cursor: pointer;
  padding: 12px;
  font-size: 30px;
}
</style>
