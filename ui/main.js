//Counter Code
var button = document.getElementById("counter");
var span = document.getElementById("count");

button.onclick = function(){
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
                var counter = request.responseText;
                span.innerHTML = counter.toString();
          }
      }
  };
  
  request.open('GET', "http://gokul18496.imad.hasura-app.io/counter", true);
  request.send(null);
};

//Email Search
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit');
submit.onclick = function() {
   var request = new XMLHttpRequest();
  
   request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
              var names = request.responseText;
              names = JSON.parse(names);
              var list = "";
              for(var i = 0; i < names.length; i++){
                  list += '<li>' + names[i] + '</li>';
             }
             var ul = document.getElementById('namelist');
             ul.innerHTML = list;
        }
      }
   };
      request.open('GET', "http://gokul18496.imad.hasura-app.io/submit-name/" + name, true);
      request.send(null);

};


/*
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

var marginTop = 0;
var reachedBottom = false;

function move(){
    if(marginTop === 100){
        reachedBottom = true; 
    } else if(marginTop === 0){
        reachedBottom = false;
    }
    if(marginTop >= 0 && marginTop <= 100 && reachedBottom === false){
        marginTop = marginTop + 10;
    } else {
        marginTop = marginTop - 10;
    }
    mainText.style.marginTop = marginTop + "px";   
}

mainText.onclick = function(){
        var interval = setInterval(move, 100);
};

*/


