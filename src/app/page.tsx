import Link from "next/link";
import { Button } from "@mantine/core";
import Hero from "./_components/sections/Hero";
import Challenges from "./_components/sections/Challenges";
import HowWeWork from "./_components/sections/How-we-work";
import Partners from "./_components/sections/Partners";
import Subscribe from "./_components/sections/Subscribe";
import Footer from "./_components/sections/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <p>More coming soon</p>

      <Link href="https://github.com/emmett23" target="_blank">
        <Button>Help us improve OSNow</Button>
      </Link>

      <Hero />
      <Challenges />
      <HowWeWork />
      <Partners />
      <Subscribe />
      <Footer />
    </main>
  );
}
