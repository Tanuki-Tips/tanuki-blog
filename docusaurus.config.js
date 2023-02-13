// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tanuki - Le Blog',
  favicon: 'img/favicon-96x96.png',

  // Set the production url of your site here
  url: 'https://tanukitips.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tanuki-Tips', // Usually your GitHub org/user name.
  projectName: 'tanuki-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/tanuki-square-logo.jpeg',
      navbar: {
        title: 'Tanuki - Le blog',
        logo: {
          alt: 'Tanuki Logo',
          src: 'img/logo_size_invert.jpg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.youtube.com/@tanukiTV',
            label: 'Tanuki TV',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Youtube',
            href: 'https://www.youtube.com/@tanukiTV',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/PzgM7wB8Cf',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/Tanuki-Tips',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tanuki - Le BLog, Built with Docusaurus with love.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
