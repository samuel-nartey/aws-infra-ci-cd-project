const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD with CloudFormation & GitHub Actions is LIVE!");
});

// ✅ FIXED: Listen on 0.0.0.0 to accept external connections
app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on http://0.0.0.0:3000");
});