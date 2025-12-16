---
title: In-app flow parameters
description: Flow-specific parameters stored and referenced inside APIEase.
---
# In-app flow parameters

Flow parameters allow you to define the input data that will be passed to a Shopify Flow workflow when the request is executed. These parameters must match the input fields defined in your Flow template.

Flow parameters are configured directly in the request editor and entered as valid JSON.

**How to Add a Flow Parameter**

While editing your Flow request:
1. Click the plus icon in the Parameter column.
2. Select the **Flow** radio button.
3. Enter the **Name** you will use to access the flow parameter within your workflow.
4. In the **Value** field, enter your Flow input in JSON format.
5. Click **Save** at the top of the request editor.

**Flow Parameter Example:**

If your Flow expects a variable named `customer_data` that contains both an email and a customer tag, you could enter:
- **Name**: customer_data
- **Value**:

```json
{
  "email": "user@example.com",
  "tag": "VIP"
}
```

You can also use [embedded parameters](../dynamic-embedded-parameters/dynamic-embedded-parameters-overview.md) to dynamically set parameters from your storefront.

![In-app flow parameter fields](https://cdn.shopify.com/s/files/1/0733/1820/3680/files/in-app-flow-parameters.png?v=1744838680)
