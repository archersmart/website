# CustomerCase 行业案例组件（迁移自 doc/Case.vue）

## 位置
- 迁移目标位置：`src/CustomerCase/Page1.jsx`（插入点：约第 59 行）
- 原始文件：`doc/Case.vue`

## 技术栈适配
- Vue + Tailwind 风格类 → React + Ant Design v3 + LESS/内联样式
- UI 组件：`Tabs`、`Card`、`Row/Col`（来自 AntD v3）

## 功能
- 行业 Tab 切换（“全部/塑料制品/金属制品/电器及附件/食品饮料/医药与医疗器械/其他”）
- 案例列表：标题、描述、图片；“全部”时合并各分类内容
- 空态提示与底部占位文案

## 使用
- 直接在 `Page1.jsx` 中渲染，无需额外引入：
```jsx
// 已插入 <IndustryCase /> 到 Page1.jsx 指定位置
```

## 注意事项
- 图片占位使用仓库现有资源作为 fallback（`src/assets/logo/igarashi.png`）
- 若需要从 public 目录读取图片，请确保路径以 `/` 开头

## 测试
- 单元测试文件：`src/CustomerCase/__tests__/Page1-test.js`
- 由于 `atool-test-mocha` 与 Node v22 存在不兼容，建议使用较低版本 Node 运行测试或升级测试工具链