utils = {};
/**
 * 捕获鼠标位置
 * @param element
 * @returns {{x: number, y: number}}
 */
utils.captureMouse = function(element){
    var mouse = {x: 0, y: 0};
    element.addEventListener("mousemove", function(e){
        var x, y;
        if(e.pageX){
            x = e.pageX;
            y = e.pageY;
        }else{
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    }, false);
    return mouse;
};
/**
 * 捕获触摸位置
 * @param element
 * @returns {{x: number, y: number, isPressed: boolean}}
 */
utils.captureTouch = function(element){
    var touch = {x: 0, y: 0, isPressed: false};
    element.addEventListener("touchstart", function(e){
        touch.isPressed = true;
    }, false);

    element.addEventListener("touchend", function(e){
        touch.isPressed = false;
    }, false);

    element.addEventListener("touchmove", function(event){
        var x, y,  e = event.touches[0];
        if(e.pageX){
            x = e.pageX;
            y = e.pageY;
        }else{
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        touch.x = x;
        touch.y = y;
    }, false);
    return touch;
}