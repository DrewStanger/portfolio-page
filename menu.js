const openNav = () => {
    const burger = document.querySelector('.navbar-toggle');
    const nav = document.querySelector('.nav-links');
 

    //toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}
openNav();