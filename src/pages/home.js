export function pageLoad(content){

    const main = document.createElement('main');
    const pageTitle = document.createElement('h1');
    const description = document.createElement('p');
    const image = document.createElement('img');

    pageTitle.innerText = "Coffee Vibes";
    description.innerText = "This is the most Awesome coffee out there.";
    pageTitle.className = "title";

    image.src = "https://steamuserimages-a.akamaihd.net/ugc/788632137952739176/8B1BD7371460AF8F0C08B7DC67B53A70476C06B9/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
    image.style = "width: 400px";

    main.appendChild(pageTitle);
    main.appendChild(description);
    main.appendChild(image);
    content.appendChild(main);
}