## 路由与框架选择
- 使用 `react-router-dom@4.x`（兼容 React 16.1），提供 `/products/:id`、`/case-studies`、`/case-studies/:id` 三类路由
- 路由懒加载采用 `react-loadable`（兼容低版本 React，无需 `React.lazy`）
- 页面过渡动画复用现有 `rc-queue-anim` 或 `rc-animate`

## 文件结构与新增文件
- `src/router/AppRouter.jsx`：集中声明路由与过渡动画包装
- `src/pages/products/ProductDetail.jsx`：产品详情页（图片、规格参数、功能介绍模块）
- `src/pages/case-studies/CaseStudiesList.jsx`：案例列表页
- `src/pages/case-studies/CaseStudyDetail.jsx`：案例详情页（背景、解决方案、成果展示模块）
- `src/services/products.js` 与 `src/services/caseStudies.js`：数据获取（可先用本地模拟，后接入 API）
- 入口修改：`src/index.js` 用 `BrowserRouter` 包裹应用（或 `HashRouter` 以简化部署）

## 路由配置示例
- `/products/:id` → `ProductDetail`，通过 `match.params.id` 拉取并展示数据
- `/case-studies` → `CaseStudiesList`，列表项点击跳转 `/case-studies/:id`
- `/case-studies/:id` → `CaseStudyDetail`
- 默认 `/` 仍指向现有 Home（保留原有页面）

## 懒加载与代码拆分
- 使用 `react-loadable` 包裹页面组件：`Loadable({ loader: () => import('...'), loading: Spinner })`
- 每个页面组件独立打包，降低首屏体积

## 页面过渡动画
- 在 `AppRouter.jsx` 中用 `rc-queue-anim` 包裹 `Switch` 的 `Route` 输出，配置 `type="bottom"` 或淡入淡出实现过渡

## SEO 与 SSR/SSG
- 保持 `react-document-title` 设置页面标题与描述（已在项目依赖）
- 新增 `scripts/prerender.js`，用 `ReactDOMServer.renderToString` 生成静态 HTML：
  - 针对若干 `products` 与 `case-studies` 的典型 `id` 生成 `/dist/products/<id>.html`、`/dist/case-studies/<id>.html`
  - `npm run build` 后执行预渲染，满足 SSG 场景
- 若需要进一步 SSR，可增设轻量 Node 服务渲染，但优先 SSG 以适配当前构建体系

## 数据模块
- `services/products.js`：`getProductById(id)` 返回 { id, name, images, specs, features }
- `services/caseStudies.js`：`getCaseStudyById(id)` 与 `getCaseStudies()` 返回列表与详情
- 初期使用本地 JSON/JS 模拟，后续替换为真实接口

## 测试
- 使用 `mocha` + `react-dom/server` + `MemoryRouter` 验证：
  - 路由路径跳转是否匹配到对应组件
  - `:id` 动态参数是否驱动数据加载
  - `history` 前进/后退行为是否正确（`createMemoryHistory`）
  - 移动端与桌面端在现有 `responsive.less` 下布局一致（快照或渲染片段宽度判断）

## 兼容性与风险控制
- 不升级 React，避免与现有依赖冲突
- 引入新依赖：`react-router-dom@4.x`、`react-loadable`，保持最小改造
- 保留现有 Home 架构与样式文件，逐步引入路由而非一次性重构

## 交付步骤
1. 安装依赖与创建路由文件、页面文件，修改入口包裹 Router
2. 接入 `react-loadable` 懒加载与过渡动画
3. 完成数据模块与页面展示结构（图片、规格、功能；案例背景、方案、成果）
4. 添加测试用例，覆盖路由跳转、参数加载、历史记录
5. 新增 `prerender.js` 并更新构建脚本，生成静态页面供 SEO
6. 验证在本地预览与构建产物中所有路由可访问，无 404

确认后我将按以上步骤实现并提交变更。