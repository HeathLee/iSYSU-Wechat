/**
 * Created by zhoujihao on 15-10-20.
 * open source open mind!
 */

window.onload = function() {
    var canvas = document.getElementById("gameCanvas");
    console.log("------------------Run! SYSUer!!------------------");

    cc.game.onStart = function() {
        // Cross Screen
        cc.view.adjustViewPort(true);
        cc.view.enableAutoFullScreen(true);

       // 原先采用横屏模式，但微信浏览器不是很支持，效果不好。

        // 微信竖屏解决方案，浏览器竖屏方案，主要是调整分辨率。
        cc.view.setDesignResolutionSize(750, 1500, cc.ResolutionPolicy.NO_BORDER);
        cc.view.setResolutionPolicy(cc.ResolutionPolicy.NO_BORDER);
        cc.view.resizeWithBrowserSize(true);

        //pre-load resources
        cc.LoaderScene.preload(g_resources, function () {
            cc.director.runScene(new BeginScene());
        }, this);
    };
    cc.game.run("gameCanvas");
};


//弹出隐藏层
function ShowDiv(show_div,bg_div){
    document.getElementById(show_div).style.display='block';
    document.getElementById(bg_div).style.display='block' ;
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = document.body.scrollWidth;
    // bgdiv.style.height = $(document).height();
    $("#"+bg_div).height($(document).height());
}

//关闭弹出层
function CloseDiv(show_div,bg_div) {
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
}

