import { PageLoad as HomeLoad } from "./page/home.js";

const content = document.getElementById('content');

document.body.onload = function(){ 
    HomeLoad(content); 
};