import React from "react";
import Container from "../_components/custom-components/container";

const visionaries = [
  { name: "Martin Kleppmann", description: "Local-first software" },
  { name: "Doc Searls", description: "Privacy Manifesto" },
  { name: "Tim Berners-Lee", description: "One Small Step for the Web..." },
  { name: "Juan Bennet", description: "IPFS and the Permanent Web" },
  { name: "Chris Dixon", description: "Why Decentralization Matters" },
  { name: "Vitalik Buterin", description: "The Meaning of Decentralization" },
];

const About = () => {
  return (
    <Container className="container mx-auto flex min-h-screen flex-col items-center p-8 pt-[100px] text-gray-900 md:pt-[120px]">
      <h1 className="pb-4 text-center text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl">
        About Us
      </h1>
      <div className="mx-auto mb-8 flex max-w-3xl flex-col gap-4">
        <h2 className="mb-4 text-2xl font-semibold">
          Why do we do what we do?
        </h2>
        <p className="mb-4">
          OSNow is an open-source initiative empowering collaboration to create
          community-driven products. We aspire to create an internet that&apos;s
          all about the user, easy to use without headaches, and respects
          privacy.
        </p>
        <p className="">
          To make this happen, we aim to not only simplify what&apos;s already
          out there but provide a revolutionary alternative.
        </p>
      </div>
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Our vision is heavily influenced by these visionaries:
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visionaries.map((visionary, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg bg-gray-800 p-3 text-gray-300 hover:bg-gray-700 md:p-6"
          >
            <h3 className="text-xl font-bold">{visionary.name}</h3>
            <p>{visionary.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default About;
