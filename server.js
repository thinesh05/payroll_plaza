const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("Express server is running");
})

app.listen(3001, function() {
    console.log("port 3001, express server");
})