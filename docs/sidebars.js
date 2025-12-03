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
              type: 'link',
              label: 'Proxy endpoint trigger',
              href: 'https://apiease.tawk.help/article/proxy-endpoint-trigger',
            },
          ],
        },
        {
          type: 'category',
          label: 'Shopify Flow integration',
          items: [
            {
              type: 'link',
              label: 'APIEase + Shopify Flow integration architecture',
              href: 'https://apiease.tawk.help/article/apiease-shopify-flow-integration-architecture',
            },
            {
              type: 'link',
              label: 'How to add a Flow request in APIEase',
              href: 'https://apiease.tawk.help/article/how-to-add-a-flow-request-in-apiease',
            },
            {
              type: 'link',
              label: 'Minimal Flow integration with APIEase',
              href: 'https://apiease.tawk.help/article/minimal-flow-integration-with-apiease',
            },
            {
              type: 'link',
              label: 'APIEase integrated with Shopify Flow - Cat Image Inventory',
              href: 'https://apiease.tawk.help/article/apiease-integrated-with-shopify-flow-cat-image-inventory',
            },
          ],
        },
        {
          type: 'category',
          label: 'Examples',
          items: [
            {
              type: 'link',
              label: 'Facebook Graph API example',
              href: 'https://apiease.tawk.help/article/facebook-graph-api-example',
            },
            {
              type: 'link',
              label: 'HTTP dump example',
              href: 'https://apiease.tawk.help/article/http-dump-example',
            },
            {
              type: 'link',
              label: 'Cat API example',
              href: 'https://apiease.tawk.help/article/cat-api-example',
            },
            {
              type: 'link',
              label: 'Agify API example',
              href: 'https://apiease.tawk.help/article/agify-api-example',
            },
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
