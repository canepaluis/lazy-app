/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from './lazy'

console.log('Happy hacking :)')
const reference_div = document.querySelector("#images");

function randomNumber(){
    const random_number = Math.floor(Math.random() * 123) + 1;

    return random_number;
}

function NewImage(){
    const newimage = document.createElement("img");
    newimage.width = "320";
    newimage.classList.add("mx-auto");
    newimage.src = `https://randomfox.ca/images/${randomNumber()}.jpg`;

    return newimage;
}

function NewContainer(){
    const newimagecontainer = document.createElement("div");
    newimagecontainer.classList.add("p-4");

    return newimagecontainer;
}

function NewContentCreation(){
    const newimage = NewImage();
    const newcontainer = NewContainer();
    
    newcontainer.append(newimage);
    reference_div.append(newcontainer);
    registerImage(newimage);
}



document.querySelector("#newImgBtn").addEventListener('click', NewContentCreation);



