"use client"

import { ChatContext } from "@/app/chat-context"
import { useContext } from "react"
import Message from "./message"

const Messages = () => {
  const { messages } = useContext(ChatContext)

  return (
    <ul className="messages">
      {messages.map((message, i) => (
        <li key={i}>
          <Message message={message} />
        </li>
      ))}
    </ul>
  )
}

export default Messages
