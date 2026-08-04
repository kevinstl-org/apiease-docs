---
title: Chained requests
description: How to link multiple requests and pass data between them.
---
# Chained requests

Chained requests allow you to call one request after another, using the response from the first request as input to the second. Chaining is a continuation after an entry request runs, not a trigger that external callers invoke directly.

For example, you might need to:

- Authenticate with an external service
- Receive an access token in the response
- Use that token to make a second request to retrieve data or perform an action

## Set the next request

Set the request handle of the next request you would like to call in the **Next Request** field.

## How chaining works in APIEase

Each request in APIEase can optionally trigger another request once it completes. The second request can use values from the first request's response body as parameters.

Let's say you have two requests:

- Request A: Authenticates with a service and receives a token
- Request B: Uses that token to call a protected endpoint

Here's an example of what the JSON response from Request A might look like:

```json
{
  "auth": {
    "token": "YOUR_ACCESS_TOKEN"
  }
}
```
In Request B, you can reference the token value using curly braces:

`Authorization: Bearer {auth.token}`
This tells APIEase to pull the token field from the auth object in the JSON response and insert it into the header of the second request.

![Chained request editor overview](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/chained-requests-description.png?v=1744331402)

## Use response data in the next request

You can use response values from Request A in multiple parts of Request B:

- Query parameters
- Headers
- Request body
- URL paths

For example, suppose Request A returns the following JSON:

```json
{
  "user": {
    "id": "abc123",
    "email": "user@example.com"
  }
}
```
You could then use those values in Request B like this:

- In a query string: `?user_ref={user.id}`
- In a header: `X-User-Email: {user.email}`
- In the body:

```json
{
  "ref_id": "{user.id}"
}
```
The curly brace syntax tells APIEase to substitute in the corresponding value from the previous response.

## Authentication example

If you want to see this in action, we've created a walkthrough of a common use case: authenticating with a service, storing the returned access token, and using it in a follow-up request.

[View Authentication Example](../../general/apiease-details/authentication-example.md)

## When to use chained requests

Use chained requests when:

- You need to authenticate before calling a protected API
- You need to transform or fetch dynamic data before continuing
- You want to build multi-step workflows inside APIEase without building and hosting a custom backend

Use a chain for a simple linear handoff. If the workflow needs conditions, loops, response shaping, or several explicit calls, use a [Liquid request](../request-types/liquid-requests.md) instead.
