"use client";

import React, { Dispatch, SetStateAction } from "react";
import Input from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface InfoProps {
  formData: { name: string; email: string; phone: string };
  setFormData: Dispatch<SetStateAction<object>>;
  currentStep: number;
  goToStep: (step: number) => void;
}

const Info = ({ formData, setFormData, currentStep, goToStep }: InfoProps) => {
  const InfoSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(5, { message: "Email is required" }),
    phone: z
      .string()
      .min(2, { message: "Phone number is required" })
      .regex(/^\+?[1-9][0-9]{7,14}$/, { message: "Invalid phone number" }),
  });

  type ValidationSchema = z.infer<typeof InfoSchema>;

  const defaultValues: ValidationSchema = {
    name: formData?.name || "",
    email: formData?.email || "",
    phone: formData?.phone || "",
  };

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(InfoSchema),
    defaultValues,
  });

  const onSubmit = (data: ValidationSchema) => {
    setFormData({ ...data });
    goToStep(currentStep + 1);
  };

  return (
    <React.Fragment>
      <form className="flex h-full flex-col" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="absolute left-1/2 top-[110px] m-auto w-[90%] -translate-x-1/2 rounded-lg bg-white p-5 shadow-md sm:relative sm:top-0 sm:m-0 sm:w-full sm:p-0 sm:shadow-none">
          <div className="mb-4 w-full">
            <h1 className="text-[28px] font-extrabold text-[#002a5f]"> Personal info</h1>
            <p className="text-[13px] font-medium text-gray-400">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <div className="mt-4">
            <Input
              label="Name"
              placeholder="e.g. Stephen King"
              {...form.register("name")}
              errorValue={form.formState.errors.name?.message}
            />
            <Input
              label="Email Address"
              placeholder="e.g. stephenking@lorem.com"
              {...form.register("email")}
              errorValue={form.formState.errors.email?.message}
            />
            <Input
              label="Phone Number"
              placeholder="  e.g. +1 234 567 890"
              {...form.register("phone")}
              errorValue={form.formState.errors.phone?.message}
            />
          </div>
        </div>
        <div className="mt-auto flex w-full flex-row bg-white px-5 py-4 sm:px-0">
          <button
            type="submit"
            className="ml-auto h-10 rounded-md bg-[#002a5f] px-5 text-[14px] font-medium text-gray-100"
          >
            Next Step
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Info;
