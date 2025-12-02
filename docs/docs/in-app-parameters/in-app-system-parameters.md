---
title: In-app system parameters
description: Built-in system parameters available inside APIEase requests.
---
# In-app system parameters

System parameters are special values that control how a request is handled by APIEase. Unlike headers, query parameters, or body values that are sent to the destination endpoint, system parameters affect the behavior of the request itself.

These parameters are managed directly in the request editor.

**How to Add a System Parameter**While editing your request, click the plus icon in the Parameter column.Select the System radio button.Enter the name of the system parameter in the Name field.Enter the desired value in the Value field.Click the Save button at the top of the request editor.**System Parameter Example:**To automatically validate all logged in customers set "validateCustomer" to true as a System parameter.

**Name**: validateCustomer**Value**: trueWith "validateCustomer" set to true the customer must be logged into your store in order for the api call to pass validation and return a response to your storefront.

Source article: [In-app system parameters](https://apiease.tawk.help/article/in-app-system-parameters).
