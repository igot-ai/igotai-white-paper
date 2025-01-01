import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9f2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8f6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd05'),
            routes: [
              {
                path: '/docs/Architecture/4.1-edge-computing-protocol',
                component: ComponentCreator('/docs/Architecture/4.1-edge-computing-protocol', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Architecture/4.2-agent-protocol',
                component: ComponentCreator('/docs/Architecture/4.2-agent-protocol', 'c9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/development-roadmap',
                component: ComponentCreator('/docs/development-roadmap', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ecosystem/5.1-developer-community',
                component: ComponentCreator('/docs/Ecosystem/5.1-developer-community', 'acc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ecosystem/5.2-partnerships',
                component: ComponentCreator('/docs/Ecosystem/5.2-partnerships', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/executive-summary',
                component: ComponentCreator('/docs/executive-summary', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/incentive-structure/6.1-resource-providers',
                component: ComponentCreator('/docs/incentive-structure/6.1-resource-providers', '24d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/incentive-structure/6.2-agent-creators',
                component: ComponentCreator('/docs/incentive-structure/6.2-agent-creators', '88a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/incentive-structure/6.3-users',
                component: ComponentCreator('/docs/incentive-structure/6.3-users', '2ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/investment',
                component: ComponentCreator('/docs/investment', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/problem-statement',
                component: ComponentCreator('/docs/problem-statement', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Solution/3.1-edge-computing-network',
                component: ComponentCreator('/docs/Solution/3.1-edge-computing-network', 'a1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Solution/3.2-agent-builder-platform',
                component: ComponentCreator('/docs/Solution/3.2-agent-builder-platform', '754'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Solution/3.3-subscription-runtime',
                component: ComponentCreator('/docs/Solution/3.3-subscription-runtime', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Solution/3.4-marketplace',
                component: ComponentCreator('/docs/Solution/3.4-marketplace', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/team',
                component: ComponentCreator('/docs/team', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tokenonomics/7.1-network-operations',
                component: ComponentCreator('/docs/Tokenonomics/7.1-network-operations', '364'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tokenonomics/7.2-governance',
                component: ComponentCreator('/docs/Tokenonomics/7.2-governance', '41b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tokenonomics/7.3-incentives',
                component: ComponentCreator('/docs/Tokenonomics/7.3-incentives', '28b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
