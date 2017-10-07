/* ======== DIRECTORIOS FUENTE =========== */
var fuente_html = './src/templates/**/*',
    fuente_scss = './src/scss/**/*.scss',
    fuente_js = './src/js/**/*.js',
    fuente_imagenes = './src/img/**/*.{png,jpg,ico,jpeg,gif,svg}';

/* ======== DIRECTORIOS DESTINO ========== */
var destino_html = './build/',
    destino_scss = './build/stylesheets/',
    destino_js = './build/js/',
    destino_imagenes = './build/img/';

/*
 * Dependencias
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    gulpSequence = require('gulp-sequence'),
    browserSync = require('browser-sync').create();

/* =============== TAREAS GULP ================ */
//Tarea por defecto
gulp.task('default', gulpSequence(['html', 'scss', 'images', 'compress-js'], 'serve'));

// Actualizar HTML
gulp.task('html', function () {
    return gulp.src(fuente_html)
        .pipe(gulp.dest(destino_html))
        .pipe(browserSync.stream());
});

// Compilar SCSS
gulp.task('scss', function () {
    //Ruta de la carpeta sass apuntando a los archivos `.scss`
    return gulp.src(fuente_scss)
        //Compila los archivos `.scss` y muestra posibles errores
        .pipe(sass().on('error', sass.logError))
        //Carpeta donde se guardaran los archivos `.css` compilado
        .pipe(gulp.dest(destino_scss))
        // Se actualiza la vista del navegador.
        .pipe(browserSync.stream())
        /*
        //Mensaje gracias al plugin `gulp-notify`
        .pipe(notify("Se ha compilado el SCSS"));
        */
});


// Comprimir JS
gulp.task('compress-js', function () {
    gulp.src(fuente_js)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destino_js))
        .pipe(notify("Se ha comprimido el JS"));
});

// Recarga la ejecución de javascript.
gulp.task('js-watch', ['compress-js'], function (done) {
    browserSync.reload();
    done();
});

// Actualizar Imagenes
gulp.task('images', function () {
    gulp.src(fuente_imagenes)
        .pipe(gulp.dest(destino_imagenes))
        .pipe(browserSync.stream());
})


// Static server browserSync
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch(fuente_html, ['html']);
    gulp.watch(fuente_scss, ['scss']);
    gulp.watch(fuente_imagenes, ['images']);
    gulp.watch(fuente_js, ['js-watch']);
});
