---
title: In-app parameters overview
description: Store and manage request parameters directly inside APIEase.
---
# In-app parameters overview

In-app parameters are values you configure in the APIEase admin to be injected into outgoing requests. They live on the server, so secrets and default values stay hidden from storefront visitors while still being applied every time a request runs.

**Why use in-app parameters**
- Keep secrets safe: tokens, API keys, and internal headers stay server-side.
- Ensure consistency: apply the same defaults (such as content type or store identifier) across every request.
- Reduce duplication: define values once instead of repeating them in multiple requests or client code.

**Parameter types**
- [Headers](./in-app-header-parameters.md) for auth and custom metadata.
- [Body](./in-app-body-parameters.md) for payload fields you manage centrally.
- [Path](./in-app-path-parameters.md) for URL segments that should not be exposed on the storefront.
- [Query](./in-app-query-parameters.md) for reusable query strings.
- [System](./in-app-system-parameters.md) auto-populated by APIEase for common Shopify context.
- [Flow](./in-app-flow-parameters.md) to map Shopify Flow tokens into your requests.

**How to add**
1. Open a request in the APIEase admin and click the plus icon in the Parameter column.
2. Choose the parameter location (Header, Body, Path, or Query), then enter the name and value.
3. Save the request. APIEase will inject these values whenever the request is executed.

**When to combine with dynamic parameters**
Use in-app parameters for anything sensitive or static. If you need runtime data from the storefront (such as cart info, page context, or user input), pair them with [dynamic embedded parameters](../dynamic-embedded-parameters/dynamic-embedded-parameters-overview.md). Keep credentials and other confidential values in-app and server-side.
