document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        // Проверяем, был ли клик по пустому месту (не по элементам с классом 'body')
        if (!event.target.closest(".body")) {
            // Находим элемент с классом 'body'
            const bodyElement = document.querySelector(".body");

            // Плавная прокрутка до элемента
            if (bodyElement) {
                bodyElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});