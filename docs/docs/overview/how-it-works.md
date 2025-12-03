---
title: How It Works
description: Outline the core flow for configuring and running APIEase in a Shopify store.
---
# How It Works

In APIEase, you define HTTP requests or Shopify Flow requests that include all required parameters, confidential or otherwise. Both types are created and managed through the same simple interface.

**HTTP Requests**

HTTP requests allow you to call third-party APIs. You enter the full API address in the APIEase admin and define any required parameters, including confidential values that cannot be exposed to the browser.

APIEase securely handles the request and any sensitive data on your behalf, regardless of how the request is triggered.

**Shopify Flow Requests**

Flow requests are configured just like HTTP requests. The difference is that Flow handles the logic layer, while APIEase manages the execution and integration with external services.

You can structure automations where APIEase calls Flow or combines Flow logic with other secure API requests in a sequence.

**Triggering Requests**

Each request in APIEase can be triggered in four ways:

- Manually from the APIEase admin interface
- From your storefront using Shopify's API proxy
- Automatically through Shopify webhooks
- On a recurring schedule using built-in cron settings

These flexible options apply to both HTTP and Flow requests. They allow you to integrate APIEase into a wide range of workflows, from interactive storefront experiences to background automation.

When using the storefront trigger, APIEase provides a customizable HTML/JavaScript snippet. This snippet is used with Shopify's app proxy and can be added to a Custom Liquid section in your storefront. When a customer visits or interacts with the page, APIEase securely executes the associated request.

Source article: [How It Works](https://apiease.tawk.help/article/how-it-works).
