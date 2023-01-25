"use client"

import React, { useContext } from "react"

import { FormDataContext } from "@/app/test/form-data-context"

export const Message: React.FC = () => {
  const { formData } = useContext(FormDataContext)

  return <pre>{JSON.stringify(formData, null, 2)}</pre>
}
