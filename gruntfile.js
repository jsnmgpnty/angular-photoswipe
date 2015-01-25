module.exports = function (grunt) {
    grunt.initConfig({
    	bower: {
            install: {
                options: {
                    targetDir: "sample/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
		},
        copy: {
        	main: {
        		files: [
		      		{
		      			expand: true,
		      			src: ['src/**'], 
		      			dest: 'dist/', 
		      			filter: 'isFile',
		      			flatten: true
		      		}
				],
			}
		},
		uglify: {
			jsMinify: {
				files: {
					'dist/angular-photoswipe.min.js': ['src/js/*.js']
				}
			}
		},
		cssmin: {
			cssMinify: {
				files: {
					'dist/angular-photoswipe.min.css': ['src/css/*.css']
				}
  			}
		}
    });

    grunt.registerTask("default", ["uglify", "cssmin", "copy:main", "bower:install"]);

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks("grunt-bower-task");
};