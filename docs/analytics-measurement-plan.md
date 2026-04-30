# Analytics Tracking & Measurement Plan

## Scope

This plan defines implementation and QA for:
- GA4 event instrumentation (forms, calculator actions, CTAs, key interactions).
- Google Search Console (GSC) integration for query/CTR/ranking visibility.
- Blended reporting (landing pages by traffic source/medium/campaign).
- Access governance for GA4, GSC, and Looker Studio.

## Tracking Taxonomy (GA4)

### Core events
- `form_start`
- `form_submit`
- `form_error`
- `cta_click`
- `calculator_interact`
- `calculator_result`
- `scroll_depth`
- `outbound_click`
- `page_engagement`
- `page_view` (manual SPA event for Inertia navigation)

### Event parameter standards
- Include stable identifiers (`form_id`, `calculator_id`) for aggregation.
- Include context (`page_location`, `cta_location`, `destination_url`) for journey analysis.
- Include quality metrics (`submission_time_seconds`, `engaged_seconds`) for intent scoring.
- Keep values consistent and low-cardinality where possible to avoid GA4 cardinality issues.

## GA4 Configuration Checklist

1. Create/confirm GA4 property and web data stream.
2. Set `VITE_GA_MEASUREMENT_ID` in environment.
3. Verify gtag script is loaded only when measurement ID exists.
4. Keep `send_page_view: false`; SPA pageviews are sent on Inertia `navigate`.
5. Mark relevant events as conversions in GA4:
   - `form_submit`
   - high-value `cta_click` variants (where applicable)
   - `calculator_result` (if calculator completion is a business KPI)
6. Configure custom dimensions/metrics for critical parameters where needed.

## Google Search Console Integration

1. Verify domain/property ownership in GSC.
2. Submit sitemap and verify indexed coverage.
3. Connect GSC data source in Looker Studio.
4. Include these fields in reporting:
   - Query
   - Landing page
   - Clicks
   - Impressions
   - CTR
   - Average position
5. Build weekly monitoring slices:
   - Branded vs non-branded queries
   - Top landing pages by click delta
   - Position drops for priority pages

## Blended Reporting (Looker Studio)

### Primary dashboard views
- Landing pages by Source / Medium.
- Landing pages by Campaign.
- Conversions by Source / Medium (GA4 event/conversion data).
- GSC query-level visibility tied to landing pages.

### Recommended blended keys
- Blend on landing-page path/URL normalization.
- Normalize trailing slash and protocol differences before blending.

## QA Plan (GA4 Realtime + DebugView)

### Pre-flight
- Confirm browser has analytics enabled (no blocking extensions).
- Enable GA4 DebugView (Tag Assistant or debug mode).

### Test cases
1. Page navigation emits one `page_view` per route change.
2. First form interaction emits `form_start`.
3. Successful submit emits `form_submit` with `submission_time_seconds`.
4. Validation failures emit `form_error` with field and message.
5. CTA click emits `cta_click` with label/location/destination.
6. Calculator field changes emit `calculator_interact`.
7. Calculator completion emits `calculator_result`.
8. Scroll milestones emit `scroll_depth` only once per threshold.
9. Time-on-page emits `page_engagement` when threshold is exceeded.
10. Confirm mirrored server logs are written in `tracking_events`.

### Acceptance criteria
- Events appear in Realtime within seconds.
- Parameters are populated and named exactly as schema.
- No console/runtime errors caused by analytics code.
- Failed backend analytics writes do not block UX.

## GA4 Limitation Management

- **Sampling/cardinality:** avoid high-cardinality free text dimensions in core dashboards.
- **Attribution drift:** clearly label attribution model and lookback window in Looker Studio.
- **Latency:** GA4 standard reports may lag; use Realtime/DebugView for implementation QA.
- **Data consistency:** use a canonical event dictionary and prohibit ad-hoc event names.

## Access & Permissions Setup

### GA4
- Admins: `Administrator` (minimum 2 owners).
- Editors/analysts: `Editor`.
- Stakeholders/read-only: `Viewer` or `Analyst`.

### Google Search Console
- Platform owner: `Owner`.
- SEO/editor roles: `Full` user.
- Read-only stakeholders: `Restricted` user.

### Looker Studio
- Dashboard owners: `Can edit`.
- Editors/analysts: `Can edit` (limited to required reports).
- Stakeholders: `Can view`.

Enforce principle of least privilege and review access quarterly.

## Operating Cadence

- Weekly: QA spot-check key events and conversion trends.
- Monthly: audit event parameter quality and Looker blend validity.
- Quarterly: review access permissions and conversion definitions.
