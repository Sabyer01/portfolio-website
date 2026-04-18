/*Copilot*/
import DecryptedText from "@/components/DecryptedText";
import GooeyNav from "@/components/GooeyNav";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
];

const HomePage = () => {
  return (
    <main
      id="home"
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-transparent text-white"
    >
      <header className="fixed top-6 left-0 z-50 flex w-full justify-center px-4 sm:top-8">
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

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 pt-20 text-center sm:pt-24">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          <DecryptedText
            text="Hello, I am Xavier Gelligan"
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

        <p className="mt-6 max-w-3xl text-pretty text-base text-white/85 sm:text-lg md:text-md">
          I am an aspiring data scientist with a passion for developing innovative, data-driven solutions with technology that can help individuals and businesses in their everyday endeavors.
        </p>
      </section>
    </main>
  );
};

export default HomePage;