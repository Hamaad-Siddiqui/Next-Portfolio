const title = 'Hamaad Siddiqui – Developer';
const description =
  'Full-Stack Developer | Coffee Lover ☕ | JavaScript enthusiast.';

const SEO = {
  title,
  description,
  canonical: 'https://hamaad.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://hamaad.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://hamaad.vercel.app/avatar.jpeg',
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@HamaadSiddiqui',
    site: '@HamaadSiddiqui',
    cardType: 'summary_large_image'
  }
};

export default SEO;
