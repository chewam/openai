import { Inter } from "@next/font/google"

import { Form } from "@/ui/form"
import Message from "@/ui/message"
import { FormDataContextProvider } from "./form-data-context"

const inter = Inter({ subsets: ["latin"] })

const Page = () => (
  <main>
    <h1 className={inter.className}>Open AI - Test App</h1>
    <FormDataContextProvider>
      <Form />
      <Message />
    </FormDataContextProvider>
  </main>
)

export default Page
