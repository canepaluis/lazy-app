const isIntersecting = function (entry){
    return entry.isIntersecting //true si está dentro de la pantalla
}

const loadImage = function (entry){
    const nodo = entry.target;
    const url = nodo.dataset.src;
    nodo.src = url;
    //quitar el rastreo del nodo
    observer.unobserve(nodo)
}


const observer = new IntersectionObserver(function (allElements){
     allElements
     .filter(isIntersecting)
     .forEach(loadImage)
})

export const registerImage = function (image) {
    //IntersectionObserver -> observer(image)
    observer.observe(image)    

};