const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
	//.js('resources/rahmato/js/materialize.js', 'public/js')
	//.js('resources/rahmato/js/plugins.js', 'public/js')
	//.js('resources/rahmato/js/custom-script.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   //.sass('resources/rahmato/sass/materialize.scss', 'public/css')
   //.sass('resources/rahmato/sass/style.scss', 'public/css')
   //.sass('resources/rahmato/sass/custom/custom.scss', 'public/css/custom');
