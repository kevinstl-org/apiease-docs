---
title: Flow request configuration
description: Configure APIEase Flow trigger/action requests and parameter mappings.
---
# Flow request configuration

Flow requests allow you to securely trigger or continue a Shopify Flow workflow. You can pass data into the Flow from your storefront, a webhook, or another request, enabling flexible and secure automation without exposing any sensitive information.

![Flow request editor](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/add-http-api-requests.png?v=1744748372)

**Flow Request Fields**

- **Name**: Optional display name. Needed when another request calls this one via a [chained request](https://apiease.tawk.help/category/chained-requests).
- **Type**: Set to `flow` to trigger a Shopify Flow workflow.
- **Parameters ([?](https://apiease.tawk.help/category/request-parameters))**:
  - **Flow**: JSON key/value pairs passed to your workflow.
  - **System**: Used by APIEase in cases such as [Customer Authentication](https://apiease.tawk.help/article/customer-authentication-details).
  - Supply [in app parameters](https://apiease.tawk.help/category/requests/request-parameters/in-app-parameters) or [dynamic embedded parameters](https://apiease.tawk.help/category/requests/request-parameters/dynamic-embedded-parameters-from-storefront) from the storefront.
  - Mark credentials or secrets as **Sensitive** so they are encrypted and never exposed in the storefront or admin UI.

**Triggers ([?](https://apiease.tawk.help/category/requests/triggers))**: Choose how the request should be triggered:

- Automatically via [webhook](https://apiease.tawk.help/article/trigger-requests-from-a-webhook)
- On a recurring schedule using [cron](https://apiease.tawk.help/article/trigger-requests-via-cron-schedule)
- As an endpoint served by APIEase via [Proxy Endpoints](https://apiease.tawk.help/article/proxy-endpoint-trigger)
- [Remotely](https://apiease.tawk.help/article/calling-apiease-requests-remotely) from any http client.
- Manually via the "Copy and Execute" link on the requests admin page
- From your storefront using Shopify's app proxy

**Next Request**: You can specify the name of another request to run after this request finishes. This allows you to build multi-step workflows using [chained requests](https://apiease.tawk.help/article/chained-requests).

