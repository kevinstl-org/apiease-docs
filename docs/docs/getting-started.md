---
sidebar_position: 2
---

# Getting started

Use this page to capture how teams install and configure APIEase for a Shopify store. The checklist below is a template you can refine as onboarding steps solidify.

## Prerequisites

- A Shopify store where the app is installed (or a development store for testing).
- Access to the Shopify admin with permissions to install apps and manage API credentials.
- Any upstream API keys you plan to store in APIEase (use placeholders in the docs, not real keys).

## Install and sign in

1. Install **APIEase Admin** from the Shopify App Store: `https://apps.shopify.com/apiease-admin`.
2. After Shopify redirects back to your store, open the APIEase admin (`/apps/apiease`) to finish setup.
3. Add a support contact for readers if they hit installation issues (for example, `support@apiease.com`).

## Configure the app

- Describe how to add the first request and wire its credentials (HTTP, Flow, or Liquid).
- Document how to generate an API key for remote execution (the UI exposes `x-apiease-api-key` in headers).
- Outline where merchants can see call history, logs, or retry options.

## Run APIEase locally (for contributors)

If you need to run the app while writing docs, use the existing project scripts from the repo root:

```bash
npm install
npm run dev
```

That command starts the Remix app with the Shopify CLI tunnel. Press `p` in the terminal to open the embedded admin. Capture any extra steps (database setup, environment variables, tunnels) your teammates should know before contributing.
