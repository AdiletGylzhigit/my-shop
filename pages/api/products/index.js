import clientPromise from "@/mongo/connectdb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db("my-shop");

  const products = await db.collection("products").find({}).toArray();

  res.status(201).send(products);
};

export default handler;
