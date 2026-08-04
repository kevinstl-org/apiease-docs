---
title: Authentication example
description: Example flow for authenticating requests with APIEase.
---
# Authentication example

Many external APIs require authentication before you can access their data or services. Some use a static credential. Others require a login or token request followed by a second request that sends the short-lived access token.

Use the provider's current API documentation to determine the token URL, request fields, response fields, scopes, and required authorization format. APIEase cannot supply or generate provider credentials.

## Step 1: Create the authentication request

Start by setting up your first request to authenticate with the external service. This is typically a POST request with your client credentials in the body.

Example:

- Method: `POST`
- URL: [https://example.com/api/authenticate](https://example.com/api/authenticate)
- Body:

```json
{
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET"
}
```

This request will return an access token in the response. For example:

```json
{
  "auth_token": "YOUR_ACCESS_TOKEN"
}
```

Mark saved client credentials as **Sensitive**. APIEase masks sensitive request parameters after saving and decrypts them only when it executes the request.

## Step 2: Create the follow-up request

Next, create a second request to access the secured endpoint. Give it the handle `secure-request`.

This request will use the `auth_token` returned from the authentication request.

For example, you might need to include the token in a header:

- Type: Header  
- Name: `Authorization`
- Value: `Bearer {auth_token}`

Or include it in the body:

- Type: Body  
- Value:

```json
{
  "session_token": "{auth_token}"
}
```

## Step 3: Chain the requests

Go back to your authentication request and set **Next Request** to the handle of your follow-up request (`secure-request`).

When the authentication request completes successfully, APIEase will automatically execute the next request and insert the token where specified.

![Chained requests example](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/chained-requests-example.png?v=1744331402)

## Keep the response private

Saved sensitive parameters stay in APIEase during request execution, and chained response values can pass directly to the next request. However, APIEase does not remove tokens or private fields from an external API's response. Do not expose this authentication request or a final chained response to a storefront or other public caller if the response can contain credentials or private data.

If the provider uses a static API key or Bearer token instead, you usually need only one request. Save the credential as a sensitive [in-app header parameter](../../requests/request-parameters/in-app-parameters/in-app-header-parameters.md) using the exact header name and format required by the provider.
