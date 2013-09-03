module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jslint: {
            files: [
                'src/*.js',
                'helper/**/*.js',
                'spec/**/*.js'
            ]
        },
        jasmine: {
            src: 'src/**/*.js',
            options: {
                vendor: [
                    'vendor/jquery-1.10.2.js',
                    'vendor/jquery.event.move.js',
                    'vendor/hogan-2.0.0.js'
                ],
                specs: 'spec/**/*.js'
            }
        },
        hogan: {
            publish: {
                files: {
                    "src/templates/row.js": ["src/templates/row.mustache"]
                },
                options: {
                    defaultName: function (filename) {
                        return filename.split('/').pop().replace(/\.mustache$/, '');
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-hogan');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['jslint', 'jasmine']);

    grunt.registerTask('default', ['test']);

};
