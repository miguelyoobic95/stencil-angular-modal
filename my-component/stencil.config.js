exports.config = {
  namespace: 'mycomponent',
  bundles: [{ components: ['my-component'] }],
  buildDir: '../../angular/src/assets/build'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
