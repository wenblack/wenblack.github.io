import Image from "next/image";
import gitHubLogo from '@/assets/gh.svg'
import linkedInLogo from '@/assets/linkedin.svg'

export function AboutMe () {
  return (
    <section className="py-8 w-full bg-gray-800 rounded-lg">
      <div className=" mx-auto px-6 py-1 bg-gray-800  ">
        <div className="flex bg-gray-800 text-6xl mb-4 flex-col md:flex-row ">
          👨‍💻
        </div>
        <span className="bg-gray-800 text-blue-400  text-xl">Who i am</span>
        <h2 className="bg-gray-800 text-3xl text-white mt-2 font-bold mb-4">Wender Barbosa</h2>
        <h4 className=" bg-gray-800 text-lg text-gray-300">Frontend Developer </h4>
          <div className=" bg-gray-800 mt-8">
            <p className="bg-gray-800 text-slate-300  text-justify">Hello there! I&apos;m passionate Front-End Developer in production environment.  Currently focused on mastering React.js, Next.js, and TypeScript, I&apos;m continuously expanding my skill set to deliver top-notch user interfaces.  Let&apos;s create remarkable web experiences together!</p>
            <div className="bg-gray-800 flex flex-wrap mt-4">
              <a href="https://www.linkedin.com/in/wender-jose-santos-4b1473217/"  target="_blank" rel="noopener noreferrer" className="mr-4 px-6 py-1 mb-2 md:mb-0 bg-zinc-100 hover:opacity-70  text-white font-bold rounded">
                <Image className="bg-zinc-100" alt="LinkedIn Logo" width={25} height={25} src={linkedInLogo}/>
              </a>
              <a href="https://github.com/wenblack/"  target="_blank" rel="noopener noreferrer" className="mr-4 px-6 py-1 mb-2 md:mb-0 bg-zinc-100 hover:opacity-70  text-white font-bold rounded">
              <Image  className="bg-zinc-100" alt="GitHub Logo" width={25} height={25} src={gitHubLogo}/>
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

