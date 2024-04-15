// const quoteButton = document.querySelector("js-new-quote");
function displayQuote(quote){

    let newQuote = document.querySelector("#js-quote-text");
    newQuote.textContent = quote;
}

function getQuote(){
    
    const newFetch = new Request(link);
    fetch(newFetch)
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     let quoteData = data;
    //     quoteData.map((quote) => {
    //         // console.log(quote);
    //         // let text = `${quote.result}`;
    //         // let id = `${images.id}`;
    //         console.log(quote);
    //         // console.log(id);

    //     })
        
    // })
    // .catch(function(error){
    //     console.log("Error, response not retrieved.");
    //     alert("Error, response not retrieved.");
    //     return;
    // })
    .then ((response) => {
        if(response.ok === false){
            console.log("Error, response not retrieved.");
            alert("Error, response not retrieved.");
            return;
        }
        if(response.ok === true){
            let quote = response.text();
            // let quoteSlice = quote.slice(16)
            console.log(quote);
            displayQuote(quote);
        }

    })
    // .then((response) => response.text())
    //     .then((text) => {
    //       quote = text;
    //       console.log(quote);
    //       displayQuote(quote);
    //     });
    
}
// quoteButton.addEventListener("click", ()=> 

//     getQuote()
// );

const quoteButton = document.querySelector("#js-new-quote");
      quoteButton.addEventListener("click", () =>
        getQuote()
      );

const link = "https://trivia.cyberwisp.com/getrandomchristmasquestion";




