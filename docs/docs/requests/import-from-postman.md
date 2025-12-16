---
title: Import from Postman
description: Upload a Postman collection and turn its requests into APIEase requests.
---
# Import from Postman

Bring your existing Postman requests into APIEase so you do not have to recreate paths, headers, and bodies by hand.

## Export your Postman collection
1. In Postman, open the collection you want to move into APIEase.
2. Click the kebab menu (⋯) next to the collection name and choose **Export**.
3. Select **Collection v2.1 (recommended)** and save the JSON file (keep it under 1 MB so the upload limit is not exceeded).

## Upload the collection in APIEase
1. In the APIEase admin, go to **Requests**.
2. Click the **Import From Postman** icon button next to **Add Request**, and choose the exported JSON file.
3. APIEase will preview the collection and add each request to the table with the proper method, URL path, headers, query params, and body.
4. Review the imported rows, replace variable auth values (for example `{{POSTMAN_BEARER_TOKEN}}`), and click **Save** to persist them.

## How requests are mapped
- Postman variables such as `{{api_base}}` become APIEase variables (`{api_base}`) so you can wire them to [in-app parameters](./request-parameters/in-app-parameters/in-app-parameters-overview.md), [dynamic embedded parameters](./request-parameters/dynamic-embedded-parameters/dynamic-embedded-parameters-overview.md), or payloads from [chained requests](./request-parameters/chained-requests.md) and [webhook triggers](./triggers/webhooks/mapping-webhook-parameters.md).
- Path segments like `:id` and Postman URL variables become path parameters.
- Bearer, Basic, and API key auth blocks become Authorization headers with variable values so secrets are not imported; update them after import with your real credentials or secrets.
