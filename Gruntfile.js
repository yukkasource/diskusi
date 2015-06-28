module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'public/index.js': ['client/index.js']
    },
    watch: {
      files: [ "client/**/*.js"],
      tasks: [ 'browserify' ]
    }
  })
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
}

