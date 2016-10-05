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

mainText.onhover = function(){
    console.log('hovering');
    moveRight();
    /*
    if(mainText.style.marginRight > 100) {
        moveRight();
    } else if(mainText.style.marginLeft > 100) {
        moveRight();
    } else {
        moveLeft();
    }
    */
};

function moveRight() {
    mainText.style.marginLeft = mainText.style.marginLeft + 10;
    mainText.style.marginLeft = mainText.style.marginLeft + "px";
}

function moveLeft() {
    mainText.style.marginRight = mainText.style.marginRight +  10;
    mainText.style.marginRight = mainText.style.marginRight + "px";
}

