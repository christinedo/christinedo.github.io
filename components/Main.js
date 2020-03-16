import SocialLinks from './SocialLinks';

const Main = () => (
  <section className='greeting-container content-container'>
    <h1 className='greeting'>
      Hi there. 👋 I'm Christine, a frontend engineer currently based in San
      Francisco. 🌁
    </h1>
    <SocialLinks />
    <style jsx>{`
      .greeting-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      .greeting {
        font-size: calc(32px + 1.25vw);
        font-weight: 500;
        width: 75%;
        // color: #edf6ff;
      }
    `}</style>
  </section>
);

export default Main;
