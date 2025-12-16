---
title: In-app path parameters
description: Configure path parameters stored inside APIEase.
---
# In-app path parameters

You can add path parameters to any APIEase request directly from the request editor. Path parameters are used to replace [path variables](../path-variables.md) within your address.

**How to Add a Path Parameter**

While editing your request:
1. Click the plus button in the Parameter column of the request.
2. Select the **Path** radio button.
3. Enter the path parameter name in the **Name** field.
4. Enter the path parameter value in the **Value** field.
5. Click **Save** at the top.

**Example Path Parameter:**
- **Name**: `pathVariable1`
- **Value**: `inAppValue1`

If your API endpoint is structured as `https://ex.com/products/{pathVariable1}` the system will render the address as `https://ex.com/products/inAppValue1` at runtime.

You can also use [embedded parameters](../dynamic-embedded-parameters/dynamic-embedded-parameters-overview.md) to dynamically set parameters from your storefront.

![In-app path parameter configuration](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/path-variable-edit.png?v=1744137415)
