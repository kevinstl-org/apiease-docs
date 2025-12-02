---
title: Flow request configuration
description: Configure APIEase Flow trigger/action requests and parameter mappings.
---
# Flow request configuration

Flow requests allow you to securely trigger or continue a Shopify Flow workflow. You can pass data into the Flow from your storefront, a webhook, or another request, enabling flexible and secure automation without exposing any sensitive information.

Flow Request Fields

**Name**: You can optionally give your request a name for your reference. If you plan to call this request from another request using a [chained request](https://apiease.tawk.help/category/chained-requests), the name will be used by the calling request.

**Type**: Set this to flow to create a request that triggers a Shopify Flow workflow that you will configure as needed.

**Parameters ([?](https://apiease.tawk.help/category/request-parameters))**: You can provide [in app parameters](https://apiease.tawk.help/category/requests/request-parameters/in-app-parameters) directly in the request configuration. If you need values that depend on customer activity or storefront context, you can pass [dynamic embedded parameters](https://apiease.tawk.help/category/requests/request-parameters/dynamic-embedded-parameters-from-storefront) from the storefront.

Flow: Flow parameters are json key value pairs that are passed to your workflow.System: System parameters are used by APIEase in special cases such as [Customer Authentication](https://apiease.tawk.help/article/customer-authentication-details).

If your request includes confidential values such as API keys or credentials, check the "Sensitive" checkbox. These values are stored on the server and are never exposed to the storefront or even the admin screen. Once they have been submitted they are encrypted in our database and only decrypted for use at runtime.

**Triggers ([?](https://apiease.tawk.help/category/requests/triggers))**: Choose how the request should be triggered:

Manually via the "Copy and Request" link on the requests admin page

Automatically via [webhook](https://apiease.tawk.help/article/trigger-requests-from-a-webhook)

From your storefront using Shopify's app proxy

On a recurring schedule using [cron](https://apiease.tawk.help/article/trigger-requests-via-cron-schedule)

**Next Request**: You can specify the name of another request to run after this request finishes. This allows you to build multi-step workflows using [chained requests](https://apiease.tawk.help/article/chained-requests).

Source article: [Flow request configuration](https://apiease.tawk.help/article/flow-request-configuration).
