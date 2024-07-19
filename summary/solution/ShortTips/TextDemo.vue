<template>
  <div class="text-demo"></div>
</template>

<style scoped lang="scss">
.text-demo {
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
  position: relative;
  margin: 20 auto;
}

.text-demo::before {
  content: "愿祖国繁荣昌盛";
  position: absolute;
  font-size: 50px;
  width: 100%;
  height: 100%;
  top: 40%;
  left: 20%;
  color: #fff;
  mix-blend-mode: difference;
  animation: move 3s infinite linear alternate;
}

@keyframes move {
  0% {
    transform: translateX(20%);
  }

  100% {
    transform: translateX(-20%);
  }
}
</style>
