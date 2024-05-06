// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");
// const width = (canvas.width = window.innerWidth);
// const height = (canvas.height = window.innerHeight);

let words1 = ["bag", "gear", "lead", "place", "carrot", "week", "wealth", "rocket", "zone", "name", "wait", "spell", "spill", "fiber", "alive", "heat", 
"rush", "core", "way", "duck", "side", "spine", "shoot", "pound", "repeat", "view", "use", "crime", "strain", "direct", "crouch", "belly", "wander", 
"era", "praise", "record", "weight", "creed", "gloom", "wind", "catch", "sheep", "candle", "shadow", "frown", "with", "to", "about", "now", "then"];

let words2 = ["here", "is", "pots", "for", "then", "right", "sent", "read", "nine", "nothing", "context", "center", "appear", "export", "cold", "enemy", 
"ready", "south", "slow", "rib", "kick", "thumb", "truck", "jam", "woman", "fight", "root", "pen", "coast", "route", "adopt", "wagon", "loan", "path",
"marsh", "mask", "level", "oven", "code", "leak", "desk", "novel", "skip", "panel", "solo", "scale", "and", "bay", "to", "let"];

let words3 = ["and", "nor", "let", "go", "upstairs", "boat", "squeak", "red", "pop", "screen", "corn", "tree", "yes", "late", "ice", "fact", "warm",
"travel", "down", "lie", "track", "when", "mark", "after", "hats", "nothing", "off", "call", "yum", "dart", "jeans", "frail", "company", "this", "book",
"begin", "stuff", "cube", "syrup", "now", "button", "pink", "lamp", "box", "chair", "shirt", "towel", "again", "never", "but"];

let wordsArr = [words1, words2, words3];

const timeLimit = 30;

let pText = document.getElementById("p");

let volume = 0;
let num = 0;
function randomWords() {
    pText.textContent = "";
    num = Math.floor(Math.random(0, 3));
    let selectedWords = wordsArr[num];

for(let i = 0; i < selectedWords.length; i++){
    if(i === 0){
        pText.textContent += selectedWords[i];
    }
    else{
        pText.textContent += " " + selectedWords[i];
    }
}
}
// let num = Math.floor(Math.random(0, 2));
//     let selectedWords = wordsArr[num];

// for(let i = 0; i < selectedWords.length; i++){
//     if(i === 0){
//         pText.textContent += selectedWords[i];
//     }
//     else{
//         pText.textContent += " " + selectedWords[i];
//     }
// }

let newWords = document.getElementById("new_words");
let countText = document.getElementById("timer");
 countText.textContent = 30;

function printInput(){
    

    let textBox = document.getElementById("text_input");
    let textValue = textBox.value;
    console.log(textValue);
    splitText = textValue.split(" ");
    numOfWords = splitText.length;
    console.log(numOfWords);
}

function clearContent() {
    document.getElementById("text_input").value = " ";
    document.getElementById("text_input").disabled = false;
    console.log(document.getElementById("text_input").value);
    let countText = document.getElementById("timer");
    countText.textContent = "30";
    //endCount();
    clearInterval(myInterval);
    
}
let myInterval;
function startTimer() {
    clearInterval(myInterval);
    myInterval = setInterval(countDown, 1000);
}
function countDown() {
    let countText = document.getElementById("timer");
    
    if(countText.textContent <= 0){
        endCount();
        clearInterval(myInterval);
        // document.getElementById("text_input").disabled = true;
        return;
    }
    else{
        countText.textContent--;
        if(countText.textContent <= 9){
            countText.textContent = "0" + countText.textContent;
        }
    }
}

function endCount(){
    clearInterval(myInterval);
    let wpm = numOfWords * 2;
    console.log(wpm);
    if(wpm <= 9){
        document.getElementById("wpm").textContent = "0" + wpm;
    }
    else{
        document.getElementById("wpm").textContent = wpm;
    }
    if(document.getElementById("increase").checked == true){
        if(volume >= 100){
            volume = 100;
            document.getElementById("volume").textContent = volume;
            return;
        }
        volume += wpm;
        if(volume <= 9){
            document.getElementById("volume").textContent = "0" + volume;
        }
        else{
            document.getElementById("volume").textContent = volume;
        }
    }
    else{
        if(volume <= 0){
            volume = 0;
            document.getElementById("volume").textContent = "0"  + volume;
            return;
        }
        
        
        volume -= wpm;
        if(volume <= 9){
            document.getElementById("volume").textContent = "0" + volume;
        }
        else{
            document.getElementById("volume").textContent = volume;
        }
        
    }
    // document.getElementById("text_input").disabled = true;
    return;
}


























// Previous record player stuff

// context.beginPath();
// context.fillStyle = `rgb(30, 30, 30)`;
// context.arc(width/1.5, height/2, width/5, 0, 2*Math.PI);
// context.fill();
// //context.endPath();

// context.beginPath();
// context.fillStyle = `rgb(200, 200, 200)`;
// context.arc(width/1.5, height/2, width/40, 0, 2*Math.PI);
// context.fill();

// context.beginPath();
// context.fillStyle = `rgb(30, 30, 30)`;
// context.arc(width/4.2, height/3, width/7, 0, 2*Math.PI);
// context.fill();


//context.fillRect(width/2, height/2, width/4, height/4);