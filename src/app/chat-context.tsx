"use client"

import { createContext, useMemo, useState } from "react"
import type { ChatCompletionRequestMessage } from "openai"

export type Message = {
  metadata: {
    creationDate: Date
  }
  data: ChatCompletionRequestMessage
}

export type ChatContext = {
  status?: "loading"
  messages: Message[]
  setMessages: (messages: Message[]) => void
}

export const ChatContext = createContext<ChatContext>({
  messages: [],
  setMessages: () => null,
})

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [messages, setMessages] = useState<Message[]>([])

  const value = useMemo(
    () => ({ messages, setMessages }),
    [messages, setMessages]
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
