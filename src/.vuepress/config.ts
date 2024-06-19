import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "皮蛋520号",
  description: "A blog demo for vuepress-theme-hope",
  theme,


  shouldPrefetch: false,
});
