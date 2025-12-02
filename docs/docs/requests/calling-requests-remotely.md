---
title: Calling APIEase Requests Remotely
description: How to execute APIEase requests via API key and requestId from outside Shopify.
---

# Calling APIEase requests remotely

Document how merchants or integrators can run requests without the embedded app:

Example:
```
POST https://app-admin.apiease.com/api/remote/caller/call?requestId=<request_id>
x-shop-myshopify-domain: <shop>.myshopify.com
x-apiease-api-key: <generated_api_key>
```

Add guidance on key rotation, header validation, expected responses, and error handling.

Source article: [Source article](https://apiease.tawk.help/article/calling-apiease-requests-remotely).
