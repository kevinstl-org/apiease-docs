---
title: APIEase API Key
description: What the APIEase API key is and when to use it.
---

# APIEase API Key

The APIEase API Key shown on the **Settings** page is strictly for authenticating remote API calls into APIEase.
It is not a Shopify access token and cannot be used to call Shopify APIs directly.

## When to use it

Use this key for Remote Calls (calling APIEase Requests remotely from an external system).

See: [Remote Calls](../../requests/triggers/calling-requests-remotely.md)

## Add an API key

1. In APIEase, open the **Settings** page.
2. Select **Add API Key**.
3. In **API Key Name**, enter a descriptive name (for example, `production`, `staging`, or `ci`).
4. Save the change.
5. Use **Show** or **Copy**, then store the generated key securely (for example, in a password manager or secret manager).

The key remains available on the **Settings** page. Use **Show** to reveal it or **Copy** to copy it. Anyone with access to this page can reveal or copy the key, so limit admin access appropriately.

## What it is not

This is different from the shop access token APIEase uses to call the Shopify Admin API:
[Shop access token](../shopify-api/shop-access-token.md)

## Security

Treat this key like a secret. Store it securely and create separate keys for separate external systems. To rotate a key, create and save a replacement, update and verify its callers, then delete the old key and save the change.

Deleting a key revokes access for callers that still use it. APIEase API keys are different from sensitive request parameters: API keys remain revealable and copyable in **Settings**, while sensitive request parameters are masked after saving and are not returned through normal read interfaces.
