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
          to: '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://cdn.jsdelivr.net/gh/wangding/i@master/favicon.svg">'
        }, {
          from: '<link rel="shortcut icon" href="gitbook/images/favicon.ico" type="image/x-icon">',
          to: '<link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/wangding/i@master/favicon.svg">'
        }, {
          from: 'href="../gitbook',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/gitbook'
        }, {
          from: 'href="../styles',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/styles'
        }, {
          from: 'href="gitbook',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/gitbook'
        }, {
          from: 'href="styles',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/styles'
        }, {
          from: 'src="../gitbook',
          to: 'src="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/gitbook'
        }, {
          from: 'src="gitbook',
          to: 'src="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/gitbook'
        }, {
          from: 'src="img',
          to: 'src="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/docs/img'
        }, {
          from: 'href="img',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/testing@gh-pages/docs/img'
        }]
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

  grunt.registerTask('minify', ['unescape', 'copy:html', 'replace', 'htmlmin', 'cssmin', 'uglify', 'copy:html', 'copy:js']);
};
