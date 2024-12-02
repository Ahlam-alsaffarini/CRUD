//local storage
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let data = JSON.parse(localStorage.getItem("productList"));

// select each input
let nam = document.querySelector("#name");
let price = document.querySelector("#price");
let description = document.querySelector("#Description");
let image = document.querySelector("#img");

//set valid true
let validName = true;
let validPrice = true;
let validDescription = true;
let validImage = true;

// //check name
nam.value = data[id].name;
nam.addEventListener("input", (e) => {
  var regex = /^[A-Za-z][A-Za-z0-9_]/;
  if (!e.target.value.match(regex)) {
    invalidStyle(nam);
    validName = false;
    console.log("hello");
  } else {
    validStyle(nam);
    validName = true;
    data[id].name = e.target.value;
  }
});
// //check price
price.value = data[id].price;
price.addEventListener("input", (e) => {
  var regex = /^\d+(?:[.,]\d+)*$/;
  if (!e.target.value.match(regex)) {
    invalidStyle(price);
    validPrice = false;
  } else {
    validStyle(price);
    validPrice = true;
    data[id].price = e.target.value;
  }
});
// //check description
description.value = data[id].description;
description.addEventListener("input", (e) => {
  validStyle(description);
  validDescription = true;
  data[id].description = e.target.value;
});

// //check image
image.value = data[id].image;
image.addEventListener("input", (e) => {
  var regex = /(https?:\/\/.*\.(?:png|jpg))/i;
  if (!e.target.value.match(regex)) {
    invalidStyle(image);
    validImage = false;
  } else {
    validStyle(image);
    validImage = true;
    data[id].image = e.target.value;
  }
});

// //submit
document.querySelector("form .btn").addEventListener("click", (ele) => {
  if (validName && validPrice && validDescription && validImage) {
    localStorage.setItem("productList", JSON.stringify(data));
  } else {
    console.log("no");
    ele.preventDefault();
  }
});

function invalidStyle(input) {
  input.style.borderColor = "var(--input-errors)";
}
function validStyle(input) {
  input.style.borderColor = "var(--input-valid)";
}
