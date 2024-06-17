import "@mantine/core/styles.css";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import MainProvider from "./_components/providers/main-providers";
import Header from "./_components/sections/nav/Header";

export const metadata = {
  title: "OSNow",
  description: "OSNow is an Open Source Platform for Everyone",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <MainProvider>
          <Header />
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
