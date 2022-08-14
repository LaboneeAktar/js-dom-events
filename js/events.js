console.log('This is separate JS');

//Option 1: Directly set on the HTML element
// <button onclick="document.body.style.backgroundColor='crimson'">Make Crimson</button>

// Option 2 : add onclick function on the HTML element
// .......................................Important................................................
// <button onclick="makeSkyBlue()">Make SkyBlue</button>
function makeSkyBlue() {
    document.body.style.backgroundColor = 'skyblue';
}

//Option 3:
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

//Option 3 another
const magentaButton = document.getElementById('make-magenta');
magentaButton.onclick = function makeMagenta() {
    document.body.style.backgroundColor = 'magenta';
}

//Option 4
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', makeGreen);

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

//Option 4 another
const antiquewhiteButton = document.getElementById('make-antiquewhite');
antiquewhiteButton.addEventListener('click', function makeAntiquewhite() {
    document.body.style.backgroundColor = 'antiquewhite';
})

// .......................................Important................................................
// Option 4 Final
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
