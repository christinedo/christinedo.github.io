window.addEventListener('scroll', () => {
  const container = document.querySelector('.container');
  const projects = document.querySelector('.projects-container');
  const about = document.querySelector('.about-container');
  const projectsTransitionPos = projects.offsetTop * 0.75;
  const aboutTransitionPos = about.offsetTop * 0.75;
  const projectsLink = document.getElementById('projects');
  const aboutLink = document.getElementById('about');

  if (
    window.scrollY >= projectsTransitionPos &&
    window.scrollY < aboutTransitionPos
  ) {
    container.style.backgroundColor = '#EFF7FE';
    projectsLink.style.color = '#54D8CB';
    aboutLink.style.color = '';
  } else if (window.scrollY >= aboutTransitionPos) {
    container.style.backgroundColor = '#F9F7EF';
    about.style.color = '#353535';
    projectsLink.style.color = '';
    aboutLink.style.color = '#54D8CB';
  } else {
    container.style.backgroundColor = '';
    projectsLink.style.color = '';
    aboutLink.style.color = '';
  }
});

document.getElementById('logo').addEventListener('click', () => {
  window.scrollTo(0, 0);
});

document.getElementById('projects').addEventListener('click', () => {
  const projects = document.querySelector('.projects-container');
  const projectsPos = projects.offsetTop;

  window.scrollTo(0, projectsPos);
});

document.getElementById('about').addEventListener('click', () => {
  const about = document.querySelector('.about-container');
  const aboutPos = about.offsetTop;

  window.scrollTo(0, aboutPos);
});
