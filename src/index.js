import { createElement } from "./createElement"
import './style.css';
import pizaImg from './piz.webp'
import staffImg from './staff.jpg'
import saladImg from './salad.jpg'

const header = (() => {
    createElement('headerContainer', 'div', 'headerContain')
    createElement('head', 'div', 'head', 'headerContain')
    createElement('buttonCont', 'div','buttonContainer','headerContain')
    createElement('wa', 'a', 'dugme', 'buttonContainer', 'Home')
    createElement('wa', 'a', 'dugme', 'buttonContainer', 'Menu')
    createElement('wa', 'a', 'dugme', 'buttonContainer', 'Contact')
})()

const contentMain = () => {

    createElement('mainContainer', 'div', 'mainContainer')
    createElement('title', 'h3', 'sectionTitle', 'mainContainer', "What We're All About")
    createElement('desc', 'section', 'description', 'mainContainer')
    createElement('desContain', 'div', 'descriptionContainer', 'description')

    createElement('image', 'img', 'image', 'descriptionContainer')
    const imig = document.querySelector('.image')
    imig.src = pizaImg
    createElement('paragraph', 'p', 'paragraph', 'descriptionContainer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed egestas. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Neque gravida in fermentum et sollicitudin ac orci phasellus. Lacus sed turpis tincidunt id aliquet risus. Vitae suscipit tellus mauris a diam maecenas. Eu consequat ac felis donec et odio pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Nisl vel pretium lectus quam. Ut eu sem integer vitae justo. Sociis natoque penatibus et magnis dis parturient. Arcu ac tortor dignissim convallis. Non tellus orci ac auctor. Blandit massa enim nec dui nunc mattis enim ut tellus. Vel quam elementum pulvinar etiam non quam lacus suspendisse.')

    createElement('desContain', 'div', 'descriptionContainer2', 'description')
    createElement('image', 'img', 'image2', 'descriptionContainer2')
    const imig2 = document.querySelector('.image2')
    imig2.src = saladImg
    createElement('paragraph', 'p', 'paragraph', 'descriptionContainer2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed egestas. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Neque gravida in fermentum et sollicitudin ac orci phasellus. Lacus sed turpis tincidunt id aliquet risus. Vitae suscipit tellus mauris a diam maecenas. Eu consequat ac felis donec et odio pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Nisl vel pretium lectus quam. Ut eu sem integer vitae justo. Sociis natoque penatibus et magnis dis parturient. Arcu ac tortor dignissim convallis. Non tellus orci ac auctor. Blandit massa enim nec dui nunc mattis enim ut tellus. Vel quam elementum pulvinar etiam non quam lacus suspendisse.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed egestas. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Neque gravida in fermentum et sollicitudin ac orci phasellus. Lacus sed turpis tincidunt id aliquet risus. Vitae suscipit tellus mauris a diam maecenas. Eu consequat ac felis donec et odio pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Nisl vel pretium lectus quam. Ut eu sem integer vitae justo. Sociis natoque penatibus et magnis dis parturient. Arcu ac tortor dignissim convallis. Non tellus orci ac auctor. Blandit massa enim nec dui nunc mattis enim ut tellus. Vel quam elementum pulvinar etiam non quam lacus suspendisse.')

    createElement('desContain', 'div', 'descriptionContainer3', 'description')
    createElement('image', 'img', 'image3', 'descriptionContainer3')
    const imig3 = document.querySelector('.image3')
    imig3.src = staffImg
    createElement('paragraph', 'p', 'paragraphF', 'descriptionContainer3', 'loremm ipsum Arcu ac tortor dignissim convallis. Non tellus orci ac auctor. Blandit massa enim nec dui nunc mattis enim ut tellus. Vel quam elementum pulvinar etiam non quam lacus suspendisse.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed egestas. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Neque gravida in fermentum et sollicitudin ac orci phasellus. Lacus sed turpis tincidunt id aliquet risus. Vitae suscipit tellus mauris a diam maecenas. Eu consequat ac felis donec et odio pellentesque.')

}

contentMain()


const footer = () => {
    createElement('footer', 'footer', 'footer', 'container')
    createElement('list', 'ul', 'list', 'footer')
    createElement('listItem', 'li', 'listItem','list', 'Privacy')
    createElement('listItem', 'li', 'listItem','list', 'Terms')
    createElement('listItem', 'li', 'listItem','list', 'Contact')
    createElement('copy', 'span', 'copyright', 'footer', 'Copyright 2021, BERGAMOT')    
}

footer()

const menuMain = () => {
    createElement('mainContainer', 'div', 'mainContainer')
    createElement('title', 'h3', 'sectionTitle', 'mainContainer', "Our dishes")
    createElement('desc', 'section', 'description', 'mainContainer')
    createElement('desContain', 'div', 'descriptionContainer', 'description')
}

const contactMain = () => {
    createElement('mainContainer', 'div', 'mainContainer')
    createElement('title', 'h3', 'sectionTitle', 'mainContainer', "How to contact us")
    createElement('desc', 'section', 'description', 'mainContainer')
    createElement('desContain', 'div', 'descriptionContainer', 'description')
}


const bob = document.querySelectorAll('.dugme')

bob.forEach(e => {
    e.addEventListener('click', (a)=>{
        if(a.target.innerText === 'Menu') {
            let b = document.querySelector('.mainContainer')
            let c = document.querySelector('.footer')
            b.remove()  
            c.remove()

            menuMain()
            footer()
        }
        else if(a.target.innerText === 'Contact') {
            let b = document.querySelector('.mainContainer')
            let c = document.querySelector('.footer')
            b.remove() 
            c.remove()

            contactMain()
            footer()
        }
        else {
            let b = document.querySelector('.mainContainer')
            let c = document.querySelector('.footer')
            b.remove() 
            c.remove()

            contentMain()
            footer()
        }
    })
});

