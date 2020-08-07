import moho from './images/navigate.gif';
import allChars from './images/all.jpg';
import search from './images/search.gif';
import allSearch from './images/all_chars.gif';

const exampleElement = document.getElementById('exampleImg');
const navGif = document.getElementById('nav_gif');
const searchGif = document.getElementById('search_gif');
const allGif = document.getElementById('all_chars_gif');

exampleElement.src = allChars;
navGif.src = moho;
searchGif.src = search;
allGif.src = allSearch;