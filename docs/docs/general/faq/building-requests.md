---
title: Building requests FAQ
description: Quick answers about request types, HTTP methods and addresses, parameters, chaining, Liquid, Variables, Functions, and System requests.
---
# Building requests FAQ

## Which request type should I choose?

Choose **HTTP** to call an external API, **Flow** to start or continue Shopify Flow, **Liquid** to apply template logic or orchestrate other saved requests, and **System** to manage APIEase Variables without calling an external URL. See the [request types overview](../../requests/request-types/request-types-overview.md) for a focused comparison.

## Where do I set the HTTP method and endpoint URL?

Set **Method** and **Address** on an HTTP request. The method is the operation the provider documents, such as GET, POST, PUT, PATCH, DELETE, or OPTIONS; the address is the provider's full endpoint URL. Do not put query parameters or a request body into the Address field when APIEase provides a matching parameter location. See [HTTP requests](../../requests/request-types/http-requests.md).

## Should a value be a header, query parameter, path parameter, or body?

Put the value where the receiving API's contract requires it: headers carry metadata or authentication, query parameters appear after `?` in the URL, path parameters replace placeholders such as `{productId}`, and the body carries the request payload. These locations are not interchangeable. Use the [request parameters overview](../../requests/request-parameters/request-parameters-overview.md) to reach the setup page for each location, including JSON and form URL-encoded bodies.

## What is the difference between an in-app parameter and a dynamic embedded parameter?

An **in-app parameter** is saved on the request; a **dynamic embedded parameter** is supplied for one execution by a caller such as storefront code, a widget, or another request. Use a saved value for stable configuration or a sensitive request parameter, and a runtime or embedded value for per-call input. When both provide the same parameter, the dynamic embedded value overrides the saved value. See [In-app parameters vs dynamic embedded parameters](../../requests/request-parameters/in-app-vs-dynamic.md).

## How do I run a second request with data from the first response?

Set the first request's **Next Request** to the second request's handle, then use `{field}` or `{object.field}` placeholders in the second request to read values from the previous response body. This is a chained request, also called a request chain or multi-step request. Follow [Chained requests](../../requests/request-parameters/chained-requests.md) for supported parameter locations and an authentication example.

## When should I use a Liquid request instead of a request chain?

Use a simple request chain for a linear handoff from one response to the next. Use a Liquid request when the workflow needs conditions, loops, response shaping, several explicit `call` operations, or reusable Function calls. Liquid requests are executable workflows; they do not replace the HTTP requests that perform external API calls. See [Liquid requests](../../requests/request-types/liquid-requests.md).

## What is the difference between Variables and System requests?

Variables are persisted values for the current store; System requests are executable requests that get, set, or delete those values during a workflow. Manage a value manually on the [Variables page](../../variables/variables-overview.md), or use a [System request](../../requests/request-types/system-requests.md) when automation must manage it. A System request does not call an external API.

## What is a Function, and how is it different from a Liquid request?

A Function is reusable Liquid helper logic that runs inside a parent Liquid request. It has no trigger and is not a standalone request execution. Use a Function to reuse transformations or formatting, and use a Liquid request for the overall executable workflow. See [Functions overview](../../functions/functions-overview.md) and [Using Functions in Liquid requests](../../functions/using-functions-in-liquid-requests.md).
