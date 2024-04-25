const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "component_app",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Button": "./src/components/Button",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "shared-library": {
          singleton: true,
        },
      },
      // shared: {
      //   lodash: {
      //     requiredVersion: "4.17.20",
      //     singleton: true,
      //     strictVersion: true,
      //     shareScope: "community",
      //   },
      // },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
});
