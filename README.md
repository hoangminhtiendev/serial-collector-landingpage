# Serial Collector Landing Page

A lightweight, responsive static landing page for the Serial Collector iOS and Android apps. No build step, framework, npm packages, database, or backend is required.

## Files

- `index.html` — landing page, store links, SEO metadata, Open Graph/Twitter metadata, SoftwareApplication structured data.
- `styles.css` — responsive styling.
- `script.js` — current year and notes for optional campaign URL tagging. No analytics are enabled.
- `assets/og-image.svg` — social sharing artwork (SVG).
- `assets/favicon.svg` — favicon.
- `privacy.html` — privacy policy starter template. **Review and replace placeholders before publishing.**
- `netlify.toml` — static publish directory and basic security headers.
- `robots.txt` — permits search engines to crawl the site.

## Before publishing

1. Search for `YOUR-SITE-NAME.netlify.app` in `index.html` and replace it with your actual Netlify domain, including `https://`.
2. Review every feature claim against the current iOS and Android versions. The current copy is based on the provided app description; ensure both apps support the features advertised.
3. Replace `privacy.html` with an accurate policy and a contact method you monitor. Do not publish the placeholder policy unchanged.
4. Replace the illustrative phone mockup in `index.html` with genuine app screenshots when available. The current phone artwork is a CSS illustration, not an actual app screenshot.
5. Deploy on Netlify and test both download buttons on mobile and desktop.
6. To make social previews reliable, use an absolute public URL for `og:image`. Some social platforms may not support SVG preview images consistently. If previews do not display, replace `assets/og-image.svg` with a 1200×630 PNG/JPG and update `og:image` and `twitter:image` in `index.html`.
7. Validate the page after deployment using a social preview debugger and Google's Rich Results Test if desired.

## Deploy with GitHub + Netlify

1. Create a GitHub repository, e.g. `serial-collector-landing-page`.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP file).
3. In Netlify, choose **Add new project → Import an existing project**, connect GitHub, and select the repository.
4. Set the publish directory to `.`. There is no build command.
5. Deploy. Netlify will provide a public HTTPS URL.
6. Replace the placeholder canonical, Open Graph URL, and image URLs in `index.html` with the final URL, then commit and push the update.

## Campaign links

Use tagged links when sharing on social platforms, for example:

`https://YOUR-SITE-NAME.netlify.app/?utm_source=facebook&utm_medium=social&utm_campaign=launch`

These tags only label campaign visits in the URL. This project does not collect or send analytics data. Add analytics only if you intentionally configure a provider and update your privacy information accordingly.
