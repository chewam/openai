"use client"

import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import { FormDataContext } from "@/app/test/form-data-context"
import Spinner from "./spinner"

type FormData = {
  namespace: string
  components: string
}

export const Form: React.FC = () => {
  const { setFormData } = useContext(FormDataContext)
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setLoading(true)
    setFormData({ loading: true, message: "" })
    fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(({ result }) => {
        setFormData({ loading: false, message: result })
        setLoading(false)
      })
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
