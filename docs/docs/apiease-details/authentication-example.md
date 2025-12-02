---
title: Authentication example
description: Example flow for authenticating requests with APIEase.
---
# Authentication example

Many external APIs require authentication before you can access their data or services. This usually involves sending a login request to receive an access token, which must then be included in subsequent requests.

With APIEase, you can handle this securely using chained requests - without ever exposing your credentials in the storefront.

**Step 1: Create the Authentication Request**

Start by setting up your first request to authenticate with the external service. This is typically a POST request with your client credentials in the body.

Example:

Method: POST

URL: [https://example.com/api/authenticate](https://example.com/api/authenticate)

Body:

```json
{
  "client_id": "your-client-id",
  "client_secret": "your-client-secret"
}
```

This request will return an access token in the response. For example:

```json
{
  "auth_token": "abc123xyz"
}
```

**Step 2: Create the Follow-Up Request**

Next, create a second request to access the secured endpoint. Let's call it "SecureRequest".

This request will use the auth_token returned from the authentication request.

For example, you might need to include the token in a header:

Type: Header

Name: Authorization

Value: `Bearer {auth_token}`

Or include it in the body:

Type: Body

Value:

```json
{
  "session_token": "{auth_token}"
}
```

**Step 3: Chain the Requests**

Go back to your authentication request and set the Next Request field to the name of your follow-up request (in this case, "SecureRequest").

When the authentication request completes successfully, APIEase will automatically execute the next request and insert the token where specified.

![Chained requests example](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/chained-requests-example.png?v=1744331402)

**Secure by Design**

All credentials and tokens stay on the server and are never exposed to the storefront or customer browser. This ensures a secure authentication flow without needing to build your own app or server.

Source article: [Authentication example](https://apiease.tawk.help/article/authentication-example).
