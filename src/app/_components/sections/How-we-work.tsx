import Link from "next/link";
import Container from "../custom-components/container";

const HowWeWork = () => {
  return (
    <Container className="min-h-[70vh]">
      <h2 className="text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl text-center text-white">
              How We Work
      </h2>
      <div className="flex flex-col justify-center md:flex-row text-white mt-10">
        <div className="md:w-1/2 md:pr-12 lg:w-2/3">
          <div>
            
            <p className="mb-6 mt-8 bg-[#767994] bg-opacity-25 rounded-lg p-14 mr-12">
              Open Source Now (OSNow) is an open-source initiative empowering
              collaboration to create community-driven products. <br /> We
              believe in transparency, inclusivity, <br />
              and the power of collective intelligence to drive innovation
              forward.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3 mr-28 mt-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aWfYxg-Ypm4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowWeWork;
