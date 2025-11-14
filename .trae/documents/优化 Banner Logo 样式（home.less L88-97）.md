## 目标
- 提升 `div.logo` 在不同屏幕下的可读性与视觉层次
- 增加轻微 hover 动效与平滑过渡
- 调整尺寸与间距以匹配页面整体设计
- 引入专用样式类，且不影响其他元素布局

## 现状与问题
- `src/Home/static/home.less:88-97` 的 `.logo` 存在重复 `width`、`margin` 定义，语义不清晰且易冲突
- 目前 DOM 可能为文本（示例：`<div class="logo">ArcherSmart.AI</div>`），应以文本清晰度与对比度为主

## 拟议修改（只改 home.less L88-97 区块）
- 新增专用类：`.banner-logo`
- 保留兼容选择器：`.banner .logo, .banner .banner-logo`，避免立即修改 JSX 也能生效
- 使用响应式字号与平滑过渡，添加轻微 hover 效果（不改变文档流）

### 具体 CSS 片段（替换 L88-97，并新增 hover 与过渡）
```
/* 专用 Banner Logo 样式：文本清晰与响应式 */
.banner .logo,
.banner .banner-logo {
  display: block;
  margin: 96px auto 32px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: clamp(22px, 2.6vw, 40px);
  line-height: 1.15;
  letter-spacing: 0.6px;
  text-shadow: 0 6px 22px rgba(2, 17, 76, 0.35);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  transition: color .2s ease, transform .2s ease, text-shadow .2s ease;
  will-change: transform;
}

.banner .logo:hover,
.banner .banner-logo:hover {
  transform: translateZ(0) scale(1.03);
  text-shadow: 0 10px 30px rgba(2, 17, 76, 0.45);
}
```
- 解释：
  - `clamp(22px, 2.6vw, 40px)` 保证在小屏与大屏间自动缩放，避免额外媒体查询
  - `transform: scale(1.03)` 与 `text-shadow` 微调增强感知，不改变布局
  - 移除重复的 `width`/`margin` 数值，统一为居中文本风格

## 兼容性与不影响其他布局
- 选择器限定为 `.banner .logo`/`.banner .banner-logo`，仅作用于 Banner 区域
- 使用标准属性与保守数值，避免触发布局回流
- 与现有 `responsive.less` 共存，无需改动其他文件

## 验证
- 视觉：在桌面与移动视图检查 logo 位置与字号是否协调，与 `.page` 宽度一致居中
- 交互：hover 缩放与阴影平滑，且不会引起跳动
- 样式：ESLint/CSS 质量保持（不引入危险选择器或全局覆盖）

## 备注
- 如需更强适配，可后续在 `responsive.less` 中为极端屏宽再加覆盖；本次优先自适应 `clamp` 实现。

请确认以上方案，我将按片段更新 `home.less` 的指定行，并保留对现有 `.logo` 的兼容。