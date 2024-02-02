const express = require("express")
const bodyParser = require("body-parser")
const fs=require("fs")
const app = express()

app.use(bodyParser.json())


app.get("/todos", (req, res) => {
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if(err) throw err
        const todos = JSON.parse(data)
        res.json(todos)
    })
})

app.get("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id)

    
    
    fs.readFile("todos.json", "utf-8", (err, data) => {
        if (err) throw err
        
        const todos = JSON.parse(data)
        const idx = todos.findIndex(t => t.id === id)

        if (idx === -1) {
            res.status(404).send();
        }
        else {
            res.json(todos[idx])
        }

    })

})

app.post("/todos", (req, res) => {
    const todo = {
        id: Math.floor(Math.random() * 100000),
        title: req.body.title,
        description:req.body.description
    }

    fs.readFile("./todos.json", "utf-8", (err, data) => {
        let obj = JSON.parse(data)
        obj.push(todo)
        fs.writeFile("./todos.json", JSON.stringify(obj), (err) => {
            if (err) throw err
            res.status(201).send();
        });
    })
    
})

app.put("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id)

    
    
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        let obj = JSON.parse(data)

        const idx = obj.findIndex(t => t.id === id)

        if (idx === -1) {
          res.status(404).send();
          return;
        }
        
        obj[idx].title = req.body.title
        obj[idx].description=req.body.description

        fs.writeFile("./todos.json", JSON.stringify(obj), (err) => {
            if (err) throw err
            res.status(200).send();
        })

    })

    
    
})

app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    
    fs.readFile("./todos.json", "utf-8", (err, data) => {
      let obj = JSON.parse(data);

        const idx = obj.findIndex((t) => t.id === id);
        
        if (idx === -1) {
          res.status(404).send();
          return;
        }


      obj.splice(idx,1)

        fs.writeFile("./todos.json", JSON.stringify(obj), (err) => {
            if (err) throw err
            res.status(200).send();
      });
    });

    
})

app.listen(3000, () => {
    console.log("Listening");
})