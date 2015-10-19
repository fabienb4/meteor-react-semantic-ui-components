Package.describe({
  name: 'fabienb4:react-semantic-ui-components',
  version: '0.0.14',
  // Brief, one-line summary of the package.
  summary: 'A collection of React components to use with Semantic-UI.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fabienb4/meteor-react-semantic-ui-components.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'ecmascript',
    'stevezhu:lodash',
    'react@0.2.0'
  ]);

  // Namespaces, Components & Utils
  api.addFiles('namespaces.js', 'client');
  api.addFiles('utils.jsx', 'client');
  api.addFiles('react-sui-component.jsx', 'client');

  // Elements
  api.addFiles([
    'elements/button.jsx',
    'elements/container.jsx',
    'elements/divider.jsx',
    'elements/flag.jsx',
    'elements/header.jsx',
    'elements/icon.jsx',
    'elements/icons.jsx',
    'elements/image-container.jsx',
    'elements/image.jsx',
    'elements/input.jsx',
    'elements/label.jsx',
    'elements/labels.jsx',
    'elements/list.jsx',
    'elements/loader.jsx',
    'elements/rail.jsx',
    'elements/reveal.jsx',
    'elements/segment.jsx',
    'elements/segments.jsx',
    'elements/steps.jsx'
  ], 'client');

  // Collections
  api.addFiles([
    'collections/breadcrumb.jsx',
    'collections/form.jsx',
    'collections/grid.jsx',
    'collections/menu.jsx',
    'collections/message.jsx',
    'collections/table.jsx'
  ], 'client');

  // Views
  api.addFiles([
    'views/advertisement.jsx',
    'views/card.jsx',
    'views/cards.jsx',
    'views/comments.jsx',
    'views/feed.jsx',
    'views/items.jsx',
    'views/statistic.jsx',
    'views/statistics.jsx'
  ], 'client');

  // Modules
  api.addFiles([
    'modules/accordion.jsx',
    'modules/checkbox.jsx',
    'modules/dimmer.jsx',
    'modules/dropdown.jsx',
    'modules/embed.jsx',
    'modules/modal.jsx',
    'modules/nag.jsx',
    'modules/popup.jsx',
    'modules/progress.jsx',
    'modules/rating.jsx',
    'modules/search.js',
    'modules/search.jsx',
    'modules/shape.jsx',
    'modules/sidebar.jsx',
    'modules/sticky.jsx',
    'modules/tab.jsx'
  ], 'client');

  api.export('ReactSUI', 'client');
});
