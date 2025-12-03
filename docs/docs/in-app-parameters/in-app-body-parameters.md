---
title: In-app body parameters
description: Define request bodies and templates stored in APIEase.
---
# In-app body parameters

You can add body content to any APIEase request directly from the request editor. Body parameters are used to send structured data to the receiving system, usually when making a POST, PUT, or PATCH request.

Body parameters are always entered as a complete JSON object. The name of the parameter is automatically set to body, so you only need to provide the value.

**How to Add a Body Parameter**

While editing your request:
1. Click the plus icon in the Parameter column.
2. Select the **Body** radio button.
3. Enter your JSON body in the **Value** field.
4. Click **Save** at the top of the request editor.

**Example Body Parameter**:

- **Name**: body (The body parameter name is systematically set to "body" and cannot be changed.)
- **Value**:

```json
{"arg1":"value1","arg2":"value2","arg3":"value3"}
```

You can also use [embedded parameters](https://apiease.tawk.help/article/dynamic-embedded-parameters-from-storefront) to dynamically set parameters from your storefront.

![In-app body parameter entry](https://tawk.link/65552a3acec6a91282103248/kb/attachments/i0yOK5rG4k.png)

Source article: [In-app body parameters](https://apiease.tawk.help/article/in-app-body-parameters).
