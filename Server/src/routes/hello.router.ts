import express from "express";

const helloRouteur = express.Router();

helloRouteur.use((req, res, next) => {
  process.stdout.write(`HelloRouter Middleware\n`);
  next();
  if (req.ip?.endsWith("121.0.0.1")) {
    process.stdout.write(`Request from local IP\n`);
    next();
  } else {
    next();
  }
});

helloRouteur.get("/", (req, res) => {
  res.send("Hello TIW8!");
});

export { helloRouteur as HelloRouteur };
