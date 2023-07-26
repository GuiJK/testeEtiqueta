const { createCanvas, Image } = require('canvas');

async function generateLabel() {


  const width = 48;
  const height = 25;




  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set the label background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);






  // Set the text color and size
  ctx.

    fillStyle = '#000000';
  ctx.

    font = '10px Arial';

  // Write the text on the label
  ctx.fillText('Example Label', 4, 14);
  ctx.fillText('Important Info', 4, 24);

  // Convert the canvas to an image
  const image = new Image();
  image.src = canvas.toDataURL('image/png');

  // Print the label image to the console (simulate printing)
  printImageToConsole(image);

}

// Function to print the image as ASCII to the console
function printImageToConsole(image) {


  const { width, height } = image;


  const canvas = createCanvas(width, height);


  const ctx = canvas.getContext('2d');
  ctx.

    drawImage(image, 0, 0, width, height);

  let asciiArt = '';
  for (let y = 0; y < height; y += 2) {

    for (let x = 0; x < width; x++) {

      const pixel = ctx.getImageData(x, y, 1, 1).data;

      const luminance = 0.2126 * pixel[0] + 0.7152 * pixel[1] + 0.0722 * pixel[2];

      if (luminance >= 200) {
        asciiArt += ' '; // white space
      }

      else if (luminance >= 150) {
        asciiArt += '.'; // light gray

      } else if (luminance >= 100) {
        asciiArt += ':'; // dark gray

      } else {
        asciiArt += '#'; // black
      }
    }
    asciiArt += '\n teste de impressão';
    // newline for the next row
    console.log(asciiArt);
  };
}

generateLabel();