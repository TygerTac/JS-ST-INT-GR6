//Pour le swiper, reste à comprendre comment faire pour que quand tu appuis, ça continue de autoplay
document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
        el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2000
        },
    });
})

//L'accordeon

let accordions = document.querySelectorAll(".accordeon")
accordions.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.toggle('open')
    })
})


const tab = document.querySelectorAll('.tab')
const contenue = document.querySelectorAll('.content')

tab.forEach(function(item) {
    item.addEventListener('click', function (){
    tab.forEach(function(item2){
        item2.classList.remove('tab-active')
    }
)

contenue.forEach(function(item3){
    item3.classList.remove('active')
    }
)

this.classList.add('tab-active'); //Dans ce if, sélectionner la classe de la <div> qui contient le nom de l’axe correspondant et lui ajouter la classe “active” ??
        if (this.classList.contains('tab-feu')){
            document.querySelector('.content-feu').classList.add('active')
        } else if (this.classList.contains('tab-eau')) {
            document.querySelector('.content-eau').classList.add('active');
        } else if (this.classList.contains('tab-terre')) {
            document.querySelector('.content-terre').classList.add('active');
        } else if (this.classList.contains('tab-air')) {
            document.querySelector('.content-air').classList.add('active');
        } else if (this.classList.contains('tab-metal')) {
            document.querySelector('.content-metal').classList.add('active');
        }
    })
}) //j'avais esssayer d'une autre maniere mais il marchait pas donc bon?