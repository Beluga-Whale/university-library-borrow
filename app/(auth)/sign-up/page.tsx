"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validattions";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={() => {}}
    ></AuthForm>
  );
};

export default Page;
