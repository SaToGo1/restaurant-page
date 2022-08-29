export function headerLoad (content, page) {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const home = document.createElement('div');
    const coffee = document.createElement('div');
    const contact = document.createElement('div');

    header.className = "header";
    nav.className = "header__nav";

    //Set up of the tabs
    home.textContent = "Home";
    home.id = "header__home"
    coffee.textContent = "Coffee";
    coffee.id = "header__coffee"
    contact.textContent = "Contact";
    contact.id = "header__contact"

    //Mark which tab is open with different style.
    if(page === "home"){
        home.className = "header__pages-active";
        coffee.className = "header__pages";
        contact.className = "header__pages";
    } else if(page === "coffee") {
        coffee.className = "header__pages-active";
        home.className = "header__pages";
        contact.className = "header__pages";
    } else {
        contact.className = "header__pages-active";
        home.className = "header__pages";
        coffee.className = "header__pages";
    }

    //Add content to the page.
    nav.appendChild(home);
    nav.appendChild(coffee);
    nav.appendChild(contact);
    header.appendChild(nav);
    content.appendChild(header);
}

export function changeHeader(page) {
    const home = document.getElementById('header__home');
    const coffee = document.getElementById('header__coffee');
    const contact = document.getElementById('header__contact');

    //Mark which tab is open with different style.
    if(page === "home"){
        home.className = "header__pages-active";
        coffee.className = "header__pages";
        contact.className = "header__pages";
    } else if(page === "coffee") {
        coffee.className = "header__pages-active";
        home.className = "header__pages";
        contact.className = "header__pages";
    } else {
        contact.className = "header__pages-active";
        home.className = "header__pages";
        coffee.className = "header__pages";
    }
}