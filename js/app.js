
const blocks = document.getElementsByClassName('block');
const newUl = document.createElement('ul');
document.querySelector('nav').appendChild(newUl);
const newLi = document.createElement('li');

// create new menu links based on block sections
function createLinks() {
    for ( const i of blocks ) {
        const newLi = document.createElement('li');
        // grab links' names from each block
        let menuName = i.dataset.blocksec;
        newLi.innerHTML = `<a href="javascript:void(0)}">${menuName}</a>`;
        document.querySelector('ul').appendChild(newLi); 
    }
}
createLinks();

const selectAs = document.querySelectorAll("a");

// create class attribute
function createClassAtt() {
  for ( const i of selectAs) {
  	const att = document.createAttribute("class");
  	att.value = "scroll_to";
  	i.setAttributeNode(att);
  }
}
createClassAtt();

// create custom data attribute
function createDataAtt() {
  for (let i = 0; i < selectAs.length; i++) {
      let item = selectAs[i];
      item.dataset.link = `section${i + 1}`;
  }
}
createDataAtt();

// smooth scrooll motion
function scroollMotion() {
  const links = document.querySelectorAll('.scroll_to');
  links.forEach((item) =>{
    item.addEventListener('click', ()=>{
      const el = document.getElementById(item.getAttribute('data-link'));
      el.scrollIntoView({behavior:'smooth'});
    })
  })
}
scroollMotion();

// add active to selected menu link
function linkActive() {
  const lis = document.querySelectorAll('li');
  for (const item of lis) {
     item.addEventListener('click',  function() {
     for (const i of lis) {
      i.classList.remove('active');
      }
      item.classList.add('active');
    })
  }
}
linkActive();