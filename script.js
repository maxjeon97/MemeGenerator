const form = document.querySelector("#input-form");
const url = document.querySelector("input[name='url']");
const topText = document.querySelector("input[name='top']");
const botText = document.querySelector("input[name='bot']");
const output = document.querySelector("#output");

form.addEventListener("submit", function(e) {
  if(url.value == "" || topText.value == "" || botText.value == "") {
    return false;
  }
  e.preventDefault();
  const newMeme = generateMeme(url, topText, botText);
  output.appendChild(newMeme);
  url.value = "";
  topText.value = "";
  botText.value = "";
});

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

  deleteButton.addEventListener("click", function(e) {
    meme.remove();
  });

  deleteButton.addEventListener("mouseover", function(e) {
    deleteButton.style.opacity = "0.9";
    image.style.filter = "brightness(10%)";
  });

  return meme;
}




