const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    public: ["./src/js/modules/index.js", "./src/sass/index.scss"],
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Desgin System",
      template: "src/design-system.html",
      filename: "design-system.html",
    }),
    new HtmlWebpackPlugin({
      title: "My Index",
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
