"use client"

import { createContext, useContext, useEffect, useState } from "react"

import type { ChatCompletionRequestMessage } from "openai"

export interface Message {
  metadata: {
    tokens?: number
    creationDate: Date
  }
  data: ChatCompletionRequestMessage
}

interface ChatContextValue {
  status: "ready" | "loading"
  messages: Message[]
  addMessage: (message: Message) => void
  setStatus: (status: "ready" | "loading") => void
}

const ChatContext = createContext<ChatContextValue>({
  status: "ready",
  messages: [],
  addMessage: () => {},
  setStatus: () => {},
})

interface ChatProviderProps {
  children: React.ReactNode
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [initialized, setInitialized] = useState<boolean>(false)
  const [status, setStatus] = useState<"ready" | "loading">("ready")

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages")
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
      setInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("messages", JSON.stringify(messages))
    }
  }, [messages, initialized])

  const contextValue = {
    status,
    messages,
    addMessage,
    setStatus,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  )
}

export const useChat = (): ChatContextValue => useContext(ChatContext)
