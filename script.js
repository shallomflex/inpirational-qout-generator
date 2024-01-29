const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


function randomQuote () {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "loading...";
    // console.log("clicked");
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        // console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    quoteBtn.innerText = "New Qoute";
    quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () =>{
    // the speechsynthesisUterance is a web speech api that represent a speech request
    let utterrance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    // speak method pf speechSynthesis speaks the utterance
    speechSynthesis.speak(utterrance);
});
copyBtn.addEventListener("click", () =>{
    // copy the text into copyBtn
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () =>{
  let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
//   opening new tab with quote embedded to be tweeted in url
  window.open(twitterUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);