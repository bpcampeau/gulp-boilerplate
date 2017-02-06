const destFolder = "./templates/index_files/";

module.exports = {
    paths: {
        css: {
            src: ['./src/css/style.css'],
            dest: destFolder + 'css/'
        },
        js: {
            src:  ['./src/js/scripts.js'],
            dest: destFolder + 'js/'
        },
        libs: {
            src: ['./src/lib/*.js'],
            dest: destFolder+ 'lib/'
        },
        images: {
            src: './src/images/**/*',
            dest: destFolder + 'img/'
        },
        fonts: {
            src: './src/fonts/**/*.{eot,svg,ttf,woff,woff2}',
            dest: destFolder + 'fonts/'
        },
        names: {
            css: 'styles.css',
            js: 'app.js'
        }
    },
    css: {
        bem: {
            style: 'bem'
        },
        next: {
            browsers: 'last 5 versions, ie >= 9'
        }
    }
};
