const products = [
    // Carreaux 20x20
    {
        category: 'carreaux-20x20',
        name: 'Carreau Blanc 20x20',
        description: 'Carreau blanc classique pour sols et murs.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOwpqd8L0Z4nZCFw6UsJyitmCtQUDG-3NG-sJQo=s1360-w1360-h1020'
    },
    {
        category: 'carreaux-20x20',
        name: 'Carreau Gris 20x20',
        description: 'Carreau gris moderne et élégant.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOwpqd8L0Z4nZCFw6UsJyitmCtQUDG-3NG-sJQo=s1360-w1360-h1020'
    },
    {
        category: 'carreaux-20x20',
        name: 'Carreau Bleu 20x20',
        description: 'Carreau bleu pour une touche de couleur.',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOwpqd8L0Z4nZCFw6UsJyitmCtQUDG-3NG-sJQo=s1360-w1360-h1020'
    },
    // Carreaux 20x30
    {
        category: 'carreaux-20x30',
        name: 'Carreau Rectangulaire 20x30',
        description: 'Carreau rectangulaire pour designs uniques.',
        image: ''
    },
    // Carreaux 20x40
    {
        category: 'carreaux-20x40',
        name: 'Carreau Long 20x40',
        description: 'Carreau allongé pour espaces larges.',
        image: ''
    },
    // Carreaux 25x40
    {
        category: 'carreaux-25x40',
        name: 'Carreau 25x40',
        description: 'Carreau de taille intermédiaire.',
        image: ''
    },
    // Carreaux 30x30
    {
        category: 'carreaux-30x30',
        name: 'Carreau Carré 30x30',
        description: 'Carreau carré standard.',
        image: ''
    },
    // Carreaux 30x60
    {
        category: 'carreaux-30x60',
        name: 'Carreau Grand 30x60',
        description: 'Carreau grand pour sols spacieux.',
        image: ''
    },
    // Carreaux 40x40
    {
        category: 'carreaux-40x40',
        name: 'Carreau 40x40',
        description: 'Carreau large et robuste.',
        image: ''
    },
    // Carreaux 50x50
    {
        category: 'carreaux-50x50',
        name: 'Carreau 50x50',
        description: 'Carreau extra large.',
        image: ''
    },
    // Carreaux 60x60
    {
        category: 'carreaux-60x60',
        name: 'Carreau 60x60',
        description: 'Carreau très grand pour projets industriels.',
        image: ''
    },
    // Carreaux 60x120
    {
        category: 'carreaux-60x120',
        name: 'Carreau Rectangulaire 60x120',
        description: 'Carreau rectangulaire extra long.',
        image: ''
    },
    // Tôle
    {
        category: 'tole',
        name: 'Tôle Galvanisée',
        description: 'Tôle galvanisée résistante à la corrosion.',
        image: ''
    },
    {
        category: 'tole',
        name: 'Tôle Acier',
        description: 'Tôle en acier pour constructions.',
        image: ''
    },
    // Accessoire
    {
        category: 'accessoire',
        name: 'Joint Silicone',
        description: 'Joint silicone pour étanchéité.',
        image: ''
    },
    {
        category: 'accessoire',
        name: 'Croix Espacement',
        description: 'Croix pour espacement des carreaux.',
        image: ''
    },
    // Ciment Colle
    {
        category: 'ciment-colle',
        name: 'Ciment Colle Blanc',
        description: 'Ciment colle blanc pour carreaux.',
        image: ''
    },
    {
        category: 'ciment-colle',
        name: 'Colle Époxy',
        description: 'Colle époxy résistante.',
        image: ''
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.cards-container');
    containers.forEach(container => {
        const category = container.getAttribute('data-category');
        const filteredProducts = products.filter(product => product.category === category);
        filteredProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.setProperty('--card-index', index);
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="https://wa.me/?text=Bonjour, je suis intéressé par ${product.name}. Description: ${product.description}. Image: ${product.image}" target="_blank" class="btn whatsapp-btn">WhatsApp</a>
                <a href="${product.image}" download class="btn download-btn">Télécharger</a>
            `;
            container.appendChild(card);
        });
    });
});

// Menu Modal
const menuBtn = document.getElementById('menu-btn');
const menuModal = document.getElementById('menu-modal');
const menuClose = document.getElementById('menu-close');
const menuOverlay = menuModal.querySelector('.modal-overlay');

menuBtn.addEventListener('click', () => {
    menuModal.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menuModal.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menuModal.classList.remove('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuModal.classList.remove('active');
    });
});

// Search Modal
const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const searchClose = document.getElementById('search-close');
const searchOverlay = searchModal.querySelector('.modal-overlay');
const searchInput = document.getElementById('search-input');
const searchList = document.getElementById('search-list');
const searchResult = document.getElementById('search-result');

searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    populateList();
    searchInput.value = '';
    searchResult.innerHTML = '';
    searchInput.focus();
});

searchClose.addEventListener('click', () => {
    searchModal.classList.remove('active');
    searchResult.innerHTML = '';
    searchInput.value = '';
});

searchOverlay.addEventListener('click', () => {
    searchModal.classList.remove('active');
    searchResult.innerHTML = '';
    searchInput.value = '';
});

// Sort products alphabetically
const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

function populateList(filter = '') {
    searchList.innerHTML = '';
    const filtered = sortedProducts.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
        li.addEventListener('click', () => showProduct(product));
        searchList.appendChild(li);
    });
}

function showProduct(product) {
    searchResult.innerHTML = `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    `;
}

searchInput.addEventListener('input', (e) => {
    populateList(e.target.value);
});