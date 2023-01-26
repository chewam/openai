"use client"

import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import { FormDataContext } from "@/app/form-data-context"
import Spinner from "./spinner"

type FormData = {
  namespace: string
  components: string
}

const Form = () => {
  const { setFormData } = useContext(FormDataContext)
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<FormData>()

  async function getOpenAIResponse(data: FormData) {
    const response = await fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })

    if (response?.ok) {
      return response.json()
    } else {
      throw response?.statusText
    }
  }

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setFormData({ status: "loading" })
    try {
      const { result } = await getOpenAIResponse(data)
      console.log("RESULT", result)
      setFormData({ message: result })
      setLoading(false)
    } catch (error) {
      console.log("WE GOT IT BRO!", error)
      setFormData({ status: "error" })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fields">
        <label>
          Namespace:
          <input {...register("namespace")} placeholder="my-namespace" />
        </label>
        <label>
          Components:
          <input {...register("components")} placeholder="my-components" />
        </label>
      </div>
      <button type="submit">
        {loading && <Spinner size="sm" />}
        Submit
      </button>
    </form>
  )
}

export default Form
