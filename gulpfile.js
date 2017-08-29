process.env.DISABLE_NOTIFIER = true

var elixir = require('laravel-elixir')
             require('laravel-elixir-browserify-official')
             require('laravel-elixir-vueify');

    elixir.config.sourcemaps = false;

elixir(function (mix) {
  mix.scripts([
    "../../../node_modules/jquery/dist/jquery.js",
    "../../../node_modules/semantic-ui-less/definitions/behaviors/visibility.js",
    "../../../node_modules/semantic-ui-less/definitions/modules/sidebar.js",
    "../../../node_modules/semantic-ui-less/definitions/modules/transition.js"
  ])
  .less('app.less')
  .browserify('app.js')
  .copy('resources/assets/views/index.html', 'public/index.html')
  .copy('resources/assets/img', 'public/img')
  .copy('resources/assets/fonts', 'public/fonts/roboto')
  .copy('node_modules/semantic-ui-less/themes/default/assets/fonts', 'public/fonts/semantic')
  .copy('appspec.yml', 'public/appspec.yml')
  .copy('scripts', 'public/scripts')
  .styles(['resources/assets/css/**/*.css'], 'public/css/vendors.css', './')
})
