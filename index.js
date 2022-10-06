
// References
const menuIcon = document.querySelector('#menu');
const menuIconUl = document.querySelector('#menuUl');
const unList = document.querySelector('#navig');
// Sesion references
const misionSesion = document.querySelector('#misionAncor');
const visionSesion = document.querySelector('#visionAncor');
const integrantesSesion = document.querySelector('#integrantesAncor');
const ppiosSesion = document.querySelector('#ppiosAncor');
const actionsSesion = document.querySelector('#actionsAncor');
const datesSesion = document.querySelector('#datesAncor');

// Test smooth behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// variables
let condition = false;


menuIcon.addEventListener( 'click', () =>  {
    condition = !condition;
    openCloseMenu();
} )

menuIconUl.addEventListener( 'click', () =>  {
    condition = false;
    openCloseMenu();
} )

misionSesion.addEventListener( 'click', () => {
    condition = false;
    closeMenuAfterClickNavigation();
} )

visionSesion.addEventListener( 'click', () => {
    condition = false;
    closeMenuAfterClickNavigation();
} )

integrantesSesion.addEventListener( 'click', () => {
    condition = false;
    closeMenuAfterClickNavigation();
} )

ppiosSesion.addEventListener( 'click', () => {
    condition = false;
    closeMenuAfterClickNavigation();
} )

actionsSesion.addEventListener( 'click', () => {
    condition = false;
    closeMenuAfterClickNavigation();
} )

datesSesion.addEventListener( 'click', () => {
    condition = false;
    closeMenuAfterClickNavigation();
} )

const openCloseMenu = () => {
    if ( condition ) {
        unList.classList.add('activate');
    } else {
        unList.classList.remove('activate');
    }
}

const closeMenuAfterClickNavigation = () => {
    unList.classList.remove('activate');
}