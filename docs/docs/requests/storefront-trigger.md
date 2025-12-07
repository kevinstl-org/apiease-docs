---
title: Storefont calls
description: Call APIEase requests from your Shopify storefront through Shopify's app proxy while keeping credentials secure.
---
# Storefont calls

Run any APIEase request directly from your Shopify storefront using Shopify's app proxy. This lets you start workflows from theme code without exposing credentials or private logic in the browser.

## How it works
- Your theme calls the APIEase app proxy path (for example `/apps/apiease/integration/caller/call`) and includes the `requestId` for the request to run.
- Shopify forwards the call through the app proxy. If the customer is logged in, Shopify passes the customer id to APIEase.
- APIEase executes the request on the server, injects any sensitive parameters you saved in the admin, and returns the request's final response to the storefront.

## Configure a storefront call
1. In the APIEase admin, open the request you want to run from the storefront.
2. In the **Trigger** column, click the plus icon and choose **Storefront**.
3. Select the HTTP method you want to allow (GET or POST) and set the proxy path to use.
4. Save. Note the request's `requestId`; you will pass it from your theme when calling the trigger.

## Call from your theme
Use JavaScript or Liquid to call the app proxy path and include any dynamic embedded parameters needed at runtime. APIEase merges these values into the request before execution.

```javascript
const queryParams = new URLSearchParams({
  requestId: '<your_request_id>',
  queryParamsEmbedded: JSON.stringify({ handle: {{ product.handle | json }} }),
  bodyEmbedded: JSON.stringify({ source: 'storefront' }),
});

fetch('/apps/apiease/integration/caller/call?' + queryParams, { method: 'GET' })
  .then((response) => response.json())
  .then((data) => {
    console.log('APIEase response', data);
  });
```

- `requestId` tells APIEase which request to run.
- `pathParamsEmbedded`, `queryParamsEmbedded`, `headersEmbedded`, `bodyEmbedded`, and `flowParamsEmbedded` map to the dynamic embedded parameters defined on the request.
- Keep confidential values stored in the APIEase request configuration; do not place secrets in storefront code.

## Customer validation options
If the customer is logged in when the app proxy runs, Shopify includes their customer id in the call.

- Require a logged-in customer: add a system parameter named `validateCustomer` with value `true`.
- Restrict to a specific customer: add a system parameter named `customerId` set to the allowed Shopify customer id.

For detailed setup and screenshots, see [Customer authenticated requests](./customer-authenticated-requests.md). If validation fails, APIEase blocks the call and no response is returned to the storefront.
