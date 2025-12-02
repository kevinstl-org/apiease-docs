---
sidebar_position: 4
---

# Shopify Flow

APIEase includes a Flow trigger and action so stores can run external calls without exposing credentials. Use this page to capture the exact steps merchants should follow in Flow and how data flows between Flow and APIEase.

## Typical Flow pattern

1. A Flow workflow fires (e.g., order created).
2. Flow calls the **APIEase Flow Trigger** with parameters you specify in Flow.
3. APIEase runs one or more requests (HTTP, Liquid, additional Flow calls) and returns data.
4. Flow continues with the returned data (for example, updating inventory or branching logic).

## Parameters into Flow

- Document the Flow parameters your trigger expects (shop domain, event payload fields, custom inputs).
- Call out any required headers or secrets that APIEase injects automatically.

## Parameters back to Flow

- Explain how APIEase names return values (for example `previousRequestResponse` or custom keys from chained requests).
- Add examples of how merchants can reference those return values inside Flow Run Code or condition steps.

## Troubleshooting

- Where to look for Flow-related logs inside the APIEase admin.
- How to retry a failed Flow execution or re-run a request with the same payload.
- Any rate limits or timeout behavior that Flow users should be aware of.
