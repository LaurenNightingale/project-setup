const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const copywebpackplugin = require ('copy-webpack-plugin');
const copyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    public: ["./src/js/index.js", "./src/sass/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          {
            loader: "file-loader",

            options: {
              name: "[name].css",
              outputPath: "./",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Design System",
      template: "src/design-system.html",
      filename: "design-system.html",
    }),
    new HtmlWebpackPlugin({
      title: "Startseite",
      template: "src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "About Me",
      template: "src/aboutme.html",
      filename: "aboutme.html",
    }),
    new HtmlWebpackPlugin({
      title: "Contact",
      template: "src/contact.html",
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      title: "Works",
      template: "src/works.html",
      filename: "works.html",
    }),
    new HtmlWebpackPlugin({
      title: "Works 2019",
      template: "src/works2019.html",
      filename: "works2019.html",
    }),

    new copyWebpackPlugin ({
      patterns: [{ from:"src/images", to:"images"}]
    })
],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
