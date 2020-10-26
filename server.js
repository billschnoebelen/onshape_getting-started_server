const express = require("express");
const app = express();
const cors = require("cors"); // Cross-origin resource sharing
const appOS = require("./lib/app");

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/stl", function (req, res) {
  const stl = appOS.partStudioStl(
    "5c5d8d0d2ba495668d8ed088",
    "2dc95bee6a868fc7fa19a51f",
    "2a47e3f569c9244f14ab390b",
    { mode: "string" },
    function (data) {
      console.log(data.toString());

      res.send(data);
    }
  );
});

app.listen(8000, () => console.log("Express Running on Port 8000"));
