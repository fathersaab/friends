const express = require("express");
require('colors')
const app = express();

app.listen(3000, () => {
	console.log("Running on port 3000".yellow);
});
