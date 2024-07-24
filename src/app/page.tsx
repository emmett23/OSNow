import Hero from "./_components/sections/Hero";
import Challenges from "./_components/sections/Challenges";
import HowWeWork from "./_components/sections/How-we-work";
import Partners from "./_components/sections/Partners";
import NewsLetter from "./_components/sections/NewsLetter";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#131735] overflow-x-hidden">
      <Hero />
      <Challenges />
      <HowWeWork />
      <Partners />
      <NewsLetter />
    </main>
  );
}
