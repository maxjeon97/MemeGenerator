const form = document.querySelector("#input-form");
const url = document.querySelector("#imageurl");
const topText = document.querySelector("#toptext");
const botText = document.querySelector("#bottomtext");
const output = document.querySelector("#output");

function generateMeme(url, topText, botText) {
  const meme = document.createElement("div");
  const upperText = document.createElement("div");
  const lowerText = document.createElement("div");
  const image = document.createElement("img");
  const deleteButton = document.createElement("button");
  image.src = url.value;
  meme.classList.add("meme");
  upperText.classList.add("topText");
  lowerText.classList.add("botText");
  image.classList.add("meme-image");
  deleteButton.classList.add("delete-button");
  upperText.innerText = topText.value.toUpperCase();
  lowerText.innerText = botText.value.toUpperCase();
  deleteButton.innerHTML = "&#10060;";
  meme.appendChild(upperText);
  meme.appendChild(lowerText);
  meme.appendChild(image);
  meme.appendChild(deleteButton);

  meme.addEventListener("click", function(e) {
    meme.remove();
  });

  meme.addEventListener("mouseover", function(e) {
    deleteButton.style.opacity = "0.9";
    image.style.filter = "brightness(80%)";
  });

  meme.addEventListener("mouseout", function(e) {
    deleteButton.style.opacity = "0";
    image.style.filter = "brightness(100%)";
  });

  return meme;
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if(url.value == "" || topText.value == "" || botText.value == "") {
    return false;
  }
  const newMeme = generateMeme(url, topText, botText);
  output.appendChild(newMeme);
  url.value = "";
  topText.value = "";
  botText.value = "";
});







