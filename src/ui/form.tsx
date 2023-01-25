"use client"

import React, { useContext } from "react"
import { useForm } from "react-hook-form"

import { FormDataContext } from "@/app/test/form-data-context"

type FormData = {
  namespace: string
  components: string
}

export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const { setFormData } = useContext(FormDataContext)

  const onSubmit = (data: FormData) => {
    fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(({ result }) => setFormData(result))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Namespace:
        <input {...register("namespace")} />
      </label>
      <label>
        Components:
        <input {...register("components")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
