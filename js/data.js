const projects = [
  {
    id: 'project1',
    title: 'Multi-Post Strories',
    screenshot: './images/modal-image.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: [
      'css', 'html', 'bootstrap', 'ruby',
    ],
  },
  {
    id: 'project2',
    title: 'Multi-Post Strories',
    screenshot: './images/modal-image.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: [
      'css', 'html', 'bootstrap', 'ruby',
    ],
  },
  {
    id: 'project3',
    title: 'Multi-Post Strories',
    screenshot: './images/modal-image.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: [
      'css', 'html', 'bootstrap', 'ruby',
    ],
  },
  {
    id: 'project4',
    title: 'Multi-Post Strories',
    screenshot: './images/modal-image.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: [
      'css', 'html', 'bootstrap', 'ruby',
    ],
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
  imgElement.src = './images/img-placeholder.png';
  imgElement.alt = 'multi-post-stories-image';

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

// Paste the code here

closeModalSpan.addEventListener('click', () => {
  modal.classList.remove('show');
});
