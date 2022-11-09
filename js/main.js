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
