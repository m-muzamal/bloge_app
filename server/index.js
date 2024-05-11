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

////////////(get-user_data)\\\\\\\\\\\\\\\\\\
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

////////////(register-user)\\\\\\\\\\\\\\\\\\
app.post("/api/data", (req, res) => {
    const sql = `INSERT INTO user (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

/////////////////(get-blog)\\\\\\\\\\\\\\\\\\\\\\
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

/////////////////(get-single_blog)\\\\\\\\\\\\\\\\\\\\\\
app.get("/api/blog/:id", (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM blog WHERE idblog = ${id}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log({ result });
        res.json(result);
    });
});

////////////(create-post)\\\\\\\\\\\\\\\\\\
app.post("/api/blog", (req, res) => {

    const str = req.body.about;
    const about = str?.replace(/'/g, '"');

    const sql = `INSERT INTO blog (userid, title, category, about, author, thumbnail) VALUES ('${req.body.userid}', '${req.body.title}', '${req.body.category}', '${about}', '${req.body.author}', '${req.body.thumbnail}')`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

////////////(delete-post)\\\\\\\\\\\\\\\\\\
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

////////////(update-post)\\\\\\\\\\\\\\\\\\
app.patch("/api/edit-blog/:id", (req, res) => {
    const postId = req.params.id;

    const str = req.body.about;
    const about = str?.replace(/'/g, '"');

    const sql = `UPDATE blog SET title = '${req.body.title}', category = '${req.body.category}', about = '${about}', author = '${req.body.author}', thumbnail = '${req.body.thumbnail}' WHERE idblog = ${postId}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
