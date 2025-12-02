---
title: Calling APIEase Requests Remotely
description: How to execute APIEase requests via API key and requestId from outside Shopify.
---
# Calling APIEase Requests Remotely

You can call any APIEase request from any http client by making a direct HTTP request to the APIEase platform. This allows you to run your configured requests from outside Shopify, such as from custom servers, external apps, or third-party platforms.

**Step 1**: Create an API Key

Navigate to the Settings page in the APIEase admin.Click Generate API Key.Copy and store the key securely. You will use this key to authenticate your external calls.

**Step 2**: Make the Remote Call

**Address**: `https://app-admin.apiease.com/api/remote/caller/call?requestId=<your_request_id>`

**Headers:**
- `x-shop-myshopify-domain`: `yourstore.myshopify.com`
- `x-apiease-api-key`: `<your_generated_api_key>`

Replace `<your_request_id>` with the ID of the request you want to call. You can find the `requestId` in the APIEase request admin page.

Source article: [Calling APIEase Requests Remotely](https://apiease.tawk.help/article/calling-apiease-requests-remotely).
