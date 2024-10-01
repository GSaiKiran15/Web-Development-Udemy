import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt, { hash } from "bcrypt";

const app = express();
const port = 3000;
const saltRounds = 10;

const db = new pg.Client({
  user: "postgres",
  password: "saikiran",
  host: "localhost",
  database: "level1",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  try {
    const { rows: response } = await db.query(
      "select * from userpass where username = $1",
      [username]
    );
    if (response.length > 0) {
      res.send("User already exists.");
    } else {
      bcrypt.hash(password, saltRounds, async (error, hash) => {
        await db.query("insert into userpass values ($1, $2)", [
          username,
          hash,
        ]);
        const { rows: response } = await db.query("select * from userpass");
      });

      console.log(response);
      res.render("login.ejs");
    }
  } catch (error) {
    res.send(error);
  }
});

app.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const { rows: response } = await db.query(
    "select * from userpass where username = $1",
    [username]
  );
  bcrypt.compare(password, response[0].password, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("secrets.ejs");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
