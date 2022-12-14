export function coffeeLoad(content) {
    const main = document.createElement('main');
    const pageTitle = document.createElement('h1');
    const titleDiv = document.createElement('div')

    titleDiv.className = 'titleDiv';
    pageTitle.innerText = "Coffee Selection";
    pageTitle.className = "title";
    

    //Coffee1 Creation
    const coffee1 = coffeeSetUp(coffee1Title(), coffee1description(), coffee1img());

    //Coffee2 Creation
    const coffee2 = coffeeSetUp(coffee2Title(), coffee2description(), coffee2img());

    //Coffee3 Creation
    const coffee3 = coffeeSetUp(coffee3Title(), coffee3description(), coffee3img());

    main.id = "main";
    titleDiv.appendChild(pageTitle)
    main.appendChild(titleDiv);
    main.appendChild(coffee1);
    main.appendChild(coffee2);
    main.appendChild(coffee3);
    content.appendChild(main);
}

/*
*       CoffeeSetUp()
* Get the information of the coffee by parameter and
* return a div with all the elements inside.
* @params (string, string, string)
*/
function coffeeSetUp(title, description, img) {
    const coffee = document.createElement('div');
    const coffeeTitle = document.createElement('h2');
    const coffeeDescription = document.createElement('p');
    const coffeeImg = document.createElement('img');

    coffee.className = "coffee__card";
    coffeeTitle.textContent = title;
    coffeeDescription.textContent = description;
    coffeeImg.src = img;
    coffeeImg.className = "coffee__img"

    coffee.appendChild(coffeeTitle);
    coffee.appendChild(coffeeImg);
    coffee.appendChild(coffeeDescription);

    return coffee;
}

/*
*   DATA  
*  ******
*/
function coffee1Title(){
    return "Cappuccino";
}

function coffee1description(){
    return "Lose yourself in the steam of the best italian Coffee.";
}

function coffee1img(){
    return "https://www.arte-latte.com/wp-content/uploads/2020/12/cappuccino1-min-scaled.jpg";
}

function coffee2Title(){
    return "Milk Coffee";
}

function coffee2description(){
    return "A Simple milk coffee for a good evening.";
}

function coffee2img(){
    return "https://www.arte-latte.com/wp-content/uploads/2020/12/cafe-con-leche-min-scaled.jpg";
}

function coffee3Title(){
    return "Latte";
}

function coffee3description(){
    return "A latte where the art and the flavour combine to the maximum expression of the vibes.";
}

function coffee3img(){
    return "https://www.arte-latte.com/wp-content/uploads/2020/12/latte1-min-scaled.jpg";
}