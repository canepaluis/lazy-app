const isIntersecting = function (entry){
    return entry.isIntersecting //true si está dentro de la pantalla
}

const action = function (entry){
    const nodo = entry.target;
    console.log("holis");

    //quitar el rastreo del nodo
    observer.unobserve(nodo)
}


const observer = new IntersectionObserver(function (allElements){
     allElements
     .filter(isIntersecting)
     .forEach(action)
})

export const registerImage = function (image) {
    //IntersectionObserver -> observer(image)
    observer.observe(image)    

};