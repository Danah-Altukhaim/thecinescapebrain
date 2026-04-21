# Cinescape — AI Agent Knowledge Base

Source material for the Cinescape (Kuwait National Cinema Company / KNCC) AI agent project. All files are in markdown for easy grep/read from Claude Code.

## Project context

Cinescape is Kuwait's national cinema chain. This folder contains the authoritative source documents for defining an AI agent that answers cinema-goer questions (booking, tickets, rules, accessibility, etc.) and the API surface it has available to act on user intent.

## Folder layout

```
cinescape mind/
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
    └── faq.md                   ← scraped from live page 2026-04-19
```

## File guide

| File | Contents | Authoritative for |
| ---- | -------- | ----------------- |
| `content/api.md` | Cinema Booking API spec: base URL, 5 endpoints, booking flow, full sample responses for `cinemas`, `movies`, `msessionsnew`. | What the agent can **do** — available actions and data shape. |
| `content/terms_and_conditions.md` | Bilingual (EN / AR) T&C approved 2026/01/19. Covers booking rules, age classifications, seat classifications, food orders, cancellation, 4DX safety, Skyline, private shows, guest obligations, promotions (social posts, popcorn ads, flyers, booth activations, photoshoots, digital screen rental), bank promotions. | Policy questions the agent must answer correctly — especially refunds (2hr cancel window, electronic balance, no cash-back), age rules (MOI decisions 30/2016 and 3/2025), food order "Prepare Your Order" lock-in, 4DX restrictions. |
| `content/privacy.md` | Bilingual Privacy Policy — data collected, data use, retention, user rights, opt-out, account deletion. | Privacy / data questions. |
| `content/contact_volume.md` + `.csv` | Monthly phone + WhatsApp contact volume, May 2025 – Apr 2026. Total: 73,728 contacts. | Deflection target sizing. WhatsApp is growing fast (0 → 1,549/month); overall volume is trending down. |
| `content/faq.md` | **Authoritative** — captured from the live page on 2026-04-19. Covers general rules, age ratings (Law 4/2025), cinematic experiences with ticket prices (Standard 3.5 KWD → VIP/4DX 8 KWD), account benefits, booking cancellation by channel, release cadence (new movies Thursdays, bookings open Mon/Tue), and private event bookings from 168 KWD. | Customer-facing questions about booking flow, pricing, experiences, and account management. |

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

**Ticket pricing (from FAQ)**

All prices in KWD. Premium = larger leather seat with USB port and back recliner.

- **Standard** (2D/3D Digital/Laser): 3.5 / 4.0 Premium
- **ELEVEN** (Barco Laser + Dolby Atmos): 3.5 / 4.0 Premium
- **IMAX**: 4.0 / 4.5 Premium
- **Dolby Cinema** (Premium seats only): 4.5
- **ScreenX** (270° viewing): 4.5
- **4DX** (moving seats, 20 effects): 8.0
- **4DXScreen** (4DX + ScreenX — first in ME): 8.0
- **VIP** (leg+back recliner, private cafeteria): 8.0
- Monday 50% discount applies to all except VIP and Skyline (from T&C).
- Private theater rental: from 168 KWD.

**Release cadence (from FAQ)**

- New movies release every **Thursday**, year-round.
- Bookings open every **Monday/Tuesday** on app/website/box office.
- Cinemas close for the **last 10 days of Ramadan**.

**Data collected (from Privacy Policy)**

Name, email, mobile, DOB, city, location preferences, seating preferences, experience preferences, movie rating preferences, booking and transaction info. Not shared with third parties. Users can delete their account and opt out of marketing from in-app settings.

## Gaps / known issues for the agent project

These carry over from the Notion board gap analysis and remain unresolved in this source bundle:

1. **Seat map / interactive seat selection.** API lists `seatlayout` and `reserveseats` endpoints but no sample response is included — the agent can't preview or render an actual seat map.
2. **Movie recommendation logic.** No endpoint or flow for preference-based filtering ("what should I watch?"). Privacy policy confirms preferences are collected (movie rating, experience, seating) but no consuming API is documented.
3. **Accepted payment methods.** Neither the API doc nor the T&C enumerates which methods are accepted (KNET, Visa, Mastercard, Apple Pay, Cinescape gift cards, loyalty wallet). Third-party sources mention KNET + cards + gift cards, but this needs official confirmation.
4. **MOI legal reference mismatch.** T&C (approved 2026/01/19) cites MOI Decisions **30/2016** and **3/2025**. FAQ cites MOI **Law 4 of 2025**. These should be reconciled — the AI agent should not arbitrate between the two.
5. **Arabic text in the T&C PDF** is from a scanned document; it was transcribed manually into `terms_and_conditions.md`. If you need a verified ground-truth copy, cross-check against a re-issued digital version from legal.

## How to use this with Claude Code

From the project root, point Claude Code at this folder and it will automatically grep across all markdown files. Suggested starting prompts:

- `@INDEX.md summarize the agent's scope and data model`
- `@content/api.md @content/terms_and_conditions.md design the conversation flow for "I want to cancel my ticket"`
- `@content/terms_and_conditions.md list every refund-related rule, with citations`
- `@content/contact_volume.csv plot monthly calls vs WhatsApp and project the next 3 months`

For any content question, always cross-check `terms_and_conditions.md` against `api.md` — the former defines the policy, the latter defines what the agent can actually do programmatically. Gaps between them are often the real gaps in the product.
