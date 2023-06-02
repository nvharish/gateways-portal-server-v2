var http = require("http");
http.createServer(function (req, res) {
    if(req.url==='/')
        res.end("<h1>Hello world from prod</h1>");
}).listen(8800, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running");
    }
});