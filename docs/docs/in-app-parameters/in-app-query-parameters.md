---
title: In-app query parameters
description: Manage query string values within APIEase.
---
# In-app query parameters

You can add query parameters to any APIEase request directly from the request editor. Query parameters are used to pass key-value pairs in the URL, usually for filtering, identifying, or paginating data in API requests.

**How to Add a Query Parameter**While editing your request, click the plus icon in the Parameter column.Select the Query radio button.Enter the name of your query parameter in the Name field.Enter the parameter value in the Value field.Click the Save button at the top of the request editor.**Query Parameter Example**:To add status=active to a request URL, enter the following:
While editing your request:
1. Click the plus icon in the Parameter column.
2. Select the **Query** radio button.
3. Enter the query parameter name in the **Name** field.
4. Enter the parameter value in the **Value** field.
5. Click **Save** at the top of the request editor.

**Query Parameter Example**  
To add `status=active` to a request URL:
- **Name**: `status`
- **Value**: `active`
Result: `https://ex.com/items?status=active` (additional query params are appended automatically).

You can also use [embedded parameters](https://apiease.tawk.help/article/dynamic-embedded-parameters-from-storefront) to dynamically set parameters from your storefront.

![In-app query parameter configuration](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/in-app-query-parameters.png?v=1744835524)

Source article: [In-app query parameters](https://apiease.tawk.help/article/in-app-query-parameters).
