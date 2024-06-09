require('dotenv').config();

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Armada Alliance Docs",
  tagline: "ARM powered Cardano Stake Pool Guides",
  url: "https://armada-alliance.com/", // URL for your website. This can also be considered the top-level hostname
  baseUrl: "/docs/", // Change this to match your projectName if deploying to Github Pages or / if deploying to a top level domain
  onBrokenLinks: "throw", // Change this to 'throw' for production CI pipelines
  onBrokenMarkdownLinks: "throw",
  favicon: "img/armada-alliance-logo.png",
  organizationName: "armada-alliance", // Change this to your GitHub org/user name.
  projectName: "docs", // Change this to your repo name.
  i18n: {
    // We are using crowdin to translate the site https://docusaurus.io/docs/i18n/crowdin
    defaultLocale: "en",
    locales: ["en"], // Add locales, run locales and translate https://docusaurus.io/docs/i18n/tutorial
  },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    image: "https://armada-alliance.com/img/armada-alliance-logo.png",
    
    algolia: {
      // The application ID provided by Algolia
      appId: process.env.ALGOLIA_APP_ID,

      // Public API key: it is safe to commit it
      apiKey: process.env.ALGOLIA_API_KEY,

      indexName: 'armada-alliance',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    navbar: {
      title: "Armada Alliance Docs",
      logo: {
        alt: "Armada Alliance ship logo",
        src: "img/armada-alliance-logo.png",

      },
      items: [
        {
          type: "localeDropdown", // Locale Dropdown
          position: "right",
        },
        {
          href: "https://armada-alliance.com",
          label: "Armada Website",
          // className: "center-nav-item",
          position: "right",
          // target: "_blank",
          // className: "header-website-link",
        },
        {
          href: "https://github.com/armada-alliance/",
          // label: "GitHub",
          position: "right",
          className: "header-github-link",
        },
        // {
        //   href: "https://shop.armada-alliance.com",
        //   label: "Armada Store",
        //   position: "right",
        // },
      ],
    },
  },
  customFields:{
    mendableAnonKey: process.env.MENDABLE_KEY,
  },
  plugins: [
    [
        'docusaurus-node-polyfills', { excludeAliases: ['console']}
    ]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/armada-alliance/docs/edit/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-20GWM641V6',
          anonymizeIP: true,
        }
      },
    ],
  ],
};
