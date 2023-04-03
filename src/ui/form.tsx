"use client"

import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import { ChatContext, type Message } from "@/app/chat-context"
import Timer from "./timer"
import type { ChatCompletionRequestMessage } from "openai"

type FormData = { prompt: string }

async function getOpenAIResponse(messages: ChatCompletionRequestMessage[]) {
  const response = await fetch("/api/openai", {
    method: "POST",
    body: JSON.stringify(messages),
    headers: { "Content-Type": "application/json" },
  })

  if (response?.ok) {
    return response.json()
  } else {
    throw response?.statusText
  }
}

const Form = () => {
  const [prompt, setPrompt] = useState<string>("")
  const { register, handleSubmit } = useForm<FormData>()
  const { messages, setMessages } = useContext(ChatContext)

  const onSubmit = async (data: FormData) => {
    const message = {
      data: {
        role: "user",
        content: data.prompt,
      },
      metadata: { creationDate: new Date() },
    } as Message

    const allMessages = [...messages, message]

    setMessages(allMessages)
    setPrompt("")

    try {
      const trimMessages = allMessages.map(({ data }) => data)
      const { result } = await getOpenAIResponse(trimMessages)
      const botMessage = {
        data: result,
        metadata: { creationDate: new Date() },
      } as Message

      setMessages([...allMessages, botMessage])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Message:
        <textarea
          rows={3}
          value={prompt}
          {...register("prompt")}
          placeholder="Write instructions here..."
          onChange={({ target: { value } }) => setPrompt(value)}
        />
      </label>
      <div className="flex items-center">
        <button type="submit">Submit</button>
        <Timer />
      </div>
    </form>
  )
}

export default Form
