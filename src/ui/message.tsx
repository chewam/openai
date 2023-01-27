"use client"

import { useContext } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs"

import Spinner from "./spinner"
import { FormDataContext } from "@/app/form-data-context"

const LoadingMask = () => (
  <div className="loading-mask">
    <Spinner />
  </div>
)

const Error = () => (
  <div>
    <p>An error occured !</p>
    <p>There was something wrong server side. Please try again later.</p>
  </div>
)

const Message = () => {
  const { formData } = useContext(FormDataContext)
  return (
    <div className="message">
      {formData.status === "loading" && <LoadingMask />}
      {formData.status === "error" && <Error />}
      <SyntaxHighlighter
        wrapLongLines={true}
        language="javascript"
        style={tomorrowNight}
      >
        {formData.message || ""}
      </SyntaxHighlighter>
    </div>
  )
}

export default Message
