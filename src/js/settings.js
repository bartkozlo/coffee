export const select = {
  containerOf: {
    menu: '#product-list',
    pages: '#pages',
    contact: '.contact-wrapper',
  },
  nav: {
    links: '.nav a'
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    home: 'home',
    products: 'products',
    contact: 'contact',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const templates = {
  products: Handlebars.compile(document.querySelector('#template-product').innerHTML),
};



