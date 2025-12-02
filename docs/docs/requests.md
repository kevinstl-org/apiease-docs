---
sidebar_position: 3
---

# Requests & automation

APIEase runs reusable “requests” that call external services or Shopify APIs on behalf of a store. Use this page to define how your team models those calls and how merchants should think about chaining and triggers.

## Request types

- **HTTP requests**: Call third-party APIs or Shopify Admin endpoints. Use this section to document which headers/fields APIEase injects automatically (shop domains, API keys, rate limiting, etc.).
- **Flow requests**: Bridge into Shopify Flow using the APIEase Flow trigger/action pair. Note which Flow parameters are expected in each direction.
- **Liquid requests**: Use Liquid templates to transform data before hitting downstream services.

## Parameters and secrets

- Explain how to define headers, query params, and body templates.
- Describe how secrets are stored and redacted in logs, and remind readers not to paste secrets directly into the docs.
- Call out reserved parameters (for example, Flow parameters, webhook payloads, or `previousRequestResponse`).

## Chaining requests

Requests can pass output to the next request in the chain. Document the mapping rules and include examples of how to reference fields from prior responses (for example `{incrementInventoryParameter.location}`).

## Triggers

- **Shopify Flow**: Trigger a request when a Flow workflow fires and hand results back to Flow.
- **Webhooks**: Start a request when Shopify or external systems send a webhook. Note required headers or signature validation.
- **Schedules or cron**: Describe how to configure recurring calls, if available in your environment.

## Remote execution

Merchants can run APIEase requests from outside Shopify by providing a request ID and API key:

```
POST https://app-admin.apiease.com/api/remote/caller/call?requestId=<request_id>
x-shop-myshopify-domain: <shop>.myshopify.com
x-apiease-api-key: <generated_api_key>
```

Use this section to document the supported headers, expected responses, and how to rotate keys safely.
