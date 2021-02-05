import { useEffect } from 'react';
import Fetcher from '@/lib/fetcher';

import Analytics from '@/components/metrics/Analytics';
import GitHub from '@/components/metrics/Github';
import Container from '@/components/Container';
import TopTracks from '@/components/TopTracks';

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
          I’m a Full Stack Developer. I am currently in college getting my
          computer science degree. You’ve found my personal slice of the
          internet – everything you want to know and more is here.
        </h2>
        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          Dashboard
        </h3>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like Spotify, GitHub, and more.
            Feel free to have a look.
          </p>
        </div>

        <div className="flex flex-col w-full"></div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full"></div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here are my top tracks on
          Spotify updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
