import burger from './burger.png';
import hotDog from './hot-dog.png';
import Fries from './fries.jpg';
import drinks from './drinks.jpg';

const burgerImg = new Image();
burgerImg.src = burger;

const hotDogImg = new Image();
hotDogImg.src = hotDog;

const friesImg = new Image();
friesImg.src = Fries;

const drinksImg = new Image();
drinksImg.src = drinks;

const displayMenu = () => {
    const content = document.getElementById('content');
    let element = document.createElement('h1');
    element.innerHTML = 'Menu';
    content.appendChild(element);

    let div = document.createElement('div');
    content.appendChild(div);
    div.style.display = 'grid';
    div.style.gridTemplateColumns = 'auto auto auto';

    let smallerDiv;

    //burger
    element = document.createElement('div');
    div.appendChild(element);
    element.appendChild(burgerImg);
    burgerImg.alt = 'A delicious looking burger';
    burgerImg.style.width = '300px';

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'Burger';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$3';
    smallerDiv.appendChild(element);

    //hot dog
    element = document.createElement('div');
    div.appendChild(element);
    element.appendChild(hotDogImg);
    hotDogImg.alt = 'A delicious looking hot dog';
    hotDogImg.style.width = '300px';
    hotDogImg.style.height = '205px';

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'Hot Dog';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$2';
    smallerDiv.appendChild(element);

    //fries
    element = document.createElement('div');
    div.appendChild(element);
    element.appendChild(friesImg);
    friesImg.alt = 'A portion of fries';
    friesImg.style.width = '300px';

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'Fries portion';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$1';
    smallerDiv.appendChild(element);

    //drinks
    element = document.createElement('div');
    div.appendChild(element);
    element.appendChild(drinksImg);
    drinksImg.alt = 'Refreshing drinks';
    drinksImg.style.width = '300px';

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'Soft drinks';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$1';
    smallerDiv.appendChild(element);
}

export default displayMenu