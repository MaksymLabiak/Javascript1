const qoute = document.getElementById("q");
const author = document.getElementById("a");
const api_url = "https://zenquotes.io/api/random";
const getQoute = document.getElementById("newQoute");
const repostQoute = document.getElementById("repost");

getQoute.addEventListener("click", getQoute);

repostQoute.addEventListener("click", tweet);

async function getQoute(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    qoute.inertHTML = data.q;
    author.inertHTML = data.a;
}

getQoute(api_url)

function tweet() {
    window.open("href=https://twitter.com/intent/tweet?text=" + qoute.innerHTML + "---- by" + author.inertHTML, "Tweet Window", "width=600", "height=300");
}



