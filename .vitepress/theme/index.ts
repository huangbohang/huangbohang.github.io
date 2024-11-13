import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, EnhanceAppContext } from 'vitepress'

import NavVisitor from './components/NavVisitor.vue'
import './custom.css'

export default   {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout,null,{
      'nav-bar-title-after': () => h(NavVisitor),
    })
  },
  enhanceApp({ app, router }: EnhanceAppContext) {


    app.provide('DEV', process.env.NODE_ENV === 'development')


  },
  
}
