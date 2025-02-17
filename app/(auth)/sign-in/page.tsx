"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validattions";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
    ></AuthForm>
  );
};

export default Page;
