import Container from "../custom-components/container";
import Image from 'next/image'; // Import Image component if using Next.js
import { companies } from "~/constants/partners";


const Partners = () => {
  return (
    <Container className="min-h-[70vh] relative overflow-hidden">
      <h1 className="text-4xl font-extrabold tracking-normal text-white sm:text-5xl lg:text-6xl mt-10 text-center">
        Partners
      </h1>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full mt-20">
        <div className="flex space-x-8 animate-marquee">
          {companies.map((company, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={company.src} alt={company.alt} width={100} height={50} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Partners;

