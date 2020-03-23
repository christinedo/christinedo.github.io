function getProjects() {
  return [
    {
      id: 'personal-website',
      title: 'Personal Website',
      image: '/portfolio.jpg',
      url: 'https://github.com/christinedo/christinedo.github.io'
    },
    {
      id: 'top-hat',
      title: 'Top Hat Stories',
      image: '/tophat.gif',
      url: 'https://github.com/christinedo/top-hat-stories'
    },
    {
      id: 'muir-woods',
      title: 'Muir Woods Coffee House',
      image: '/mwch.jpg',
      url: 'https://noslp-mwch.herokuapp.com/'
    }
  ];
}

const PostLink = ({ post }) => (
  <li key={post.id} className={post.id}>
    <a href={post.url}>
      <img src={post.image} />
      <p>{post.title}</p>
    </a>

    <style jsx>{`
      li {
        list-style: none;
      }

      li:nth-child(1) {
        width: calc((100% - 100px) / 2);
      }

      li:nth-child(2) {
        width: calc((100% - 50px) / 2);
        margin-top: 200px;
      }

      li:nth-child(3) {
        width: calc((100% - (100px * 2)) / 2);
        margin-left: 100px;
        margin-top: 50px;
      }

      img {
        width: 100%;
        height: auto;
        background: pink;
      }

      p {
        padding-top: 10px;
      }
    `}</style>
  </li>
);

const Projects = () => (
  <section className='projects-container' id='projects'>
    <div className='content-container'>
      <h2 className='section-title'>Featured Projects</h2>
      <ul className='projects'>
        {getProjects().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
    </div>
    <style jsx>
      {`
        .projects-container {
          height: 100%;
          padding-top: 100px;
        }

        h2 {
          margin-bottom: 40px;
          text-align: center;
        }

        .projects {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}
    </style>
  </section>
);

export default Projects;
