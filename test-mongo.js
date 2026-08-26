const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is missing");
  process.exit(1);
}

const client = new MongoClient(uri);

async function test() {
  try {
    await client.connect();
    await client.db("weather-dashboard").command({ ping: 1 });

    console.log("✅ MONGODB CONNECTION WORKS");
  } catch (error) {
    console.error("❌ MONGODB CONNECTION FAILED");
    console.error(error);
  } finally {
    await client.close();
  }
}

test();
