




let uno = document.querySelector(".uno");

uno.onclick = function() {
    document.body.classList.toggle("theme_dark");
    if(document.body.classList.contains("theme_dark")){
        uno.src = "../assets/images/icons/sol.png";
    }else{
        uno.src = "../assets/images/icons/luna.png"
    }
}

let dos = document.querySelector(".dos");

dos.onclick = function() {
    document.body.classList.toggle("theme_red");
    if(document.body.classList.contains("theme_red")){
        dos.src = "../assets/images/icons/sol.png";
    }else{
        dos.src = "../assets/images/icons/temperatura.png"
    }
}

let caja = document.querySelector("#caja");

let carrousel = document.querySelector(".carrousel");

let carrouselImages = document.querySelector(".carrousel_images");

let flechas = document.querySelectorAll(".flecha");

let numImagenes = document.querySelectorAll(".carrousel_images img").length;
let imageIndex = 1;
let translateX = 0;

flechas.forEach(img => {
    img.addEventListener('click', e => {
        if (e.target.id == 'izq') {
            if (imageIndex != 1) {
                imageIndex--;
                translateX = -500*(imageIndex-1);
            } else if (imageIndex == 1) {
                imageIndex = numImagenes;
                translateX -= 4000;
            }
        } else {
            if (imageIndex != numImagenes) {
                imageIndex++;
                translateX = -500*(imageIndex-1);
            } else if (imageIndex = numImagenes) {
                imageIndex = 1;
                translateX = 0;
            }
        }
        carrouselImages.style.transform = `translateX(${translateX}px)`;
    })
})

document.querySelectorAll('.mini').forEach(item => {
    item.addEventListener('click', event => {
        switch(event.target.id) {
            case 'm1':
                translateX = 0;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
            case 'm2':
                translateX = -500;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
            case 'm3':
                translateX = -1000;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
            case 'm4':
                translateX = -1500;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;        
            case 'm5':
                translateX = -2000;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
            case 'm6':
                translateX = -2500;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
            case 'm7':
                translateX = -3000;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
            case 'm8':
                translateX = -3500;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
            case 'm9':
                translateX = -4000;
                carrouselImages.style.transform = `translateX(${translateX}px)`
                break;
        }
    })
})
