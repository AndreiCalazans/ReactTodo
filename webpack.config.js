var path = require('path');
var webpack = require('webpack');
process.noDeprecation = true;
var envFile = require('node-env-file');
process.env.NODE_ENV= process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch(e) {

}


module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.js",
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'
  ],
  externals: {
    jQuery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jQuery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      API_KEY: JSON.stringify(process.env.API_KEY),
      AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
      DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
      DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
      STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
      MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // root: path.resolve(__dirname),
    // alias: {
    //   Greeter: 'public/components/Greeter.js',
    //   GreeterMessage: 'public/components/GreeterMessage.js',
    //   GreeterForm: 'public/components/GreeterForm.js'
    // },
    modules: [
    path.resolve('./app/components'),
    path.resolve('./node_modules'),
    path.resolve('./app/api/'),
    path.resolve('./app/styles/'),
    path.resolve('./app/actions/'),
    path.resolve('./app/reducers/'),
    path.resolve('./app/store/'),
    path.resolve('./app/')
    ],
    extensions: [" " ,".js", "jsx"]
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015', 'stage-0']
      }
    },
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                query: {
                  includePaths: [
                    path.resolve(__dirname, './node_modules/foundation-sites/scss')
                  ]
                }
            }]
        }
  ]
},
devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
