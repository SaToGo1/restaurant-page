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
    home.className = "header__pages";
    home.id = "header__home"
    coffee.textContent = "Coffee";
    coffee.className = "header__pages";
    coffee.id = "header__coffee"
    contact.textContent = "Contact";
    contact.className = "header__pages";
    contact.id = "header__contact"

    //Mark which tab is open with different style.
    if(page === "home"){
        home.className = "header__pages-active";
    } else if(page === "coffee") {
        coffee.className = "header__pages-active";
    } else {
        contact.className = "header__pages-active";
    }

    //Add content to the page.
    nav.appendChild(home);
    nav.appendChild(coffee);
    nav.appendChild(contact);
    header.appendChild(nav);
    content.appendChild(header);
}