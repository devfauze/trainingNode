//requiring http
const http = require('http');

//creating a server w/ req & res
const server = http.createServer((req, res) => {

    //show method(GET in this example) and url(/somethinHere)
    console.log(req.method)
    console.log(req.url)

    //return sucess
    res.statusCode = 200

    //show a h1 in browser
    res.end('<h1>Hello World</h1>')
})

//command to server listen any interaction browser => server on 3000
server.listen(3000, () => {
    
    //return sucess mensage if server is ok
    console.log('Servidor ativo')
})