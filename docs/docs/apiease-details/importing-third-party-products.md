---
title: Importing products from a third-party system
description: Example for importing external products into Shopify with APIEase.
---
# Importing products from a third-party system

You can use APIEase's  [Shopify Flow Integration](https://apiease.tawk.help/category/requests/shopify-flow-integration) to automate the import of products and inventory data from third-party systems into your Shopify store. Whether syncing from a warehouse API, supplier feed, or internal catalog, APIEase enables this process without requiring custom app development or hosting.

**How It Works**Start with an APIEase Request
Create an APIEase request to fetch product and inventory data from the third-party system. This request can be triggered manually, on a schedule, or via a Shopify webhook event.Pass the Response to Shopify Flow
Once APIEase receives the external product data, use a chained request to send it to a Shopify Flow Workflow configured by store administrators or developers using a Flow request.Process the Data in Flow
Inside the Flow, use a Run Code action to transform, validate, or filter the data received from the third-party system.Import into Shopify
Use the Send Admin API request action in Flow to call Shopify's GraphQL Admin API to create or update products and inventory.

**Why Use APIEase**While Shopify Flow provides native actions for updating product data, most real-world integrations require:

Authenticated API calls to third-party systemsThe ability to schedule importsAccess to response data from external APIsDynamic control over how data flows into Shopify

APIEase handles these responsibilities, enabling you to build a complete product import pipeline within your Shopify environment.

Source article: [Importing products from a third-party system](https://apiease.tawk.help/article/importing-products-from-a-third-party-system-into-my-shopify-store).
