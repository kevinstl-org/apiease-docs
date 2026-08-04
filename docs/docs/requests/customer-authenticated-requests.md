---
title: Customer-authenticated requests
description: Require a logged-in Shopify customer or allow selected customers to run a storefront request.
---
# Customer-authenticated requests

Customer validation restricts a [storefront call](./triggers/storefont-calls.md) using the logged-in customer ID that Shopify sends through its app proxy. It does not authenticate remote calls or proxy endpoints, and it does not accept a customer ID supplied directly by browser code as proof of identity.

## Automatic customer ID injection

Need to inject the logged-in customer ID into request values? See [Automatic Shopify Customer ID Injection](../general/apiease-details/automatic-shopify-customer-id-injection.md).

## Customer validation options

Choose one of these options on the directly called request.

### Require any logged-in customer

Add a System parameter named `validateCustomer` with value `true`.

![Validate customer system parameter toggle](https://tawk.link/65552a3acec6a91282103248/kb/attachments/zy4MAt-qUF.png)

The call passes only when Shopify's app proxy supplies a logged-in customer ID.

### Allow selected customer IDs

Add a System parameter named `customerId` with the allowed Shopify customer ID as its value. To allow multiple customers, add one `customerId` System parameter for each allowed ID. Do not enter a JSON array into one parameter value.

![Customer id system parameter example](https://tawk.link/65552a3acec6a91282103248/kb/attachments/zFgy2rIovc.png)

An allowlisted customer must also be logged in so Shopify can supply the matching ID. Use separate requests only when the request configuration itself must differ by customer.

If validation fails, APIEase blocks the request instead of executing it or returning its normal response to the storefront.
