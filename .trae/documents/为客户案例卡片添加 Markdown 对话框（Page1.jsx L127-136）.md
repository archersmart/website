## 目标
在 `src/CustomerCase/Page1.jsx#L127-136` 为卡片增加点击事件，弹出对话框展示 Markdown 内容，保持现有功能与视觉规范（Ant Design v3），并完成解析/渲染、响应式与滚动体验。

## 依赖方案
- 使用 `marked` 进行 Markdown → HTML 解析
- 使用 `dompurify` 对 HTML 进行安全清洗，防 XSS
- 使用 Ant Design v3 的 `Modal` 作为对话框容器，保持项目一致的 UI 规范

## 实施步骤
### 1. 引入与依赖
- 安装依赖：`marked`、`dompurify`
- 在 `Page1.jsx` 中导入：
  - `import { Modal } from 'antd'`
  - `import DOMPurify from 'dompurify'`
  - `import marked from 'marked'`

### 2. 状态管理
- 在 `IndustryCase` 组件内新增状态：
  - `const [mdVisible, setMdVisible] = useState(false)`
  - `const [mdTitle, setMdTitle] = useState('')`
  - `const [mdHtml, setMdHtml] = useState('')`
- 打开/关闭：
  - `openMarkdown(item)`：从 `item.markdown`（无则用 `item.description` 兜底）→ `marked` → `DOMPurify.sanitize`，设置 `mdHtml` 并 `setMdVisible(true)`
  - `closeMarkdown()`：`setMdVisible(false)`

### 3. 卡片点击事件（定位到 L127-136）
- 在 `<Card ...>` 增加 `onClick={() => openMarkdown(item)}` 与视觉反馈：`style={{ cursor: 'pointer' }}`
- 保持卡片内部结构与现有渲染逻辑不变（图片、Meta 等）

### 4. 对话框组件与样式
- 使用 `Modal`：
  - `visible={mdVisible}`、`onCancel={closeMarkdown}`、`footer={null}`、`maskClosable` 与 `centered`
  - 内容容器样式：`maxHeight: '70vh', overflowY: 'auto', padding: 16` 确保滚动体验
  - 响应式：Modal 自适应宽度（AntD 默认），内容容器保证在小屏上滚动
  - 渲染方式：`<div dangerouslySetInnerHTML={{ __html: mdHtml }} />`

### 5. 过渡动画
- 采用 AntD Modal 的默认过渡；如需更柔和效果可在容器上增加 `transition: 'opacity 0.2s ease'`（可选）

### 6. 数据与兜底
- 兼容 Vue 版数据：
  - 若 `item.markdown` 不存在，使用 `item.description` 或模板字符串生成简易 Markdown（标题、说明、图片）
  - 图片可用 `![](url)` 注入 Markdown（如需），由 `marked` 转换

### 7. 测试
- 功能测试：
  - 渲染时卡片存在，点击后对话框出现
  - 关闭按钮与点击遮罩关闭有效
- 样式测试：
  - 小屏下 Modal 内容滚动且居中显示
  - 卡片点击不影响原有图片与 Meta 渲染
- 交互测试：
  - 切换 Tab 后，点击任意卡片仍能正确展示对应 Markdown
- 工具链提示：当前 `npm test` 与 Node v22 存在不兼容（`atool-test-mocha`），建议使用较低版本 Node 或迁移 Jest；构建验证 `npm run build` 正常

## 代码改动（示例片段）
- 在 L127 的 `<Card ...>` 上：
```jsx
<Card bordered bodyStyle={{ padding: 16 }} onClick={() => openMarkdown(item)} style={{ cursor: 'pointer' }}>
  ...
</Card>
```
- 在 `IndustryCase` 组件尾部渲染对话框：
```jsx
<Modal visible={mdVisible} title={mdTitle} onCancel={closeMarkdown} footer={null} centered maskClosable>
  <div style={{ maxHeight: '70vh', overflowY: 'auto', padding: 16 }}>
    <div dangerouslySetInnerHTML={{ __html: mdHtml }} />
  </div>
</Modal>
```
- 方法实现：
```jsx
function openMarkdown(item) {
  const md = item.markdown || `# ${item.title || ''}\n\n${item.description || ''}`;
  setMdTitle(item.title || '详情');
  const html = DOMPurify.sanitize(marked(md));
  setMdHtml(html);
  setMdVisible(true);
}
```

## 文档更新
- 在 `src/CustomerCase/README.md` 增补“卡片 Markdown 对话框”使用说明与依赖列表（`marked`, `dompurify`）。

## 交付与验证
- 完成代码更改 → 构建与本地手动验证（桌面/平板/手机三档）
- 如需我同时准备降版本 Node 的测试运行脚本（或 Jest 配置），可附加执行。