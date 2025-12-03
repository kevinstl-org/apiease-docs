---
title: Importing products from a third-party system
description: Example for importing external products into Shopify with APIEase.
---
# Importing products from a third-party system

You can use APIEase's  [Shopify Flow Integration](https://apiease.tawk.help/category/requests/shopify-flow-integration) to automate the import of products and inventory data from third-party systems into your Shopify store. Whether syncing from a warehouse API, supplier feed, or internal catalog, APIEase enables this process without requiring custom app development or hosting.

**How It Works**
1. **Start with an APIEase Request**: Create an APIEase request to fetch product and inventory data from the third-party system. Trigger it manually, on a schedule, or via a Shopify webhook event.
2. **Pass the Response to Shopify Flow**: Use a chained request to send the data to a Shopify Flow workflow configured by store administrators or developers.
3. **Process the Data in Flow**: Inside Flow, use a Run Code action to transform, validate, or filter the received data.
4. **Import into Shopify**: Use the Send Admin API request action in Flow to call Shopify's GraphQL Admin API to create or update products and inventory.

**Why Use APIEase**
While Shopify Flow provides native actions for updating product data, most real-world integrations require:
- Authenticated API calls to third-party systems
- The ability to schedule imports
- Access to response data from external APIs
- Dynamic control over how data flows into Shopify

APIEase handles these responsibilities, enabling you to build a complete product import pipeline within your Shopify environment.

