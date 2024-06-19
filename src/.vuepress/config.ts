import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base: "/",
  lang: "zh-CN",
  title: "皮蛋520号",
  description: "A blog demo for vuepress-theme-hope",
  theme,


  shouldPrefetch: false,
});
