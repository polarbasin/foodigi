module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      target: ['server/**/*.js', 'client/app/**/*.js'],
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
      },
      dist: {
        files: {
          expand: true,
          src: ['server/*.js'],
          ext: '-compiled.js',
        },
      },
    },
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', [
    'eslint',
    'babel',
  ]);
};
