---
title: Credentials, authentication, and security FAQ
description: Answers about APIEase API keys, Shopify access tokens, external credentials, permissions, sensitive values, and authentication failures.
---

# Credentials, authentication, and security FAQ

## What is the difference between an APIEase API key, a Shopify access token, and an external API credential?

They authenticate different calls and are not interchangeable:

- An **APIEase API key** authenticates an external system calling APIEase. Create, reveal, copy, and delete these keys from **Settings**. See [APIEase API Key](../settings/apiease-api-key.md).
- A **Shopify access token** authenticates a call to the Shopify Admin API. APIEase normally uses the shop access token from the Shopify installation automatically. See [Shopify API calls and access tokens](../shopify-api/shopify-api-calls-and-access-tokens.md).
- An **external-provider credential** authenticates an outbound call from APIEase to another service. The provider supplies the API key, Bearer token, OAuth credential, username, or password and defines how it must be sent. See [Authentication example](../apiease-details/authentication-example.md).

## Can APIEase find, reveal, or generate a credential for another service?

No. APIEase cannot retrieve, reveal, or generate a private API key, token, password, client secret, or other credential owned by Shopify or another provider. Obtain it from that provider's dashboard, authentication endpoint, or support team.

The shop access token installed through APIEase is a separate case: APIEase stores and uses it for eligible Shopify Admin API requests, but you do not retrieve it from APIEase. If you need an explicit Shopify token, create one through Shopify and follow [Custom access token](../shopify-api/custom-access-token.md).

## Where should I put an external API key, Bearer token, or other provider credential?

Save it as a request parameter in the location required by the provider, and mark the parameter **Sensitive**. Common formats include an `Authorization: Bearer YOUR_ACCESS_TOKEN` header or a provider-specific API-key header. Do not put credentials in storefront JavaScript, theme Liquid, widget code, or dynamic embedded parameters.

The provider's documentation is the authority for the header name, prefix, token endpoint, and required permissions. See [In-app header parameters](../../requests/request-parameters/in-app-parameters/in-app-header-parameters.md) and [In-app parameters overview](../../requests/request-parameters/in-app-parameters/in-app-parameters-overview.md).

## Can I recover a sensitive value after I save it?

It depends on the resource:

- A sensitive **request parameter** is masked after saving, omitted from normal read interfaces, and decrypted only when APIEase executes the request. APIEase does not reveal the saved value back to you; replace it if you no longer have the original.
- A sensitive **Variable** is masked in the APIEase admin, but its value remains available to authorized runtime and programmatic workflows. See [Variables overview](../../variables/variables-overview.md).
- An **APIEase API key** remains revealable and copyable from **Settings**. See [APIEase API Key](../settings/apiease-api-key.md).

Marking a value sensitive does not remove secrets or private data from an external API's response. A publicly callable request must not return credentials or other private response data.

## How do I authenticate with an external API?

Follow the external provider's current authentication contract. For a static credential, add it as a sensitive header, body, query, or path parameter exactly where the provider requires it. For a short-lived token, create one request that obtains the token and chain it to the request that uses the response value.

APIEase does not perform an unspecified OAuth flow automatically. You need the provider's token URL, credential requirements, scopes, and request format. See the [Authentication example](../apiease-details/authentication-example.md) and [Chained requests](../../requests/request-parameters/chained-requests.md).

## Why does an authenticated request return 401 or 403?

A `401 Unauthorized` response usually means the receiving API did not accept the credential. Check that the credential is present, current, intended for that environment or account, and formatted exactly as the provider requires.

A `403 Forbidden` response usually means the credential was recognized but is not allowed to perform the operation. Check scopes, roles, resource access, account restrictions, and whether the credential belongs to the correct shop or provider account. Providers can use these status codes differently, so inspect the response body and their documentation before changing the request.

For Shopify calls, also confirm the request qualifies for [automatic token usage](../shopify-api/automatic-vs-overridden-shopify-access-tokens.md) and review [shop access token permissions](../shopify-api/manage-shop-access-token-permissions.md).

## Do I need to add a Shopify access token to every Shopify Admin API request?

Usually not. APIEase automatically injects the installed shop access token when an HTTP request targets the current shop's domain, its path starts with `/admin/api`, and the request does not already contain an `X-Shopify-Access-Token` header.

The [Shopify Admin GraphQL address preset](../shopify-api/shopify-admin-graphql-address-preset.md) is the simplest way to use the correct address. See [Automatic vs overridden Shopify access tokens](../shopify-api/automatic-vs-overridden-shopify-access-tokens.md) for all prerequisites.

## How do I override the automatic Shopify access token?

Add an `X-Shopify-Access-Token` header containing `YOUR_ACCESS_TOKEN`. APIEase treats any case-insensitive match for that header name as an explicit override and does not inject the installed shop access token.

Use an override only when you intentionally need a different Shopify token. You are responsible for obtaining, storing, rotating, and granting the required scopes to that token. See [Custom access token](../shopify-api/custom-access-token.md).

## How do I change permissions for the automatic Shopify token?

Open **Settings**, then **Permissions**, select the additional Shopify Admin API scopes, save, and complete Shopify's approval flow. Changing scopes can require reauthorization and does not change the logic of existing requests.

Use the permissions page only for APIEase's installed shop access token. A custom Shopify token or external-provider credential must be managed where it was issued. See [Manage shop access token permissions](../shopify-api/manage-shop-access-token-permissions.md).

## How should I rotate or revoke credentials?

Rotate each credential at its issuing source, update every request or caller that uses it, test the replacement, and then revoke the old credential. For APIEase API keys, create and save a replacement in **Settings**, update external callers, verify them, then delete the old key and save the change. For Shopify or external-provider credentials, use that provider's rotation and revocation workflow.

APIEase cannot rotate a provider-owned credential on your behalf.
