import Form from "@/ui/form"
import Message from "@/ui/message"
import { FormDataContextProvider } from "./form-data-context"

const Page = () => (
  <main>
    <h1>Open AI - Test App</h1>
    <FormDataContextProvider>
      <Form />
      <Message />
    </FormDataContextProvider>
  </main>
)

export default Page
