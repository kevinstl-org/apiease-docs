---
title: HTTP API request configuration
description: How to configure HTTP requests in APIEase.
---
# HTTP API request configuration

HTTP API requests are highly configurable with many options.  HTTP requests allow you to securely call any external API directly from your Shopify store or through other trigger methods such as webhooks, storefront app proxy, or a recurring schedule.

![HTTP request editor](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/add-http-api-requests.png?v=1744748372)

**HTTP API Request Fields**

**
**

**Name**: You can optionally give your request a name for your reference. If you plan to call the request directly after another using a [chained request](https://apiease.tawk.help/category/requests/chained-requests) then you will need to provide a name that will be referred to by the calling chained request.

**Type**: Set this to http to create a standard API call to an external service.

**Address**: This is the full endpoint of the external API you want to call.

Address Example: [https://api.example.com/data](https://api.example.com/data)

**Method**: Choose GET, POST, DELETE, PUT, PATCH or OPTIONS.

**Parameters ([?](https://apiease.tawk.help/category/request-parameters))**: You can provide [in app parameters](https://apiease.tawk.help/category/requests/request-parameters/in-app-parameters) directly in the request configuration. If you need values that depend on customer activity or storefront context, you can pass [dynamic embedded parameters](https://apiease.tawk.help/category/requests/request-parameters/dynamic-embedded-parameters-from-storefront) from the storefront.

Headers: Add any headers required by the API, such as Authorization or Content-TypeQuery Parameters: If the endpoint requires values in the query string, add them hereBody: For methods like POST or PUT, enter the request body using raw JSON or form fieldsPath: Path parameters allow you to dynamically set [path variables](https://apiease.tawk.help/article/path-variables) if the path of your address needs to change based on some condition.System: System parameters are used by APIEase in special cases such as [Customer Authentication](https://apiease.tawk.help/article/customer-authentication-details).
If your request includes confidential values such as API keys or credentials, check the "Sensitive" checkbox. These values are stored on the server and are never exposed to the storefront or even the admin screen. Once they have been submitted they are encrypted in our database and only decrypted for use at runtime.

**Triggers ([?](https://apiease.tawk.help/category/requests/triggers))**: Choose how the request should be triggered:

Manually via the "Copy and Request" link on the requests admin page

Automatically via [webhook](https://apiease.tawk.help/article/trigger-requests-from-a-webhook)

From your storefront using Shopify's app proxy

On a recurring schedule using [cron](https://apiease.tawk.help/article/trigger-requests-via-cron-schedule)

![HTTP webhook trigger](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/trigger-webhook-http.png?v=1744409941)

![Flow webhook trigger](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/trigger-webhook-flow.png?v=1744409941)

![Cron schedule trigger](https://drive.google.com/thumbnail?id=1lImze5kX1IgQLmDd6tzgoKoQN2fezNc_&sz=w1000)

**
**

**Next Request**: You can implement [chained requests](https://apiease.tawk.help/category/requests/chained-requests) by setting the Next Request field to the name of a request to run after this one completes.

Source article: [HTTP API request configuration](https://apiease.tawk.help/article/http-api-request-configuration).
