// const quoteButton = document.querySelector("js-new-quote");
function displayQuote(quote){

    let newQuote = document.querySelector("#js-quote-text");
    newQuote.textContent = quote;
}

function getQuote(){
    
    fetch("https://api.thecatapi.com/v1/images/search?limit=1", 
    {headers: {'x-api-key': 'live_YRykmt4LYDh0LTScOhzNfnFCf2vt3Dpwk1IgaZD7w8f3pL5ctARbEc5f5ytLju6t'}})
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        let catData = data;
        catData.map(function(images){
            console.log(data);
            let catImg = document.querySelector('img');
            catImg.src = `${images.url}`;
            // let id = `${images.id}`;
            console.log(catImg.src);
            // console.log(id);
            document.body.appendChild(catImg);

        })
        
    })
    
}
// quoteButton.addEventListener("click", ()=> 

//     getQuote()
// );

const quoteButton = document.querySelector("#js-new-quote");
      quoteButton.addEventListener("click", () =>
        getQuote()
      );






