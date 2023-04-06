import type { NextApiRequest, NextApiResponse } from "next"

import openAI from "@/lib/openai"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req

  try {
    const result = await openAI(body)
    res.status(200).json({ result })
  } catch (error) {
    console.log(error)
    res.status(503).send({ error: "failed to load data" })
  }
}
