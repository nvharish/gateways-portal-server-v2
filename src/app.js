var http = require("http");
http.createServer(function (req, res) {
    if(req.url==='/')
        res.end("<h1>Hello world from dev</h1>");
}).listen(8900, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running");
    }
});