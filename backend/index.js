const express = require("express");

const {createTodo, updateTodo} = require("./types");
const {todoModel} = require("./db");

const app = express();

app.use(express.json());

app.get("/todos", async (req, res) => {
    const response = await todoModel.find({});

    res.json({
        todos: response
    });
});

app.post("/todos", async (req, res) => {
    const todo = createTodo.safeParse(req.body);
    if(!todo.success){
        res.status(411).json({
            msg : "You have sent the wrong inputs"
        })
        return;
    }

    await todoModel.create({
        title : req.body.title,
        description : req.body.description,
        completed : false
    });

    res.json({
        msg :  "Todo created successfully!"
    });
});

app.put("/completed", async (req, res) => {
    const todo = updateTodo.safeParse(req.body);
    if(!todo.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    await todoModel.updateOne({
        _id : req.body.id
    },
    {
        completed : true
    });

    res.json({
        msg : "todo is marked as completed"
    });
});

app.listen(3000);