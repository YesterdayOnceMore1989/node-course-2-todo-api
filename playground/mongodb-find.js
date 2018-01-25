//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB Server.');

// db.collection('Todos').find({_id:new ObjectID("5a683ba013403a1b0c706b96")}).toArray().then((docs)=>{
//     console.log('Todos: ');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err)=>{
//     console.log('Unable to fetch todos', err);
//   });

// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Todos count: ${count} `);
//   }, (err)=>{
//     console.log('Unable to fetch todos', err);
//   });

db.collection('Users').find({name: 'Andrew'}).toArray().then(
  res=>console.log(JSON.stringify(res, undefined, 2)),
  err=>console.log('Not found', err)
)
db.collection('Users').find({name:'Andrew'}).count().then(res=>console.log('Total: ', res),
  err=>console.log('Not found', err)
)





  //db.close();
});
