---
title: Getting started and integrations FAQ
description: Quick answers about APIEase capabilities, request management, external APIs, and data synchronization.
---
# Getting started and integrations FAQ

## What can I build with APIEase?

APIEase lets you save and run HTTP, Flow, Liquid, and System requests, combine requests into workflows, and build storefront widgets. Common uses include third-party API calls, Shopify automations, scheduled data movement, event-driven actions, and server-side storefront integrations. Start with [What APIEase does](../../overview/what-it-does.md) and [Requests overview](../../requests/requests-overview.md).

## Can APIEase connect to any external or third-party API?

APIEase can connect to an external HTTP API when the provider exposes the required operation and gives you the endpoint, authentication, permissions, and payload contract. APIEase cannot guarantee support for every provider or discover a private or undocumented API. Use the [external API setup guide](../../requests/connect-external-api.md) to evaluate a supplier, ERP, CRM, warehouse, or other provider integration.

## What information do I need from an API provider?

You need the endpoint and HTTP method, authentication instructions and issued credentials, required headers and parameters, request and response shapes, permissions, pagination, rate limits, and preferably a test environment. The provider's current documentation or support team must supply provider-specific details. See the complete [provider information checklist](../../requests/connect-external-api.md).

## Can APIEase obtain provider documentation or credentials for me?

No. APIEase cannot retrieve missing provider documentation, issue another company's API key or access token, bypass permissions, or infer a safe write payload from incomplete requirements. Ask the provider for the missing contract or credential, then use [Connect to an external API](../../requests/connect-external-api.md) to map it to APIEase.

## How do I create, find, edit, duplicate, or delete a request?

Open **Requests** in the APIEase admin. Create a request with **Add Request**; find existing requests in the list; select the request name or **Edit** to update it; use **Duplicate** for a new draft based on it; and use **Delete**, then **Save**, to apply a confirmed deletion. The full lifecycle and handle precautions are in [Create and manage requests](../../requests/how-to-add-requests.md).

## Should I manage resources in the admin, with the CLI, or through the public API?

Use the APIEase admin for interactive work. Use `apiease-cli` when requests, widgets, variables, or functions should be JSON files in source control. Use the public API for direct external automation. CLI and public API workflows use stable resource handles and are separate from clicking actions in the admin. Compare the workflows in [Create and manage requests](../../requests/how-to-add-requests.md) and read [Resource handles](../../developers/resource-handles.md).

## How do I synchronize or import products and inventory?

Build a workflow that reads the provider data, maps stable product, variant, SKU, inventory-item, and location identifiers correctly, and calls the appropriate Shopify Admin API operation. Choose a one-time, scheduled, or event-driven pattern based on how changes are exposed. Plan it with [Synchronize data with an external system](../../requests/synchronize-external-data.md), then use the [third-party product import pattern](../apiease-details/importing-third-party-products.md).

## How do I synchronize orders, customers, or fulfillments?

Define the direction, source of truth, matching identifier, business event, and destination operation first. Then combine provider-neutral HTTP requests with a schedule, Shopify webhook, Liquid orchestration, or a simple request chain as needed. Follow the [order, customer, and fulfillment synchronization guidance](../../requests/synchronize-external-data.md).

## Is a one-time import the same as an ongoing synchronization?

No. A one-time import is a bounded run. An ongoing sync also needs change detection, stable record matching, pagination, repeated-input behavior, error handling, and a schedule or event trigger. Use the patterns in [Synchronize data with an external system](../../requests/synchronize-external-data.md) before enabling recurring or event-driven writes.
