import Layout from '../components/MyLayout';
import Head from 'next/head';
import About from '../components/About';
import Work from '../components/Projects';
import Main from '../components/Main';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Christine Do, Frontend Engineer</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicon_io/apple-touch-icon.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon_io/favicon-32x32.png'
        ></link>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicon_io/favicon-16x16.png'
        ></link>
        <link rel='manifest' href='favicon_io/site.webmanifest'></link>
        <script type='text/javascript' src='/custom.js' async></script>
      </Head>
      <Layout>
        <Main />
        <Work />
        <About />
      </Layout>
    </div>
  );
}
