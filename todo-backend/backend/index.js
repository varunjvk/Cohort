const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express()
app.use(express.json())

app.post('/todos', function (req, res) {
    const { success, data } = createTodo.safeParse(req.body)
    if (success) {
        
    }
    else {
        res.status(411).json({
            "msg":"Your input formats are worng"
        })
    }
})

app.get('/todos', function (req, res) {
    
})

app.put('/completed', function (req, res) {
    const {success, data} = updateTodo.safeParse(req.body)
    
})