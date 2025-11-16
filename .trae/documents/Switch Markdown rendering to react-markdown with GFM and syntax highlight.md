## Goals
Enhance the modal markdown rendering in `src/CustomerCase/Page1.jsx` using `react-markdown`, delivering professional document-grade output with clear headings, lists, tables, links/images, GFM support, syntax highlighting, responsive styling, and error handling.

## Libraries & Compatibility
- Add: `react-markdown`, `remark-gfm` (GFM), `rehype-highlight` (syntax highlight), `highlight.js` (theme CSS)
- Keep current raw-loader `.md` import to pass markdown string
- Do NOT enable raw HTML by default (no `rehype-raw`) for safety
- Compatible with current React 16.x and build toolchain

## Implementation Steps
1. Install dependencies
   - `react-markdown`, `remark-gfm`, `rehype-highlight`, `highlight.js`
2. Create reusable renderer component
   - `src/CustomerCase/MarkdownRenderer.jsx`: wraps `ReactMarkdown` with `remarkGfm` and `rehypeHighlight`
   - Provide `components` overrides for `h1..h6`, `code`, `pre`, `ul/ol/li`, `table/thead/tbody/tr/th/td`, `a`, `img`
   - Add defensive rendering and error boundaries (try/catch around render)
3. Integrate renderer in modal body
   - Replace current `dangerouslySetInnerHTML` with `<MarkdownRenderer source={mdSource} />`
   - Maintain existing loading/error states; pass fallback when content missing
4. Styling for professional look
   - Extend `src/CustomerCase/style.less` under `.customer-case-md .markdown-body`:
     - Headings hierarchy sizes/margins
     - Code blocks: monospaced font, background, border radius
     - Lists spacing and indent
     - Tables: collapsed borders, zebra stripes, responsive overflow
     - Links color consistent with AntD (primary color)
     - Images max-width 100%, height auto
   - Import `highlight.js/styles/github.css` for syntax highlighting base
5. GFM support
   - Enable `remarkGfm` for tables, task lists, strikethrough
6. Responsive behaviors
   - Ensure `.markdown-body` uses `overflow-x: auto` for wide tables/code
   - Modal keeps current scroll container (`max-height: 70vh; overflow-y: auto`)
7. Error handling
   - If markdown parsing fails, show error block in modal
   - Image onError fallback
8. Types
   - Keep `src/types/markdown.d.ts` (already added) for `.md` imports

## Verification
- Dev: Click the plastics card → Modal shows structured markdown with highlighted code, proper tables, images and links
- Prod: `npm run build` passes; modal renders correctly
- Test GFM: tables, task lists, strikethrough

## Deliverables
- New `MarkdownRenderer.jsx`
- Updated `Page1.jsx` integrating renderer
- Updated `style.less` with markdown styles and highlight CSS import

## Rollback
- The previous showdown + dompurify path can be restored easily by reverting the renderer usage; new component is additive