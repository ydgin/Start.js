// функции;
function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  number.textContent = "0";
}

// let func = document.querySelectorAll("");
let images = document.querySelectorAll(".rectagle-blox3");
for (let i = 0; i < images.length; i++) {
 let image = images[i];
 console.log(image.getAttribute("src"));
}
