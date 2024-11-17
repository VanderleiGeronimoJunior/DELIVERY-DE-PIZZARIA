
// CARRINHO DE COMPRAS
let carrinho = document.querySelector(".carrinho")

document.querySelector("#cart").onclick = () => {
    // ABRE O CARRIONHO
    carrinho.classList.toggle("active")

    // REMOVE O LOGIN
    login.classList.remove("active")
    // REMOVE O MENU RESPONSIVO
    menuResponsivo.classList.remove('active')
}

// LOGIN
let login = document.querySelector(".login-form")

document.querySelector("#login").onclick = () => {
    // ABRE O LOGIN
    login.classList.toggle("active")

    // REMOVE O CARRINHO
    carrinho.classList.remove("active")
    // REMOVE O MENU RESPONSIVO
    menuResponsivo.classList.remove('active')
}

// MENU RESPONSIVO
let menuResponsivo = document.querySelector('.menu-site')
document.querySelector('#menu').onclick = () => {
    // ABRE O MENU RESPONSIVO
    menuResponsivo.classList.toggle('active')

    // REMOVE O LOGIN
    login.classList.remove("active")
    // REMOVE O CARRINHO
    carrinho.classList.remove("active")
}

window.onscroll = () => {
    carrinho.classList.remove("active")
    login.classList.remove("active")
    menuResponsivo.classList.remove("active")
}

// SLIDE PRINCIPAL
const swiper = new Swiper('.home-slider', {
    autoplay:{
        delay:3500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


//   SLID CARDÁPIO
const swiperCardapio = new Swiper('.menu-slider', {
    grapCursor: true,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    spaceBetwwen: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

// MODAL
let verModal = document.querySelector(".menu-modal-container")
let verModalBox = verModal.querySelector(".menu-modal")

document.querySelectorAll(".menu .box").forEach(menu => {
 menu.onclick = ()=>{
    verModal.style.display = "flex"
    let nome = menu.getAttribute('data-name')

    verModalBox.forEach(visualizar =>{
        let chamada = visualizar.getAttribute('data-target')
        if(nome == chamada){
            visualizar.classList.add('active')
        }

    })
 }
})
// FECHAR MODAL
verModal.querySelector('#fechar').onclick = ()=>{
    verModal.style.display = "none"
    verModalBox.forEach(fechar =>{
        fechar.classList.remove('active')
    })
}