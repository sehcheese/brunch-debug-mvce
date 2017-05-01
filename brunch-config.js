module.exports = {

  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!source\/)/,
        'js/app.js': /^source\//
      },
      entryPoints: {
        'source/scripts/app.jsx': 'js/app.js'
      }
    },
    stylesheets: {joinTo: 'css/core.css'},
  },

  paths: {
    watched: ['source']
  },

  modules: {
    autoRequire: {
      'js/app.js': ['source/scripts/app']
    }
  },

  plugins: {
    babel: {presets: ['latest', 'react']},
    assetsmanager: {
      copyTo: {
        'assets': ['source/resources/*']
      }
    },
    static: {
      processors: [
        require('html-brunch-static')({
          processors: [
            require('pug-brunch-static')({
              fileMatch: 'source/views/home.pug',
              fileTransform: (filename) => {
                filename = filename.replace(/\.pug$/, '.html');
                filename = filename.replace('views/', '');
                return filename;
              }
            })
          ]
        })
      ]
    }
  },

  server: {
    run: true,
    port: 9110
  }

};
