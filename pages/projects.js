import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';

const url = 'https://hamaad.vercel.app/projects';
const title = 'Projects – Hamaad Siddiqui';

export default function Projects() {
  return (
    <Container>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <div className="mb-8">
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
        />
        <ProjectCard
          title="Pakistan TV"
          description="Watch your favourite Pakistani TV shows & channels live, Ad free without any disturbance only on Pakistan TV."
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
