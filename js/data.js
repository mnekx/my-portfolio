const projects = [
    {
        title: 'Multi-Post Strories',
        screenshot: './images/modal-image.png',
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: [
            'css', 'html', 'bootstrap', 'ruby'
        ]
    },
    {
        title: 'Multi-Post Strories',
        screenshot: './images/modal-image.png',
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: [
            'css', 'html', 'bootstrap', 'ruby'
        ]
    },
    {
        title: 'Multi-Post Strories',
        screenshot: './images/modal-image.png',
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: [
            'css', 'html', 'bootstrap', 'ruby'
        ]
    },
    {
        title: 'Multi-Post Strories',
        screenshot: './images/modal-image.png',
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        technologies: [
            'css', 'html', 'bootstrap', 'ruby'
        ]
    },

]

let cardsContainer = document.querySelector('.cards')

for(let project of projects) {
    let cardElement = document.createElement('div');

cardsContainer.appendChild(cardElement)

cardElement.className = 'card';

let imgPlaceHolder = document.createElement('div');

cardElement.appendChild(imgPlaceHolder); 

imgPlaceHolder.className = 'img-placeholder'

let imgElement = document.createElement('img');
imgElement.src = "./images/img-placeholder.png";
imgElement.alt = "multi-post-stories-image";

imgPlaceHolder.appendChild(imgElement);

let descSection = document.createElement('section');
descSection.className = "card-desc"

cardElement.appendChild(descSection);

let h3 = document.createElement('h3');
h3.innerText = project['title']

let p = document.createElement('p');
p.innerText = project['description']

descSection.appendChild(h3);
descSection.appendChild(p)

let ul = document.createElement('ul');

ul.className = 'lines-links';
for(let link of project['technologies']) {
    let li = document.createElement('li');
    li.innerText = link
    ul.appendChild(li)
}

cardElement.appendChild(ul)

let a = document.createElement('a');
a.classList.add('btn', 'btn-primary', 'open-modal');
a.innerText = 'See Project'

cardElement.appendChild(a);
}

