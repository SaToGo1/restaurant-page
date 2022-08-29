export function contactLoad(content){

    const main = document.createElement('main');
    const pageTitle = document.createElement('h1');
    
    const div = document.createElement('div');

    const div1 = document.createElement('div');
    const pageTitle1 = document.createElement('h2');
    const pageDescription1 = document.createElement('p');
    
    const div2 = document.createElement('div');
    const pageTitle2 = document.createElement('h2');
    const pageDescription2 = document.createElement('p');
    
    const div3 = document.createElement('div');
    const pageTitle3 = document.createElement('h2');
    const pageDescription3 = document.createElement('p');

    pageTitle.innerText = "Contact";
    pageTitle.className = "title";

    pageTitle1.innerText = "About Us"
    pageDescription1.innerText = "This Shop is run by Coffee Lovers, we feel like we are flying through a new world when we smell a good coffee, and we want to make you feel the same.";
    div1.appendChild(pageTitle1);
    div1.appendChild(pageDescription1);

    pageTitle2.innerText = "Mail";
    pageDescription2.innerText = "thisMailIsFake@gmail.com";
    div2.appendChild(pageTitle2);
    div2.appendChild(pageDescription2);

    pageTitle3.innerText = "Telephone";
    pageDescription3.innerText = "111 11 11 11";
    div3.appendChild(pageTitle3);
    div3.appendChild(pageDescription3);

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    main.id = "main";
    main.appendChild(pageTitle);
    main.appendChild(div);

    content.appendChild(main);
}