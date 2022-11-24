window.addEventListener('load', function() {
    let headerBlock = document.querySelector("header"); //выбираем блок
    let height_headerBlock = headerBlock.offsetHeight;  //узнаем высоту блока

    let heightScrollHml;  //пустая переменная для будущего динамического наполнения высоты скролинга
    
    //события скролинга страницы
    window.addEventListener("scroll", function() {
        heightScrollHml = window.pageYOffset;

        if(heightScrollHml >= height_headerBlock){
            headerBlock.classList.add("scroling");
        }else if(heightScrollHml +50 <= height_headerBlock){
            headerBlock.classList.remove("scroling");
        }
    });
});

 // КНОПКА
const button = document.querySelector("#menu");
const text = document.querySelector("#list")

button.addEventListener("click", function (){
    text.classList.toggle('show');
});

// ЯКОРИ
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const block_ID = anchor.getAttribute('href')
        document.querySelector('' + block_ID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}
 // АККОРДЕОН
/*const headers = document.querySelectorAll("[data-name='accordeon_title']");

headers.forEach(function(item){
    item.addEventListener("click", function (){
        this.nextElementSibling.classList.toggle("hidden");
    })
}) */

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {
        // убрать все классы 'active'
        tabHeaders.forEach(function (item) {
            item.classList.remove('active');
        });
        // подставить 'active' на нажатый таб
        this.classList.add('active');

        // скрыть все contentBox
        contentBoxes.forEach(function (item) {
            item.classList.add('content_hidden');
        });
        // выбрать нужный contentBox и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('content_hidden');
    });
});

