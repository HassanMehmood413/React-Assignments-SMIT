const express = require('express')
const app = express()

app.use(express.json())

let users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 30 },
]

// Home route
app.get("/", (req, res) => {
    res.send("Hello World")
})

// Get all users
app.get("/users", (req, res) => {
    res.send(users)
})

// Get user by ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id)
    user ? res.send(user) : res.status(404).send("User not found")
})

// Create a new user
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    }
    users.push(newUser)
    res.status(201).send(newUser)
})

// Update an existing user
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id)
    if (!user) return res.status(404).send("User not found")

    user.name = req.body.name ?? user.name
    user.age = req.body.age ?? user.age
    res.send(user)
})

// Delete a user
app.delete("/users/:id", (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id)
    if (index === -1) return res.status(404).send("User not found")

    const deletedUser = users.splice(index, 1)
    res.send(deletedUser)
})

// Start server
app.listen(3000, () => {
    console.log("Server started on port 3000")
})
