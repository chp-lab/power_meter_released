// optional: allow environment to specify port
const port = process.env.PORT || 8080;
const path = __dirname;

// wire up the module
const express = require('express');
// create server instance
const app = express();
// bind the request to an absolute path or relative to the CWD
app.use(express.static('dist'));

app.get('/*', function (req,res) {
  res.sendFile(path + "/dist/" + "index.html");
});

// start the server
app.listen(port, () => console.log(`Listening on port ${port}`));

