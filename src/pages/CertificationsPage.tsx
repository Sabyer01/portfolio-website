import { SiDatacamp } from 'react-icons/si';

const certifications = [
  {
    title: 'Intermediate Python',
    description:
      'This certification validates my expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
    certificateUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a938da2876715444a8fac0c52b75b4bd0cae2ee9',
  },
  {
    title: 'Intermediate SQL',
    description:
      'This certification validates my expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
    certificateUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/24f99e3f727060b0c0267a63466de7f26b03229a',
  },
  {
    title: 'Introduction to Python',
    description:
      'This certification validates my expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
    certificateUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/511893866a00553614d09f0b1bf3643c2aea6e97',
  },
  {
    title: 'Introduction to SQL',
    description:
      'This certification validates my expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
    certificateUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/02bd520b6d721c410e44d9047a32e9dbb8c3bfaa',
  },
];

const CertificationsPage = () => {
  return (
    <main id='certifications' className="relative mx-auto flex min-h-[80vh] scroll-mt-20 w-full max-w-5xl flex-col px-6 pb-24 pt-16 ">

                <div className='max-w-xl text-left'>
                  <h1 className="text-4xl font-bold">Certifications</h1>
                  <p className='mt-1'> Here are some of the notable certifications I have obtained: </p>
                  </div>

                  <div className='grid gap-6'>
                    <section className='grid gap-6 sm:grid-cols-2 mt-10'>
                      {certifications.map((certification, index) => (
                        <div key={`${certification.title}-${index}`} className='rounded-2xl bg-[#121212] p-6 shadow-lg'>
                          <h2 className='text-lg font-bold text-white'>{certification.title}</h2>
                          <p className='mt-2 text-sm text-zinc-200'>{certification.description}</p>

                          <div className='mt-6 flex items-center justify-between'>
                            <a
                              href={certification.certificateUrl}
                              target='_blank'
                              rel='noreferrer'
                              className='text-sm text-zinc-400 transition-colors hover:text-zinc-300 -m-[5px] p-[5px]'
                            >
                              Click to see the certificate {'->'}
                            </a>
                            <a
                              href={certification.certificateUrl}
                              target='_blank'
                              rel='noreferrer'
                              className='-m-[10px] p-[10px] text-2xl text-emerald-400 transition-colors hover:text-emerald-300'
                              aria-label='Open DataCamp certificate'
                            >
                              <SiDatacamp />
                            </a>
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>

            
    </main>
  );
};

export default CertificationsPage;