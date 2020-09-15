const newTable = document.getElementById("newTable");
const name = document.getElementById("name");
const year = document.getElementById("year");
const date = document.getElementById("date");
const sum = document.getElementById("sum");
const addBtn = document.getElementById("addBtn");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");
const deleteBtn = document.getElementById("deleteBtn");
const sumBtn = document.getElementById("sumBtn");

let arr = [];

addBtn.addEventListener("click", () => {
  arr.push({
    name: name.value,
    year: year.value,
    date: date.value,
    sum: sum.value,
    id: arr.length,
  });
  addInfo();

  console.log(arr);
});

function addInfo() {
  newTable.innerHTML = "";
  for (let i = 0; i < arr.length; i++)
    newTable.innerHTML += `<div id = "lineNr${i}"><tr><td><input type="checkbox" employeeID="${arr[i].id}"></td><td>${arr[i].name}</td><td>${arr[i].year}</td><td>${arr[i].date}</td><td>${arr[i].sum}</td></div`;
  const count = arr.length;
  quantity.innerHTML = `Количество сотрудников: ${count}`;
}

deleteBtn.addEventListener("click", () => {
  let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
  let ids = [];
  checkedBoxes.forEach((box) => {
    ids.push(Number(box.getAttribute("employeeID")));
  });
  arr = arr.filter((employee) => !ids.includes(employee.id));
  addInfo();
});

sumBtn.addEventListener("click", () => {
  let collectSum = [];
  arr.forEach((element) => {
    collectSum.push(Number(element.sum));
  });
  let totalSum = collectSum.reduce((sum, current) => sum + current, 0);
  const amount = totalSum;
  total.innerHTML = `Сумма $: ${amount}`;
});
