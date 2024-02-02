const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("http://apimeme.com/meme?meme=Advice-Dog")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
Certainly! Creating a simple meme generator using HTML, CSS, and JavaScript involves handling user input, manipulating the DOM, and displaying the generated meme. Here's a basic example to get you started:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meme Generator</title>
  <style>
    body {
      text-align: center;
    }
    #meme-container {
      margin: 20px;
    }
  </style>
</head>
<body>

  <h1>Meme Generator</h1>

  <div>
    <label for="topText">Top Text:</label>
    <input type="text" id="topText">
  </div>

  <div>
    <label for="bottomText">Bottom Text:</label>
    <input type="text" id="bottomText">
  </div>

  <button onclick="generateMeme()">Generate Meme</button>

  <div id="meme-container"></div>

  <script>
    function generateMeme() {
      const topText = document.getElementById('topText').value;
      const bottomText = document.getElementById('bottomText').value;

      const memeContainer = document.getElementById('meme-container');
      memeContainer.innerHTML = '';

      const meme = document.createElement('div');
      meme.innerHTML = `
        <img src="path/to/your-image.jpg" alt="Meme Image">
        <div class="top-text">${topText}</div>
        <div class="bottom-text">${bottomText}</div>
      `;

      memeContainer.appendChild(meme);
    }
  </script>

</body>
</html>
```

Replace "path/to/your-image.jpg" with the actual path to your meme image. This is a basic example, and you can customize it further based on your needs. You might want to add more styling, improve error handling, or even allow users to upload their own images.