"use client";
import { MantineProvider } from "@mantine/core";
import React, { useState, type ReactNode, useEffect } from "react";
import { Notifications } from "@mantine/notifications";

interface MainProviderProps {
  children: ReactNode;
}
export default function MainProvider({ children }: MainProviderProps) {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (firstRender) {
    return <></>;
  }
  return (
    <MantineProvider>
      <Notifications />
      {children}
    </MantineProvider>
  );
}
