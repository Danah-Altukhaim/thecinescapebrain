# Customer Contact Volume

Source: `KNCC_Contact_Volume.xlsx`.

Monthly volume of customer contacts across two channels — phone Calls and WhatsApp — from May 2025 through April 2026. WhatsApp came online partway through the period (first non-zero month is September 2025).

| Month | Calls | WhatsApp | Total |
| ----- | ----- | -------- | ----- |
| 2025-05 | 6,914 | 0 | 6,914 |
| 2025-06 | 9,280 | 0 | 9,280 |
| 2025-07 | 8,881 | 0 | 8,881 |
| 2025-08 | 7,527 | 0 | 7,527 |
| 2025-09 | 5,894 | 63 | 5,957 |
| 2025-10 | 4,087 | 861 | 4,948 |
| 2025-11 | 4,214 | 925 | 5,139 |
| 2025-12 | 5,117 | 989 | 6,106 |
| 2026-01 | 4,564 | 1,130 | 5,694 |
| 2026-02 | 1,952 | 461 | 2,413 |
| 2026-03 | 3,461 | 1,103 | 4,564 |
| 2026-04 | 4,756 | 1,549 | 6,305 |
| **Total** | **66,647** | **7,081** | **73,728** |

The raw CSV is available at `content/contact_volume.csv` for programmatic use.

## Observations

- **WhatsApp adoption is climbing.** From 63 contacts (Sep 2025) to 1,549 (Apr 2026) — a ~25× increase. WhatsApp share of monthly volume reached ~24.5% by April 2026.
- **Calls are trending down.** Peak of 9,280 in Jun 2025, falling to the 4K–5K range by late 2025. February 2026 is an outlier low (1,952), likely seasonal or data-quality related — worth verifying.
- **Total contact volume has dropped** from ~9K/month to ~6K/month over the year, even as a new channel was added. That's a meaningful deflection signal for any AI agent work.
