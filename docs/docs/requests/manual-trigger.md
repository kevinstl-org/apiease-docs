---
title: Manual calls
description: Run any APIEase request directly from the admin for testing or on-demand use.
---
# Manual calls

You can run any configured APIEase request on demand from the admin interface. This is useful for testing, debugging, or performing one-off actions without setting up a trigger.

## Run a manual call
1. Open the APIEase admin and go to **Requests**.
2. Find the request you want to run and click the **Copy and Execute** button in the **Actions** column.
3. Click the **Execute and Run** button. APIEase executes the request immediately.
4. View the response and execution details in the run output.

## Tips
- Manual runs use the same configuration as other triggers (storefront, webhook, schedule, etc.), so they are a safe way to validate request logic before exposing it externally.
- If a run fails, use the response details to adjust parameters or request configuration, then run again.
