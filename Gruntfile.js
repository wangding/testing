module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        cwd: '_book',
        src: ['*.html', 'docs/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files: {
        expand: true,
        cwd: '_book',
        src: ['gitbook/**/*.css'],
        dest: 'dist/'
      }
    },
    uglify: {
      main: {
        files: [{
          expand: true,
          cwd: '_book',
          src: ['gitbook/**/*.js', '!gitbook/gitbook-plugin-anchor-navigation-ex/**/*.js'],
          dest: 'dist/'
        }]
      }
    },
    unescape: {
      files: {
        src: ['_book/*.html', '_book/docs/*.html'],
        dist: 'dist/'
      }
    },
    replace: {
      html: {
        src: ['_book/*.html', '_book/docs/*.html'],
        overwrite: true,
        replacements: [{
          form: '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="gitbook/images/apple-touch-icon-precomposed-152.png">',
          to: '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://i.wangding.co/favicon.svg">'
        }, {
          from: '<link rel="shortcut icon" href="gitbook/images/favicon.ico" type="image/x-icon">',
          to: '<link rel="shortcut icon" href="http://i.wangding.co/favicon.svg">'
        }]
      }
    },
    qiniu_qupload: {
      default_options: {
        options: {
          ak: 'QINIU_AK',
          sk: 'QINIU_SK',
          bucket: 'gb-testing',
          assets: [{src: '_book', prefix: ''}]
        }
      }
    },
    copy: {
      html: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html', 'docs/*.html'],
          dest: '_book/'
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['gitbook/**'],
          dest: '_book/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-unescape-html');
  grunt.loadNpmTasks('@wangding/grunt-qiniu-qupload');

  grunt.registerTask('minify', ['unescape', 'copy:html', 'replace', 'htmlmin', 'cssmin', 'uglify', 'copy:html', 'copy:js']);
  grunt.registerTask('upload', ['qiniu_qupload']);
};
