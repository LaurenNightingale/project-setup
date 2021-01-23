const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
      title: "Ueber Mich",
      template: "src/uebermich.html",
      filename: "uebermich.html",
    }),
    new HtmlWebpackPlugin({
      title: "Kontakt",
      template: "src/kontakt.html",
      filename: "kontakt.html",
    }),
    new HtmlWebpackPlugin({
      title: "Arbeiten",
      template: "src/arbeiten.html",
      filename: "arbeiten.html",
    }),

  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
