console.log('Loaded!');

setTimeout(changeMainText, 2000);

function changeMainText() {
    var element = document.getElementById('main-text');
    element.innerHTML = `Hi! Some New Text.
                        Cheap Thrills !!!
                        Cold Water !!!`
}