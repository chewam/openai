import { FormDataContext } from "@/app/form-data-context"
import { useContext, useEffect, useRef, useState } from "react"

const format = (count: number) => {
  const dt = new Date(0)
  dt.setMilliseconds(count * 100)
  const seconds = dt.getSeconds()
  const milliseconds = dt.getMilliseconds() / 100
  return `${seconds.toString().padStart(2, "0")}.${milliseconds
    .toString()
    .padStart(1, "0")}s`
}

const Timer = () => {
  const [count, setCount] = useState(0)
  const interval = useRef<NodeJS.Timeout | null>(null)
  const countRef = useRef(count)
  const {
    formData: { status },
  } = useContext(FormDataContext)

  useEffect(() => {
    if (status === "loading" && !interval.current) {
      countRef.current = 0
      interval.current = setInterval(() => {
        setCount(++countRef.current)
      }, 100)
    } else if (status !== "loading" && interval.current) {
      clearInterval(interval.current)
      interval.current = null
    }
  }, [status])

  return <div className="timer">{count ? format(count) : null}</div>
}

export default Timer
