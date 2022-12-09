document.getElementById('main-action').onclick=function(){
    document.getElementById('cars').scrollIntoView({behavior:"smooth"});
}

var buttons=document.getElementsByClassName('car-button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick=function(){
        document.getElementById('price').scrollIntoView({behavior:"smooth"});
    }
}


document.getElementById('price-button').onclick=function(){
    if(document.getElementById('name').value===''){
        document.getElementById('name').placeholder="Введите ваше имя!!!"
    }
     if(document.getElementById('number').value===''){
        document.getElementById('number').placeholder="Введите ваш телефон!!!"
    }
    if(document.getElementById('car').value===''){
        document.getElementById('car').placeholder="Введите автомобиль!!!"
    }   
}


document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.1) / 5) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
})
});
