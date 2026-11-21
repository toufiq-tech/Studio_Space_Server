import express from "express";
import cors from "cors";
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const app = express();
const PORT = 5000;
// use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const client = new MongoClient(process.env.MONGO_URI);
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

connectToMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
} )