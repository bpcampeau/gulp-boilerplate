/**
 * Created by Bruno-Pierre Campeau on 2017-02-03.
 */
var fs = require('fs');
var folderArray = ['./src', './src/styles', './src/js', './src/lib', './src/images', './src/fonts' ];

if (!fs.existsSync('./src')) {
    for (var v = 0; v < folderArray.length; v++) {
        console.log('Creating folder: '+folderArray[v]);
        fs.mkdirSync(folderArray[v]);
    }
}