## 目标
把 `src/CustomerCase/Page1.jsx#L215` 的 `Modal` 对话框宽度设置为 80%，并在不同屏幕下保持良好响应式与滚动体验，且不影响现有功能。

## 需要修改的具体元素
- 目标元素：`src/CustomerCase/Page1.jsx:215` 的 `Modal` 组件（Markdown 对话框）。

## 实施方案
### 1. 修改 Modal 属性（定位到 L215）
- 添加 `wrapClassName="customer-case-md"`（用于挂载样式作用域）
- 移除可能的固定 `width`（保留默认），由 CSS 控制宽度

示例：
```jsx
<Modal
  visible={mdVisible}
  title={mdTitle}
  onCancel={closeMarkdown}
  footer={null}
  centered
  maskClosable
  wrapClassName="customer-case-md"
>
  ...
</Modal>
```

### 2. 按项目规范新增样式（LESS）
- 新增 `src/CustomerCase/style.less`，并在 `Page1.jsx` 顶部 `import './style.less'`
- 使用作用域类 `customer-case-md` 覆盖 AntD Modal 的容器宽度
- 设置桌面宽度为 80%，限制最大宽度避免超大屏过宽；在移动端使用视口宽度

LESS 片段：
```less
/* 客户案例 Markdown 对话框宽度与响应式 */
.customer-case-md {
  .ant-modal {
    width: 80% !important;
    max-width: 960px;
  }
  .ant-modal-body {
    padding: 16px;
  }
}

@media (max-width: 767px) {
  .customer-case-md {
    .ant-modal {
      width: 92vw !important; /* 小屏更贴合视口 */
      max-width: none;
    }
  }
}
```

### 3. 布局与滚动保持
- 保持现有对话框内容容器样式：`maxHeight: '70vh', overflowY: 'auto'`
- 不更改卡片点击事件与 Markdown 解析逻辑，功能不受影响

### 4. 验证
- 桌面（≥1200px）：对话框宽度 80%（不超过 960px），居中、滚动正常
- 平板（768–1199px）：宽度 80%，居中显示
- 手机（≤767px）：宽度约 92vw，自适应视口，滚动良好
- 检查内容不变形、不溢出

### 5. 备选极简方案（无需新文件）
- 若不希望新增 LESS 文件，可在 `Modal` 上添加 `style={{ width: '80%' }}`；但 AntD v3 推荐用 `wrapClassName + CSS`，兼容性更好

## 交付
- 更新 `Page1.jsx` 的 `Modal` 属性
- 新增并引入 `src/CustomerCase/style.less`
- 构建与手动设备模拟验证三档断点表现