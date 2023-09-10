import prisma from "../../helpers/prisma.js";

export async function getAllTshirts(req, res) {
  const tshirts = await prisma.tshirts.findMany({
    include: {
      tshirt_brand: true,
    },
  });

  if (!tshirts) {
    return res.json("No Tshirts Found");
  }

  res.json(tshirts);
}
