(function () {
  "use strict";

  const posts = Array.isArray(window.evCountdownPosts) ? window.evCountdownPosts : [];

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function safeUrl(value) {
    if (!value) return "";
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch (_) {
      return "";
    }
  }

  function imageMarkup(post, className, eager) {
    const imageUrl = safeUrl(post.image);
    if (!imageUrl) return "";
    const alt = escapeHTML(post.imageAlt || post.title || `World EV Day countdown Day ${post.day}`);
    return `<img class="${className}" src="${imageUrl}" alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} onerror="this.remove()">`;
  }

  function postCard(post, isFeatured) {
    const accent = ["cyan", "violet", "mint", "pink"].includes(post.accent) ? post.accent : "cyan";
    const postUrl = safeUrl(post.postUrl);
    const sourceUrl = safeUrl(post.sourceUrl);
    const title = escapeHTML(post.title);
    const summary = escapeHTML(post.summary);
    const fact = escapeHTML(post.fact);
    const category = escapeHTML(post.category);
    const date = escapeHTML(post.date);
    const day = escapeHTML(post.day);
    const image = imageMarkup(post, "countdown-image", isFeatured);

    const links = [
      postUrl ? `<a class="countdown-link" href="${postUrl}" target="_blank" rel="noopener noreferrer">LinkedIn post <span aria-hidden="true">↗</span></a>` : "",
      sourceUrl ? `<a class="countdown-link countdown-link-muted" href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Primary source <span aria-hidden="true">↗</span></a>` : ""
    ].filter(Boolean).join("");

    return `
      <article class="countdown-card${isFeatured ? " countdown-card-featured" : ""}" data-accent="${accent}">
        <div class="countdown-visual">
          <div class="countdown-visual-fallback" aria-hidden="true">
            <div class="countdown-visual-grid"></div>
            <span class="countdown-visual-label">World EV Day</span>
            <span class="countdown-day-number">${day}</span>
            <span class="countdown-day-word">days</span>
            <div class="countdown-charge-track"><span style="--progress:${Math.max(0, Math.min(100, ((49 - Number(post.day) + 1) / 49) * 100))}%"></span></div>
          </div>
          ${image}
        </div>
        <div class="countdown-card-copy">
          <div class="countdown-meta">
            <span>${category}</span>
            <time>${date}</time>
          </div>
          <h3>${title}</h3>
          <p>${summary}</p>
          <div class="countdown-fact"><span>Why it matters</span>${fact}</div>
          <div class="countdown-card-links">${links}</div>
        </div>
      </article>`;
  }

  function renderFeeds() {
    document.querySelectorAll("[data-countdown-feed]").forEach((feed) => {
      const limit = Number.parseInt(feed.dataset.limit || "0", 10);
      const offset = Number.parseInt(feed.dataset.offset || "0", 10);
      const layout = feed.dataset.layout || "carousel";
      const selected = limit > 0 ? posts.slice(offset, offset + limit) : posts.slice(offset);
      feed.classList.add(layout === "grid" ? "countdown-grid" : "countdown-track");
      feed.innerHTML = selected.map((post, index) => postCard(post, index === 0 && layout === "featured")).join("");
    });
  }

  function setLatestPost() {
    const latest = posts[0];
    if (!latest) return;

    document.querySelectorAll("[data-latest-image]").forEach((node) => {
      const url = safeUrl(latest.image);
      if (!url) {
        node.hidden = true;
        return;
      }
      node.hidden = true;
      node.alt = latest.imageAlt || latest.title || `World EV Day countdown Day ${latest.day}`;
      node.onload = () => { node.hidden = false; };
      node.onerror = () => { node.hidden = true; };
      node.src = url;
    });

    document.querySelectorAll("[data-latest-card]").forEach((node) => {
      node.dataset.accent = ["cyan", "violet", "mint", "pink"].includes(latest.accent) ? latest.accent : "cyan";
    });

    document.querySelectorAll("[data-latest-day]").forEach((node) => {
      node.textContent = latest.day;
    });
    document.querySelectorAll("[data-latest-title]").forEach((node) => {
      node.textContent = latest.title;
    });
    document.querySelectorAll("[data-latest-summary]").forEach((node) => {
      node.textContent = latest.summary;
    });
    document.querySelectorAll("[data-latest-category]").forEach((node) => {
      node.textContent = latest.category;
    });
    document.querySelectorAll("[data-latest-date]").forEach((node) => {
      node.textContent = latest.date;
    });
    document.querySelectorAll("[data-latest-post-link]").forEach((node) => {
      const url = safeUrl(latest.postUrl);
      if (url) node.href = url;
    });
    document.querySelectorAll("[data-latest-source-link]").forEach((node) => {
      const url = safeUrl(latest.sourceUrl);
      if (url) {
        node.href = url;
      } else {
        node.hidden = true;
      }
    });
  }

  function initCarouselControls() {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const track = carousel.querySelector(".countdown-track");
      const previous = carousel.querySelector("[data-carousel-prev]");
      const next = carousel.querySelector("[data-carousel-next]");
      if (!track || !previous || !next) return;

      function updateButtons() {
        const maxScroll = track.scrollWidth - track.clientWidth;
        previous.disabled = track.scrollLeft <= 4;
        next.disabled = track.scrollLeft >= maxScroll - 4;
      }

      function scroll(direction) {
        const card = track.querySelector(".countdown-card");
        const distance = card ? card.getBoundingClientRect().width + 18 : track.clientWidth * 0.85;
        track.scrollBy({ left: direction * distance, behavior: "smooth" });
      }

      previous.addEventListener("click", () => scroll(-1));
      next.addEventListener("click", () => scroll(1));
      track.addEventListener("scroll", updateButtons, { passive: true });
      window.addEventListener("resize", updateButtons);
      updateButtons();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFeeds();
    setLatestPost();
    initCarouselControls();
  });
})();
