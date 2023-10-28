const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://josebarrundia21:Perromon21.@cluster0.s4zyhbs.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const collection =  client.db('sample_airbnb').collection('listingsAndReviews');  // Your collection name
    const documents = await collection.find({}).toArray();
    console.log(documents);
  } 
  catch (err) {
    console.error(err);
    } 
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);