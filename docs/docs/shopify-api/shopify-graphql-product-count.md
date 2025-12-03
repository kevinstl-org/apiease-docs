---
title: Shopify GraphQL API - Product count
description: Example for counting products via the Shopify GraphQL Admin API.
---
# Shopify GraphQL API - Product count

Demonstration of calling the Shopify GraphQL API to get a count of products in your Shopify product inventory:

Demo store password: eacoht

[https://apiease-demo.myshopify.com/pages/shopify-graphql-api-products](https://apiease-demo.myshopify.com/pages/shopify-rest-api-products)

Example of APIEase Request for Shopify Product Count

- **Address**: [https://apiease-demo.myshopify.com/admin/api/2024-07/graphql.json](https://apiease-demo.myshopify.com/admin/api/2024-01/products/count.json)
- **Method**: `POST`
- **Header parameters:**
  - **Name**: `X-Shopify-Access-Token`  
    **Value**: `your-shopify-access-token` (see [Shopify access token](https://apiease.tawk.help/article/shopify-access-token))
  - **Name**: `Content-Type`  
    **Value**: `application/json`
- **Body parameters:**
  - **Value**:

```json
{ "query": "query { productsCount { count } }" }
```

