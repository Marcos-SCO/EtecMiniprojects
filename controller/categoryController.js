const express = require("express");

const router = express.Router();

router.get("/categorias", (req, res) => {
  res.send("return categories");
});

router.post("/categoria/insert", (req, res) => {
  res.send("insert categoria");
});

router.put("/categoria/update", (req, res) => {
  res.send("Update categoria");
});

router.delete("/categoria/delete", (req, res) => {
  res.send("Destroy categoria");
});

module.exports = router;