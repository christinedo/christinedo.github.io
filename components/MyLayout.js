import Header from './Header';

const Layout = props => (
  <div className='container'>
    <Header />
    {props.children}
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

      html,
      body {
        color: #00216f;
        overscroll-behavior: none;
        scroll-behavior: smooth; // doesn't work in Safari, IE, or Edge
      }

      * {
        margin: 0;
        padding: 0;
      }

      body,
      h1,
      a {
        font-family: 'Work Sans', 'Helvetica Neue', Helvetica, -apple-system,
          BlinkMacSystemFont, Arial, sans-serif;
        text-decoration: none;
      }

      a {
        color: #000;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        font-weight: 500;
      }

      a:hover {
        opacity: 0.4;
      }

      .container {
        background: #d6ebfe; // pale blue
        transition: background 0.5s linear;
      }

      .content-container {
        width: 80%;
        margin: 0 auto;
      }

      .section-title {
        font-size: calc(34px + 1.25vw);
        font-weight: 500;
      }
    `}</style>
  </div>
);

export default Layout;
