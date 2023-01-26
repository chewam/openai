"use client"

import React, { useContext } from "react"

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
    <pre className="message">
      {formData.status === "loading" && <LoadingMask />}
      {formData.status === "error" && <Error />}
      {formData.message}
    </pre>
  )
}

export default Message
