const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    //console.log(req.url);
if (req.url === '/') {
    fs.readFile(
        path.join(__dirname,'test','index.html')
    )
    res.end('')
    res.end('<h1> Home <hi>');
    }

})

const PORT = process.env.PORT || 5000;

server.listen(PORT ,() => console.log(`server is running at ${PORT}`));
