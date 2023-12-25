import Header from "src/components/header";
import Hero from "src/components/hero";

export default function Home() {
  return (
    <div className='bg-[rgb(536,536,536)] text-gray-800 h-screen snap-y snap-mandatory overflow-scroll z-0'>
      {/*<h1 className="text-3xl text-amber-300 font-bold underline">*/}
      {/*  Hello, World!*/}
      {/*</h1>*/}

      <Header />

      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/* About */}

      {/* Blogs */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

    </div>
  );
}