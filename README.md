# riot-webpack
Basic Riot app using Webpack

This is a hyper-simple example of a Riot app build using Webpack.

It's a single Riot tag.

To run, clone this project, and point a web server at public/.

To make changes, run `npm install`, then you can run `npm run dev` to set Webpack to watch for changes and build with sourcemaps (saddly, these don't work very well with Riot tags), or `npm run build` to build with uglify (and no sourcemaps).

## Easy server
If you don't have a server setup, you can use http-server from npm. Install globally with `$ npm install http-server -g`, then run `$ http-server public/` from the project root. You can then view the example app by navigating to `http://localhost:8080` in your browser.

##Credits
For the Webpack config, I followed the basics from this article: [Setting Up a React.js Environment Using Npm, Babel 6 and Webpack](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack), and added in the example code for [riotjs-loader](https://github.com/esnunes/riotjs-loader).
