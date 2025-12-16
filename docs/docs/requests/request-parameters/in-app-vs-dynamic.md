---
title: In-app parameters vs dynamic embedded parameters
description: Explain when to use in-app parameters versus dynamic embedded parameters from storefronts or Flows.
---
# In-app parameters vs dynamic embedded parameters

Parameters that do not change, static parameters, should be set in the app. A classic example of this would be setting the header parameter "Content-Type" to "application/json".

Parameters that might change per call have to be set as dynamic embedded parameters. An example of this would be a request about a particular product that the customer is viewing in the storefront. In this case you would set product id as an embedded parameter directly in the storefront page that needs to request information about a particular product.

