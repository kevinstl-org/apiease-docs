---
title: HTTP API request configuration
description: How to configure HTTP requests in APIEase.
---
# HTTP API request configuration

HTTP API requests are highly configurable with many options.  HTTP requests allow you to securely call any external API directly from your Shopify store or through other trigger methods such as webhooks, storefront app proxy, or a recurring schedule.

![HTTP request editor](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/add-http-api-requests.png?v=1744748372)

**HTTP API Request Fields**

- **Name**: Optional display name. Required if this request is called by name from a [chained request](https://apiease.tawk.help/category/requests/chained-requests).
- **Type**: Set to `http` for a standard API call to an external service.
- **Address**: Full endpoint of the external API (for example, `https://api.example.com/data`).
- **Method**: Choose GET, POST, DELETE, PUT, PATCH, or OPTIONS.
- **Parameters ([?](https://apiease.tawk.help/category/request-parameters))**:
  - **Headers**: Add required headers (Authorization, Content-Type, etc.).
  - **Query parameters**: Values to include in the query string.
  - **Body**: For POST/PUT style calls; accept raw JSON or form fields.
  - **Path**: Dynamic [path variables](https://apiease.tawk.help/article/path-variables) to substitute into the address.
  - **System**: Used by APIEase for features such as [Customer Authentication](https://apiease.tawk.help/article/customer-authentication-details).
  - You can provide [in app parameters](https://apiease.tawk.help/category/requests/request-parameters/in-app-parameters) or pass [dynamic embedded parameters](https://apiease.tawk.help/category/requests/request-parameters/dynamic-embedded-parameters-from-storefront) from the storefront.
  - If the request includes credentials or API keys, mark them as **Sensitive** so they remain encrypted and never shown in the storefront or admin UI.
  


- **Triggers ([?](https://apiease.tawk.help/category/requests/triggers))**: Choose how the request should be triggered:
  - Automatically via [webhook](https://apiease.tawk.help/article/trigger-requests-from-a-webhook)
  - On a recurring schedule using [cron](https://apiease.tawk.help/article/trigger-requests-via-cron-schedule)
  - As an endpoint served by APIEase via [Proxy Endpoints](https://apiease.tawk.help/article/proxy-endpoint-trigger)
  - [Remotely](https://apiease.tawk.help/article/calling-apiease-requests-remotely) from any http client.
  - Manually via the "Copy and Execute" link on the requests admin page
  - From your storefront using Shopify's app proxy

- **Next Request**: You can implement [chained requests](https://apiease.tawk.help/category/requests/chained-requests) by setting the Next Request field to the name of a request to run after this one completes.

