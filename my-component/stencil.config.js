exports.config = {
  namespace: 'mycomponent',
  sassConfig: {
    includePaths: ['src/styles/']
  },
  buildDir: '../../angular/src/assets/build',
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
