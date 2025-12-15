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
        'overview/apiease',
        'overview/what-it-does',
        'overview/how-it-works',
        'overview/why-you-need-it',
      ],
    },
    {
      type: 'category',
      label: 'Requests',
      items: [
        'requests/requests-overview',
        'requests/how-to-add-requests',
        'requests/import-from-postman',
        {
          type: 'category',
          label: 'Request types',
          items: [
            'request-types/request-types-overview',
            {
              type: 'doc',
              id: 'request-types/http-requests',
              label: 'HTTP Requests',
            },
            {
              type: 'doc',
              id: 'request-types/flow-requests',
              label: 'Flow Requests',
            },
            {
              type: 'doc',
              id: 'request-types/liquid-requests',
              label: 'Liquid Requests',
            },
          ],
        },
        {
          type: 'category',
          label: 'Request parameters',
          items: [
            'request-parameters/request-parameters-overview',
            'request-parameters/in-app-vs-dynamic',
            {
              type: 'category',
              label: 'In-app parameters',
              items: [
                'in-app-parameters/in-app-parameters-overview',
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
            'request-parameters/path-variables',
          ],
        },
        {
          type: 'category',
          label: 'Triggers',
          items: [
            {
              type: 'doc',
              id: 'requests/triggers-overview',
              label: 'Triggers Overview',
            },
            {
              type: 'category',
              label: 'Webhooks',
              items: [
                'requests/webhooks-overview',
                'requests/trigger-requests-from-a-webhook',
                'requests/mapping-webhook-parameters',
              ],
            },
            {
              type: 'doc',
              id: 'requests/cron-schedule',
              label: 'Cron Schedule',
            },
            {
              type: 'doc',
              id: 'requests/proxy-endpoint',
              label: 'Proxy Endpoint',
            },
            {
              type: 'doc',
              id: 'requests/manual-calls',
              label: 'Manual Calls',
            },
            {
              type: 'doc',
              id: 'requests/storefont-calls',
              label: 'Storefont Calls',
            },
            {
              type: 'doc',
              id: 'requests/calling-requests-remotely',
              label: 'Remote HTTP Client',
            },
            {
              type: 'doc',
              id: 'request-parameters/chained-requests',
              label: 'Chained Request',
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
        'requests/customer-authenticated-requests',
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
