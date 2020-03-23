import Link from 'next/link';

const Header = () => (
  <nav className='content-container'>
    <a id='logo'>C/D</a>
    <div className='navigation'>
      <a id='projects'>Projects</a>
      <a id='about'>About</a>
    </div>

    <style jsx>{`
      nav {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
      }

      .navigation a {
        margin-left: 45px;
      }
    `}</style>
  </nav>
);

export default Header;
