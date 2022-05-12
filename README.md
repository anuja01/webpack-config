# webpack-config
Simplify webpack configurations   
Intro   
Webpack examins all the modules in the pplication and creates what it calls a **dependency graph** which consists of various modules which your webapp would require to function as expected. Then, depending on this graph, it creates a new package which consists of the very bare minimum number of files required, often just a single bundle.js file which can be plugged in to the html file easily and used for the application.   

Video tutorials   
https://www.youtube.com/watch?v=lFjinlwpcHY   
https://www.youtube.com/watch?v=X1nxTjVDYdQ   
https://www.youtube.com/watch?v=TOb1c39m64A   

installing webpack - `npm i -D webpack webpack-cli`   
bundle using webpack - `npx webpack` // this will create optimised single file which can be used in `index.html`   
installing babel - `npm i @babel/core @babel/preset-env babel-loader`

webpack loaders:      
Out of the box, webpack only understands **JavaScript** and **JSON** files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
Loaders are transformations that are applied to the source code of a module

eg: Babel loader
```javascript
module: {
  rules: [
    {
      test: /\.m?js$/, // files to preprocess with loader
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader', // loader
        options: {
          presets: ['@babel/preset-env'] // default preset configurations
        }
      }
    }
  ]
}
```
