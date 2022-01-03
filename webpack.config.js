const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    clean: true,
    filename: "js/[fullhash]_main.js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: "img/[hash]_[name].[ext][query]",
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   type: "asset/resource",
      // },

      // ## url-loader
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 1000,
      //       fallback: require.resolve("file-loader"),
      //     },
      //   },
      // },

      // ## file-loader
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "img/[fullhash]_[name].[ext]",
          },
        },
      },

      // {
      //   test: /\.scss$/,
      //   use: [
      //     // En caso de uso de varios loaders, se procesan de derecha a izquierda
      //     "style-loader", // aplica los estilos vía DOM
      //     "css-loader", // interpreta CSS
      //     "sass-loader" // procesa SASS
      //   ],
      // },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   type: "asset/resource",
      // },
      // {
      //   test: /\.html/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "static/[hash][ext][query]",
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Curso Webpack",
      filename: "[fullhash]_index.html",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // Genera informe HTML al compilar
      openAnalyzer: false, // Abrir el informe inmediatamente
      reportFilename: "./report/report-bundle-analyzer.html",
      generateStatsFile: true,
      statsFilename: "./report/stats-bundle-analyzer.json",
    }),
    new CompressionPlugin(),
  ],
};
