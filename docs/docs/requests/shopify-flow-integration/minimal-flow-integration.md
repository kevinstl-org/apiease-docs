---
title: Minimal Flow integration with APIEase
description: Smallest setup to trigger Shopify Flow from APIEase and return Flow output.
---
# Minimal Flow integration with APIEase

Use this quick setup to trigger Shopify Flow from APIEase and capture Flow output.

1. Create a **Flow** request in APIEase.
2. In Shopify Flow, build a workflow that uses the **APIEase Flow Trigger**.
3. Add a **Condition** step to ensure the incoming `requestId` matches your Flow request.
4. Add the **APIEase Flow Action** and return a variable named `flowParameters`.

> Important: If Flow does not return `flowParameters`, APIEase still responds, but the Flow-produced details are omitted. APIEase waits for the Flow action runtime call to finish before sending the final response to the original requester.

Source article: [Minimal Flow Integration with APIEase](https://apiease.tawk.help/article/minimal-flow-integration-with-apiease).
