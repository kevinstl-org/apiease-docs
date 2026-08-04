---
title: Create and manage requests
description: Create, find, edit, duplicate, and delete requests in the APIEase admin.
---
# Create and manage requests

Use the **Requests** page in the APIEase admin to manage requests interactively. If request definitions need to live in source control or be managed by automation, use [`apiease-cli`](../developers/apiease-cli.md) or the [APIEase public API](../developers/apiease-public-api.md) instead.

## Create a request

1. Open **Requests** in Shopify Admin (APIEase Requests submenu on the lower left).
   ![APIEase Requests submenu](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/requests-sub-menu.png?v=1744752589)
2. Click the **Add Request** plus button in the upper-left corner.
   ![Add request button](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/add-http-api-requests.png?v=1744748372)
3. Configure the request name, handle, request type, parameters, and triggers.
4. Click **Save**. The request is ready to run based on the triggers you selected.

Choose a descriptive name for people and a lowercase, hyphenated handle for integrations. Keep the handle stable after another request, storefront code, `apiease-cli`, or a public API integration starts referencing it. See [Resource handles](../developers/resource-handles.md).

## Find and edit a request

The **Requests** page lists each request by name and shows its handle when the handle differs from the name. Find the request in that list, then select its name or the **Edit** action. Update the configuration and click **Save**.

Before changing a handle, check every place that may call the request, including Liquid requests, chained requests, storefront code, widgets, CLI scripts, and public API integrations.

## Duplicate a request

Use the **Duplicate** action when a new request should start with an existing request's configuration.

1. Find the source request on the **Requests** page and select **Duplicate**.
2. Review the copied configuration in the new-request editor.
3. Confirm the new name and assign a unique handle.
4. Update any provider-specific address, parameters, triggers, or write behavior, and enter any sensitive values required by the new request.
5. Click **Save** only after the copy is safe to run as a separate request.

Duplicating opens a new draft; it does not change the source request. Do not assume that a saved sensitive value was copied into the draft. Sample requests can also be duplicated into editable drafts.

## Delete a request

1. Find the request and select **Delete**.
2. Confirm the request in the deletion dialog. The row is marked **Will be deleted**.
3. Click **Save** to apply the staged deletion, or **Discard** to cancel it.

Before deleting, remove or update callers that use the request handle. Deleting the request does not automatically repair Liquid calls, chained requests, storefront code, widgets, CLI scripts, or other integrations that reference it.

## Admin, CLI, and public API workflows

These management surfaces serve different workflows:

| Surface | Best for | Resources |
| --- | --- | --- |
| APIEase admin | Interactive creation and editing in Shopify Admin | Use the resource's page, such as **Requests**, **Widgets**, **Variables**, or **Functions**. |
| `apiease-cli` | Version-controlled definitions and repeatable environment setup | Requests, widgets, variables, and functions stored as JSON files. |
| APIEase public API | Direct resource automation from an external system | Request, widget, variable, and function CRUD routes. |

Do not copy server-generated IDs into repository files. CLI and public API workflows use a resource's stable handle; see [Resource handles](../developers/resource-handles.md) for the identity rules.
