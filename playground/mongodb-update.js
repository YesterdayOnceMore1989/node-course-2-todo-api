const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to server.', err);
  }
  console.log('Connected to server.');

// db.collection('Todos').findOneAndUpdate(
//   {_id:new ObjectID('5a693e65261b9b76cec1a4d2')},
//   {$rename:{'completed':'completedv2'}},{returnOriginal: false}
// ).then(result=>console.log(result));


// db.collection('Todos').findOneAndUpdate(
//   {_id:new ObjectID('5a693e65261b9b76cec1a4d2')},
//   {$set:{completed:true}},{returnOriginal: false}
// ).then(result=>console.log(result));


// db.collection('Users').findOneAndUpdate(
//   {_id:new ObjectID('5a683daeebf22a1528cb0672')},
//   {$set:{name:"Hoducthanhde"},$inc:{age:1}},{returnOriginal: false}
// ).then(result=>console.log(result));

db.collection('Users').findOneAndUpdate({_id:new ObjectID('5a683daeebf22a1528cb0672')},
  {$set:{name:"Pham Thi Ngoc Tram"}, $inc:{age: -5}},{returnOriginal:false}
).then(res=>console.log(res));



  //db.close();
});
