export function headerLoad (content, page) {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    header.className = "header";
    nav.className = "header__nav";

    home.textContent = "Home";
    home.className = "header__pages";
    menu.textContent = "Menu";
    menu.className = "header__pages";
    contact.textContent = "Contact";
    contact.className = "header__pages";

    if(page === "home"){
        home.className = "header__pages-active";
    } else if(page === "menu") {
        menu.className = "header__pages-active";
    } else {
        contact.className = "header__pages-active";
    }

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    header.appendChild(nav);
    content.appendChild(header);
}