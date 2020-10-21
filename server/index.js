require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const { rows } = await db.query("select * from restaurants");
    res.status(200).json({
      restaurants: rows,
    });
  } catch (err) {
    throw new Error(err);
  }
});

app.get("/api/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      `select * from restaurants where id = ${id}`
    );
    res.status(200).json({
      restaurant: rows[0],
    });
  } catch (err) {
    res.status(404).json({
      error: err,
    });
  }
});

app.post("/api/restaurants", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const {
      command,
      rowCount,
      rows,
    } = await db.query(
      "INSERT INTO restaurants (name, localtion, price_range) VALUES ($1, $2, $3) returning *",
      [name, location, price_range]
    );
    res.status(201).json({
      message: `${command} ${rowCount}`,
      insertedData: rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
});

app.put("/api/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, price_range } = req.body;
    const {
      command,
      rowCount,
      rows,
    } = await db.query(
      "update restaurants set name = $1, localtion = $2, price_range = $3 where id = $4 returning *",
      [name, location, price_range, id]
    );
    res.status(200).json({
      message: `${command} ${rowCount}`,
      updatedinsertedData: rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

app.delete("/api/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      command,
      rowCount,
      rows,
    } = await db.query("delete from restaurants where id = $1 returning *", [
      id,
    ]);
    res.status(200).json({
      message: `${command} ${rowCount}`,
      deletedData: rows[0],
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

app.get("/api/restaurants/reviews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      `select * from reviews where restaurant_id = ${id}`
    );
    res.status(200).json({
      review: rows,
    });
  } catch (err) {
    res.status(404).json({
      error: err,
    });
  }
});

app.get("/api/restaurants/:id/rating", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      `select trunc(AVG(rating),3) as rating from reviews where restaurant_id = ${id}`
    );
    rating = rows[0].rating
    res.status(200).json({
      rating,
    });
  } catch (err) {
    res.status(404).json({
      error: err,
    });
  }
});

app.post("/api/restaurants/reviews", async (req, res) => {
  try {
    const { name, review, rating,restaurant_id } = req.body;
    const {
      command,
      rowCount,
      rows,
    } = await db.query(
      "INSERT INTO reviews (name, review, rating,restaurant_id) VALUES ($1, $2, $3,$4) returning *",
      [name, review, rating,restaurant_id]
    );
    res.status(201).json({
      message: `${command} ${rowCount}`,
      insertedData: rows[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
