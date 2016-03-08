module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    bower_concat: {
      all: {
        dest: {
          'js': 'public/js/_bower.js',
        },
        exclude: [
          'jquery',
          'modernizr',
          'what-input'
        ],
        mainFiles: {
          'foundation-sites': [
            'js/foundation.core.js'
            // ,'js/foundation.abide.js'
            // ,'js/foundation.accordion.js'
            // ,'js/foundation.accordionMenu.js'
            // ,'js/foundation.drilldown.js'
            // ,'js/foundation.dropdown.js'
            // ,'js/foundation.dropdownMenu.js'
            // ,'js/foundation.equalizer.js'
            // ,'js/foundation.interchange.js'
            // ,'js/foundation.magellan.js'
            // ,'js/foundation.offcanvas.js'
            // ,'js/foundation.orbit.js'
            // ,'js/foundation.responsiveMenu.js'
            // ,'js/foundation.responsiveToggle.js'
            // ,'js/foundation.reveal.js'
            // ,'js/foundation.slider.js'
            // ,'js/foundation.sticky.js'
            // ,'js/foundation.tabs.js'
            // ,'js/foundation.toggler.js'
            // ,'js/foundation.tooltip.js'
            // ,'js/foundation.util.box.js'
            // ,'js/foundation.util.keyboard.js'
            ,'js/foundation.util.mediaQuery.js'
            // ,'js/foundation.util.motion.js'
            // ,'js/foundation.util.nest.js'
            // ,'js/foundation.util.timerAndImageLoader.js'
            // ,'js/foundation.util.touch.js'
            // ,'js/foundation.util.triggers.js'
          ,]
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    sass: {
      options: {
        includePaths: ["./bower_components"]
      },
      dist: {
         src: 'sass/style.scss',
         dest: 'public/css/style.css',
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          base: 'public'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
 });

 grunt.registerTask('default', [
   'sass',
   'bower_concat',
   'connect',
   'watch'
   ]);

};
