const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

// 注册页面切换
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// 表单验证
const usename = document.getElementById("name");
const password1 = document.querySelector("#password1");
const email1 = document.querySelector("#email1");
const email2 = document.querySelector("#email2");
const password2 = document.querySelector("#password2");
var forms = document.querySelectorAll('form');
forms[0].addEventListener('submit', e => {
    // e.preventDefault();
    validateForm();
});
forms[1].addEventListener('submit', e => {
    // e.preventDefault();
    validateForm();
});
function validateForm() {
    // trim剔除空格
    const namevalue = usename.value.trim();
    const email1value = email1.value.trim();
    const password1value = password1.value.trim();
    const password2value = password2.value.trim();
    const email2value = email2.value.trim();
    // console.log(namevalue);

    var f = 1;
    if (namevalue == "") {
        printError(usename, "请输入用户名");
        f = 0;
    }
    else {
        printError(usename, "");
        removeError(usename);
    }

    if (email1value === "") {
        printError(email1, "请输入邮箱");
    }
    else if (!ifemail(email1value)) {
        printError(email1, "邮箱格式有误，请重新输入");
    }
    else {
        printError(email1, "");
        removeError(email1);
    }

    if (email2value === "") {
        printError(email2, "请输入邮箱");
    }
    else if (!ifemail(email2value)) {
        printError(email2, "邮箱格式有误，请重新输入");
    }
    else {
        printError(email2, "");
        removeError(email2);
    }
    if (password2value === "") {
        printError(password2, "请输入密码");
    }
    else if (!ispassword(password2value)) {
        printError(password2, "密码至少包含一个小写字母和一个数字，长度至少为8位");
    }
    else {
        printError(password2, "");
        removeError(password2);

    }
    if (password1value == "") {
        printError(password1, "请输入密码");
    }
    else {
        printError(password1, "");
        removeError(password1);
    }
}
function printError(input, message) {
    const inputbox = input.parentElement;
    inputbox.classList.add('error');
    inputbox.querySelector('.error-message').textContent = message;

}
function removeError(input) {
    const inputbox = input.parentElement;
    inputbox.classList.remove('error');
}
function ifemail(email) {
    const txt = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/;
    return txt.test(email);
}
// 验证密码
function ispassword(password) {
    const txt = /^(?=.*[a-z])(?=.*\d).{8,}$/;
    return txt.test(password);
}
var egcode = document.querySelector('.gcode');
var einp = document.querySelector("#inp");
var emsg = document.querySelector(".er")
//生成验证码
var getcode = function () {
    // 转36进制 会包含所有小数和小写字母
    // 前两位是0
    var code = Math.random().toString(36).substring(3, 7);
    return code;

}
egcode.onclick = function () {
    egcode.innerHTML = getcode();
}
egcode.innerHTML = getcode();
forms[0].addEventListener('submit', e => {
    if (einp.value == "") {
        emsg.innerHTML = "请输入验证码";
    }
    else if (egcode.innerHTML == einp.value) {
        emsg.innerHTML = "";
        // printError(emsg, "验证通过");
    } else {
        emsg.innerHTML = '未通过验证';
        // printError(emsg, "验证未通过");
    }
})




