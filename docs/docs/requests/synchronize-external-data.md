---
title: Synchronize data with an external system
description: Plan reusable product, inventory, order, customer, and fulfillment synchronization workflows with APIEase.
---
# Synchronize data with an external system

A synchronization is a workflow built from saved APIEase requests, not a single sync switch. Define which system owns the data, how a change is detected, how records are matched, and which API operation creates or updates the destination record.

Use this pattern for supplier catalogs, warehouse stock feeds, ERP order exports, CRM customer updates, fulfillment updates, and similar integrations.

## Define the synchronization contract

Before creating requests, decide:

1. **Direction:** external system to Shopify, Shopify to external system, or both.
2. **Source of truth:** which system wins when the same field differs.
3. **Scope:** the exact objects and fields that move.
4. **Identity:** the stable key used to match records, such as a SKU, provider record ID, Shopify global ID, or another documented identifier.
5. **Change detection:** one-time import, scheduled polling, or an event-driven update.
6. **Write behavior:** create, update, or both; also decide how missing or deleted records should be handled.
7. **Operational rules:** pagination, rate limits, duplicate-event handling, retries, and partial failures required by the APIs involved.

APIEase does not decide these business rules for you. Confirm them with the owner of each system and use the current provider and Shopify API documentation as the contract.

## Choose an execution pattern

### One-time import

Run a request manually for a bounded migration or initial catalog load. Start with a small, non-production sample and verify identifiers and field mappings before increasing the batch size.

### Scheduled pull

Add a [cron schedule](./triggers/cron-schedule.md) when APIEase should periodically ask a provider for changes. Prefer an endpoint that can filter by an updated timestamp or cursor when the provider supports one; the provider documentation determines the available filter and pagination rules.

### Shopify event-driven update

Use a [Shopify webhook](./triggers/webhooks/webhooks-overview.md) when a supported Shopify event should start the workflow. Map only the event data required by the destination operation.

### Multi-step orchestration

Use a [Liquid request](./request-types/liquid-requests.md) when the workflow must iterate through records, branch, transform data, or call several saved requests. Use a [chained request](./request-parameters/chained-requests.md) for a simpler response-to-next-request sequence.

## Separate source, mapping, and destination operations

A reusable synchronization usually has these parts:

1. A source HTTP request reads changed records.
2. A Liquid request or another documented transformation maps source fields to destination fields.
3. A destination HTTP request creates or updates one destination record.
4. The orchestrating request records or returns enough status information to identify partial failures.

Keeping provider calls separate prevents one large request from mixing authentication, pagination, mapping, and writes. It also lets you test a read operation without performing a destination write.

## Products and inventory

Product and inventory synchronization needs separate identity decisions. A product, variant, SKU, inventory item, and inventory location are not interchangeable identifiers. Confirm which identifier each source field represents and which Shopify Admin API operation accepts it.

For a third-party catalog or stock feed:

- decide whether the workflow creates products, updates existing products, updates inventory, or combines those operations
- define how provider records map to Shopify products and variants
- define location mapping before writing inventory quantities
- preserve the provider cursor or updated timestamp when incremental reads require it
- make write behavior safe for repeated records according to the destination API contract

See [Import products from a third-party system](../general/apiease-details/importing-third-party-products.md) for the product-specific starting pattern. For Shopify calls and permissions, see [Shopify API calls and access tokens](../general/shopify-api/shopify-api-calls-and-access-tokens.md).

## Orders, customers, and fulfillments

First identify the business event and direction. Common reusable patterns include sending a newly created Shopify order to an external system, periodically pulling fulfillment updates, or updating a customer record after a Shopify event.

Treat orders, customers, fulfillments, and fulfillment orders as distinct API resources. Verify required identifiers, permissions, state transitions, and write constraints in the current API documentation for both systems. Do not assume that an order ID can be used where a fulfillment or customer ID is required.

## Validate before enabling live writes

Use provider sandbox accounts and non-production Shopify data when available. Validate a small read, its mapping, and one destination write separately. Then test pagination and repeated input before enabling a schedule or event trigger.

APIEase executes the workflow as configured; it does not validate whether a write is correct for your business. Back up important data when practical and review any request that can create, update, or delete live records.
