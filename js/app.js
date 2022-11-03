
/**
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
const Section = document.querySelectorAll('section');
let navlist = document.querySelector('#navbar__list');
// setActiveSection will be triggered when user scrolls.
// it will calculate the position of a section, if its showen in the viewport it will set its class attrebute to active.
// while changing the class of a section it will also change the class the coresponsing nav bar li class to active.
function setActiveSection(){
    for(let i = 0; i< Section.length; i++){
        if(Section[i].getBoundingClientRect().top >= 0 && (Section[i].getBoundingClientRect().top + (Section[i].getBoundingClientRect().height/2)) <= window.innerHeight ){
            Section[i].setAttribute('class','your-active-class');
            navlist.children[i].setAttribute('class', 'menu__link__active');
        }else{
            navlist.children[i].setAttribute('class', 'menu__link');
            Section[i].removeAttribute('class');
        }
    }
}

//scroll to section by clicking nav bar menu.
function scroll(e){
    let elm = e.target;
    let textLength = elm.textContent.length;
    const sectionElement = document.querySelector(`#section${elm.textContent[textLength-1]}`);
    sectionElement.scrollIntoView(
        {block: 'start',
         inline:'start',
          behavior: 'smooth'
        });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navigation(){
    // 1.create li elements to be shown in nav bar.
    for(let i = 0; i < Section.length; i++){
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a>${Section[i].getAttribute('data-nav')}</a>`
        listItem.setAttribute('class','menu__link');
        fragment.appendChild(listItem);
    }
    // 2.appent list elements to ul using fragment
    navlist.appendChild(fragment);
}


// Scroll to anchor ID using scrollTO event
    // I did not understand what is required??

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
navigation();
// Scroll to section on link click
navlist.addEventListener('click',scroll);
// Set Section as active
document.addEventListener('scroll', setActiveSection );

