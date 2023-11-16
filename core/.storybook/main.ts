import { dirname, join } from "path";
module.exports = {
  stories: ['../packages/**/lib/**/*.stories.@(ts|tsx)'],
  addons: [getAbsolutePath("@storybook/addon-essentials")],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {}
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
