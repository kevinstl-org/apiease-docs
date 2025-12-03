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
    {
      type: 'category',
      label: 'Overview',
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
        {
          type: 'category',
          label: 'Requests overview',
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
              label: 'Triggers',
              items: [
                {
              type: 'category',
              label: 'Webhooks',
              items: [
                'requests/trigger-requests-from-a-webhook',
                'requests/mapping-webhook-parameters',
              ],
            },
            {
              type: 'category',
              label: 'Cron schedule',
              items: ['requests/trigger-requests-via-cron-schedule'],
            },
            {
              type: 'doc',
              id: 'requests/proxy-endpoint-trigger',
            },
          ],
        },
        {
          type: 'category',
          label: 'Shopify Flow integration',
          items: [
            'requests/shopify-flow-integration/architecture',
            'requests/shopify-flow-integration/add-flow-request',
            'requests/shopify-flow-integration/minimal-flow-integration',
            'requests/shopify-flow-integration/cat-image-inventory',
          ],
        },
        {
          type: 'category',
          label: 'Examples',
          items: [
            'requests/examples/facebook-graph-api',
            'requests/examples/http-dump',
            'requests/examples/cat-api',
            'requests/examples/agify-api',
          ],
        },
        {
          type: 'category',
          label: 'Request parameters',
          items: [
            {
              type: 'category',
              label: 'Request parameters overview',
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
                'in-app-parameters/in-app-body-parameters',
                'in-app-parameters/in-app-path-parameters',
                'in-app-parameters/in-app-query-parameters',
                'in-app-parameters/in-app-system-parameters',
                'in-app-parameters/in-app-flow-parameters',
              ],
            },
            {
              type: 'category',
              label: 'Dynamic embedded parameters from storefront',
              items: [
                'dynamic-embedded-parameters/overview',
                'dynamic-embedded-parameters/path-parameters',
                'dynamic-embedded-parameters/body',
                'dynamic-embedded-parameters/headers',
                'dynamic-embedded-parameters/query-parameters',
                'dynamic-embedded-parameters/flow-parameters',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'General',
      items: [
        {
          type: 'category',
          label: 'APIEase details',
          items: [
            'apiease-details/ip-address-whitelisting',
            'apiease-details/importing-third-party-products',
            'apiease-details/authentication-example',
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
      ],
    },
  ],
};

export default sidebars;
