---
title: Export to Postman
description: Download your APIEase requests as a Postman collection for sharing or local testing.
---
# Export to Postman

Export your APIEase requests to Postman so teammates can collaborate outside Shopify or run calls locally.

## Download your collection
1. In the APIEase admin, go to **Requests**.
2. Click the **Export To Postman** icon button (hover to see the "Export To Postman" tooltip) to the right of the request actions.
3. APIEase will download `<shop>-requests.postman_collection.json` to your browser’s downloads folder; import that file into Postman.

## What the export includes
- Only active HTTP requests are included; they stay organized using the same folder paths you set in APIEase.
- URLs include your configured host, path, and query string with APIEase variables converted to Postman variables.
- Request bodies are exported as raw payloads with Postman variables (`{{variable}}`) where APIEase variables existed.
- Authorization headers become Postman auth blocks with variable tokens so secrets are not exposed.

## Tips for using the collection
- Create a Postman environment to fill in hostnames, tokens, and any variables before sending requests.
- Replace the variable auth tokens (for example `{{POSTMAN_BEARER_TOKEN}}`) with valid credentials in your environment.
- Re-export the collection after you add or edit requests in APIEase to keep Postman in sync.
