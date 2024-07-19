<template>
  <div class="demo">
    <div class="loading">正在加载中<dot>...</dot></div>
  </div>
</template>

<style scoped lang="scss">
.demo{
  background: var(--vp-c-bg);
    height: 200px;
    width: 100%;
    border: 1px solid var(--vp-c-divider);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: var(--vp-c-text-1);
    font-weight: bold;

}
.loading {
  /**这里写自己自定义的样式 */
}
.loading > dot {
  height: 1em;
  overflow: hidden;
  display: inline-block;
  text-align: left;
  vertical-align: -0.25em;
  line-height: 1;
}
/* 核心代码 */
.loading > dot:before {
  display: block;
  /* 这行代码最重要 */
  content: "...\A..\A.";
  /* 值是Pre也是一样的效果 */
  white-space: pre-wrap;
  animation: dot 3s infinite step-start both;
}
@keyframes dot {
  33% {
    transform: translateY(-2em);
  }
  66% {
    transform: translateY(-1em);
  }
}
</style>
