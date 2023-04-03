"use client"

import { format } from "date-fns"

import type { Message } from "@/app/chat-context"

const Message = ({
  message: {
    data: { content, role },
    metadata: { creationDate },
  },
}: {
  message: Message
}) => {
  return (
    <div className={`message ${role}`}>
      <div>{content}</div>
      <div className="text-right text-sm">{format(creationDate, "PPPppp")}</div>
    </div>
  )
}

export default Message
