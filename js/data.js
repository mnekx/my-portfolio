const projects = [
  {
    id: 'project1',
    title: 'To Do',
    screenshot: './images/to-do.png',
    description:
      'A to-do app that keeps track of tasks until completed. Build with JavaScript.',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    liveLink: 'https://todaystodo.netlify.app/',
    codeLink: 'https://github.com/mnekx/to-do.git',
  },
  {
    id: 'project2',
    title: 'KVP Tracker',
    screenshot: './images/kvp.png',
    description:
      'The app was used to collect and track data for more than 20 regions in Tanzania for the key and vulnerable population need with the National AIDS Control Program [NACP]. I designed both the front and back end using PHP, JavaScript, MySQL',
    technologies: ['css', 'html', 'mysql', 'php'],
    liveLink: '23.239.16.175/',
    codeLink: '--',
  },
  {
    id: 'project3',
    title: 'Loan Manager',
    screenshot: './images/loan-manager.png',
    description:
      'The app is used by companies in the business of lending money to lend and track small loans payable monthly',
    technologies: ['Javascript', 'node.js', 'mongoDB', 'express.js'],
    liveLink: 'https://mnekx.github.io/awesome-books/',
    codeLink: 'https://github.com/mnekx/awesome-books',
  },
  {
    id: 'project4',
    title: 'Ibhichekesho',
    screenshot: './images/ibhichekesho.png',
    description: 'A Website for Tanzania Comedic Talents Shows events.',
    technologies: ['css', 'html', 'JavaScript'],
    liveLink: 'https://mnekx.github.io/ibhichekesho/',
    codeLink: 'https://github.com/mnekx/ibhichekesho',
  },

  {
    id: 'project4',
    title: 'News feed',
    screenshot: './images/newsfeed.png',
    description: 'A news feed site',
    technologies: ['css', 'html', 'JavaScript'],
    liveLink: 'https://mnekx.github.io/newsfeed/',
    codeLink: 'https://github.com/mnekx/newsfeed',
  },
];

// Cards being loaded dynamically
const cardsContainer = document.querySelector('.cards');

for (let i = 0; i < projects.length; i += 1) {
  const cardElement = document.createElement('div');

  cardsContainer.appendChild(cardElement);

  cardElement.className = 'card';

  const imgPlaceHolder = document.createElement('div');

  cardElement.appendChild(imgPlaceHolder);

  imgPlaceHolder.className = 'img-placeholder';

  const imgElement = document.createElement('img');
  imgElement.src = projects[i].screenshot;
  imgElement.alt = projects[i].title;

  imgPlaceHolder.appendChild(imgElement);

  const descSection = document.createElement('section');
  descSection.className = 'card-desc';

  cardElement.appendChild(descSection);

  const h3 = document.createElement('h3');
  h3.innerText = projects[i].title;

  const p = document.createElement('p');
  p.innerText = projects[i].description;

  descSection.appendChild(h3);
  descSection.appendChild(p);

  const ul = document.createElement('ul');

  ul.className = 'lines-links';
  for (let link = 0; link < projects[i].technologies.length; link += 1) {
    const li = document.createElement('li');
    li.innerText = projects[i].technologies[link];
    ul.appendChild(li);
  }

  cardElement.appendChild(ul);

  const a = document.createElement('a');
  a.classList.add('btn', 'btn-primary', 'open-modal');
  a.innerText = 'See Project';
  a.id = projects[i].id;

  cardElement.appendChild(a);
}

// The modal
const modal = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalSpan = document.querySelector('#modal-closer');

const projectbtnsArr = Array.from(openModalBtns);

for (let j = 0; j < projectbtnsArr.length; j += 1) {
  projectbtnsArr[j].addEventListener('click', () => {
    modal.classList.add('show');
    const clickedProject = projects.filter(
      (project) => project.id === projectbtnsArr[j].id,
    )[0];
    const modalTitle = document.querySelector('#modal-title');
    const modalImage = document.querySelector('#modal-image');
    const modalDesc = document.querySelector('#modal-description');
    const modalLInks = document.querySelector('#modal-lines-links');
    const liveBtn = document.querySelector('#live-btn');
    const codeBtn = document.querySelector('#code-btn');
    modalTitle.innerHTML = clickedProject.title;
    modalImage.src = clickedProject.screenshot;
    modalDesc.innerHTML = clickedProject.description;
    modalLInks.innerHTML = '';
    for (let i = 0; i < clickedProject.technologies.length; i += 1) {
      const li = document.createElement('li');
      li.innerText = clickedProject.technologies[i];
      modalLInks.appendChild(li);
    }
    codeBtn.href = clickedProject.codeLink;
    liveBtn.href = clickedProject.liveLink;
  });
}

closeModalSpan.addEventListener('click', () => {
  modal.classList.remove('show');
});
