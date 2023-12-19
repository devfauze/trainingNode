//input output training

//importing 'process' without install another library

/* const process = require('process')
   console.log(process.argv)*/

//===========================================================

//showing in console
//print asking a input
process.stdout.write('Qual seu nome?')

//collecting input and showing
process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Nome inserido: ${keyboard}`);
    process.exit()
})