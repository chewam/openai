import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Page() {
  return <h1 className={inter.className}>Open AI - Test App</h1>
}
