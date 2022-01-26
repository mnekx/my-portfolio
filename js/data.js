const projects = [
  {
    id: 'project1',
    title: 'Special Tributes',
    screenshot: './images/tribute.PNG',
    description: "A special tribute to a special man.",
    technologies: [
      'css', 'html', 'bootstrap', 'ruby',
    ],
    liveLink: "https://mnekx.github.io/tribute-page/",
    codeLink: "https://github.com/mnekx/tribute-page"
  },
  {
    id: 'project2',
    title: 'Humburger Menu',
    screenshot: './images/humburger.PNG',
    description: "It is a navigation menu, animations and transitions done with CSS",
    technologies: [
      'css', 'html','bootstrap', 'ruby',
    ],
    liveLink: "https://mnekx.github.io/humbugger-menu/",
    codeLink: "https://github.com/mnekx/humbugger-menu"
  },
  {
    id: 'project3',
    title: 'Landing Page',
    screenshot: './images/landing-page.PNG',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: [
      'css', 'html', 'bootstrap', 'ruby',
    ],
    liveLink: "https://mnekx.github.io/landing-page/",
    codeLink: "https://github.com/mnekx/landing-page"
  },
  {
    id: 'project4',
    title: 'Survey Form',
    screenshot: './images/survey-form.PNG',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: [
      'css', 'html', 'bootstrap', 'ruby',
    ],
    liveLink: "https://mnekx.github.io/survey-form/",
    codeLink: "https://github.com/mnekx/survey-form"
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
    const clickedProject = projects.filter((project) => project.id === projectbtnsArr[j].id)[0];
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
