import { defineConfig } from "vitepress";
const isDevelopment = process.env.NODE_ENV === "development";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["meta", { name: "robots", content: "index,follow" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "script",
      {
        src: isDevelopment
          ? ""
          : "https://hm.baidu.com/hm.js?34814da6a27723ff8a5c8329db396f07",
      },
    ],
  ],

  appearance: "dark",
  lastUpdated: true,
  title: "技术总结备忘录",
  titleTemplate: "黄博航的博客",
  description: "黄博航的博客,huangbohang's Blog,",
  themeConfig: {
    siteTitle: "黄博航的博客",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "问题收纳", link: "/summary/", activeMatch: "^/summary/" },
      { text: "我爱学习", link: "/question/", activeMatch: "^/question/" },
      { text: "效果展示",  activeMatch: "^/demo/", items: [
        {
          text: "简易demo",
          link: "/demo/easyDemo",
        },
        {
          text: "演示案例",
          link: "/demo/collectCase",
        },
      ], },
      {
        text: "友情链接",
        items: [
          {
            text: "茂茂物语",
            link: "https://notes.fe-mm.com/",
          },
        ],
      },
      {
        text: "开源项目",
        items: [
          {
            text: "页面导出word",
            link: "https://github.com/huangbohang/export-word",
          },
          {
            text: "飞书插件",
            link: "https://github.com/huangbohang/donwload-files",
          },
        ],
      },
      { text: "关于我", link: "/about/", activeMatch: "^/about/" },
    ],

    sidebar: {
      "/summary/": [
        {
          text: "问题收纳",
          items: [
            {
              text: "Vue",
              items: [
                {
                  text: "动态修改checkbox勾选框颜色",
                  link: "/summary/solution/checkbox_change_color",
                },
                {
                  text: "vue3+element plus 子组件触发form校验",
                  link: "/summary/solution/form_valid_form_child",
                }
              ],
            },
            {
              text: "简短代码",
              items: [
                {
                  text: "JavaScript一行代码",
                  link: "/summary/solution/JsInline/index",
                },
                {
                  text: "可一键复制粘贴效果组",
                  link: "/summary/solution/ShortTips/index",
                },
              ],
            },
            {
              text: "第三方库",
              items: [
                {
                  text: "gitlab私有化部署",
                  link: "/summary/solution/gitLab",
                },
                {
                  text: "FullCalendar 中 24:00 修改成00:00",
                  link: "/summary/solution/fullCalendar",
                },
              ],
            },
            {
              text: "前端调试技巧",
              link: "https://juejin.cn/post/7388338139633532979",
            },
            {
              text: "微服务",
              link: "/summary/solution/micro_frontends",
            },

            // {
            //   text: "Electron实战",
            //   items: [
            //     {
            //       text: "为什么选择Electron",
            //       link: "/summary/electron/why_choose_electron",
            //     },
            //     {
            //       text: "Electron生态开发技术选型",
            //       link: "/summary/electron/development_technology_selection",
            //     },
            //     {
            //       text: "环境&工程搭建",
            //       link: "/summary/electron/vite_electron_react",
            //     },
            //     {
            //       text: "Electron跨进程通信",
            //       link: "/summary/electron/cross_process_communication",
            //     },
            //     {
            //       text: "原生模块调用&开发",
            //       link: "/summary/electron/native_module_call_development",
            //     },
            //     {
            //       text: "应用打包",
            //       link: "/summary/electron/application_packaging",
            //     },
            //     {
            //       text: "应用升级",
            //       link: "/summary/electron/application_update",
            //     },
            //     {
            //       text: "网络请求封装",
            //       link: "/summary/electron/network_request",
            //     },
            //     {
            //       text: "Mac Root模式Tarui + Eletron实现WebView",
            //       link: "/summary/electron/tauri_webview",
            //     },
            //     {
            //       text: "Electron 中使用 SQLite",
            //       link: "/summary/electron/electron_sqlite",
            //     },
            //     {
            //       text: "Electron 实现一个桌面悬浮窗",
            //       link: "/summary/electron/electron-min-window",
            //     },
            //   ],
            // },
            // {
            //   text: "Tauri应用开发实践指南",
            //   items: [
            //     {
            //       text: "Tauri 怎么样",
            //       link: "/summary/tauri/how_about_tauri",
            //     },
            //     {
            //       text: "Tauri 工程搭建",
            //       link: "/summary/tauri/tauri_project",
            //     },
            //     {
            //       text: "Tauri 配置介绍",
            //       link: "/summary/tauri/tauri_config",
            //     },
            //     {
            //       text: "Tauri 原生能力",
            //       link: "/summary/tauri/tauri_native",
            //     },
            //   ],
            // },

            // {
            //   text: "一些实践",
            //   items: [
            //     {
            //       text: "Vue keep-alive使用&详解",
            //       link: "/summary/practice/vue_keep_alive",
            //     },
            //     {
            //       text: "react-i18next 实现国际化",
            //       link: "/summary/practice/react_i18",
            //     },
            //   ],
            // },
          ],
        },
      ],
      "/demo/": [
        {
          text: "简易案例（含源码）",
          link: "/demo/easyDemo",
        },
        {
          text: "演示案例",
          link: "/demo/collectCase",
          items:[
            {
              text: "面试宝典",
              link: "https://huangbohang.github.io/demo1",
            }
          ]
        },
      ],
      "/question/": [
        {
          text: "我爱学习",
          items: [
            {
              text: "Javascript",
              items: [
                {
                  text: "Js原型链",
                  link: "https://juejin.cn/post/7402204174065696795",
                },
                {
                  text: "JS垃圾回收机制",
                  link: "/question/javascript/carbage_recovery_mechanism",
                },
                {
                  text: "Web应用中的存储方式",
                  link: "/question/javascript/storage_method_in_web_applications",
                },
                {
                  text: "apply、call、bind比较",
                  link: "/question/javascript/apply_call_bind",
                },
                {
                  text: "JS模块化",
                  link: "/question/javascript/js_modularization",
                },
                {
                  text: "前端异步编程解决方案",
                  link: "/question/javascript/asynchronous_solution",
                },
                {
                  text: "浅拷贝和深拷贝",
                  link: "/question/javascript/shallow_copy_and_deep_copy",
                },
              ],
            },

            {
              text: "Vue",
              items: [
                {
                  text: "Vue组件通信方式",
                  link: "/question/vue/component_communication_method",
                },
                {
                  text: "真实DOM和虚拟DOM",
                  link: "/question/vue/dom_and_virtual_dom",
                },
                {
                  text: "Vue和React",
                  link: "/question/vue/vue_react",
                },
                {
                  text: "Vue2和Vue3对比",
                  link: "/question/vue/vue2_vue3",
                },
              ],
            },
            {
              text: "React",
              items: [
                {
                  text: "React样式解决方案",
                  link: "/question/react/react_styling_solutions",
                },
                {
                  text: "React组件通信方式总结",
                  link: "/question/react/react_components_props",
                },
              ],
            },
            {
              text: "网络",
              items: [
                {
                  text: "TCP和UDP的区别",
                  link: "/question/network/tcp_and_udp",
                },
                {
                  text: "输入URL回车后全过程",
                  link: "/question/network/what_steps_after_entering_the_url",
                },
                {
                  text: "跨域解决方案",
                  link: "/question/network/cross_domain_solution",
                },
                {
                  text: "http 和 https的区别",
                  link: "/question/network/http_and_https",
                },
              ],
            },
            {
              text: "杂项",
              items: [
                {
                  text: "JSBridge原理简析",
                  link: "/question/sundry/JSBridge",
                },
              ],
            },
            {
              text: "python",
              items:[
                {
                  text: "python基础",
                  link: "/question/python/python_base",
                }
              ]
            }
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/huangbohang" }],
  },
});
