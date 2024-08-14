import Container from "../custom-components/container";
import { challenges} from '../../../constants/Challenges';
import Image from 'next/image';

const Challenges = () => {
  return (
    <Container className="min-h-[70vh] ">
      <div className="">
          <h1 className="text-4xl font-extrabold tracking-normal text-white sm:text-5xl lg:text-6xl text-center">
            Challenges
          </h1>
          <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Software Development</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="bg-purple-900 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-900 cursor-pointer">
                <Image src={challenge.image} alt={challenge.title} className="h-40 w-full object-cover rounded-lg" />
                <h2 className="text-xl font-semibold mt-4 text-white">{challenge.title}</h2>
                <p className="mt-2 text-orange-200">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>

    </Container>
  );
};

export default Challenges;
