import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function useOpenAI(prompt: string) {
  // throw new Error("---> RANDOM SERVER ERROR")

  try {
    const completion = await openai.createCompletion({
      top_p: 1,
      temperature: 0,
      max_tokens: 512,
      presence_penalty: 0,
      frequency_penalty: 0,
      model: "code-davinci-002",
      prompt:
        "# Create a Python dictionary of 6 countries and their capitals\ncountries = ",
    })
    return completion.data.choices[0].text
  } catch (error) {
    throw error
  }
}
