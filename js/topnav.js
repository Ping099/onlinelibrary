
window.onload = function(){
    var totop = document.getElementById("btn");
    // 页面加载后隐藏按钮
    totop.style.display = "none";


    // 吸顶灯功能实现
    var nav = document.getElementById("nav");
    var navTop = nav.offsetTop;
    //获取元素的上外缘距离最近采用定位父元素内壁的距离,如果父元素中没有采用定位的,则是获取上外边缘距离文档内壁的距离。
    // console.log(navTop); 
    var timer = null;
    // 返回顶部添加点击事件
    totop.onclick = function(){
        timer = setInterval(function(){
            var backtop = document.documentElement.scrollTop || document.body.scrollTop;
            // 越滚越慢 scrollTop表示滚动条距离顶部的垂直距离
            var speedTop = backtop/5;
            document.documentElement.scrollTop = backtop-speedTop;
            if(backtop == 0){
                clearInterval(timer);
            }
        },30);
    }

    var pageHeight = 400;
    // 窗口或元素滚动时触发
    window.onscroll = function(){
        // console.log("111");
        var backtop = document.documentElement.scrollTop || document.body.scrollTop;
        if(backtop >= pageHeight){
            totop.style.display = "block";
        }else{
            totop.style.display = "none";
        }


        // 吸顶灯功能实现
        if(backtop>=navTop){
            nav.style.position = "fixed";
            nav.style.top = 0;
            // nav.style.left = 0;
            nav.style.zIndex = 100;
        }else{
            nav.style.position = "";
        }
    }

    
}