import ProjectCard from '@/components/ProjectCard';
import Container from '@/components/Container';

export default function Home() {
  // To get Date Dynamically
  function getAge(date) {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
        <h2 className="text-navy dark:text-neon mb-4">Hey, my name is</h2>
        <h1 className="font-bold text-4xl md:text-6xl tracking-tight mb-3 text-black dark:text-white">
          Hamaad Siddiqui
        </h1>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-5 text-gray-900 dark:text-gray-300">
          I build things for the web.
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-9 text-justify max-w-sm md:max-w-xl ">
          I’m a Software Engineer who loves building beautiful digital
          experiences. I am currently still in college 🙄 but am still open to
          new opportunities 🚀
        </h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:hamaad_siddiqui@hotmail.com"
        >
          <button className="mb-10 py-3 px-5 bg-transparent text-neon font-mono font-thin border border-dblue dark:border-navy rounded hover:bg-gray-100 dark:hover:bg-dblue hover:text-dblue dark:hover:text-white transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Get In Touch
          </button>
        </a>

        <h2
          id="About"
          className="font-medium text-3xl tracking-tight mb-6 text-black dark:text-white"
        >
          About Me
        </h2>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hi, I’m Hamaad and I enjoy constructing beautiful interfaces and
            architecting applications from the ground-up. My interest in web
            development started back in 2019 — and now it's{' '}
            {getAge(`2019-01-01`)} been years and I have learned a lot and still
            am learning on the way.
          </p>

          <p>
            Becoming a developer started out of a need to create - I didn't
            realize it would turn into my passion and now my career. I'm
            primarily focused on web development and enjoy working with
            JavaScript, React, Next.js, and Node.js. Outside of development, I'm
            also interested in design, UI/UX, and creating an accessible web for
            all.
          </p>
        </div>
        <div
          id="Projects"
          className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-6"
        >
          <h2 className="font-medium text-3xl tracking-tight mb-6 text-black dark:text-white">
            Some Things I’ve Built
          </h2>
          <div className="mb-8 ">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Here are a few projects that I've worked on recently in my free
              time. You can click on them to get more details about them.
            </p>
          </div>
          <ProjectCard
            title="Buy & Sell"
            description="Buy & sell electronics, cars, clothes, collectibles & more, the world's online marketplace. Top brands, low prices & free shipping on many items."
            href="https://buy-and-sell.netlify.app/"
            icon="buy&sell"
            made={['React.js', 'MongoDB', 'Node', 'SCSS']}
            git="https://github.com/Hamaad-Siddiqui/MERN-Shopping-App"
          />
          <ProjectCard
            title="Pakistan TV"
            description="Watch your favourite Pakistani TV shows & channels live, Ad free without any disturbance only on Pakistan TV."
            href="https://pakistan-tv.vercel.app/"
            icon="pakistantv"
            made={['Next.js', 'TailwindCSS', 'FaunaDB']}
            git="https://github.com/Hamaad-Siddiqui/Pakistan-TV"
          />
          <ProjectCard
            title="Fast Feedback"
            description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
            href="https://fast-feedback-dev.vercel.app/"
            icon="fastfeedback"
            made={['Next.js', 'ChakraUI', 'MDX', 'Firebase', 'Stripe']}
            git="https://github.com/Hamaad-Siddiqui/Fast-Feedback-2.0"
          />
          <ProjectCard
            title="Chat App"
            description="Hang out anytime, anywhere — Chat App makes it easy and fun to stay close to your favorite people."
            href="https://chat-app-7e498.web.app/"
            icon="chatapp"
            made={['React', 'Firebase', 'CSS3']}
            git="https://github.com/Hamaad-Siddiqui/Firebase-Chat-App"
          />
        </div>
        <div
          id="Contact"
          className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-10 mt-4"
        >
          <h2 className="text-navy dark:text-neon mb-4">What’s Next?</h2>
          <h1 className="font-bold text-3xl md:text-5xl  mb-4 text-black dark:text-light">
            Get In Touch
          </h1>
          <h2 className="text-gray-600 dark:text-gray-400 mb-9  max-w-sm md:max-w-xl  text-center">
            Feel free to reach out to me any time, whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </h2>
          <button className="mb-6 py-3 px-5 bg-transparent text-neon font-mono font-thin border border-dblue dark:border-navy rounded hover:bg-gray-100 dark:hover:bg-dblue hover:text-dblue dark:hover:text-white transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Say Hello
          </button>
        </div>
      </div>
    </Container>
  );
}
