---
sidebar_position: 1
---

# APIEase documentation

Welcome to the APIEase docs. APIEase helps Shopify teams orchestrate secure API calls, connect workflows across systems, and centralize credentials without building and hosting their own middleware.

Use this site to document how your team installs, configures, and extends APIEase. The sections below outline what belongs where so you can drop in the real content as it’s written.

## What you can document here

- **Getting started**: onboarding steps for merchants and developers, including prerequisites, environment variables, and how to log into the admin.
- **Requests and automation**: how to model API calls, map parameters, chain requests, and trigger runs from flows, webhooks, or schedules.
- **Shopify Flow integration**: how to use the APIEase Flow trigger/action pair, pass parameters, and return data back to Flow.
- **Remote execution**: how to call APIEase requests from outside Shopify via secure API keys and request IDs.

## Recommended structure

- Start at [Getting started](./getting-started.md) for prerequisites and install notes.
- Use [Requests & automation](./requests.md) to describe how requests, parameters, and triggers work in your app.
- Capture Flow-specific guidance in [Shopify Flow](./shopify-flow.md).
- Add more sections as you build out the product (billing, observability, troubleshooting, release notes, and so on).

## Contributing to these docs

Docs live in the `docs/` workspace in this repository. Use the edit links in the header or run the site locally to preview changes. Keep examples Shopify-specific and avoid leaking secrets—API keys and store domains should use placeholders unless explicitly public.
