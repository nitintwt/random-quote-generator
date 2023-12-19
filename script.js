const apiUrl = "https://api.quotable.io/random"
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newBtn = document.getElementById("newBtn");

function newQuote(){
  fetch(apiUrl)
    .then(response => {
      if (response.status == 404) {
          quote.style.display = "block";
          author.style.display = "none";
      } else {
          return response.json();
      }
  })
  .then(data => {
      quote.innerHTML = data.content;
      author.innerHTML= data.author;

  })
  .catch(error => {
      console.error('Error fetching quote:', error);
  });
}

newBtn.addEventListener("click", function () {
  newQuote();
});
