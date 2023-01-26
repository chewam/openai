import Form from "@/ui/form"
import Message from "@/ui/message"
import { FormDataContextProvider } from "./form-data-context"

const Page = () => (
  <main>
    <FormDataContextProvider>
      <Form />
      <Message />
    </FormDataContextProvider>
  </main>
)

export default Page
