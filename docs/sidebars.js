// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {type: 'doc', id: 'intro', label: 'Overview'},
    {type: 'doc', id: 'getting-started', label: 'Getting started'},
    {
      type: 'category',
      label: 'Overview articles',
      items: [
        'overview/apiease-summary',
        'overview/how-it-works',
        'overview/secure-requests',
      ],
    },
    {
      type: 'category',
      label: 'Requests',
      items: [
        'requests/request-description',
        'requests/how-to-add-requests',
        'requests/calling-requests-remotely',
        'requests/customer-authenticated-requests',
      ],
    },
    {
      type: 'category',
      label: 'Request types',
      items: [
        'request-types/http-api-request-configuration',
        'request-types/flow-request-configuration',
        'request-types/liquid-requests',
      ],
    },
    {
      type: 'category',
      label: 'Request parameters',
      items: [
        'request-parameters/in-app-vs-dynamic',
        'request-parameters/path-variables',
        'request-parameters/chained-requests',
      ],
    },
    {
      type: 'category',
      label: 'In-app parameters',
      items: [
        'in-app-parameters/in-app-header-parameters',
        'in-app-parameters/in-app-query-parameters',
        'in-app-parameters/in-app-body-parameters',
        'in-app-parameters/in-app-path-parameters',
        'in-app-parameters/in-app-system-parameters',
        'in-app-parameters/in-app-flow-parameters',
      ],
    },
    {
      type: 'category',
      label: 'Dynamic embedded parameters',
      items: [
        'dynamic-embedded-parameters/overview',
        'dynamic-embedded-parameters/path-parameters',
        'dynamic-embedded-parameters/query-parameters',
        'dynamic-embedded-parameters/headers',
        'dynamic-embedded-parameters/body',
      ],
    },
    {
      type: 'category',
      label: 'Shopify API',
      items: [
        'shopify-api/shopify-access-token',
        'shopify-api/shopify-graphql-product-count',
        'shopify-api/shopify-rest-product-count',
      ],
    },
    {
      type: 'category',
      label: 'APIEase details',
      items: [
        'apiease-details/ip-address-whitelisting',
        'apiease-details/authentication-example',
        'apiease-details/importing-third-party-products',
      ],
    },
    {type: 'doc', id: 'requests', label: 'Requests & automation'},
    {type: 'doc', id: 'shopify-flow', label: 'Shopify Flow'},
  ],
};

export default sidebars;
