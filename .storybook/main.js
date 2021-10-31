/* eslint-disable */
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "@storybook/addon-a11y"],
    webpackFinal: async (config) => {
        // add SCSS support for CSS Modules
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader?modules&importLoaders", "sass-loader"],
            include: path.resolve(__dirname, "./"),
        });

        return config;
    },
    addDecorator: (story) => <BrowserRouter>{story()}</BrowserRouter>,
};
