export default (containerElement) => {
  const intersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        const { target } = entry;
        const animateClass = target.getAttribute("animate-class");
        
        if (entry.isIntersecting) {
          // 如果元素进入可视区域，添加动画类
          if (!target.classList.contains(animateClass)) {
            target.classList.add(animateClass);
          }
        } else {
          // 如果元素离开可视区域，移除动画类
          if (target.classList.contains(animateClass)) {
            target.classList.remove(animateClass);
          }
        }
      }
    },
    {
      top :100,
      // threshold: 0,
    }
  );

  // 添加动画class的操作
  containerElement.querySelectorAll("[animate-class]").forEach((element) => {
    intersectionObserver.observe(element);
  });

  // 返回一个函数，用于取消观察
  return () => {
    intersectionObserver.disconnect();
  };
};