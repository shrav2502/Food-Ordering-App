const items = [
  {
    name: "Burger",
    price: 150,
    id: "1",
  },
  {
    name: "French fries",
    price: 50,
    id: "2",
  },
  {
    name: "Pizza",
    price: 200,
    id: "3",
  },
  {
    name: "Coke",
    price: 30,
    id: "4",
  },
  {
    name: "Pasta",
    price: 200,
    id: "5",
  },
  {
    name: "Cheese balls",
    price: 130,
    id: "6",
  },
  {
    name: "Black Coffee",
    price: 80,
    id: "7",
  },
  {
    name: "Lemon Tea",
    price: 70,
    id: "8",
  },
];
const menu = document.querySelector(".menu");
const summary = document.querySelector(".summary");
const totalAmount = document.querySelector("#total-amount");
const placeOrder = document.querySelector("#place-order");

let count = 1;

const foodItem = items.forEach((item) => {
  const div = document.createElement("div");
  div.className = "items-list";

  const button = document.createElement("button");
  button.textContent = "Add";
  button.className = "add";

  const input = document.createElement("input");
  input.type = "number";
  input.min = 0;
  input.value = 0;
  input.className = "item-no";

  const foodPrice = document.createElement("div");
  foodPrice.append("Rs." + item.price);
  div.append(item.name);
  div.appendChild(foodPrice);
  div.appendChild(input);
  div.appendChild(button);

  menu.appendChild(div);

  addItems(button, item, input);
});

let total = [];

const table = document.createElement("table");

function addItems(button, item, input) {
  button.addEventListener("click", () => {
    const tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.style.width = "107px";
    td2.style.width = "146px";

    var text1 = document.createTextNode(item.name);
    var text2 = document.createTextNode(input.value);
    var text3 = document.createTextNode(item.price * input.value);
    var text4 = document.createTextNode(item.id);

    const del = document.createElement("button");
    del.textContent = "X";
    del.className = "delete";

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(text3);
    tr.appendChild(del);

    table.appendChild(tr);
    summary.appendChild(table);

    total.push(Number(text3.textContent));

    totalPrice();

    deleteItem(
      button,
      del,
      td4.textContent,
      item,
      tr,
      Number(text3.textContent)
    );

    button.disabled = true;
  });

  return button;
}
let t = 0;

function deleteItem(but, del, td, i, tr, price) {
  del.addEventListener("click", () => {
    if (td == i.id) {
      tr.remove();
      but.disabled = false;
      subtractItem(price);
    }
  });
}
let final = [];

function subtractItem(price) {
  let sum = 0;
  final = total.filter((a) => {
    if (a == price) {
      return a;
    }
  });
  for (let i = 0; i < total.length; i++) {
    if (total[i] == final) {
      total[i] = total[i] - final;
    }
    sum = sum + total[i];
  }
  totalAmount.textContent = "Total Amount: " + "Rs." + sum;
}

function totalPrice() {
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum = sum + total[i];
  }
  totalAmount.classList.remove("hide");
  totalAmount.textContent = "Total Amount: " + "Rs." + sum;
}
console.log(total);
