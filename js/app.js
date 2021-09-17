const blocks = document.getElementsByClassName('block');
const newUl = document.createElement('ul');
document.querySelector('nav').appendChild(newUl);

function createLinks() {
// create a new menu link based on block sections
    for ( const i of blocks) {
        const newLi = document.createElement('li');
        // grab link's names from each block
        let menuName = i.dataset.blocksec;
        newLi.innerHTML = `<a href="#${i.id}">${menuName}</a>`;
        document.querySelector('ul').appendChild(newLi); 
    }
}
createLinks();

const lis = document.querySelectorAll('li');

for (const item of lis) {
   item.addEventListener('click',  function() {
   for (const i of lis) {
    i.classList.remove('active');
    }
    item.classList.add('active');
  })
}
