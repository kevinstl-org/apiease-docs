---
title: Requests Overview
description: Explain what requests are and how they behave inside APIEase.
---
# Requests Overview

Everything that you can accomplish with APIEase starts with a request.

A request is a configuration that defines how APIEase should securely call an external API or trigger a Shopify Flow workflow. Each request contains the destination, any necessary parameters, and optional logic to determine when and how it should run.

Requests can be used for a wide variety of purposes, including:

- Calling third-party APIs from your Shopify storefront
- Receiving webhook events and responding with external actions
- Scheduling recurring data syncs with external systems
- Triggering Shopify Flow automations
- Executing multiple requests in sequence based on API responses

There are three types of requests:

- **HTTP requests**: Standard API calls to external services. You define the endpoint, method, headers, and body content.
- **Liquid requests**: Run a Liquid template that can call any APIEase request and shape the output—useful for logic or combining multiple requests without a custom app.
- **Shopify Flow requests**: Initiate or continue a Shopify Flow automation and can include data pulled from other API calls or the storefront.

Every request you create can include embedded parameters, dynamic storefront values, or confidential credentials stored securely on the server.

Once created, each request can be triggered in several ways. You can run it manually from the admin, trigger it automatically using a webhook, start it from the storefront using Shopify's app proxy, or schedule it to run on a repeating interval using the built in cron system.

Requests are the core building blocks of APIEase. They give you a simple and secure way to create integrations, automate tasks, and connect your storefront with external services without the need to host your own app.
