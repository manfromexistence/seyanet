
import mongoose from "mongoose";
const uri = "mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/?retryWrites=true&w=majority&appName=seyaha";

const clientOptions:any = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function mongoDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}

mongoDB();
