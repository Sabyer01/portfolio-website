
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    title: 'HomeSense',
    description: 'An IoT-based system for households that can track and monitor electricity usage in real-time, predict monthly costs with Logistic Regression ML, and provide informed and efficient energy recommendations.',
    projectUrl: 'https://github.com/jiro1106/HomeSense',
    tags: ['React', 'React Native', 'MongoDB', 'Scikit-learn', 'FastAPI', 'FlaskAPI'],
  },
  {
    title: 'Xtravagala',
    description: 'A website platform that was designed for event-goers and event planners that smoothly and efficiently handles registration, scheduling, and all event needs in one place.',
    projectUrl: 'https://github.com/jiro1106/final-project-group-2-webdevt',
    tags: ['React', 'JavaScript'],
  },
  {
    title: 'Shoe E-Commerce MobApp',
    description: 'A mobile application for customers and shoe sellers that makes browsing, buying, and managing footwear products fast, accessible, convenient in one go.',
    projectUrl: 'https://github.com/AdrianG-26/final-project-group1-mobapp',
    tags: ['React Native', 'TypeScript'],
  },
];

const ProjectsPage = () => {
  return (
    <main id='projects' className="relative mx-auto flex min-h-[80vh] scroll-mt-20 w-full max-w-5xl flex-col px-6 pb-24 pt-16 ">

                <div className='max-w-xl text-left'>
                  <h1 className="text-4xl font-bold">Projects</h1>
                  <p className='mt-1'> Here are some of the notable projects I have worked on: </p>
                  </div>

                  <div className='grid gap-6'>
                    <section className='grid gap-6 sm:grid-cols-3 mt-10'>
                      {projects.map((project, index) => (
                        <article key={`${project.title}-${index}`} className='flex h-full flex-col rounded-2xl bg-[#121212] p-6 shadow-lg'>
                          <h2 className='text-lg font-bold text-white'>{project.title}</h2>

                          <p className='mt-2 h-[130px] overflow-hidden text-sm leading-relaxed text-zinc-200 [display:-webkit-box] [-webkit-box-orient:vertical] text-justify'>
                            {project.description}
                          </p>

                          <div className='mt-5 h-[100px] overflow-hidden'>
                            <div className='flex flex-wrap gap-2'>
                              {project.tags.map((tag) => (
                                <span
                                  key={`${project.title}-${tag}`}
                                  className='rounded border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300'
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className='mt-auto pt-6 flex items-center justify-between'>
                            <a
                              href={project.projectUrl}
                              target='_blank'
                              rel='noreferrer'
                              className='text-sm text-zinc-400 transition-colors hover:text-zinc-300 -m-[5px] p-[5px]'
                            >
                              Click to see the project {'->'}
                            </a>
                            <a
                              href={project.projectUrl}
                              target='_blank'
                              rel='noreferrer'
                              className='-m-[10px] p-[10px] text-2xl text-zinc-200 transition-colors hover:text-white'
                              aria-label='Open GitHub project'
                            >
                              <SiGithub />
                            </a>
                          </div>
                        </article>
                      ))}
                    </section>
                  </div>
                      
                    <div className='max-w-5xl justify-content-center mt-60'>
                        <h1 className='text-center text-md'>
                          © 2026 Xavier Gelligan. All rights reserved.
                        </h1>
                    </div>
    </main>
  );
};

export default ProjectsPage;