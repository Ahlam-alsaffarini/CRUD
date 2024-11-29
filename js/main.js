//check local storage of items if empty or no
let productList;
if (localStorage.getItem("productList") == null) {
  console.log("empty");
} else {
  productList = JSON.parse(localStorage.getItem("productList"));
  buildProduct(productList);
  showSingleProduct();
  editProduct();
  deleteProduct();
}

//build data tabel
function buildProduct(li) {
  let tbody = document.querySelector("tbody");
  li.forEach((ele, i) => {
    let tr = document.createElement("tr");
    tbody.append(tr);
    //name
    let name = document.createElement("td");
    name.innerText = ele.name;
    tr.append(name);
    // price
    let price = document.createElement("td");
    price.innerText = `$${ele.price}`;
    tr.append(price);
    // description
    let description = document.createElement("td");
    description.innerHTML = ele.description;
    description.classList.add("description");
    tr.append(description);
    // image
    let tdImage = document.createElement("td");
    let image = document.createElement("img");
    image.src = ele.image;
    tr.append(tdImage);
    tdImage.appendChild(image);
    // icons
    let icons = document.createElement("td");
    icons.id = i;
    let divIcons = document.createElement("div");
    icons.classList.add("icons");
    tr.append(icons);
    icons.append(divIcons);
    // show icon
    let showLink = document.createElement("a");
    showLink.classList.add("show");
    let show = document.createElement("i");
    show.classList.add("fa-solid", "fa-eye", "text-dark");
    divIcons.appendChild(showLink).appendChild(show);
    // edit icon
    let editlink = document.createElement("a");
    editlink.classList.add("edit");
    let edit = document.createElement("i");
    edit.classList.add("fa-solid", "fa-pen-to-square", "text-primary");
    divIcons.appendChild(editlink).appendChild(edit);
    // delete icon
    let delBtn = document.createElement("a");
    delBtn.classList.add("delete");
    let del = document.createElement("i");
    del.classList.add("px-0", "fa-solid", "fa-trash", "text-danger");
    divIcons.appendChild(delBtn).appendChild(del);
  });
}

//show single product
function showSingleProduct() {
  let shows = document.querySelectorAll(".show");
  shows.forEach((show) => {
    show.onclick = function (even) {
      even.stopPropagation();
      let idShow = show.parentElement.parentElement.id;
      show.href = `show-product.html?id=${idShow}`;
    };
  });
}
//edit product
function editProduct() {
  let edit = document.querySelectorAll(".edit");
  edit.forEach((e) => {
    e.onclick = function (even) {
      even.stopPropagation();
      let idEdit = e.parentElement.parentElement.id;
      e.href = `edit-product.html?id=${idEdit}`;
    };
  });
}
//delete product
function deleteProduct() {
  let del = document.querySelectorAll(".delete");
  del.forEach((d) => {
    d.onclick = function (even) {
      if (confirm("Are u sure u want to delete this item?")) {
        //delete element from page
        let idDel = d.parentElement.parentElement.id;
        //delete element from local storage
        productList.splice(idDel, 1);
        productList.forEach((ele, index) => {
          ele.id = index;
          console.log(ele);
        });
        localStorage.setItem("productList", JSON.stringify(productList));
        buildProduct(productList);
        location.reload(); // Reload the current page
      }
    };
  });
}
