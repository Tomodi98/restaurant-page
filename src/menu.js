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
    element.innerHTML = '<img src="../img/burger.png" alt="Burger" width="300">';
    div.appendChild(element);

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'Burger';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$3';
    smallerDiv.appendChild(element);

    //hot dog
    element = document.createElement('div');
    element.innerHTML = '<img src="../img/hot-dog.png" alt="Hot Dog" height="205" width="300">';
    div.appendChild(element);

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'Hot Dog';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$2';
    smallerDiv.appendChild(element);

    //fries
    element = document.createElement('div');
    element.innerHTML = '<img src="../img/fries.jpg" alt="French Fries" width="300">';
    div.appendChild(element);

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'French Fries';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$1';
    smallerDiv.appendChild(element);

    //drinks
    element = document.createElement('div');
    element.innerHTML = '<img src="../img/drinks.jpg!d" alt="Drinks" width="300">';
    div.appendChild(element);

    smallerDiv = element;
    element = document.createElement('div');
    element.innerHTML = 'Soft Drinks';
    smallerDiv.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '$1';
    smallerDiv.appendChild(element);
}

export default displayMenu