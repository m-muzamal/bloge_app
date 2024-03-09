import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "blog",
});

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", false);
    if (req.method === "OPTIONS") {
        res.sendStatus(204);
    } else {
        next();
    }
});

////////////(databse connect)\\\\\\\\\\\\\\\\\\
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
});

////////////(login)\\\\\\\\\\\\\\\\\\
app.get("/api/data", (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log({ result });
        res.json(result);
    });
});

////////////(register)\\\\\\\\\\\\\\\\\\
app.post("/api/data", (req, res) => {
    const sql = `INSERT INTO user (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

/////////////////(blog)\\\\\\\\\\\\\\\\\\\\\\
app.get("/api/blog", (req, res) => {
    const sql = "SELECT * FROM blog";
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log({ result });
        res.json(result);
    });
});

////////////(create post)\\\\\\\\\\\\\\\\\\
app.post("/api/blog", (req, res) => {
    const sql = `INSERT INTO blog (userid, title, category, about) VALUES ('${req.body.userid}', '${req.body.title}', '${req.body.category}', '${req.body.about}')`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

////////////////(category blog)\\\\\\\\\\\\\\\\\
app.get("/api/blog", (req, res) => {
    const category = req.query.category;
    const filteredPosts = posts.filter((posts) => posts.category === category);
    res.json(filteredPosts);
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});
