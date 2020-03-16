import Link from 'next/link';

const Header = () => (
  <nav className='content-container'>
    <Link href='/'>
      <a className='logo'>C/D</a>
    </Link>
    <div className='navigation'>
      <Link href='#projects'>
        <a>Projects</a>
      </Link>
      <Link href='#about'>
        <a>About</a>
      </Link>
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
