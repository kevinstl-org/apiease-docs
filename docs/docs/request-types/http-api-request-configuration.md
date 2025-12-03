---
title: HTTP API request configuration
description: How to configure HTTP requests in APIEase.
---
# HTTP API request configuration

HTTP API requests are highly configurable with many options.  HTTP requests allow you to securely call any external API directly from your Shopify store or through other trigger methods such as webhooks, storefront app proxy, or a recurring schedule.

![HTTP request editor](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/add-http-api-requests.png?v=1744748372)

**HTTP API Request Fields**

- **Name**: Optional display name. Required if this request is called by name from a [chained request](../request-parameters/chained-requests.md).
- **Type**: Set to `http` for a standard API call to an external service.
- **Address**: Full endpoint of the external API (for example, `https://api.example.com/data`).
- **Method**: Choose GET, POST, DELETE, PUT, PATCH, or OPTIONS.
- **Parameters ([?](../request-parameters/in-app-vs-dynamic.md))**:
  - **Headers**: Add required headers (Authorization, Content-Type, etc.).
  - **Query parameters**: Values to include in the query string.
  - **Body**: For POST/PUT style calls; accept raw JSON or form fields.
  - **Path**: Dynamic [path variables](../request-parameters/path-variables.md) to substitute into the address.
  - **System**: Used by APIEase for features such as [Customer Authentication](../requests/customer-authenticated-requests.md).
  - You can provide [in app parameters](../request-parameters/in-app-vs-dynamic.md) or pass [dynamic embedded parameters](../dynamic-embedded-parameters/overview.md) from the storefront.
  - If the request includes credentials or API keys, mark them as **Sensitive** so they remain encrypted and never shown in the storefront or admin UI.
  


- **Triggers ([?](../requests/trigger-requests-from-a-webhook.md))**: Choose how the request should be triggered:
  - Automatically via [webhook](../requests/trigger-requests-from-a-webhook.md)
  - On a recurring schedule using [cron](../requests/trigger-requests-via-cron-schedule.md)
  - As an endpoint served by APIEase via [Proxy Endpoints](../requests/proxy-endpoint-trigger.md)
  - [Remotely](../requests/calling-requests-remotely.md) from any http client.
  - Manually via the "Copy and Execute" link on the requests admin page
  - From your storefront using Shopify's app proxy

- **Next Request**: You can implement [chained requests](../request-parameters/chained-requests.md) by setting the Next Request field to the name of a request to run after this one completes.

