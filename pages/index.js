import { useEffect } from 'react';
import Fetcher from '@/lib/fetcher';

import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem('visited')) {
      Fetcher('/api/views/Portfolio');
      localStorage.setItem('visited', true);
    }
  }, []);
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Hamaad Siddiqui
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-12">
          I’m a Full Stack Developer. I am currently in collage getting my
          computer science degree. You’ve found my personal slice of the
          internet – everything you want to know and more is here.
        </h2>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-6 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Buy & Sell"
          description="Sell your used furniture and appliances and Buy new one's - Beta."
          href="https://buy-and-sell.netlify.app/"
          icon="buy&sell"
        />
        <ProjectCard
          title="Pakistan TV"
          description="A free video course for building static and server-side rendered applications with Next.js and React."
          href="https://pakistan-tv.vercel.app/"
          icon="pakistantv"
        />
        <ProjectCard
          title="Fast Feedback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://fast-feedback-dev.vercel.app/"
          icon="fastfeedback"
        />
      </div>
    </Container>
  );
}
