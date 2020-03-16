import Layout from '../components/MyLayout';
import Head from 'next/head';
import About from '../components/About';
import Work from '../components/Projects';
import Main from '../components/Main';

export default function Portfolio() {
  return (
    <div>
      <Head>
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
