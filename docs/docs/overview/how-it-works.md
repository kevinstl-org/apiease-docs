---
title: How It Works
description: Outline the core flow for configuring and running APIEase in a Shopify store.
---
# How It Works

APIEase runs the requests and logic you define. Each request ([HTTP](../request-types/http-api-request-configuration.md), [Flow](../request-types/flow-request-configuration.md), or [Liquid](../request-types/liquid-requests.md)) is configured in the APIEase admin and executed inside the APIEase runtime, where confidential parameters remain secure.

This page describes how requests are configured, how they are triggered, and how these elements combine to create custom functionality.

---

## Configuring Requests

When you create a request, you choose the type ([HTTP Request](../request-types/http-api-request-configuration.md), [Flow Request](../request-types/flow-request-configuration.md), or [Liquid Request](../request-types/liquid-requests.md)) and define the parameters it needs. These parameters can include:
- values passed in at trigger time
- values extracted from earlier requests
- Liquid based transformations
- confidential parameters stored securely in APIEase (see [Why Secure Parameter Handling Matters](./why-you-need-it.md#why-secure-parameter-handling-matters))

Each request is saved as a reusable and callable unit of logic.

For setup steps, see [How to Add Requests](../requests/how-to-add-requests.md).

---

## Triggering Requests

A configured request can be invoked through several available trigger types. Each trigger activates the same underlying request definition, allowing the logic to run without duplication.

### [Webhook Trigger](../requests/trigger-requests-from-a-webhook.md)

Run a request automatically when Shopify or an external system sends a webhook to APIEase.

### [Scheduled Trigger](../requests/trigger-requests-via-cron-schedule.md)

Use a built in cron schedule to run a request at recurring intervals.

### [Proxy Endpoint Trigger](../requests/proxy-endpoint-trigger.md)

Expose a request as a public API endpoint with an optional shared secret. External systems call the endpoint and APIEase runs the associated request.

### Manually

Invoke any request directly from the APIEase admin for testing or on demand execution.

### From Storefront

Trigger a request from your storefront using Shopify's app proxy. The storefront sends only non confidential data and APIEase performs the execution on the server side.

### [Remote HTTP Client](../requests/calling-requests-remotely.md)

Send an HTTP call from any external system to APIEase to initiate a request, with optional authentication.

### [Chained Request](../request-parameters/chained-requests.md)

Run a request from within another request. A request can call additional requests and pass outputs downstream, allowing multi step workflows.

---

## Combining Request Types and Triggers

Because each request is modular and can be triggered in any of these ways, users can create custom functionality by combining:
- the request type (HTTP, Flow, or Liquid)
- the trigger source
- any number of chained steps

This supports use cases ranging from simple API calls to multi step workflows that coordinate data across multiple systems, without building or hosting a backend.
