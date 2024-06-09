const express = require ("express");

const app = express();

app.get("/users", (req, res) => {
    const users = [
        {id: 1, name: "Alice"},
        {id: 2, name: "BOb"},
        {id: 3, name: "Ujunwa"},
    ];

    res.json(users); // Send the response with the list of users
});

module.exports = app;