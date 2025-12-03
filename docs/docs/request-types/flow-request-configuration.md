---
title: Flow request configuration
description: Configure APIEase Flow trigger/action requests and parameter mappings.
---
# Flow request configuration

Flow requests allow you to securely trigger or continue a Shopify Flow workflow. You can pass data into the Flow from your storefront, a webhook, or another request, enabling flexible and secure automation without exposing any sensitive information.

![Flow request editor](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/add-http-api-requests.png?v=1744748372)

**Flow Request Fields**

- **Name**: Optional display name. Needed when another request calls this one via a [chained request](../request-parameters/chained-requests.md).
- **Type**: Set to `flow` to trigger a Shopify Flow workflow.
- **Parameters ([?](../request-parameters/in-app-vs-dynamic.md))**:
  - **Flow**: JSON key/value pairs passed to your workflow.
  - **System**: Used by APIEase in cases such as [Customer Authentication](../requests/customer-authenticated-requests.md).
  - Supply [in app parameters](../request-parameters/in-app-vs-dynamic.md) or [dynamic embedded parameters](../dynamic-embedded-parameters/overview.md) from the storefront.
  - Mark credentials or secrets as **Sensitive** so they are encrypted and never exposed in the storefront or admin UI.

**Triggers ([?](../requests/trigger-requests-from-a-webhook.md))**: Choose how the request should be triggered:

- Automatically via [webhook](../requests/trigger-requests-from-a-webhook.md)
- On a recurring schedule using [cron](../requests/trigger-requests-via-cron-schedule.md)
- As an endpoint served by APIEase via [Proxy Endpoints](../requests/proxy-endpoint-trigger.md)
- [Remotely](../requests/calling-requests-remotely.md) from any http client.
- Manually via the "Copy and Execute" link on the requests admin page
- From your storefront using Shopify's app proxy

**Next Request**: You can specify the name of another request to run after this request finishes. This allows you to build multi-step workflows using [chained requests](../request-parameters/chained-requests.md).

