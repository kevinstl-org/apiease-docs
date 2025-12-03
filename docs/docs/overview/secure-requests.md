---
title: Protecting credentials and secure requests
description: Guidance on keeping secrets safe and avoiding credential leaks in APIEase.
---
# Protecting credentials and secure requests

When working with APIs or third-party services, you often need to include confidential information such as API keys, secret tokens, or login credentials.  

This applies to both HTTP requests and Shopify Flow requests.

If these parameters are exposed in the wrong place, especially in your storefront code, they can be easily discovered and misused.

**The Risk of Storefront Exposure**

Many Shopify stores customize their storefront using Custom Liquid or theme scripts. While this can be a powerful way to enhance functionality, it comes with a major security risk.

Anything you place in your storefront, including embedded Liquid code, JavaScript, or JSON, is publicly visible. Anyone who visits your site can use their browser's developer tools to inspect the page and see the content of those scripts.

That includes any confidential parameters you may have included in your API calls.

Once exposed, credentials can be used by attackers to access your external services, steal data, or abuse your systems. This can result in security breaches, unauthorized charges, or loss of customer trust.

**How APIEase Keeps Your Credentials Safe**

APIEase prevents this kind of exposure by keeping all confidential parameters on the server side.

When you define a request in APIEase, whether it is an HTTP call to an external API or a Shopify Flow request that passes through APIEase, any sensitive values are stored securely and are never sent to the storefront.

Even if a request is triggered by a customer action in your storefront, the actual execution happens on the server. The storefront never sees the confidential parameters.

This means your API keys and other secrets stay protected at all times.

**Confident Integration Without Compromise**

Whether you are building automations, connecting with external services, or creating dynamic customer experiences, APIEase allows you to do so without sacrificing security.

While some implementations may still benefit from developer support, APIEase removes the need to build and host a custom Shopify app just to make secure and authenticated API calls.

You gain flexibility, control, and peace of mind, all while keeping your store's sensitive data out of public view.

