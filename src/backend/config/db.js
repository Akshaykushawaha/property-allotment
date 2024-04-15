const mongoose = require('mongoose');

const connectDBuser = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://akshay:propertyallotment@cluster0.c9d47cy.mongodb.net/allotment?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    // mongoose.connection.db.collections()
    //   .then((collections) => {
    //     console.log('Collections:', collections.map(c => c.collectionName));
    //   })
    //   .catch((err) => {
    //     console.error('Error getting collections', err);
    //   });

    // Get the name of the collection that you want to get the schema for
    // const collectionName = 'divya';

    // // Dynamically create a model for the collection
    // const UnknownModel = mongoose.model(collectionName, new mongoose.Schema({}, { strict: false }));

    // // Get the schema for the model
    // const unknownSchema = UnknownModel.schema;

    // console.log(`Schema for ${collectionName} collection:`, unknownSchema.obj);

    // Get the name of the collection that you want to print the data for
  const collectionName = 'divyas';

  // Get a reference to the collection
  const collection = mongoose.connection.collection(collectionName);
  // Print the schema of the User model
  console.log("Schema of User model:", collection.schema);
  // Find all documents in the collection
  collection.findOne({address: "123 Main St"})
    .then((docs) => {
      console.log(`Data in ${collectionName} collection:`, docs);
    })
  
  
  await mongoose.connection.db.dropCollection('propertyas');
  //  // Define the schema for the user collection
  //  const userSchema = new mongoose.Schema({
  //   "ndfs": { type: String, required: true },
  // });

  // // Define the model for the user collection
  // const User = mongoose.model('Sind', userSchema);

  // // Print the schema of the User model
  // //console.log("Schema of User model:", User.schema);

  // // Find all documents in the user collection
  // const users = await User.find({});
  
  // // Print the retrieved data
  // console.log(`Data in user collection:`, users);


  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};


module.exports = { connectDBuser };