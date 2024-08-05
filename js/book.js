var book = document.querySelector(".a");
var button = document.querySelector("button");
var content = document.querySelector(".content");
var title = document.querySelector('.zi');
var img = document.querySelector('.img');
book.onmouseover = function () {
    var time = setTimeout(() => {

        button.classList.add('before');
    }, 1000);
};
// setInterval(() => {
book.onmouseout = function () {
    button.classList.remove('before');
    button.classList.remove('active');
    content.classList.remove('mohu');
    title.classList.remove('display');
    title.classList.add('zi');
    img.classList.remove('ac');
}
// }, 1000);

button.onmouseover = function () {

    button.classList.add('active');
    content.classList.add('mohu');
    title.classList.remove('zi');
    title.classList.add('display');
    img.classList.add('ac');
    // this.title.add('display');
};
