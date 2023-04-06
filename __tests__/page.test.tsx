import { render } from "@testing-library/react"

import Page from "@/app/page"

jest.mock("react-textarea-autosize", () => {
  const ReactTextareaAutosize = () => <textarea>test</textarea>
  return ReactTextareaAutosize
})

it("renders homepage unchanged", () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
