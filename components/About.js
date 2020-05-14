const About = () => (
  <section className='about-container' id='about'>
    <div className='content-container'>
      <img src='/sands.jpg' />
      <div className='text-container'>
        <h2 className='section-title'>A Little More</h2>
        <p>
          I'm a software engineer (specializing in the frontend) and designer
          currently based in San Francisco. My background is in UX/UI design and
          as such, I'm a firm believer in user-centered design. I enjoy solving
          design problems and making those solutions come to life.
        </p>
        <p>
          In my spare time, you can find me reading, obsessing over skincare, or
          doing things with my dog.
        </p>
      </div>
    </div>
    <style jsx>
      {`
        .about-container {
          height: calc(100vh - 100px);
          padding-top: 100px;
          display: flex;
          align-items: center;
        }

        img {
          width: 30%;
        }

        h2 {
          margin-bottom: 20px;
        }

        p {
          padding: 10px 0;
          font-family: 'Helvetica Neue', Helvetica, -apple-system,
            BlinkMacSystemFont, Arial, sans-serif;
        }

        .content-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          width: 60%;
        }

        @media all and (max-width: 700px) {
          img {
            display: none;
          }

          .text-container {
            text-align: center;
            width: 100%;
          }
        }
      `}
    </style>
  </section>
);

export default About;
