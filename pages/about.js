import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const Teacher = ({ name, youtube, twitter }) => (
  <>
    <h3 className="flex items-center text-gray-900 dark:text-gray-100 font-medium mb-2 text-lg ml-4">
      <span className="mr-2">•</span> {name}
      <div className="flex space-x-3 ml-4">
        <a
          href={twitter}
          className="text-sm text-gray-500 hover:text-blue-500 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </g>
          </svg>
        </a>
        <a
          href={youtube}
          className="text-sm text-gray-500 hover:text-red-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">YouTube</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
              <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
            </g>
          </svg>
        </a>
      </div>
    </h3>
  </>
);

export default function About() {
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
      <NextSeo
        title="About Me – Hamaad Siddiqui"
        canonical="https://hamaad.vercel.app/about"
        openGraph={{
          url: 'https://hamaad.vercel.app/about',
          title: 'About Me – Hamaad Siddiqui'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Hamaad I'm {getAge(`2003-08-27`)}. I started coding back in
            2019 for fun and now its been {getAge(`2019-01-01`)} years and I
            have learned alot and still am learning on the way.
          </p>

          <p>
            Becoming a developer started out of a need to create - I didn't
            realize it would turn into my passion and now my career. I love
            constructing beautiful interfaces and architecting applications from
            the ground-up.
          </p>

          <p>
            I'm primarily focused on web development and enjoy working with
            JavaScript, React, Next.js, and Node.js. Outside of development, I'm
            also interested in design, UI/UX, and creating an accessible web for
            all.
          </p>
          <p>
            I am an introvert, an tech enthusiast and a coffee lover. On the
            side, I love to play chess and I'm a wanna-be musician. I'm
            passionate about technology and enjoy staying up to date on all
            things tech, engineering, and business.
          </p>
        </div>
        <h2 className="font-medium text-3xl tracking-tight mb-4 text-black dark:text-white">
          Experience
        </h2>
        <p className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          I learned to code on my on. This helped me learn how to adapt to new
          changes and to work on my on. It also meant that unlike a normal
          bootcamp I had more than one teacher, so I wanted them to be on my
          portfolio as they have helped me learn alot on the way.
        </p>
        <h4 className="font-medium text-xl tracking-tight mb-4 text-black dark:text-white">
          Taught By
        </h4>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 w-full mb-16">
          <Teacher
            name="Traversy Media"
            youtube="https://www.youtube.com/c/TraversyMedia"
            twitter="https://twitter.com/traversymedia"
          />
          <Teacher
            name="Fireship.io"
            youtube="https://www.youtube.com/c/AngularFirebase"
            twitter="https://twitter.com/fireship_dev"
          />
          <Teacher
            name="Dev Ed"
            youtube="https://www.youtube.com/c/DevEd"
            twitter="https://twitter.com/developedbyed"
          />
          <Teacher
            name="TechLead"
            youtube="https://www.youtube.com/c/JoshuaFluke1/"
            twitter="https://twitter.com/techleadhd"
          />
          <Teacher
            name="Kalle Hallden"
            youtube="https://www.youtube.com/c/KalleHallden"
            twitter="https://twitter.com/KalleHallden"
          />
          <Teacher
            name="Ben Awad"
            youtube="https://www.youtube.com/c/benawad97"
            twitter="https://twitter.com/benawad"
          />
          <Teacher
            name="Lee Robinson"
            youtube="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw"
            twitter="https://twitter.com/leeerob"
          />

          <Teacher
            name="Thenewboston"
            youtube="https://www.youtube.com/channel/UCJbPGzawDH1njbqV-D5HqKw"
            twitter="https://twitter.com/bucky_roberts"
          />
          <Teacher
            name="Joma Tech"
            youtube="https://www.youtube.com/c/jomaoppa"
            twitter="https://twitter.com/jomaoppa"
          />
          <Teacher
            name="Joshua Fluke"
            youtube="https://www.youtube.com/c/JoshuaFluke1/"
            twitter="https://twitter.com/JoshuaFluke"
          />
        </div>
        <iframe
          height="280"
          src="https://www.google.com/maps/d/u/0/embed?mid=1EQIl7TsgrNCToGW8M0G7qdoFUfWKiMXE"
          width="100%"
        />
      </div>
    </Container>
  );
}
