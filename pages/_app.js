import '../public/styles/style.css';
import '../public/styles/atlas.css';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Include the FontAwesome script */}
      <Script
        src="/scripts/fontawesome.js"
        strategy="lazyOnload" // This ensures the script loads after the page
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}