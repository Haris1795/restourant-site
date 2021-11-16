const createContainer = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(createContainer)
createContainer.classList.add('container');

const container = document.querySelector('.container')

 function createElement(name, element, className, targetAppend, text) {
    name = document.createElement(`${element}`)
    name.classList.add(`${className}`)
    if (targetAppend) { 
       document.querySelector(`.${targetAppend}`).appendChild(name)
    }
    else {
        container.appendChild(name)
    }
    if (text) {
        name.textContent = text 
    }
    let rere = name
    return {rere}
};

export {createElement};