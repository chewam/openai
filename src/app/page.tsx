import Form from "@/ui/form"
import Messages from "@/ui/messages"
import { ChatContextProvider } from "./chat-context"

const Page = () => (
  <main>
    <ChatContextProvider>
      <Messages />
      <Form />
    </ChatContextProvider>
  </main>
)

export default Page
