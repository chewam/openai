"use client"

import React, { createContext, useState } from "react"

type FormDataContext = {
  formData: {
    status?: "loading" | "error"
    message?: string
  }
  setFormData: (formData: {
    status?: "loading" | "error"
    message?: string
  }) => void
}

export const FormDataContext = createContext<FormDataContext>({
  formData: {},
  setFormData: () => {},
})

export const FormDataContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [formData, setFormData] = useState({})

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  )
}
