var
  LIVERELOAD_PORT = 35729,
  lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
  }),
  mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-cordova-ng');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.initConfig({
    connect: {
      options: {
        port: 1881,
        hostname: '127.0.0.1',
        open: false
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              lrSnippet,
              mountFolder(connect, 'www')
            ];
          }
        }
      }

    },
    watch: {
      files: ['www/**/*.*'],
      options: {
        livereload: LIVERELOAD_PORT
      },
      tasks: ['jshint']
    },
    jshint: {
      all: ['www/js/**/*.js'],
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      }
    },
    csslint: {
      src: ['www/css/**/*.css']
    }
  });

  grunt.registerTask('default', ['connect', 'lint', 'watch']);
  grunt.registerTask('lint',    ['jshint', 'csslint']);
  grunt.registerTask('build',   ['lint','cordova:package']);

};
