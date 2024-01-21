const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');
const footer = document.querySelector('footer')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon'); //ça change aussi l'icone
    if(this.classList.toggle('bi-brightness-high-fill')){
        // Oui, Le site est déja sombre pour commencer mais bon. J'ai ajouter le mini darkmode comme voulu.
        body.style.background = 'grey';
        body.style.color = 'black';
        body.style.transition = '2s';
        footer.style.background = 'grey';
        footer.style.color = 'black';
        footer.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        footer.style.background = '#1a1a1a';
        footer.style.color = '#8282829a';
        footer.style.transition = '2s';
    }
});