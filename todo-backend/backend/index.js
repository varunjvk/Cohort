const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const app = express()
app.use(express.json())

app.post('/todos', async function (req, res) {
    const { success, data } = createTodo.safeParse(req.body)
    if (success) {
        await todo.create({ ...data, completed: false })
        res.json({
            "msg":"Todo is created"
        })
    }
    else {
        res.status(411).json({
            "msg":"Your input formats are wrong"
        })
        return
    }
})

app.get('/todos', async function (req, res) {
    const todos = await todo.find({})
    res.json({
        todos
    })``
})

app.put('/completed', async function (req, res) {
    const { success, data } = updateTodo.safeParse(req.body)
    if (success) {
        await todo.update({ _id: data.id }, { completed: true })
        
    }
    else {
        res.status(411).json({
            "msg":"You sent wrong inputs"
        })
    }
    
})

app.listen(3000, () => {
    console.log("Listening");
})