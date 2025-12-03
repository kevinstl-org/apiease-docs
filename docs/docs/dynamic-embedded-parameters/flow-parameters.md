---
title: Dynamic embedded flow parameters
description: Send runtime Flow input from the storefront to APIEase.
---
# Dynamic embedded flow parameters

You can pass dynamic values from your storefront into the input of a Shopify Flow request. This lets your Flow automation receive real-time data based on customer actions, session context, or storefront activity.

Dynamic embedded parameters are added as query parameters to calls made to APIEase from custom Liquid in your storefront.

**Example JavaScript snippet**

```html
<script>
  const flowParamsEmbeddedVar = JSON.stringify({
    exampleFlow1: "exampleFlowValue1",
    exampleFlow2: "exampleFlowValue2",
    exampleFlow3: "exampleFlowValue3",
  });
  const queryParams = new URLSearchParams({
    requestId: "a1dd1880-ewsd-sdss-8f48-27f04dbadc31",
    flowParamsEmbedded: flowParamsEmbeddedVar,
  });
  fetch('/apps/apiease/integration/caller/call?' + queryParams)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      console.log(jsonResponse);
    });
</script>
```

In the snippet above, `flowParamsEmbedded` is set to the stringified `flowParamsEmbeddedVar`. APIEase looks for a query parameter named `flowParamsEmbedded` to hold the dynamic embedded flow parameters.

Source article: [Dynamic Embedded Flow Parameters](https://apiease.tawk.help/article/dynamic-embedded-flow-parameters).
