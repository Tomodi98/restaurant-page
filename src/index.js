import {render, navBar, clear} from './pageLoad';
import displayContact from './contact';
import displayMenu from './menu';
import addStyle from './applyStyle';

render();
navBar(['Home', 'Menu', 'Contact']);
addStyle();

//clear whatever is currently on page when clicking a tab
document.getElementById('tab0').addEventListener('click', clear);
document.getElementById('tab1').addEventListener('click', clear);
document.getElementById('tab2').addEventListener('click', clear);
//display content of the tab clicked
document.getElementById('tab0').addEventListener('click', render);
document.getElementById('tab1').addEventListener('click', displayMenu);
document.getElementById('tab2').addEventListener('click', displayContact);