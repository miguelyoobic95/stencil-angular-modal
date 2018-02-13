exports.config = {
  collections: [{ name: '@stencil/router' }],
  buildDir: '../../angular/src/assets/build'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
