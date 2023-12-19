//requiring fs (file system)
const fs = require('fs')

//create a file
// writeFile = delete anda write again

/*fs.writeFile('test.txt', 'Hello Node.js', err => {
    console.log(err)
})*/

//======================================================

//using append file
//appendFile write a content after 

/* fs.appendFile('test.txt', 'Hello Node.js', err => {
    console.log(err)
}) */

//======================================================

//renaming files
//fs.rename can rename files

/*fs.rename('test.txt', 'test2.txt', err => console.log(err))*/

//=======================================================

//deleting files
//fs.unlink can delete any file named

/*fs.unlink('test2.txt', err => console.log(err))*/

//========================================================

//path for actual diretory
// use => console.log(__dirname)