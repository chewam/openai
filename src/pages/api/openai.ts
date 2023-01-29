import type { NextApiRequest, NextApiResponse } from "next"

import openAI from "@/lib/openai"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req

  const prompt = Array.isArray(body.prompt) ? body.prompt[0] : body.prompt || ""

  if (prompt.length) {
    try {
      const result = await openAI(prompt)
      res.status(200).json({ result })
    } catch (error) {
      res.status(503).json({ error })
    }
  } else {
    res.status(422).send({ error: "Argument is missing." })
  }
}
