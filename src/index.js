import "./style/style.css";
import { pageLoad as homeLoad } from "./pages/home.js";
import { headerLoad , changeHeader } from "./pages/header.js";
import { coffeeLoad } from "./pages/coffee.js";
import { contactLoad } from "./pages/contact.js";

const content = document.getElementById('content');

//First load, we need it to set up the click events.
headerLoad(content, "home");
homeLoad(content);

const headerHome = document.getElementById('header__home');
const headerCoffee = document.getElementById('header__coffee');
const headerContact = document.getElementById('header__contact');

headerHome.addEventListener('click', function() {
    erasePage();
    changeHeader("home");
    homeLoad(content);
});

headerCoffee.addEventListener('click', function(){
    erasePage();
    changeHeader("coffee");
    coffeeLoad(content);
})

headerContact.addEventListener('click', function(){
    erasePage();
    changeHeader("contact");
    contactLoad(content);
})

function erasePage(){
    const main = document.getElementById('main');
    content.removeChild(main);
}