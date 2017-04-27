module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          transform: [['babelify', { presets: ['es2015'] }]]
        },
        files: {
          "public/app.js": 'src/nail_polish.js'
        }
      }
    },
  });

  // Load the plugins that provide the "babel" and "uglify" tasks
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['browserify']);
};