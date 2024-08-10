"use client";

import React, { useEffect, useState } from "react";
import { Callout, TextArea, TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ProductForm {
  title: string;
  description: string;
}
const NewProductPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<ProductForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl space-y-2">
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/products", data);
            router.push("/product");
          } catch (error) {
            setError("error occured!");
          }
        })}
      >
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField.Root placeholder="Title" {...field}>
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>Submit New Product </Button>
      </form>
    </div>
  );
};

export default NewProductPage;
