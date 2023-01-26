"use client"

import React, { useContext } from "react"
import { useForm } from "react-hook-form"

import { FormDataContext } from "@/app/form-data-context"

type FormData = { prompt: string }

const Form = () => {
  const { formData, setFormData } = useContext(FormDataContext)
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
    setFormData({ status: "loading" })
    try {
      const { result } = await getOpenAIResponse(data)
      setFormData({ message: result })
    } catch (error) {
      setFormData({ status: "error" })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Message:
        <textarea
          rows={3}
          {...register("prompt")}
          placeholder="Write instructions here..."
          value={`# Create a Python dictionary of 6 countries and their capitals\ncountries = `}
        />
      </label>
      <button type="submit" disabled={formData.status === "loading"}>
        Submit
      </button>
    </form>
  )
}

export default Form
