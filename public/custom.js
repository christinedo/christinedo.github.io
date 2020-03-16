window.addEventListener('scroll', () => {
  const container = document.querySelector('.container');
  const projects = document.querySelector('.projects-container');
  const about = document.querySelector('.about-container');
  const projectsTransitionPos = projects.offsetTop * 0.75;
  const aboutTransitionPos = about.offsetTop * 0.75;

  if (
    window.scrollY >= projectsTransitionPos &&
    window.scrollY < aboutTransitionPos
  ) {
    container.style.backgroundColor = '#EFF7FE';
  } else if (window.scrollY >= aboutTransitionPos) {
    container.style.backgroundColor = '#F9F7EF';
    about.style.color = '#353535';
  } else {
    container.style.backgroundColor = '';
  }
});
