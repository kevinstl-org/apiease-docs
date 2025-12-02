---
title: In-app query parameters
description: Manage query string values within APIEase.
---
# In-app query parameters

You can add query parameters to any APIEase request directly from the request editor. Query parameters are used to pass key-value pairs in the URL, usually for filtering, identifying, or paginating data in API requests.

**How to Add a Query Parameter**While editing your request, click the plus icon in the Parameter column.Select the Query radio button.Enter the name of your query parameter in the Name field.Enter the parameter value in the Value field.Click the Save button at the top of the request editor.**Query Parameter Example**:To add status=active to a request URL, enter the following:

**Name**: status**Value**: activeThis will result in a URL like: https://ex.com/items?status=active  If your endpoint already has other query parameters, APIEase will append your values accordingly.

You can also use [embedded parameters](https://apiease.tawk.help/article/dynamic-embedded-parameters-from-storefront) to dynamically set parameters from your storefront.

Source article: [In-app query parameters](https://apiease.tawk.help/article/in-app-query-parameters).
