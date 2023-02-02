const express = require("express");
var cors = require('cors')
const port = 8084;
const app = express();

app.get("/",  cors(), (req, resp) => {
    //resp.send("working");
   resp.json([{ "STATUS": "INSTACE2-ACTIVE" }]);
  });

app.listen(port, console.log(`Server started at port ${port}`));
