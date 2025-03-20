import Head from 'next/head';
import Home from '../pages/Home';

export const metadata = {
  title: 'Digiflex: Mobile App, Web Development & Digital Marketing Company',
  description: 'Digiflex, founded in 2015, offers IT & marketing solutions, including mobile applications & website development, Google & Meta Ads, Shopify services, and lead generation expertise.',
  keywords: 'digiflex, quest digiflex',
};

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/public/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/public/android-chrome-512x512.png" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}