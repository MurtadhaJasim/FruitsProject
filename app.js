const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Why No Name?']
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name:"Peach",
  rating: 10,
  review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
  name:"pineapple",
  rating:9,
  review:"Great fruit."
});

// pineapple.save();

const coco = new Fruit ({
  name:"coco",
  rating:9,
  review:"coco fruit."
});

// coco.save();


const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit:pineapple
});

// person.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});


// Person.updateOne({_id: "63a1f030c1a95ad580debdcc"}, {favouriteFruit:coco}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });



// Fruit.deleteOne({{name:"coconut"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });

// Person.deleteMany({name:"Amy"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Delete all");
//   }
// });
