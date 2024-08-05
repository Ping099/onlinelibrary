var hd = document.querySelector('.head')


setInterval(() => {

    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 10) {
        // window.alert('??')
        hd.classList.add("active");
    } else {
        hd.classList.remove("active");
    }
}, 1000);


