## Diagnosis
- The entry `index.js` imports `./src/router/AppRouter.jsx`. Build tools sometimes resolve `.js` by default but fail on `.jsx` or certain syntax.
- Current `AppRouter.jsx` uses ES module imports and no JSX (already `React.createElement`), so converting to `.js` is safe.

## Plan
1. Rename `src/router/AppRouter.jsx` → `src/router/AppRouter.js` to match default resolver.
2. Update `index.js` to `import AppRouter from './src/router/AppRouter';` (omit extension) for robust resolution.
3. Re-run dev server to confirm the module is found and routes render.
4. If any parser errors persist, I’ll ensure `AppRouter.js` contains only ES5-compatible syntax already in place (no JSX), which is compatible with the current Babel presets.

## Verification
- Start local server and open `/`, `/products/1`, `/case-studies`, `/case-studies/azure`.
- Confirm no "Cannot find module" errors and pages render.

## Notes
- No behavioral changes; only file rename and import path fix to satisfy resolver. I’ll keep all other routing logic intact.