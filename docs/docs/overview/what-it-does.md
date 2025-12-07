---
title: What It Does
description: Functional overview of what APIEase executes and manages.
---
# What It Does

APIEase defines and runs three types of requests: [HTTP Requests](../request-types/http-api-request-configuration.md), [Flow Requests](../request-types/flow-request-configuration.md), and [Liquid Requests](../request-types/liquid-requests.md). Each request type is executed inside APIEase's managed environment, keeping credentials secure and ensuring logic is processed server-side.

## [HTTP Requests](../request-types/http-api-request-configuration.md)

HTTP Requests let you call external APIs using any method (GET, POST, PUT, PATCH, DELETE). You define the URL, headers, body, and parameters. APIEase executes the call on the server and returns the response to the system that triggered it.

## [Flow Requests](../request-types/flow-request-configuration.md)

Flow Requests allow Shopify Flow to trigger logic that APIEase runs. APIEase receives the Flow input, processes any parameters, executes the defined request or workflow, and returns output data that Flow can use in subsequent steps.

## [Liquid Requests](../request-types/liquid-requests.md)

Liquid Requests run custom logic written in Liquid. They let you transform data, extract fields, perform simple conditionals, or construct dynamic request bodies. The Liquid code executes within APIEase and can use inputs from any trigger source.

## [Secure Parameter Storage](./why-you-need-it.md#why-secure-parameter-handling-matters)

APIEase stores confidential values -- such as API keys, tokens, and passwords -- on the server and never exposes them to the storefront or external clients. When a request is triggered, APIEase injects these secure parameters into the request at runtime so they are used during execution but never returned or made visible outside the managed environment.
