import clientPromise from '@/mongo/connectdb';

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db('my-shop');

  const newOrder = await db.collection('orders').insertOne({
    ...req.body,
    isPaid: true,
  });

  res.status(201).send(newOrder);
};
export default handler;