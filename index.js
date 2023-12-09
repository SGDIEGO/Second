const bodyParser = require("body-parser");
const express = require("express");

const PORT = 3000;
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const server = express();
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.post("/new", (req, res) => {
    const {text, user, added} = req.body

    messages.push({
        text: text,
        user: user,
        added: added
    })

  res.redirect("/");
});

server.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on localhost:${PORT}`);
});
