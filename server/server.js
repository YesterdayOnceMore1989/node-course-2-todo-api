var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
   var todo = new Todo({
     text: req.body.text
   });
   todo.save().then((doc)=>{
     res.send(doc);
   },(err)=>{
     res.status(400).send(err);
   });
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;
  //Valid id use ObjectID.isValid
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  //findById
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return send.status(404).send();
    }
    res.send({todo});
  }).catch(e=>{
    res.status(400).send();
  });

})


app.listen(3000, ()=>{
  console.log('Server is up on port 3000.');
});


module.exports.app = app;
