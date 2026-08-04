---
title: Import products from a third-party system
description: Apply the APIEase synchronization pattern to external product and inventory data.
---
# Import products from a third-party system

Use APIEase to compose the provider read, data mapping, and Shopify write operations required by a third-party product import. This pattern applies to a supplier catalog, warehouse API, stock feed, or internal product system, but the exact endpoints and field mappings come from the provider and Shopify API contracts.

Start with [Synchronize data with an external system](../../requests/synchronize-external-data.md). It covers direction, source of truth, record identity, change detection, pagination, and safe write planning.

## Required information

- The provider endpoint that lists products or inventory changes
- The provider's authentication, pagination, and rate-limit requirements
- The fields and identifiers returned for products, variants, SKUs, inventory items, and locations
- The Shopify Admin API operations and permissions required for each write
- The rule for matching an external record to an existing Shopify record
- The intended create, update, missing-record, and deletion behavior

If the provider does not document an endpoint, credential, identifier, or payload, obtain that information before configuring the import. APIEase cannot infer or issue it.

## Build the import from focused requests

1. Create an [HTTP request](../../requests/request-types/http-requests.md) that reads a bounded page of provider data.
2. Create a separate HTTP request for the specific Shopify product or inventory operation.
3. Use a [Liquid request](../../requests/request-types/liquid-requests.md) when the workflow must loop through records, transform fields, or call several saved requests.
4. Run the read and one write with test data before processing a larger page.
5. Add a [cron schedule](../../requests/triggers/cron-schedule.md) only after pagination and repeated records behave as intended.

For a simple response-to-next-request sequence, a [chained request](../../requests/request-parameters/chained-requests.md) may be enough. Shopify Flow can also participate when the store's workflow should own part of the automation; see [Shopify Flow integration](../../requests/shopify-flow-integration/architecture.md).

## Keep product and inventory identity separate

A product, variant, SKU, inventory item, and location are different concepts. Do not assume one identifier works for every Shopify operation. Define the mapping explicitly and use the identifier required by the current Shopify Admin API operation.

For Shopify authentication and permissions, see [Shopify API calls and access tokens](../shopify-api/shopify-api-calls-and-access-tokens.md).
