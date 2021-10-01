export const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function (htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

document.getElementById('firstPage')
  .addEventListener('click', function () {
    document.getElementById('contact').hidden = true;
    document.getElementById('info').hidden = false;
    document.getElementById('section-product').hidden = false;
    document.getElementById('contact').style.display = 'none';
  }, false);

document.getElementById('middlePage')
  .addEventListener('click', function () {
    document.getElementById('info').hidden = true;
    document.getElementById('contact').hidden = true;
    document.getElementById('section-product').hidden = false;
    document.getElementById('contact').style.display = 'none';
  }, false);

document.getElementById('lastPage')
  .addEventListener('click', function() {
    document.getElementById('section-product').hidden = true;
    document.getElementById('info').hidden = true;
    document.getElementById('contact').hidden = false;
    document.getElementById('contact').style.display = 'block';
  }, false);












