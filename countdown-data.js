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
    day: 37,
    date: "3 August 2026",
    category: "Battery passport",
    title: "A battery made in China can still need a European passport",
    summary: "From 18 February 2027, EV batteries placed on the EU market need a battery passport, regardless of where the battery was manufactured.",
    fact: "The rule follows the market, not the factory: exporters and suppliers selling into Europe may need stronger traceability, carbon and sourcing data.",
    accent: "cyan",
    image: "images/ev-countdown/day-37.png",
    imageAlt: "World EV Day countdown artwork for Day 37 about battery passports and the EU market",
    sourceUrl: "https://eur-lex.europa.eu/eli/reg/2023/1542/oj"
  },
  {
    day: 38,
    date: "2 August 2026",
    category: "Business models",
    title: "An electric truck can separate the truck from the battery",
    summary: "Battery swapping can turn one electric truck into three commercial assets: the truck, the battery and the energy service.",
    fact: "Battery-as-a-Service can lower upfront cost, shift battery risk and increase uptime by separating chassis ownership from battery ownership.",
    accent: "cyan",
    image: "images/ev-countdown/day-38.png",
    imageAlt: "World EV Day countdown artwork for Day 38 about battery swapping and Battery-as-a-Service for trucks",
    sourceUrl: ""
  },
  {
    day: 39,
    date: "1 August 2026",
    category: "Electric buses",
    title: "Some electric buses charge from above",
    summary: "Some electric buses use automated pantograph charging at route stops and terminals.",
    fact: "Opportunity charging lets buses add energy during scheduled stops, sometimes in just a few minutes, instead of relying only on long depot charging windows.",
    accent: "cyan",
    image: "images/ev-countdown/day-39.png",
    imageAlt: "World EV Day countdown artwork for Day 39 about pantograph charging for electric buses",
    sourceUrl: "https://new.abb.com/ev-charging/high-power-charging-systems/opportunity-charging"
  },
  {
    day: 40,
    date: "31 July 2026",
    category: "Battery degradation",
    title: "Battery degradation is usually quieter than fire",
    summary: "Most lithium-ion batteries lose performance gradually through chemical and mechanical ageing rather than one dramatic event.",
    fact: "Hidden ageing mechanisms can reduce capacity, power and charging performance long before any dramatic failure.",
    accent: "cyan",
    image: "images/ev-countdown/day-40.png",
    imageAlt: "World EV Day countdown artwork for Day 40 about quiet battery degradation mechanisms",
    sourceUrl: ""
  },
  {
    day: 41,
    date: "30 July 2026",
    category: "Motors",
    title: "Some EV motors are wound with copper hairpins",
    summary: "Some high-performance EV motors use rectangular copper conductors bent into U-shapes, inserted into the stator and then laser-welded together.",
    fact: "Hairpin windings pack more copper into the same space, helping deliver higher power density with strong, precise low-resistance joints.",
    accent: "cyan",
    image: "images/ev-countdown/day-41.png",
    imageAlt: "World EV Day countdown artwork for Day 41 about copper hairpin winding in EV motors",
    sourceUrl: ""
  },
  {
    day: 42,
    date: "29 July 2026",
    category: "Repairability & insurance",
    title: "An EV can be repairable and still be written off",
    summary: "The question is not only whether a damaged EV can be fixed, but whether it can be assessed safely, repaired economically and supported by the local repair ecosystem.",
    fact: "EV affordability depends not only on buying the vehicle, but also on whether it can be repaired economically after a crash.",
    accent: "cyan",
    image: "images/ev-countdown/day-42.png",
    imageAlt: "World EV Day countdown artwork for Day 42 about EV repairability and write-off risk",
    sourceUrl: "https://www.engineeringnews.co.za/article/repairability-sas-next-automotive-affordability-challenge-evs-more-expensive-to-insure-2026-07-28"
  },
  {
    day: 43,
    date: "28 July 2026",
    category: "Fleet electrification",
    title: "Stop-start routes can recover energy instead of wasting it",
    summary: "Electric refuse trucks can turn frequent braking on urban collection routes into an advantage through regenerative braking.",
    fact: "The same stop-start pattern that wastes energy in diesel trucks can help electric refuse trucks recover energy and extend useful range.",
    accent: "cyan",
    image: "images/ev-countdown/day-43.png",
    imageAlt: "World EV Day countdown artwork for Day 43 about regenerative braking in electric refuse trucks",
    sourceUrl: ""
  },
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
