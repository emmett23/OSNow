"use client";
import Link from "next/link";
import { Button } from "@mantine/core";
import Container from "../custom-components/container";
import { ComputersCanvas } from "../canvas";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#131735] pt-[120px] py-12 md:py-24 lg:py-32 xl:py-48 rounded-b-3xl ">
      <Container className="text-center relative z-10 bg-[#767994] bg-opacity-25 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl">
          Welcome to OSNow!
        </h1>
        <p className="mt-4  text-lg">
          Discover, collaborate, and contribute to open-source projects.
        </p>
        <Link href="https://github.com/emmett23" target="_blank">
          <Button className="mt-6" size="large">
            Help us improve OSNow
          </Button>
        </Link>
      </Container>
      <div className="absolute inset-0 flex justify-center z-0 h-128">
        <ComputersCanvas/>
      </div>
    </div>
  );
};

export default Hero;
