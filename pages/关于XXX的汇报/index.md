---
layout: center
transition: slide-left
---

# Page 2

<!--点击动画，after将在该动画后自动显示-->
<span v-click> Hello </span> <span v-after> World </span>

<!-- 一组动画，适用于列表 -->
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>

<!-- 引入代码片段 -->
<<< ./snippets.ts#snippet

<!--
备注：
[click] 第三行，每一页最后的注释被视为备注

[click] 全部
-->

---

# Page 3

---

# Page 4