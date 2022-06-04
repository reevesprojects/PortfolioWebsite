let timer;
setTimeout(function() { document.getElementById("tr").classList.remove("vertTranslate") }, 1000);
setTimeout(function() { document.getElementById("content").classList.remove("translate") }, 3000);
document.getElementById("home").addEventListener("mouseover", homeChange);
document.getElementById("home").addEventListener("mouseout", homeOut);
document.getElementById("home").addEventListener("click", mainClick);
document.getElementById("programming").addEventListener("click", programmingClick);
document.getElementById("photos").addEventListener("click", photosClick);
document.getElementById("writings").addEventListener("click", writingsClick);

//Home Animator

function homeChange() {
    //array with all the letters, uppercase and lowercase
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    timer = setInterval(randString, 500, alphabet); //every .5 seconds randString runs with alphabet as its argument
}

function randString(alphabet) {
    var string = "";
    var rand;
    var i;
    for (i = 0; i < 4; i++) { //runs 4 times
        rand = Math.floor(Math.random() * Math.floor(alphabet.length)); //creates a random number between 0 and the length of the alphabet array
        string += alphabet[rand]; //adds the "random" letter to the string
    }
    document.getElementById("home").innerHTML = string; //changes the text to the randomly generated string

}

function homeOut() {
    document.getElementById("home").innerHTML = "Home"; //changes the text back to home when the user moves their mouse off of the text
    clearInterval(timer); //cancels the timer (that's why we needed to declare it outside of the functions) that is used by homeChange()
}

//Buttons
function mainClick() {
    document.getElementById("tr").classList.add("vertTranslate");
    setTimeout(function() { document.getElementById("content").classList.add("translate") }, 300); //delays the transition by .3 seconds
    setTimeout(function() { document.getElementById("tr").classList.remove("vertTranslate") }, 2000);
    setTimeout(function() { window.location = "Main Page.html"; }, 2000);
}

function programmingClick() {
    document.getElementById("tr").classList.add("vertTranslate");
    setTimeout(function() { document.getElementById("content").classList.add("translate") }, 300);
    setTimeout(function() { document.getElementById("tr").classList.remove("vertTranslate") }, 2000);
    setTimeout(function() { window.location = "Programming Page.html"; }, 2000);
}

function photosClick() {
    document.getElementById("tr").classList.add("vertTranslate");
    setTimeout(function() { document.getElementById("content").classList.add("translate") }, 300);
    setTimeout(function() { document.getElementById("tr").classList.remove("vertTranslate") }, 2000);
    setTimeout(function() { window.location = "Photos Page.html"; }, 2000);
}

function writingsClick() {
    document.getElementById("tr").classList.add("vertTranslate");
    setTimeout(function() { document.getElementById("content").classList.add("translate") }, 300);
    setTimeout(function() { document.getElementById("tr").classList.remove("vertTranslate") }, 2000);
    setTimeout(function() { window.location = "Writings Page.html"; }, 2000);
}