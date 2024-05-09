// ADDING EXPRESS
const express = require("express");
const server = express();
// BODY PARSER
const bodyParser = require("body-parser");
server.use(bodyParser.json());

// ADDING MYSQL
const mysql = require("mysql");
// PORT
const PORT = process.env.PORT;
// CREATING A DATABASE CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbprayer",
});
// TO CHECK IF THE CONNECTION IS SUCCESSFUL OR NOT
db.connect(function (error) {
  //   if (error) throw error;
  if (error) {
    console.log("connection not successfull");
  } else {
    console.log(`connection is successfull`);
  }
});
// LISTENING TO THE RIGHT PORT
server.listen(PORT, () => {
  console.log(`server Running  on port ${PORT}`);
});
// TO ADD A RECORDS
server.post("/api/prayer/add", (req, res) => {
  const { name, completeAt, isComplete } = req.body;
  let info = {
    name: name,
    completeAt: completeAt,
    isComplete: `${isComplete === 1 ? true : false}`,
  };
  let sql = "INSERT INTO prayer SET ?";
  db.query(sql, info, (error) => {
    if (error) {
      res.send({ status: 404, message: "not found" });
    } else {
      res.send({ status: 200, message: "prayer Added successfully" });
    }
  });
});

// TO DISPLAY  ALL RECORDS
server.get("/api/prayer", (req, res) => {
  let sql = "SELECT * FROM prayer";

  db.query(sql, (error, result) => {
    // WE MAP TROUGHT THE RESULT IN ORDER TO CONVERT THE ISCOMPLETE VALUE TO BOOLEAN TYPE
    const data = result.map(({ id, name, completeAt, isComplete }) => ({
      id: id,
      name: name,
      completeAt: completeAt,
      isComplete: isComplete === 1 ? true : false,
    }));
    res.status(200).json({ status: true, data: data });
    //  WE THROW AN ERROR IF THE RESPONSE IS NOT SUCCESSFULL
    if (error) throw error;
  });
});

// TO GET A SINGLE RECORD
server.get("/api/prayer/:id", (req, res) => {
  const prayerId = req.params.id;
  const sql = `SELECT * FROM prayer WHERE id=${prayerId}`;
  db.query(sql, (error, result) => {
    if (error) {
      res.send({ status: 404, message: "NOT FOUND" });
    } else {
      res.send({ status: 200, data: result });
    }
  });
});
// TO UPDATE A RECORD
server.put("/api/prayer/edit/:id", (req, res) => {
  // Destructuring the request body
  const { name, completeAt, isComplete } = req.body;

  const sql = `UPDATE prayer SET 
     name='${name}', 
     completeAt='${completeAt}', 
     isComplete=${isComplete === 1 ? true : false} 
     WHERE id=${req.params.id}`;

  db.query(sql, (error) => {
    if (error) {
      console.error("Error updating prayer:", error);
      res.send({ status: 500, message: "Prayer update failed" });
    } else {
      res.send({ status: 200, message: "Prayer updated successfully" });
    }
  });
});

// TO DELETE A RECORD

server.delete("/api/prayer/delete/:id", (req, res) => {
  const sql = `DELETE FROM prayer WHERE id = ${req.params.id}`;
  db.query(sql, (error) => {
    if (error) {
      console.error("Error deleting prayer:", error);
      res
        .status(500)
        .send({ status: false, message: "Prayer deletion failed" });
    } else {
      res
        .status(200)
        .send({ status: true, message: "Prayer deleted successfully" });
    }
  });
});
