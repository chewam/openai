"use client"

import { format } from "date-fns"

import type { Message } from "@/app/use-chat"

const Message = ({
  message: {
    data: { content, role },
    metadata: { creationDate, tokens },
  },
}: {
  message: Message
}) => {
  const date =
    creationDate instanceof Date ? creationDate : new Date(creationDate)

  return (
    <div className={`message ${role}`}>
      <div>{content}</div>
      <div className="info">
        {tokens && <div>tokens: {tokens}</div>}
        <div className="flex-1 text-right">{format(date, "PPPppp")}</div>
      </div>
    </div>
  )
}

export default Message
