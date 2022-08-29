import "./style/style.css";
import { pageLoad as homeLoad } from "./pages/home.js";
import { headerLoad } from "./pages/header.js";
import { coffeeLoad } from "./pages/coffee.js";

const content = document.getElementById('content');

/*
document.body.onload = function(){ 
    headerLoad(content, "home");
    homeLoad(content);
};
*/

document.body.onload = function(){ 
    headerLoad(content, "coffee");
    coffeeLoad(content);
};
