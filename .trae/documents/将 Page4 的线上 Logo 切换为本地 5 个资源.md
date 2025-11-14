## 目标
- 用本地 `src/assets/logo` 中的 5 个文件替换 `src/Home/data.js:103-110` 的线上 URL
- 保持原有数据结构可由 `<img src={img} />` 直接使用，不引入布局副作用

## 实现方式
- 使用打包器的资源解析能力（atool-build/webpack + file-loader）通过 `require()` 解析本地图片，得到最终可用的 URL 字符串
- 在 `page4.children` 中直接放置 `require('../assets/logo/xxx.ext')` 表达式，避免纯相对路径在运行时 404

## 修改内容（仅 data.js 指定行）
- 删除 8 个线上 URL 字符串
- 以 5 个本地资源替换：
  - `require('../assets/logo/azure-svgrepo-com.svg')`
  - `require('../assets/logo/suse-svgrepo-com.svg')`
  - `require('../assets/logo/JOMOO-BXegpgze.png')`
  - `require('../assets/logo/BAMA_TEA-GpeuIlCr.png')`
  - `require('../assets/logo/igarashi.png')`
- 保持数组项为可用字符串（打包后），与原有引用方式一致（`<img src={img} />`）

## 验证
- `npm run lint` 确认代码风格与引用无误
- 启动开发服务并打开 Page4 区域，检查 5 张图片均正常显示
- 通过浏览器网络面板确认无 404

## 兼容性与影响
- 引入本地资源不会影响其他页面；作用范围仅在 `page4.children`
- 不修改组件结构与样式，保持现有布局与动画逻辑

确认后我将按上述方案更新 `data.js:103-110` 并进行验证。