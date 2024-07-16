import { onBeforeUnmount,onMounted  } from "vue";

// 样式修改
const useStyle = () => {
  let asideElement = null;
  let contentElement = null;
  let contentContainerElement = null;
  onMounted(() => {
    // 缓存对元素的引用
    asideElement = document.querySelector("#VPContent .container>.aside");
    contentElement = document.querySelector("#VPContent .container>.content");
    contentContainerElement = contentElement.querySelector(
      " .content-container"
    );

    // 隐藏 aside 元素
    asideElement.style.display = "none";

    // 重置 content 元素的 maxWidth
    contentElement.style["max-width"] = "100%";
    contentContainerElement.style["max-width"] = "100%";
  });

  onBeforeUnmount(() => {
    // 复原样式
    if (asideElement) {
      asideElement.style.display = "";
    }
    if (contentElement) {
      contentElement.style["max-width"] = "";
    }
    if (contentContainerElement) {
      contentContainerElement.style["max-width"] = "";
    }
  });
};
export default useStyle;
