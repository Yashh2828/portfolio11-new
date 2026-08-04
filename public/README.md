# Public Assets

This folder contains static assets served directly by Next.js.

## Accepted File Types

- Images: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`, `.ico`
- Documents: `.pdf`

## Global Asset Specifications

- Color profile: sRGB
- DPI metadata: 72 to 96 dpi (web optimized)
- File names: lowercase, hyphen-separated, for example `company-logo.png`
- Avoid spaces and special characters in file names
- Prefer compressed assets for faster loading

## Required Root Files

1. `resume.pdf`
2. `favicon.ico` (or `favicon.svg`)
3. Optional social preview image assets if you are not using Next.js metadata image routes

## Root Image Size Recommendations

- `og-image`: 1200 x 630 px, under 300 KB
- `favicon`: 32 x 32 or 48 x 48 px

## Usage Notes

- Any file in `public` is available at the root URL path.
- Example: `public/images/profile/avatar.png` is referenced as `/images/profile/avatar.png`.
- This project currently uses static social preview assets at `public/og-image.svg` and `public/twitter-image.svg`.
