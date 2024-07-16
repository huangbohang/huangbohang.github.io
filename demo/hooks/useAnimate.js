export default (containerElement) => {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const { target } = entry;
        const animateClass = target.getAttribute("animate-class");
        if (entry.isIntersecting) {
          if (!target.classList.contains(animateClass)) {
            target.classList.add(animateClass);
          }
        }
      }
    },
    {
      threshold: 1,
    }
  );
  // 添加动画class的操作
  containerElement.querySelectorAll("[animate-class]").forEach((element) => {
    intersectionObserver.observe(element);
  });

  // 开启监听
};
