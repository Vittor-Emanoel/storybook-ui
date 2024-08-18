import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";
addons.setConfig({
  theme: create({
    base: "light",
    appBg: "#000",
    brandImage: "https://github.com/Vittor-Emanoel.png",
  }),
});
