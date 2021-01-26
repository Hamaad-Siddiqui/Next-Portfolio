import { NextSeo } from 'next-seo';
import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';
import { getSkills } from '@/lib/db';

const url = 'https://hamaad.vercel.app/skills';
const title = 'My Skills – Hamaaad Siddiqui';

export default function Snippets({ skills }) {
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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 ">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Skills
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          These are a collection of some my skills I've gathered in the past.
          They include a summary of the tools and frameworks that I love to use,
          It is my current Tech Stack & it may change over time.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 my-2 w-full mt-4">
          {skills.map((skill) => (
            <FunctionCard
              key={skill.title}
              title={skill.title}
              logo={skill.logo}
              category={skills.category}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const skills = await getSkills();

  return { props: skills };
}
