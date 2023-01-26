import type { NextApiRequest, NextApiResponse } from "next"

import openAI from "@/lib/openai"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { namespace, components } = req.query

  const componentsList = Array.isArray(components)
    ? components?.join(", ")
    : components || ""

  const prompt = `Create a simple calculator with user input`

  console.log({ namespace, componentsList, prompt })

  try {
    const result = await openAI(prompt)
    // console.log({ result })
    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ error })
    throw error
  }
}
