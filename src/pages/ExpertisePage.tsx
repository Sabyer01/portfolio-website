import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNumpy, SiPython, SiJavascript, SiVite,SiNodedotjs, SiMongodb,SiFastapi, SiTensorflow, SiKeras, SiScikitlearn, SiPandas,SiBootstrap  } from 'react-icons/si';
import LogoLoop from '@/components/LogoLoop';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNumpy />, title: "NumPy", href: "https://numpy.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiKeras />, title: "Keras", href: "https://keras.io" },
  { node: <SiScikitlearn />, title: "Scikit-learn", href: "https://scikit-learn.org" },
  { node: <SiPandas />, title: "Pandas", href: "https://pandas.pydata.org" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" }
];

const ExpertisePage = () => {
  return (
    <main id="expertise" className="relative mx-auto min-h-[80vh] max-w-5xl scroll-mt-20 bg-transparent text-white px-6 pb-24 pt-16">

      {/* Header Section */}
        <section className='max-w-3xl text-left'>
          <h1 className="text-4xl font-bold">Expertise</h1>
          <p className="mt-1 mx-auto text-zinc-200 text-justify">
            I have experience in various technologies and frameworks, including React, Node.js, and Python.
          </p>
          </section>
      

      {/* Tech Stack Section */}
      <div className="mx-auto max-w-5xl mt-10">
        <div className="rounded-2xl bg-[#121212] p-6 shadow-lg">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white">Tech Stack</h2>

          {/* Frontend */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-400">Frontend</h3>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-200">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>React Native</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>Bootstrap</span>
            </div>
          </div>

          {/* Backend */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-400">Backend</h3>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-200">
              <span>Node.js</span>
              <span>Python</span>
              <span>MongoDB</span>
              <span>FastAPI</span>
              <span>FlaskAPI</span>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-400">AI & Machine Learning</h3>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-200">
              <span>Numpy</span>
              <span>Pandas</span>
              <span>Scikit-learn</span>
              <span>Tensorflow</span>
              <span>Keras</span>
              <span>FastAPI</span>
              <span>FlaskAPI</span>
            </div>
          </div>

        </div>
      </div>

      {/* Logo Loop */}
      <div className="relative mt-10 ">
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="right"
          logoHeight={40}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </main>
  );
};

export default ExpertisePage;