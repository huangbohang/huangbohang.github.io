---
outline: deep
title: vue3+element plus 子组件触发form校验
---



# 代码实现 


```js 
import { formItemContextKey } from 'element-plus';
import { inject } from 'vue';

export function useTrigger() {
  const elFormItem = inject(formItemContextKey);
  const emitTrigger = (trigger = 'change') => {
    if (elFormItem?.validate) {
      elFormItem.validate(trigger);
    }
  };
  return { emitTrigger };
}

// 使用
import { useTrigger } from '@/hooks/useTrigger'
const { emitTrigger } = useTrigger()
emitTrigger('blur')


```

