"use client";

import { useState } from "react";
import {
  Container,
  TextInput,
  Button,
  Title,
  Text,
  Paper,
  Box,
  rem,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { FaEnvelope } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with:", { email });

    notifications.show({
      title: "Subscribed!",
      message: "You have successfully subscribed to our newsletter",
      icon: <FaCheckCircle />,
      color: "teal",
      styles: {
        root: { top: "10px", right: "10px", position: "fixed" },
      },
    });
  };

  const icon = <FaEnvelope style={{ width: rem(16), height: rem(16) }} />;

  return (
    <div className="w-full bg-gray-100">
      <Container
        size="md"
        className="my-8 flex h-[40vh] flex-col items-center justify-center rounded-lg p-4 shadow-sm"
      >
        <Title order={2} className="mb-4 text-center text-3xl text-blue-700">
          Open Source Now
        </Title>
        <Text className="mb-6 text-center text-lg text-gray-600">
          OSNow is an open-source initiative empowering collaboration to create
          community-driven products.
        </Text>
        <Paper
          withBorder
          shadow="sm"
          p="lg"
          radius="md"
          className="w-full max-w-2xl rounded-2xl bg-white p-8"
        >
          <Box className="flex flex-col items-center justify-center md:flex-row">
            <TextInput
              aria-label="Email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              className="mb-4 w-full rounded-lg md:mb-0 md:mr-3"
              rightSection={icon}
            />

            <Button
              onClick={handleSubscribe}
              className="w-full rounded-md md:w-auto"
            >
              Subscribe
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Subscribe;
