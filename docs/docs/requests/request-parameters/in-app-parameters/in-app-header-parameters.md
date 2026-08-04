---
title: In-app header parameters
description: Define headers stored and managed inside APIEase.
---
# In-app header parameters

You can add custom headers to any APIEase request directly from the request editor. Headers are used to provide additional context or authorization when making API calls. Common examples include Authorization, Content-Type, and custom authentication tokens.

**How to Add a Header Parameter**
While editing your request:
1. Click the plus icon in the Parameter column.
2. Select the **Header** radio button.
3. Enter the header name in the **Name** field.
4. Enter the header value in the **Value** field.
5. Turn on **Sensitive** if the header contains an API key, access token, password, or other confidential value.
6. Click **Save** at the top of the request editor.

**Example Header Parameter:**
- **Name**: `Content-Type`
- **Value**: `application/json`

You can also use [embedded parameters](../dynamic-embedded-parameters/dynamic-embedded-parameters-overview.md) to dynamically set parameters from your storefront.

Do not use an embedded parameter for a credential. Store the credential as a sensitive in-app parameter so storefront code never supplies it.

![In-app header parameter example](https://tawk.link/65552a3acec6a91282103248/kb/attachments/dbGjN5Waw6.png)
