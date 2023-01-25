"use client"

import React, { useContext } from "react"

import Spinner from "./spinner"
import { FormDataContext } from "@/app/form-data-context"

const LoadingMask = () => (
  <div className="loading-mask">
    <Spinner />
  </div>
)

const Message = () => {
  const { formData } = useContext(FormDataContext)
  return (
    <pre className="message">
      {formData.loading && <LoadingMask />}
      {formData.message}
    </pre>
  )
}

export default Message
