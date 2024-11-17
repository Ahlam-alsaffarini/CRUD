//check local storage if empty or no
if (window.localStorage.length === 0) {
  console.log("empty");
} else {
  console.log("not empty");
  var List = [];
  let keys = Object.keys(localStorage);
  //put data of local storage into objlist
  for (let i = 1; i < keys.length + 1; i++) {
    List.push(JSON.parse(localStorage.getItem(i)));
  }
  buildProduct(List);
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
    icons.id = i + 1;
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
      //delete element from page
      let idDel = d.parentElement.parentElement.id;
      let elementDelete = document.querySelectorAll("tr")[idDel];
      elementDelete.style.display = "none";
      //delete element from local storage
      List.splice(idDel - 1, 1);
      localStorage.clear();
      for (let i = 0; i < List.length; i++) {
        localStorage.setItem(i + 1, JSON.stringify(List[i]));
      }
    };
  });
}
