/* content-index.js
   Single source of truth for your site-wide cross-domain pages.
*/
window.CONTENT = {
  // ---------- SIGNALS ----------
  signals: [
    {
      lens: "innovation",
      badge: "Signal 001",
      meta: "Feb 2026 • 3 min",
      title: "Constraint Promotes Innovation",
      desc: "Limits force redesign; redesign creates advantage.",
      tags: ["Innovation", "Systems"],
      href: "signals/constraint-promotes-innovation.html"
    }
  ],

  // ---------- ESSAYS ----------
  essays: [
    {
      lens: "futures",
      badge: "Essay",
      meta: "Feb 2026 • 9 min",
      title: "Global EV Signals — Implications for Emerging Markets",
      desc: "Structural shifts + emerging-market implications.",
      tags: ["Futures", "EV"],
      href: "essays/ev-signals-emerging-markets.html"
    },
    {
      lens: "decision",
      badge: "Anchor",
      meta: "Evergreen • 10 min",
      title: "Integration Risk Framework",
      desc: "Mapping execution failure modes in complex transitions.",
      tags: ["Decision", "Framework"],
      href: "essays/most-read-framework.html"
    }
  ],

  // ---------- LABS (Streamlit apps) ----------
  labs: [
    {
      lens: "innovation",
      title: "Innovation Mentor",
      desc: "Guided innovation diagnostics + decision prompts.",
      status: "Live",
      tags: ["Tool", "Innovation"],
      href: "https://YOUR-STREAMLIT-URL"
    },
    {
      lens: "valence",
      title: "Carbon Programme (name pending)",
      desc: "Carbon logic + MRV scaffolding for projects.",
      status: "Beta",
      tags: ["Tool", "MRV"],
      href: "https://YOUR-STREAMLIT-URL"
    },
    {
      lens: "futures",
      title: "FutureCoin (name pending)",
      desc: "A futures sandbox for scenario-led thinking.",
      status: "Prototype",
      tags: ["Sandbox", "Futures"],
      href: "https://YOUR-STREAMLIT-URL"
    },
    {
      lens: "decision",
      title: "Decision / Team Mapper",
      desc: "Scenario-led team composition + coordination mapping.",
      status: "Prototype",
      tags: ["Teams", "Coordination"],
      href: "https://YOUR-STREAMLIT-URL"
    }
  ],

  // ---------- ACADEMY (leave empty for now) ----------
  academy: [
    // Add later like:
    // {
    //   lens: "innovation",
    //   badge: "Course",
    //   meta: "Coming soon",
    //   title: "Innovation Architectures 101",
    //   desc: "Constraint-led redesign + adoption reality.",
    //   tags: ["Academy", "Innovation"],
    //   href: "academy/innovation-architectures-101.html"
    // }
  ]
};
