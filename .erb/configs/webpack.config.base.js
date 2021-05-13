/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies as externals } from '../../src/package.json';
import appRootDir from 'app-root-dir';
import html from 'remark-html';
import prism from 'remark-prism';
import slug from 'remark-slug';
import toc from 'remark-toc';
import autolink from 'remark-autolink-headings';
import hint from 'remark-hint';
import externalLinks from 'remark-external-links';

const webpackAlias = require(`../../src/resolver`)({ rootDir: appRootDir.get() });

export default {
  externals: [...Object.keys(externals || {})],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "remark-loader",
            options: {
              remarkOptions: {
                plugins: [
                  slug,
                  toc,
                  [
                    autolink,
                    {
                      behavior: 'append',
                      content: {
                        type: 'element',
                        tagName: 'span',
                        properties: { className: ['icon', 'icon-link'] },
                        children: [{ type: 'text', value: '🔗' }],
                      },
                    }
                  ],
                  hint,
                  externalLinks,
                  html,
                  prism,
                ],
              },
            },
          },
        ],
      },
    ],
  },

  output: {
    path: path.join(__dirname, '../../src'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '../../src'), 'node_modules'],
    alias: webpackAlias,
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};
