import ProfileCard from "@/components/ProfileCard";
import gradImg from "@/assets/gradImg.webp";
import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <main id="about" className='relative mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col md:flex-row items-end scroll-mt-20 bg-trasnparent px-4 md:px-6 pb-16 md:pb-24 pt-12 md:pt-16 gap-8 md:gap-0'
    >

        {/* Right: Text */}
        <div className="text-left">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="mt-1 text-zinc-300 text-justify">
            I am a Senior College Student at De La Salle Lipa, located in Batangas, Philippines. I am currently pursuing a degree in Computer Science, 
            aspiring to be a future data scientist. My passion is to develop practical and unique solutions and that leads to a better decision-making. 
            I am eager to apply my skills and knowledge in real-world projects and contribute to the field of data science. I am also interested in automation and
            machine learning, and I am constantly seeking opportunities to learn and grow in these areas.
            <br/>
            <br/>
            In my free time, I enjoy running or working out as well as playing video games like VALORANT and Mobile Legends. I am always open to new opportunities and connections, 
            so feel free to reach out if you want to connect or hire me for a project.
          </p>

          <section className='rounded-2xl bg-[#121212] p-6 shadow-lg mt-11'>
            <h2 className='text-lg font-semibold text-white'>Contact</h2>
            <div className='mt-5 flex flex-wrap gap-3'>
              <a
                href='mailto:xaviergelligan.cs@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white'
              >
                <SiGmail className='text-base' />
                Gmail
              </a>

              <a
                href='https://github.com/Sabyer01'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white'
              >
                <SiGithub className='text-base' />
                GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/xaviergelligan'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white'
              >
                <FaLinkedin className='text-base' />
                LinkedIn
              </a>
            </div>
          </section>
        </div>

        {/* Left: Profile Card */}
        <div className="flex w-full md:w-auto justify-center px-15 self-end">
          <ProfileCard
            handle="Xavier Gelligan"
            status="Online"
            avatarUrl={gradImg}
            showUserInfo
            showContactButton={false}
            enableTilt={false}
          />
        </div>

        

    </main>
  );
};

export default AboutPage;