import prisma from "@/prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log('===> search ' + req.method)
    try {
      const { authorId, body } = req.body;
      /**
       * Save search
       */
      const result = await prisma.post.create({
        data: {
          authorId,
          body
        },
      });

      res.status(200).json(result);
    } catch (error: any) {
      console.log(error);
      res.status(500).end();
    }
  }
}