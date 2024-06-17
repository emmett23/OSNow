import Link from "next/link";
import { Button } from "@mantine/core";
import Container from "../custom-components/container";

const Hero = () => {
  return (
    <div className="min-h-[80vh] w-full bg-gray-100 py-12 md:py-24 lg:py-32 xl:py-48">
      <Container className="text-center">
        <h1 className="text-gray-700 text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl">
          Welcome to OSNow!
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Discover, collaborate, and contribute to open-source projects.
        </p>
        <Link href="https://github.com/emmett23" target="_blank">
          <Button className="mt-6" size="large">
            Help us improve OSNow
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Hero;
