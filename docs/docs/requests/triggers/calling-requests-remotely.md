---
title: Calling APIEase requests remotely
description: How to execute APIEase requests via API key and request handle from outside Shopify.
---
# Calling APIEase requests remotely

Use a remote call when a trusted server, automation, or external application needs to run an existing request by its handle. The caller authenticates directly to APIEase with an APIEase API key and identifies the target shop in a header.

A remote call is different from a [Proxy Endpoint](./proxy-endpoint.md): a proxy endpoint gives a request a purpose-built path and HTTP method and can be public, while the remote caller uses APIEase's shared caller URL and always requires the APIEase remote-call headers. Neither is the Shopify app-proxy route used by [storefront calls](./storefont-calls.md).

## 1. Create an APIEase API key

1. Navigate to the Settings page in the APIEase admin.
2. Click **Generate API Key**.
3. Copy and store the key securely. You will use this key to authenticate your external calls.

## 2. Make the remote call

**Address**: `https://app-admin.apiease.com/api/remote/caller/call?requestId=<your-request-handle>`

**Headers:**
- `x-shop-myshopify-domain`: `your-store.myshopify.com`
- `x-apiease-api-key`: `YOUR_API_KEY`

Replace `<your-request-handle>` with the handle of the request you want to call. The query parameter is still named `requestId`, but the value should be the request handle for new integrations.

Keep the APIEase API key in the trusted external system. Do not put it in storefront JavaScript, theme Liquid, or widget code.
