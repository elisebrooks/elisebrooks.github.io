let current = 0;
let text = document.querySelector("p");
const clicker = document.querySelectorAll("p");
function change(){
    if(current === 0){
        text = "Goodbye!";
        current = 1;
        return;
    }
    if(current === 1){
        text = "Hello!";
        current = 0;
        return;
    }
}
clicker.addEventListener("click", change);