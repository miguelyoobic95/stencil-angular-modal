const sass = require('@stencil/sass');

exports.config = {
  namespace: 'mycomponent',
  bundles: [{ components: ['my-component'] }],
  buildDir: '../../angular/src/assets/build',
  plugins: [sass()]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
