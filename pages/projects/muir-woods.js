import Markdown from 'react-markdown';
import Layout from '../../components/MyLayout';

export default () => {
  return (
    <Layout>
      <div className='markdown'>
        <Markdown
          source={`
The Muir Woods Coffee House project is a website redesign project on which I worked as a product designer.
The details regarding the design process has since been archived, but can still be accessed [here](https://www.christinevdo.com/muirwoods).
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
