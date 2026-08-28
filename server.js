
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("CI/CD Pipeline Demo Application ");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Hello From Prathamesh jadhav"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});