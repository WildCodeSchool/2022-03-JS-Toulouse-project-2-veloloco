require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const connection = require("./db-config");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(
      `connected to database with threadId :  ${connection.threadId}`
    );
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(express.json());

app.get("/favourite-stations/:id", (req, response) => {
  const { favouriteStationId } = req.params;
  connection.query(
    "SELECT * from favourite_station",
    [favouriteStationId],
    (err, result) => {
      if (err) {
        console.error(err);
        response.status(500).send("Error retrieving data from database");
      } else {
        response.json(result);
      }
    }
  );
});

app.post("/favourite-stations", (req, res) => {
  const { favouriteStationId } = req.body;
  connection.query(
    "INSERT INTO favourite_station(id) VALUES (?)",
    [favouriteStationId],
    (err) => {
      if (err) {
        res.status(500).send("Error adding the id");
      } else {
        res.status(200).send("Id succesfully added");
      }
    }
  );
});

app.delete("/favourite-stations/:id", (req, res) => {
  const favouriteStationId = req.params.id;
  connection.query(
    "DELETE FROM favourite_station WHERE id = ?",
    [favouriteStationId],
    (err) => {
      if (err) {
        res.status(500).send("error deleting the id");
      } else {
        res.sendStatus(204);
      }
    }
  );
});
