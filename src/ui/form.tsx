"use client"

import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import { FormDataContext } from "@/app/form-data-context"
import Timer from "./timer"

type FormData = { prompt: string }

const defaultPrompt =
  "# Create a Python dictionary of 6 countries and their capitals\ncountries = "

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const [prompt, setPrompt] = useState<string>(defaultPrompt)
  const { formData, setFormData } = useContext(FormDataContext)

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
          value={prompt}
          {...register("prompt")}
          placeholder="Write instructions here..."
          onChange={({ target: { value } }) => setPrompt(value)}
        />
      </label>
      <div className="flex items-center">
        <button type="submit" disabled={formData.status === "loading"}>
          Submit
        </button>
        <Timer />
      </div>
    </form>
  )
}

export default Form
