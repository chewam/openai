"use client"

import React, { createContext, useState } from "react"

export const FormDataContext = createContext<{
  formData: { loading: boolean; message: string }
  setFormData: (formData: { loading: boolean; message: string }) => void
}>({
  formData: { loading: false, message: "" },
  setFormData: () => {},
})

export const FormDataContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [formData, setFormData] = useState({ loading: false, message: "" })

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  )
}
