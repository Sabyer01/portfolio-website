/*Copilot*/
import DecryptedText from "@/components/DecryptedText";
import GooeyNav from "@/components/GooeyNav";
import DarkVeil from "@/components/DarkVeil";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
];

const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <header className="absolute top-6 left-0 z-20 flex w-full justify-center px-4 sm:top-8">
        <div className="relative h-10 w-full max-w-xl">
          <GooeyNav
            items={items}
            particleCount={7}
            particleDistances={[90, 10]}
            particleR={300}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={800}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </header>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <DecryptedText
            text="Hello, I am Xavier"
            speed={80}
            maxIterations={10}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            animateOn="inViewHover"
            sequential={true}
          />
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-base text-white/85 sm:text-lg md:text-2xl">
          I am a software engineer with a passion for building web applications and
          mobile applications.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
