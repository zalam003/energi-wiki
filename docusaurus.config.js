// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Energi Core Gen 3',
  tagline: 'Welcome to the Official Energi Documentation!',
  url: 'https://zalam003.gitlab.io',
  baseUrl: '/energi-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'Energi', // Usually your GitHub org/user name.
  projectName: 'EnergiWiki', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DE7XL5LS8W',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Energi Logo',
          src: 'img/Energi-logo-white.png',
        },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'guides/intro',
            position: 'left',
            label: 'Guides'
          },
          {
            type: 'doc',
            docId: 'faq/faq',
            position: 'left',
            label: 'FAQs'
          },
          {
            type: 'doc',
            docId: 'developers/intro',
            position: 'left',
            label: 'Developers'
          },
          {
            href: 'https://airdrop.gonnamakeit.com',
            label: 'Airdrop',
            position: 'right',
          },
          {
            href: 'https://www.gonnamakeit.com',
            label: 'Marketplace',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ABOUT',
            items: [
              {
                label: 'Welcome To Energi',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'GUIDES',
            items: [
              {
                label: 'Welcome',
                to: '/docs/guides',
              },
            ],
          },
          {
            title: 'DEVELOPERS',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/developers',
              },
                          ],
          },
          {
            title: 'LINKS',
            items: [
              {
                label: 'GMI',
                href: 'https://gonnamakeit.com',
              },
              {
                label: 'Energi Website',
                href: 'https://energi.world',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/GonnaMakeItNFTs',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/sCtgNC3/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/GonnaMakeitNFTs',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Energi Core Ltd. All rights reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
