## Goal
Render markdown from `src/assets/markdown/塑料制品案例1.md` inside `src/CustomerCase/Page1.jsx` (lines 84–125), with loading/error states, proper styling, and compatibility for dev/prod.

## Approach
- Use `raw-loader` to import `.md` as a raw string at build time (safe for legacy webpack in atool-build).
- Parse markdown with `showdown` (already compatible with React 16 & legacy toolchain).
- Sanitize HTML output with `dompurify` (v2.x already installed).
- Display inside Ant Design `Modal` (existing), with loading/error feedback using `Spin` and conditional rendering.

## Steps
1. Add dev dependency for markdown import:
   - Install `raw-loader@0.5.1` (legacy-compatible) and configure inline loader syntax (no webpack config changes required).
2. In `src/CustomerCase/Page1.jsx`:
   - Import md text: `import caseMd from '!!raw-loader!../assets/markdown/塑料制品案例1.md';`
   - Replace the inlined markdown literal in `casesMap.plastics[0]` with `markdown: caseMd`.
   - In `IndustryCase` state, add `mdLoading` and `mdError`.
   - Update `openMarkdown(item)`:
     - Set `mdLoading = true`, `mdError = null`.
     - Try to convert `item.markdown` (or fallback to description) via `showdown.Converter().makeHtml` and sanitize with `DOMPurify.sanitize`.
     - On success set `mdHtml`, `mdVisible = true`, `mdLoading = false`.
     - On failure set `mdError` and `mdLoading = false`.
   - In Modal body:
     - If `mdLoading`: render `<Spin tip="加载中..." />`.
     - If `mdError`: render an error message block.
     - Else: render sanitized HTML via `dangerouslySetInnerHTML`.
3. Styling & responsive:
   - Modal already uses `wrapClassName='customer-case-md'` and content container with `maxHeight: '70vh', overflowY: 'auto'` for scroll.
   - Ensure markdown images scale: add container CSS rule `.customer-case-md img { max-width: 100%; height: auto; }` in `src/CustomerCase/style.less`.
4. Type definitions:
   - Add `src/types/markdown.d.ts`:
     - `declare module '*.md' { const content: string; export default content }`
5. Comments in code:
   - Brief comments near the import and `openMarkdown` explaining raw import & parse/sanitize pipeline.
6. Verification:
   - Dev: start server and click the “塑料制品案例1” card → Modal shows markdown with images & tables.
   - Prod: run `npm run build` to ensure bundling succeeds and modal renders.
   - Confirm loading state appears briefly and error state works by temporarily changing import path.

## Deliverables
- Updated `Page1.jsx` with raw import, state management, and modal rendering logic.
- `src/types/markdown.d.ts`.
- Updated `src/CustomerCase/style.less` for markdown image scaling.

## Rollback
- Keep previous inline markdown literal in VCS history; removing `raw-loader` is trivial if needed. 