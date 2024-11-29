//get data
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let data = JSON.parse(localStorage.getItem("productList"));

//put data in elements
let img = document.querySelector(".Product-img");
img.src = data[id].image;
let title = document.querySelector(".Product-info h2");
title.innerHTML = data[id].name;
let des = document.querySelector(".Product-info p");
des.innerHTML = data[id].description;
let price = document.querySelector(".product-price-btn span");
price.innerHTML = `$${data[id].price}`;
let button = document.querySelector(".product-price-btn a");
