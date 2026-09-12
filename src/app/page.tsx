import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Reflection4C } from "@/components/sections/reflection-4c";
import { Artifacts } from "@/components/sections/artifacts";
import { Frameworks } from "@/components/sections/frameworks";
import { Commitment } from "@/components/sections/commitment";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Reflection4C />
        <Artifacts />
        <Frameworks />
        <Commitment />
      </main>
      <Footer />
    </div>
  );
}
