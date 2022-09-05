import { createCar } from "../../lib/redis";


export default async function handler(req, res) {
  const { make, model, image, description } = req.body;
  
  const id = await createCar({ make, model, image, description });

  res.status(200).json({ id });
}