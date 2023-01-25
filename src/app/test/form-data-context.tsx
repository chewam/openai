"use client"

import React, { createContext, useState } from "react"

export const FormDataContext = createContext<{
  formData: { namespace: string; components: string }
  setFormData: (formData: { namespace: string; components: string }) => void
}>({
  formData: { namespace: "", components: "" },
  setFormData: () => {},
})

export const FormDataContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [formData, setFormData] = useState({ namespace: "", components: "" })

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  )
}
