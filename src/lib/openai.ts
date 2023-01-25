import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function useOpenAI(prompt: string) {
  try {
    const completion = await openai.createCompletion({
      // prompt,
      // top_p: 1,
      // temperature: 0,
      // max_tokens: 256,
      // presence_penalty: 0,
      // frequency_penalty: 0,
      // model: "code-davinci-002",
      model: "code-davinci-002",
      prompt: "# Hello",
      temperature: 0,
      max_tokens: 256,
    })
    return completion.data.choices[0].text
  } catch (error) {
    console.log({ error })
    return error
  }
}
