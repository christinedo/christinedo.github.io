import Markdown from 'react-markdown';
import Layout from '../../components/MyLayout';

export default () => {
  return (
    <Layout>
      <div className='markdown'>
        <Markdown
          source={`
TOPHAT
Yes. We can have a [link](/about).
And we can have a title as well.

### This is a title

And here's the content.
      `}
        />
      </div>
      <style jsx global>{`
        .markdown a {
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  );
};
