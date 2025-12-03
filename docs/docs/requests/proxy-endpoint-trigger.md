---
title: Proxy endpoint trigger
description: Expose a public API endpoint that runs an APIEase request whenever it is called.
---
# Proxy endpoint trigger

Create a public API endpoint that executes an APIEase request and returns its final response to the caller—no custom server needed.

## Endpoint format
Your proxy endpoint URL looks like:
```
https://app-admin.apiease.com/api/proxy/<shop-name>/<your-path>
```
- `<shop-name>` identifies your shop.
- `<your-path>` is the custom path you choose for this endpoint.

When someone calls this URL using the HTTP method you specify (GET, POST, etc.), APIEase runs the linked request and relays the request’s final response to the caller. This is useful for lightweight APIs, receiving events, or letting external systems start your workflows.

## How it works
1. The first path segment after `/proxy/` identifies your shop.
2. The remaining path is the custom endpoint path you configure.
3. APIEase matches the incoming request to your Proxy Endpoint Trigger.
4. APIEase runs the configured request using the incoming data.
5. The request’s final response is returned to the caller.

## Authentication options
- **Authenticated**: Caller must authenticate using the same scheme as Remote API Calls.
- **Unauthenticated**: Open access for anyone with the URL.

## Configure a proxy endpoint trigger
1. Open any APIEase request.
2. Go to **Triggers**.
3. Add **Proxy Endpoint Trigger**.
4. Set:
   - **Request Path**: The public endpoint path.
   - **HTTP Method**: The allowed verb for the endpoint.
   - **Authenticated**: `true` or `false`.
5. Save. Your public API endpoint is ready to use.

Source article: [Proxy Endpoint](https://apiease.tawk.help/article/proxy-endpoint-trigger).
