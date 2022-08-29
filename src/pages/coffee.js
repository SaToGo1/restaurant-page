export function coffeeLoad(content) {
    const main = document.createElement('main');
    const pageTitle = document.createElement('h1');

    pageTitle.innerText = "Coffee Selection";
    pageTitle.className = "title";
    

    //Coffee1 Creation
    const coffee1 = coffeeSetUp(coffee1Title(), coffee1description(), coffee1img());

    //Coffee2 Creation


    //Coffee3 Creation

    main.id = "main";
    main.appendChild(pageTitle);
    main.appendChild(coffee1);
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
    return "Lose yourself in the steam of the best italian Coffee";
}

function coffee1img(){
    return "https://www.arte-latte.com/wp-content/uploads/2020/12/cappuccino1-min-scaled.jpg";
}