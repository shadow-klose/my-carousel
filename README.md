# 🎠 my-carousel

纯前端轮播组件：slides 抽成数据，JS 循环渲染 DOM，translateX 首尾循环。

## 思路
内容与视图分离 —— 数据改一处，页面整体跟着变。
这套结构后续可直接平移到 Astro / React / AEM HTL，只是语法换皮。

## 跑起来
双击 `index.html` 即可，零依赖、无需构建。

## 技术点
- DOM 动态创建（createElement + appendChild）
- 索引取模实现首尾循环
- 圆点与箭头状态同步

## 进度
- [x] 数据驱动版轮播
- [x] Git 完整工作流（add / commit / pull / push）
- [x] README 聚焦技术表述（不写自述向）
- [ ] 迁移为 Astro 组件 `<Carousel client:load />`
- [ ] 接 Content Collection 当内容源

> 下一个站：Astro 第一天 🚀
