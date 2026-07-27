# Davoren Insights — EV Countdown Update Guide

## What changed

The site now has three primary routes:

1. **Home** — campaign-led landing page with the latest signal and a swipeable carousel.
2. **EV Countdown** — the complete campaign archive, newest first.
3. **Insights Archive** — the original Signals and Strategic Briefs, still live but no longer competing for homepage attention.

The old article URLs have not changed, so existing links should continue to work.

---

## Image folder and file names

Upload the daily artwork to:

`images/ev-countdown/`

Use this exact naming convention:

- `day-49.png`
- `day-48.png`
- `day-47.png`
- continuing down to `day-1.png`

A 4:5 export such as **1080 × 1350 pixels** is recommended. GitHub Pages file names are case-sensitive, so keep `day`, the hyphen and `.png` lowercase.

The website will display the matching image on the homepage, in the carousel and in the full countdown archive. When an image has not been uploaded yet, the existing generated countdown graphic remains visible as a fallback.

---

## Daily process: add the next countdown post

1. Export the new artwork as a PNG.
2. Rename it for the day, for example `day-44.png`.
3. Upload it to `images/ev-countdown/`.
4. Open `countdown-data.js` and add one new object at the **top** of `window.evCountdownPosts`.

Use this structure:

```javascript
{
  day: 44,
  date: "27 July 2026",
  category: "Short topic label",
  title: "A concise, memorable headline",
  summary: "One sentence explaining what the post is about.",
  fact: "The specific mechanism or reason it matters.",
  accent: "cyan",
  image: "images/ev-countdown/day-44.png",
  imageAlt: "World EV Day countdown artwork for Day 44",
  postUrl: "PASTE_THE_EXACT_LINKEDIN_POST_URL_HERE",
  sourceUrl: "PASTE_THE_PRIMARY_SOURCE_URL_HERE"
},
```

### Allowed accent values

- `cyan`
- `violet`
- `mint`
- `pink`

### What updates automatically

After adding the new object at the top:

- The homepage changes to the new latest day.
- The featured image, headline, date, category, summary and links update.
- The previous latest post and its image move into the carousel.
- The full Countdown page adds the new card at the top.
- The card's progress indicator advances automatically.

You do **not** need to edit `index.html` or `countdown.html` each day.

---

## Important before publishing

The initial cards currently use your LinkedIn profile URL because the exact individual post URLs were not included in the website ZIP. Replace each `postUrl` in `countdown-data.js` with the direct URL of the matching LinkedIn post.

To obtain a direct LinkedIn post URL:

1. Open the post on LinkedIn.
2. Select the three-dot menu.
3. Choose **Copy link to post**.
4. Paste it into the relevant `postUrl` field.

Use primary sources where possible for `sourceUrl`: official patent pages, manufacturer releases, standards bodies, research papers or government publications.

---

## Publishing to GitHub Pages

### Method A: Upload through GitHub in the browser

1. Open the GitHub repository that currently hosts Davoren Insights.
2. Select **Add file → Upload files**.
3. Upload all files and folders from this updated package.
4. Allow GitHub to replace existing files with the same names.
5. Use a commit message such as:
   `Refocus homepage on World EV Day countdown`
6. Select **Commit changes**.
7. Open **Settings → Pages** and confirm the same branch and folder are still selected.
8. Open the public website and hard-refresh it with `Ctrl + F5`.

### Method B: Git command line

Copy the updated files into the local repository and run:

```bash
git add .
git commit -m "Refocus homepage on World EV Day countdown"
git push
```

GitHub Pages should deploy from the repository's existing Pages configuration.

---

## Post-publish checks

Check the site on both desktop and mobile:

- Home navigation shows **Home / EV Countdown / Insights Archive**.
- The latest day, image and headline are correct.
- Each countdown image appears without stretching or cropping important text.
- Carousel arrows work on desktop.
- The carousel can be swiped horizontally on mobile.
- Every LinkedIn and primary-source link opens correctly.
- The Insights Archive opens both Signals and Strategic Briefs.
- Existing article links still work.

Also test the public site in a private/incognito window to avoid seeing a cached version.

---

## Recommended weekly maintenance

Once a week:

- Check all direct LinkedIn URLs.
- Check primary-source links for redirects or broken pages.
- Keep summaries to roughly 20–35 words.
- Keep titles short enough to fit comfortably on cards.
- Compress images for the web where possible; aim for roughly 500 KB or less per image without making text blurry.
- Keep every image in `images/ev-countdown/` and preserve the naming convention.

The HTML and CSS fallback remains in place, so a missing or mistyped image will not break the page.
