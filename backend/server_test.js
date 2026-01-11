const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Received request at /");
  res.send("Server is working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
