//get data
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let data = JSON.parse(localStorage[id]);
//put data in elements
let img = document.querySelector(".Product-img");
img.src = data.image;
let title = document.querySelector(".Product-info h2");
title.innerHTML = data.name;
let des = document.querySelector(".Product-info p");
des.innerHTML = data.description;
let price = document.querySelector(".product-price-btn span");
price.innerHTML = `$${data.price}`;
let button = document.querySelector(".product-price-btn a");
