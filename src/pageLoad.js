const render = () => {
    //create content for homepage
    const location = document.getElementById('content');
    let element = document.createElement('h1');
    element.innerHTML = 'Fast Food Example';
    location.appendChild(element);

    element = document.createElement('p');
    element.innerHTML = 'At Fast Food Example we can make your food faster than you can order it. Don\'t believe us? You are welcome to stop by and see for yourself.';
    location.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = '<img src="../img/fast-food.png" alt="a soft drink, some fries and a burger">';
    location.appendChild(element);
}

const navBar = (navBarTabs) => {
    const container = document.getElementById('nav');

    const list = document.createElement('ul');
    list.style.listStyleType = 'none';
    let element;

    for (let i = 0; i < navBarTabs.length; i++) {
        element = document.createElement('li');
        element.setAttribute('id', `tab${i}`);

        element.innerHTML = navBarTabs[i];
        //styles
        element.style.cursor = 'pointer';
        element.style.textAlign = 'center';

        list.appendChild(element);
    }
    container.appendChild(list);
}

const clear = () => {
    const container = document.getElementById('content');
    container.innerHTML = '';
}
export {
    render,
    navBar,
    clear
}