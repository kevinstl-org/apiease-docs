---
title: In-app path parameters
description: Configure path parameters stored inside APIEase.
---
# In-app path parameters

You can add path parameters to any APIEase request directly from the request editor. Path parameters are used to replace [path variables](https://apiease.tawk.help/article/path-variables) within your address.

**How to Add a Path Parameter**

While editing your request click the plus button in the Parameter column of the request.Select the "Path" radio button.Enter the name of your path parameter in the "Name" field.Enter the value of your path parameter in the "Value" field.Click the "Save" button at the top.**Example Path Parameter:**

**Name**: pathVariable1**Value**: inAppValue1If your API endpoint is structured as https://ex.com/products/{pathVariable1} the system will render the address as  https://ex.com/products/inAppValue1  at runtime.

You can also use [embedded parameters](https://apiease.tawk.help/article/dynamic-embedded-parameters-from-storefront) to dynamically set parameters from your storefront.

Source article: [In-app path parameters](https://apiease.tawk.help/article/in-app-path-parameters).
