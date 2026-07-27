/*
  WORLD EV DAY COUNTDOWN DATA
  ---------------------------
  Add each new post at the TOP of this list.

  Fields:
  - day: Countdown day number
  - date: Display date
  - category: Short topic label
  - title: Card headline
  - summary: One-sentence explanation
  - fact: The memorable mechanism or takeaway
  - accent: cyan | violet | mint | pink
  - image: Local GitHub image path, normally images/ev-countdown/day-XX.png
  - imageAlt: Short accessible description of the image
  - sourceUrl: Optional primary source / patent link
*/

window.evCountdownPosts = [

 {
  day: 44,
  date: "27 July 2026",
  category: "Charging cybersecurity",
  title: "Your EV can identify itself to the charger",
  summary: "With Plug & Charge, digital certificates allow the vehicle to authenticate automatically, authorise the charging session and assign the cost to the correct contract.",
  fact: "The sequence can happen automatically: cable connected, certificates verified, charging authorised and billing assigned—without tapping a card or opening an app.",
  accent: "cyan",
  image: "images/ev-countdown/day-44.png",
  imageAlt: "World EV Day countdown artwork explaining Plug and Charge authentication for Day 44",
  sourceUrl: "https://www.charin.global/technology/plug-charge/"
},
  {
    day: 45,
    date: "26 July 2026",
    category: "Battery safety",
    title: "The battery that powers its own emergency disconnect",
    summary: "A Samsung SDI patent proposes using the high-voltage traction battery itself to trigger the pyrotechnic disconnect during a crash or malfunction.",
    fact: "The system transforms a high-voltage, low-current pulse into the low-voltage, high-current pulse needed to fire the pyro fuse.",
    accent: "pink",
    image: "images/ev-countdown/day-45.png",
    imageAlt: "World EV Day countdown artwork for Day 45",
    sourceUrl: "https://patents.google.com/patent/US11801753B2"
  },
  {
    day: 46,
    date: "25 July 2026",
    category: "Electric agriculture",
    title: "The farm is becoming an electric system",
    summary: "Electric tractors are only one part of the shift: implements, autonomous platforms, on-farm generation and energy storage increasingly need to work as one system.",
    fact: "Agricultural electrification is moving beyond replacing the engine—it is redesigning how power is generated, stored and used across the farm.",
    accent: "mint",
    image: "images/ev-countdown/day-46.png",
    imageAlt: "World EV Day countdown artwork for Day 46",
    sourceUrl: ""
  },
  {
    day: 47,
    date: "24 July 2026",
    category: "Materials",
    title: "Even the steel inside an electric machine matters",
    summary: "Epiroc and SSAB expanded their partnership to introduce fossil-carbon-emission-free recycled steel into mining equipment production.",
    fact: "Electrification can reduce operational emissions while embodied emissions remain hidden inside the machine's materials and manufacturing.",
    accent: "violet",
    image: "images/ev-countdown/day-47.png",
    imageAlt: "World EV Day countdown artwork for Day 47",
    sourceUrl: "https://www.epiroc.com/sv-se/newsroom/2023/epiroc-and-ssab-expands-partnership-with-fossil-carbon-emission-free-recycled-steel-starting-q3-2023"
  },
  {
    day: 48,
    date: "23 July 2026",
    category: "High-power charging",
    title: "A megawatt charger is also a thermal-management system",
    summary: "Phoenix Contact's liquid-cooled charging technology shows why ever-higher charging power is as much a heat problem as an electrical problem.",
    fact: "At extreme charging currents, the cable, contacts, coolant loop and temperature monitoring become part of the power-delivery architecture.",
    accent: "cyan",
    image: "images/ev-countdown/day-48.png",
    imageAlt: "World EV Day countdown artwork for Day 48",
    sourceUrl: "https://www.phoenixcontact.com/en-pc/technologies/high-power-charging"
  },
  {
    day: 49,
    date: "22 July 2026",
    category: "Power electronics",
    title: "The motor can become part of the charger",
    summary: "A Renault patent describes reversing the role of traction components so the inverter and motor windings can help process grid power during charging.",
    fact: "The same hardware used to drive the vehicle can be reconfigured to reduce the need for a completely separate high-power onboard charger.",
    accent: "cyan",
    image: "images/ev-countdown/day-49.png",
    imageAlt: "World EV Day countdown artwork for Day 49",
    sourceUrl: "https://patents.google.com/patent/US8847555B2"
  }
];
