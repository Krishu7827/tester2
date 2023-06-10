const { connectToDatabase, mongoose } = require("./index");

let buyer = mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    address:Object
})

let buyerModel = mongoose.model("buyer",buyer)


    



test("mongodbconnection", async () => {
  const connection = await connectToDatabase();
 // console.log(connection);

  expect(connection).toBeDefined();
  expect(mongoose.connection.readyState).toBe(1); // Ensure the connection is open (1)
});


test("test 1",async()=>{
//let docu = await buyerModel.find()
   let docu = await buyerModel.aggregate([ { $lookup: { from: "orders", localField: "_id", foreignField: "customer_id", as: "orders" } },{$match:{orders:{$ne:[]}}},{$project:{_id:0,name:1}}]).exec()
   console.log(docu)
   let expectdocu = [
    { name: 'John Smith' },
    { name: 'Alice Johnson' },
    { name: 'Michael Brown' },
    { name: 'Emma Davis' },
    { name: 'Daniel Wilson' }
  ]

  expect(docu).toEqual(expectdocu)
   
})

test("test 2",async()=>{
    //let docu = await buyerModel.find().exec()
      let docu = await buyerModel.aggregate([ { $lookup: { from: "orders", localField: "_id", foreignField: "customer_id", as: "orders" } },{$match:{orders:{$ne:[]}}},{$project:{_id:0,name:1}}]).exec()
      // console.log(docu)
       let expectdocu = [
        { name: 'John Smith' },
        { name: 'Alice Johnson' },
        { name: 'Michael Brown' },
        { name: 'Emma Davis' },
        { name: 'Daniel Wilson' }
      ]
      expect(docu).toEqual(expectdocu)
       
    })




afterAll(async () => {
    // Close the Mongoose connection after all tests are complete
    await mongoose.connection.close();
  });
