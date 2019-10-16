const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Gatsby Starter Hello World',
    description: 'A simplified bare-bones starter for Gatsby',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Gatsby Starter Hello World',
        description: 'A simplified bare-bones starter for Gatsby',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC',
          templates:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\node_modules\\docz-core\\dist\\templates',
          packageJson:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\package.json',
          docz: 'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz',
          cache: 'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\.cache',
          app: 'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\app',
          appPublic:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\public',
          appNodeModules:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\node_modules',
          appPackageJson:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\package.json',
          appYarnLock:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\node_modules\\docz-core\\yarn.lock',
          ownNodeModules:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\node_modules\\docz-core\\node_modules',
          gatsbyConfig:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\gatsby-config.js',
          gatsbyBrowser:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\gatsby-browser.js',
          gatsbyNode:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\gatsby-node.js',
          gatsbySSR:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\gatsby-ssr.js',
          importsJs:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\app\\imports.js',
          rootJs:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\app\\root.jsx',
          indexJs:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\app\\index.jsx',
          indexHtml:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\app\\index.html',
          db:
            'F:\\Tenant Websites\\POCs\\DoczPOC\\simplePOC\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
