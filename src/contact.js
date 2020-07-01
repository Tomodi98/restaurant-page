const displayContact = () => {
    let container = document.getElementById('content');
    let element = document.createElement('h1');
    element.innerHTML = 'Contact info';
    container.appendChild(element);

    //container for contact info
    let div = document.createElement('div');
    container.appendChild(div);

    element = document.createElement('div');
    element.innerHTML = 'Address: Made Up Street 1337';
    div.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = 'Phone number: 0123456789';
    div.appendChild(element);

    element = document.createElement('div');
    element.innerHTML = 'E-mail: madeup@email.com';
    div.appendChild(element);
}

export default displayContact
