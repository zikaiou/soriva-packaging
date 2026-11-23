# SORIVA Packaging — Image Quality Audit (Working Log)

Last updated: 2026-11-23  
Repository: `zikaiou/soriva-packaging`  
Branch baseline: `60db1e24ec0922726fd3ff1cfaae9909dfd05a62`

## Scope and progress

- Enumerated **93 App route page files** under `src/app/**/page.tsx`.
- Catalogued local `/img/` references in the 93 route files in source-level batches.
- Inventory contains **108 files** under `public/img/`: 57 WebP, 33 PNG, 16 JPEG, and 2 SVG.
- Extracted pixel dimensions for all **73 WebP/JPEG** assets.
- Visually reviewed a representative subset of product, project, paper-bag, and factory assets. This is not yet a full visual audit of every referenced asset or every route.
- Reviewed shared CSS rules: several card/image blocks use `object-fit: cover` with 4:3 aspect ratios. Source-level review does not prove how each image crops at live mobile breakpoints.

## Changes in this batch

Only image references were changed; layout, copy, SEO metadata, links, and product structures were left intact.

- Home page — Corporate Gifts category card now uses `v18-corporate.webp` (804 × 542) instead of the less representative empty-box image.
- Custom Packaging page — Candle Packaging card now uses `v18-candle.webp` (766 × 542); Corporate Gifts card now uses `project-gift-clean.webp` (900 × 675).
- Custom Gift Boxes with Inserts — Candles & Home Fragrance card now uses `v20-candle-sets.webp` (448 × 355), which visibly shows a two-candle set with a fitted insert.
- Corporate Gift industry page — hero uses `project-gift-clean.webp` (900 × 675); application image uses `v18-corporate.webp` (804 × 542).

## Confirmed observations

- `project-candle-clean.webp` is 1200 × 900 but appears visibly soft/blurred in visual review. Resolution alone is not a reliable quality indicator.
- `project-gift-clean.webp`, `project-perfume.webp`, `project-skincare.webp`, and `project-jewelry.webp` are 900 × 675 and looked materially clearer in the reviewed samples.
- The two high-resolution paper-bag photographs `sample-paperbag-ribbon-minimal.jpg` and `sample-paperbag-coordinated-floral.jpg` are 2048 × 1536; `sample-paperbag-matching-set.jpg` is 1702 × 1276.
- `project-candle.webp` and `project-gift.webp` are graphic/collage-like assets rather than clean standalone product photographs; avoid using them as hero product photos without further review.
- Some repeated imagery is intentional across related industry and solution pages. Reuse count alone is not evidence of a wrong image.

## Unresolved items — continue in the next audit batch

1. Visually inspect the remaining referenced assets and routes, especially large PNG files. The connected file reader did not return usable base64 previews for several PNGs above its binary-size limit, so their visual content and dimensions remain unverified.
2. Verify the actual product structure shown by `two-piece-rigid-box-correct.png.png` and the two-piece application references before making any replacements.
3. Obtain/confirm a genuine high-resolution drawer-box candle application image. The drawer-box page describes a sliding structure; do not substitute a hinged magnetic candle gift box.
4. Obtain/confirm a genuine cylindrical candle tube-packaging photo. The tube-candle solution page must not use a rigid gift-box image as a substitute.
5. Revisit the remaining `project-candle-clean.webp` references in structure-specific contexts (candle industry hero, drawer boxes, two-piece rigid boxes, and tube packaging). Replacement is pending because the currently reviewed alternatives do not safely prove the same structure.
6. Continue checking magnetic rigid, foldable magnetic, two-piece rigid, drawer, jewelry, tube, and paper-bag pages for category fit, duplicate use, sharpness, and missing close-up/detail shots.
7. Perform live mobile visual checks at common narrow widths (approximately 360–390 px) and tablet widths. CSS uses centered `object-fit: cover` in multiple card areas; adjust crops only where an actual subject is cut off.
8. Confirm image references that are dynamically assembled or supplied by shared components, beyond the static string scan.

## Guardrails

- Prefer an existing image only when both product category and visible structure match.
- Do not infer a box structure from a generic image.
- Do not replace a blurry image with a lower-resolution asset in a large hero area.
- Keep unresolved items visible in this log rather than using an incorrect substitute.
