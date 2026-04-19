# Cinescape — AI Agent Knowledge Base

Source material for the Cinescape (Kuwait National Cinema Company / KNCC) AI agent project. All files are in markdown for easy grep/read from Claude Code.

## Project context

Cinescape is Kuwait's national cinema chain. This folder contains the authoritative source documents for defining an AI agent that answers cinema-goer questions (booking, tickets, rules, accessibility, etc.) and the API surface it has available to act on user intent.

## Folder layout

```
cinescape/
├── INDEX.md                     ← you are here
├── source/                      ← original files, unchanged
│   ├── KNCC_Cinema_API_Documentation.pdf
│   ├── KNCC_Cinescape_Privacy_Policy.docx
│   ├── KNCC_Contact_Volume.xlsx
│   └── KNCC_Terms_and_Conditions_AR.pdf
└── content/                     ← converted markdown for Claude Code
    ├── api.md
    ├── privacy.md
    ├── terms_and_conditions.md
    ├── contact_volume.md
    ├── contact_volume.csv
    └── faq.md                   ← STUB — see file, FAQ could not be scraped
```

## File guide

| File | Contents | Authoritative for |
| ---- | -------- | ----------------- |
| `content/api.md` | Cinema Booking API spec: base URL, 5 endpoints, booking flow, full sample responses for `cinemas`, `movies`, `msessionsnew`. | What the agent can **do** — available actions and data shape. |
| `content/terms_and_conditions.md` | Bilingual (EN / AR) T&C approved 2026/01/19. Covers booking rules, age classifications, seat classifications, food orders, cancellation, 4DX safety, Skyline, private shows, guest obligations, promotions (social posts, popcorn ads, flyers, booth activations, photoshoots, digital screen rental), bank promotions. | Policy questions the agent must answer correctly — especially refunds (2hr cancel window, electronic balance, no cash-back), age rules (MOI decisions 30/2016 and 3/2025), food order "Prepare Your Order" lock-in, 4DX restrictions. |
| `content/privacy.md` | Bilingual Privacy Policy — data collected, data use, retention, user rights, opt-out, account deletion. | Privacy / data questions. |
| `content/contact_volume.md` + `.csv` | Monthly phone + WhatsApp contact volume, May 2025 – Apr 2026. Total: 73,728 contacts. | Deflection target sizing. WhatsApp is growing fast (0 → 1,549/month); overall volume is trending down. |
| `content/faq.md` | **Reconstructed** from public search indexes (the live page blocks automated fetches). Covers booking, cancellation/refund routing, account recovery, Club Card recharge, accessibility, 4DX rules, age rules, promotions. Includes a section flagging stale COVID-era content that should not be surfaced. | Customer-facing questions about account and booking flow. Cross-reference with T&C for anything safety/legally critical. |

## Key facts the agent should know

**Identity**

- Legal entity: Kuwait National Cinema Company (K.P.S.C.), abbreviated KNCC.
- Consumer brand: Cinescape (سينسكيب).
- Call center: **180-3456**. Email: `ask@cinescape.com.kw`. Contact form: `https://www.cinescape.com.kw/contactus`.
- Governing law: State of Kuwait; disputes resolved by Kuwaiti courts.

**Booking flow (from API doc)**

1. Fetch movies → `POST /api/content/nowshowing`
2. Fetch cinemas → `GET /api/content/cinemas` (params: bookType, lat, long)
3. Fetch showtimes → `POST /api/content/msessionsnew` (body: mid, dated, cinemaIds)
4. Fetch seat layout → `POST /api/content/trans/seatlayout`
5. Reserve seats → `POST /api/content/trans/reserveseats`
6. Payment

**Cancellation / refund rules (from T&C)**

- Cancellation allowed **up to 2 hours** before showtime.
- Card payments are **not** refunded to the card — customer receives electronic balance in their wallet / loyalty card for future reservations.
- Food orders are non-refundable once "Prepare Your Order" is clicked, and always non-refundable after the order is prepared/received.
- If Cinescape is at fault (movie canceled, booked meal unavailable) — customer can claim refund or equivalent-value voucher.

**Seat categories (from T&C)**

- **Family**: females (individual/groups); or mixed groups of all ages who stay together for the whole movie.
- **General**: females and males (all ages).
- **VIP**: females and males (all ages).
- **Skyline** and **VIP** are excluded from the Monday 50% discount.
- Seat changes after booking are prohibited; company may re-seat customers in the public interest.

**Age / entry rules (from T&C)**

- Compliance required with MOI decisions 30/2016 and 3/2025.
- Tickets required for children of **all ages**, except children **under 3** get free entry on **Tuesdays only** at **Cinescape Ajyal**, sharing the parent's seat, for G/PG films only.
- Cinescape may verify age via civil ID, passport, or any official ID with photo + DOB.

**4DX safety (from T&C)**

- Prohibited: pregnant women, elderly, people with heart/back/neck problems or motion sickness, anyone over 120 kg.
- Conditional: children must be over 4 years old AND at least 100 cm tall.
- Hot beverages not allowed inside 4DX theaters.

**Data collected (from Privacy Policy)**

Name, email, mobile, DOB, city, location preferences, seating preferences, experience preferences, movie rating preferences, booking and transaction info. Not shared with third parties. Users can delete their account and opt out of marketing from in-app settings.

## Gaps / known issues for the agent project

These carry over from the Notion board gap analysis and remain unresolved in this source bundle:

1. **Seat map / interactive seat selection.** API lists `seatlayout` and `reserveseats` endpoints but no sample response is included — the agent can't preview or render an actual seat map.
2. **Movie recommendation logic.** No endpoint or flow for preference-based filtering ("what should I watch?"). Privacy policy confirms preferences are collected (movie rating, experience, seating) but no consuming API is documented.
3. **Accepted payment methods.** Neither the API doc nor the T&C enumerates which methods are accepted (KNET, Visa, Mastercard, Apple Pay, Cinescape gift cards, loyalty wallet). Third-party sources mention KNET + cards + gift cards, but this needs official confirmation.
4. **FAQ reconstructed, not scraped.** Site CDN blocks automated fetches. Content in `content/faq.md` was compiled from search-engine snippets and cross-referenced across mirror sites — it should be verified against the live page when convenient. The live page also still contains COVID-era policy text that should likely be removed from production.
5. **Arabic text in the T&C PDF** is from a scanned document; it was transcribed manually into `terms_and_conditions.md`. If you need a verified ground-truth copy, cross-check against a re-issued digital version from legal.

## How to use this with Claude Code

From the project root, point Claude Code at this folder and it will automatically grep across all markdown files. Suggested starting prompts:

- `@INDEX.md summarize the agent's scope and data model`
- `@content/api.md @content/terms_and_conditions.md design the conversation flow for "I want to cancel my ticket"`
- `@content/terms_and_conditions.md list every refund-related rule, with citations`
- `@content/contact_volume.csv plot monthly calls vs WhatsApp and project the next 3 months`

For any content question, always cross-check `terms_and_conditions.md` against `api.md` — the former defines the policy, the latter defines what the agent can actually do programmatically. Gaps between them are often the real gaps in the product.
