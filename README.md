# Gulp Boilerplate for the masses!
A flexible assets boilerplate for gulp in a plethora of environment

## What's in this boilerplate?
This boilerplate is a mix of a LOT of things together to better process who you handle

We use the following:
 - Post CSS for processing
   - Comes with the following plugins GRATIS (Not that there's any costs)
     - postcss-import
     - postcss-bem (disabled but you can activate it)
     - postcss-nested
     - cssnano (For minification)
 - Gulp Babel (Handy transpiler for ES6 and ES7)
 - Uglify (For minification)

## Installing the thing

Installing the boiler plate is pretty simple

1. Download this repo and put it where your project needs to be.
2. Remove any files you deem uncessary (i.e. Remove the demo-file)
3. Run ``npm install`` and all dependencies are going to be set up for you

## Let's talk about configs

The boilerplate is made to simplify how you handle the messiest of things: THE ASSETS.

The gulp-config.js file is where you will find all the paths and names for your input and output.
This bring the awesome flexibility of this boilerplate as we provide an example of what you need.

## Starting Fresh?
Starting a new project? You have no idea how to do your base setup for your files? We got you covered

Run ``npm run setup`` to have a base setup of folder on the go.