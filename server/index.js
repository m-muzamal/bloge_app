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

////////////(get data)\\\\\\\\\\\\\\\\\\
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

/////////////////(get blog)\\\\\\\\\\\\\\\\\\\\\\
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
    const sql = `INSERT INTO blog (userid, title, category, about, author, thumbnail) VALUES ('${req.body.userid}', '${req.body.title}', '${req.body.category}', '${req.body.about}', '${req.body.author}', '${req.body.thumbnail}')`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

////////////(delete post)\\\\\\\\\\\\\\\\\\
app.delete("/api/blog/:id", (req, res) => {
    const postId = req.params.id;
    const sql = `DELETE FROM blog WHERE idblog = ${postId}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
