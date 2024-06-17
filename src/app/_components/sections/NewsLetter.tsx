"use client";
/* eslint-disable @next/next/no-img-element */
import { TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import Container from "../custom-components/container";
import CustomButton from "../custom-components/button";
import { notifications } from "@mantine/notifications";
import { FaCheckCircle } from "react-icons/fa";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function NewsLetter() { 
  const form = useForm({
    initialValues: { email: "" },
    validate: zodResolver(emailSchema),
  });

  const handleSubscribe = (values: { email: string }) => {
    console.log("Subscribed with:", values);

    notifications.show({
      title: "Success! 🎉",
      message: "You've just hopped onto an exciting journey with us.",
      icon: <FaCheckCircle />,
      color: "teal",
      styles: {
        root: { top: "10px", right: "10px", position: "fixed" },
      },
    });
  };

  return (
    <Container>
      <div className="mx-auto my-20 text-gray-700 flex w-full flex-col items-center gap-y-4 rounded-lg py-20">
        <h1 className="text-center text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl">
          Visionary Vibes & Voices
        </h1>
        <p className={`text-center text-base sm:text-xl`}>
          OSNow is your place to gain experience in the tech industry. Subscribe, and never
          lose your way in the digital realm!
        </p>
        <form
          onSubmit={form.onSubmit(handleSubscribe)}
          className="relative flex w-full max-w-lg flex-col items-center gap-y-4 sm:flex-row sm:gap-y-0"
        >
          <TextInput
            radius="xl"
            size="lg"
            required
            {...form.getInputProps("email")}
            className="w-full"
            placeholder="Your email"
          />

          <CustomButton
            size="md"
            className="z-20 rounded-full sm:absolute sm:right-1 sm:top-1 sm:mt-0"
            variant="gradient"
            title="Subscribe"
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
}
