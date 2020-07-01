const addStyle = () => {
    const html = document.querySelector('html');
    const nav = document.querySelector('#nav');
    const content = document.querySelector('#content');
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');

    console.log(html);
    console.log(nav);
    console.log(content);
    console.log(ul);
    console.log(li[0]);
    //html
    html.style.fontFamily = 'Arial, Helvetica, sans-serif';
    //#nav
    nav.style.fontWeight = 'bold';
    //#content
    content.style.height = '90vh';
    content.style.backgroundColor = '#F0EA51';

    //ul
    ul.style.display = 'grid';
    ul.style.gridTemplateColumns = 'auto auto auto';
    ul.style.margin = '0';
    ul.style.padding = '5px 0 5px 0';
    ul.style.backgroundColor = '#BADA55';
    ul.style.color = '#fff';
    ul.style.width = '100%';

    //li
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#BADA55';
        //hover effect
        li[i].addEventListener('pointerenter', function() {changeColorEnter(this);});
        li[i].addEventListener('pointerleave', function() {changeColorLeave(this);});
    }
}

const changeColorEnter = (navBars) => {
    navBars.style.backgroundColor = '#94ad41';
}

const changeColorLeave = (navBars) => {
    navBars.style.backgroundColor = '#BADA55';
}

export default addStyle