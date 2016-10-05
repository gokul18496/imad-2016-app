console.log('Loaded!');

setTimeout(changeMainText, 1000);
var mainText = document.getElementById('main-text');
function changeMainText() {
    mainText.innerHTML = `Hi! Some New Text.
                        Cheap Thrills !!!
                        Cold Water !!!`
}

var pos = 0;
var dir = 1;
var img = document.getElementById('madi');
img.onclick = function(){
    console.log('clicking');
    if(pos === 0 && dir === 1){
        img.style.marginLeft = "200px";
        pos = 1;
    } else if(pos === 1 && dir === 1){
        img.style.marginLeft = "0px";
        pos = 0;
        dir = 0;
    } else if(pos === 0 && dir === 0) {
        img.style.marginLeft = "-200px";
        pos = -1;
        dir = 0;
    } else if(pos === -1 && dir === 0) {
        img.style.marginLeft = "0px";
        pos = 0;
        dir = 1;
    }
};

mainText.onmousemove = function(){
    console.log('hovering');
    console.log(event.clientY);
    mainText.style.marginDown = (event.clientY - 350) + "px";
};

mainText.onmouseout = function(){
    console.log('leaving text');
    
};

