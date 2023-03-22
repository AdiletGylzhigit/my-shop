import clientPromise from "@/mongo/connectdb";

const handler = async(req,res) => {
  const {email} = req.body
  const client = await clientPromise;
  const db = client.db('my-shop');
 
  
  const userEmail = db.collection('users-email').insertOne({
    ...req.body
  })

  res.status(200).send(userEmail)
}

export default handler;