// 视差效果
let st1 = document.getElementById('st1');
let st2 = document.getElementById('st2');
let st3 = document.getElementById('st3');
let st4 = document.getElementById('st4');
// top: -600px;
//     left: -400px;
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    st1.style.left = -400 + value * 1.7 + 'px';
    st2.style.left = -400 + value * -1.5 + 'px';
    st3.style.left = -400 + value * -1. + 'px';
    st4.style.left = -400 + value * 1 + 'px';

    st1.style.top = -600 + value * 1.8 + 'px';
    st2.style.top = -600 + value * 1.5 + 'px';
    st3.style.top = -600 + value * 1.5 + 'px';
    st4.style.top = -600 + value * 1.5 + 'px';
    // }

})


