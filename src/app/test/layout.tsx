import { Form } from "@/ui/form"
import Message from "@/ui/message"
import React from "react"
import { FormDataContextProvider } from "./form-data-context"

const Layout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
    <FormDataContextProvider>
      <Form />
      <Message />
    </FormDataContextProvider>
  </main>
)

export default Layout
