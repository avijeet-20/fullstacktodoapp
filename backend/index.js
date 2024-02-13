const express = require('express');
const { todoschema , fetchschema } = require('./app');
const app = express();
const cors = require('cors');
const {todos} = require('./db');

app.use(express.json());
app.use(cors());

app.get('/todo', async (req,res) => {

    const data = await todos.find({});

    res.json(data);

})

app.post('/todo', async (req,res) => {
    const payload = req.body;
    const verified = todoschema.safeParse(payload);
     
    if(!verified.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        }
        )
        return
    }

   await todos.create(payload)

    res.json({
        msg:"todo added"
    })
})

app.put('/todo',  (req,res) => {
    const id = req.body.id;
    const verified = fetchschema.safeParse(id);

    if (!verified.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

   todos.update({
        _id:id
    },{
        completed:true
    }).then( ondone => {
        if(ondone){
            alert("done");
            res.send("marked as completed");
        }else{
            res.status(500).send();
        }
    })
})

app.listen(3000);