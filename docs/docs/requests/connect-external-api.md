---
title: Connect to an external API
description: Gather provider requirements and configure a provider-neutral external API integration in APIEase.
---
# Connect to an external API

APIEase can call an external or third-party HTTP API when the provider exposes the required endpoint and gives you enough information and authorization to use it. This includes supplier, warehouse, ERP, CRM, fulfillment, and other provider APIs that use supported HTTP requests.

APIEase executes the requests you configure. It cannot discover an undocumented API, obtain credentials from a provider, bypass provider permissions, or guarantee that a particular provider permits the workflow you want.

## Gather the provider information first

Get the following from the API provider's current documentation or support team:

- the base URL and exact endpoint for each operation
- the HTTP method, such as `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`
- the authentication scheme and credentials issued to you
- required headers and content type
- required path, query, and body fields, including their data types
- example success and error responses
- pagination behavior for list endpoints
- rate limits and any retry guidance
- a sandbox or test account, when the provider offers one
- webhook event and signature requirements if the provider needs to notify another system

Also define the business operation in concrete terms. For example, "read products changed since a timestamp" is actionable; "connect the supplier" is not enough to identify an endpoint or payload.

Do not send production credentials to APIEase support or place them in documentation examples. Enter credentials only in the intended request configuration after the provider issues them to you.

## Map each operation to an APIEase request

Most provider integrations use one saved [HTTP request](./request-types/http-requests.md) for each external API operation. Configure the provider's method, address, headers, body, and parameters in that request.

For a basic provider call:

1. [Create a request](./how-to-add-requests.md) and choose **HTTP** as the request type.
2. Enter the documented method and address, such as `https://api.example.com/v1/products`.
3. Add only the headers and parameters required by the provider. See [Request parameters](./request-parameters/request-parameters-overview.md).
4. Add the appropriate [trigger](./triggers/triggers-overview.md), or leave the request available for another APIEase request to call.
5. Save and run the request with non-production data before enabling a workflow that writes real data.

The provider's API documentation remains the authority for endpoint paths, payload shapes, permissions, pagination, and rate limits. A provider-branded example for a different account, API version, or operation may not match your contract.

## Build multi-step integrations from small requests

Keep authentication, data retrieval, transformation, and destination updates separate when they are separate API operations. This makes each step easier to test and reuse.

Use:

- [chained requests](./request-parameters/chained-requests.md) when one request should pass response values directly to the next request
- [Liquid requests](./request-types/liquid-requests.md) when you need loops, conditions, data shaping, or several named request calls
- [cron schedules](./triggers/cron-schedule.md) for fixed-time polling
- [Shopify webhooks](./triggers/webhooks/webhooks-overview.md) to react to supported Shopify events

For data movement patterns and planning questions, see [Synchronize data with an external system](./synchronize-external-data.md).

## Know which system owns each requirement

APIEase provides saved requests, execution options, parameter handling, and composition tools. The external provider controls whether its API is available, which credentials and permissions it grants, what its data means, and how callers must handle limits or errors. Shopify likewise controls its Admin API contracts and permissions.

If any required provider detail is missing, pause configuration and request that information from the provider. Guessing an endpoint, credential type, identifier, or write payload can produce failed calls or unintended data changes.

For concise answers about capabilities, provider requirements, resource management, and synchronization, see the [Getting started and integrations FAQ](../general/faq/getting-started-and-integrations.md).
