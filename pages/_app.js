import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SWRConfig } from 'swr';
import Layout from '@/components/Layout';

async function fetcher(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.events) {
      const handleRouteChangeStart = () => setLoading(true);
      const handleRouteChangeComplete = () => setLoading(false);
      const handleRouteChangeError = () => setLoading(false);

      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      router.events.on('routeChangeError', handleRouteChangeError);

      return () => {
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
        router.events.off('routeChangeError', handleRouteChangeError);
      };
    }
  }, [router.events]);

  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/solar/bootstrap.min.css"
      />
        {loading && <div>Loading...</div>} {/* Show loading state */}
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
