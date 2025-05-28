const express = require("express");
import { HelloRouteur } from "./routes/hello.router";
const app = express();
const port = 3000;

const path = require("path");
const DIST_DIR = path.join(__dirname, "../../../Client/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//app.use("/hello", HelloRouteur);
app.use(express.static(DIST_DIR));
