## 迁移目标
将 `doc/Case.vue` 的功能、样式与交互完整迁移到 `src/CustomerCase/Page1.jsx#L59`，采用 React + Ant Design v3，实现行业案例的 Tab 切换与卡片网格展示。

## 差异与适配
- 技术栈：Vue + Tailwind 风格类 → React + AntD v3 + LESS/内联样式
- 组件替换：Card/Tabs/Grid 用 AntD 组件；移除 `@/components/ui/card` 自定义依赖
- 样式：Tailwind 类名转为 AntD 布局（Row/Col）与少量 LESS（或内联）

## 实施步骤
1. 在 `src/CustomerCase/Page1.jsx` 中创建子组件 `IndustryCase`，插入到 L59 位置
   - `useState` 管理 `activeTab`
   - `categories`/`casesMap` 数据结构保持与 Vue 等价（中文文案与字段一致）
   - `displayedCases` 逻辑同 Vue 的 `computed`：当选中“全部”合并各类案例
   - `getImageUrl` 保持同样的 fallback（找不到时使用占位图）

2. UI 组件选型
   - 顶部标题与描述：沿用页面现有 `page` 容器，使用普通标签
   - Tab：AntD `Tabs`，`key` 与标签名称对应（“全部/塑料制品/...”)；点击时更新 `activeTab`
   - 卡片网格：`Row` + `Col`（`xs={24} md={12} lg={8}`） + AntD `Card`，卡片头（`Card.Meta`）与图片容器模拟 Vue 结构
   - 空态：无数据时渲染一个居中提示块（使用 AntD `Card` 或简单 DIV）

3. 样式实现
   - 采用内联样式 + 现有 `.page` 布局，必要时新增一个 `case.less`（若需要更精细的样式，再最小增量添加）
   - 响应式：通过 Row/Col 的栅格断点达成（手机 1 列；平板 2 列；桌面 3 列）

4. 依赖与路径
   - 引入 `antd` 组件：`Tabs, Card, Row, Col`
   - 移除 Vue 与 `@/components/ui/card` 的依赖；图片占位若无 `demo-img.jpg`，将使用现有资源或远程占位图

5. 交互与功能
   - Tab 切换更新 `activeTab` 并重新渲染列表
   - 卡片展示图片、标题与描述；图片地址使用 `getImageUrl`
   - 空态展示与底部提示文案照搬 Vue

6. 测试
   - 单元测试（Mocha）：
     - 渲染测试：默认“全部”合并后的卡片数量
     - 交互测试：点击某分类 Tab 后列表更新
     - 样式/布局快照：断点栅格属性校验（基础验证）
   - 构建验证：`npm run build`

7. 文档更新
   - 在 `src/CustomerCase/README.md` 添加使用说明与迁移位置说明（从 `doc/Case.vue` → `src/CustomerCase/Page1.jsx#L59`），以及开发注意事项

## 交付内容
- 代码：更新 `src/CustomerCase/Page1.jsx`，新增子组件及所需导入
- 测试：`src/CustomerCase/__tests__/Page1-test.js`
- 文档：`src/CustomerCase/README.md`

## 回滚与安全
- 所有改动都限定在 `CustomerCase` 目录；不移除原 `doc/Case.vue`，确保可对比回滚
- 不引入新的外部依赖，全部使用已有 AntD v3 与项目样式体系