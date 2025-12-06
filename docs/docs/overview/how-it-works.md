---
title: How It Works
description: Outline the core flow for configuring and running APIEase in a Shopify store.
---
# How It Works

APIEase runs the requests and logic you define. Each request (HTTP, Flow, or Liquid) is configured in the APIEase admin and executed inside the APIEase runtime, where confidential parameters remain secure.

This page describes how requests are configured, how they are triggered, and how these elements combine to create custom functionality.

---

## Configuring Requests

When you create a request, you choose the type (HTTP Request, Flow Request, or Liquid Request) and define the parameters it needs. These parameters can include:
- values passed in at trigger time
- values extracted from earlier requests
- Liquid based transformations
- confidential parameters stored securely in APIEase

Each request is saved as a reusable and callable unit of logic.

---

## Triggering Requests

A configured request can be invoked through several available trigger types. Each trigger activates the same underlying request definition, allowing the logic to run without duplication.

### Manual Trigger

Invoke any request directly from the APIEase admin for testing or on demand execution.

### Storefront Trigger

Trigger a request from your storefront using Shopify's app proxy. The storefront sends only non confidential data and APIEase performs the execution on the server side.

### Webhook Trigger

Run a request automatically when Shopify or an external system sends a webhook to APIEase.

### Scheduled Trigger

Use a built in cron schedule to run a request at recurring intervals.

### Proxy Endpoint Trigger

Expose a request as a public API endpoint with an optional shared secret. External systems call the endpoint and APIEase runs the associated request.

### Remote HTTP Client Trigger

Send an HTTP call from any external system to APIEase to initiate a request, with optional authentication.

### Chained Request Trigger

Run a request from within another request. A request can call additional requests and pass outputs downstream, allowing multi step workflows.

---

## Combining Request Types and Triggers

Because each request is modular and can be triggered in any of these ways, users can create custom functionality by combining:
- the request type (HTTP, Flow, or Liquid)
- the trigger source
- any number of chained steps

This supports use cases ranging from simple API calls to multi step workflows that coordinate data across multiple systems, without building or hosting a backend.
