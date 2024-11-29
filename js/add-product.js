//obj to store data
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

//check name
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
//check price
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
//check description
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

//check image
image.addEventListener("input", (e) => {
  var regex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
  if (e.target.value === "" || !e.target.value.match(regex)) {
    invalidStyle(image);
    validImage = false;
  } else {
    validStyle(image);
    validImage = true;
    obj["image"] = e.target.value;
  }
});

//submit
document.querySelector("form .btn").addEventListener("click", (ele) => {
  if (validName && validPrice && validDescription && validImage) {
    let productList;
    if (localStorage.getItem("productList") == null) {
      productList = [];
    } else {
      productList = JSON.parse(localStorage.getItem("productList"));
    }
    let id = productList.length;
    obj["id"] = id;
    productList.push(obj);
    localStorage.setItem("productList", JSON.stringify(productList));
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
