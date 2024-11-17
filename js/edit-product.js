//local storage
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let data = JSON.parse(localStorage[id]);

//new obj
var obj = new Object();

// select each input
let nam = document.querySelector("#name");
let price = document.querySelector("#price");
let description = document.querySelector("#Description");
let image = document.querySelector("#img");

//set valid true
let validName,
  validPrice,
  validDescription,
  validImage = true;

// //check name
nam.value = data.name;
nam.addEventListener("input", (e) => {
  var regex = /^[A-Za-z][A-Za-z0-9_]/;
  if (e.target.value === "" || !e.target.value.match(regex)) {
    invalidStyle(nam);
    validName = false;
  } else {
    validStyle(nam);
    validName = true;
    obj["name"] = e.target.value;
  }
});
// //check price
price.value = data.price;
price.addEventListener("input", (e) => {
  var regex = /^\d+(?:[.,]\d+)*$/;
  if (e.target.value === "" || !e.target.value.match(regex)) {
    invalidStyle(price);
    validPrice = false;
  } else {
    validStyle(price);
    validPrice = true;
    obj["price"] = e.target.value;
  }
});
// //check description
description.value = data.description;
description.addEventListener("input", (e) => {
  if (e.target.value === "") {
    invalidStyle(description);
    validDescription = false;
  } else {
    validStyle(description);
    validDescription = true;
    obj["description"] = e.target.value;
  }
});

// //check image
image.value = data.image;
image.addEventListener("input", (e) => {
  var regex = /(https?:\/\/.*\.(?:png|jpg))/i;
  if (e.target.value === "" || !e.target.value.match(regex)) {
    invalidStyle(image);
    validImage = false;
  } else {
    validStyle(image);
    validImage = true;
    obj["image"] = e.target.value;
  }
});

// //submit
document.querySelector("form .btn").addEventListener("click", (ele) => {
  if (validName && validPrice && validDescription && validImage) {
    localStorage.setItem(id, JSON.stringify(obj));
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
