import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "寺田心",
      email: "bookOffnanoniHonNeJan@gmail.com",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 60 })} />
      {errors.name && "名前を入力してください"}
      <ErrorMessage errors={errors} name="name" />
      <input
        {...register("email", {
          required: true,
          maxLength: 60,
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "メールアドレスの形式が不正です",
          },
        })}
      />
      {errors.email && "メールアドレスを入力してください"}
      <ErrorMessage errors={errors} name="email" />
      <button type="submit">Submit</button>
    </form>
  );
};
