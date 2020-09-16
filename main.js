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
const sortBtnYearsAppend = document.getElementById("sortBtnYearsAppend");
const sortBtnYearsDescend = document.getElementById("sortBtnYearsDescend");
const sortBtnDateAppend = document.getElementById("sortBtnDateAppend");
const sortBtnDateDescend = document.getElementById("sortBtnDateDescend");

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

  // console.log(arr);
});

function addInfo() {
  newTable.innerHTML = "";
  for (let i = 0; i < arr.length; i++)
    newTable.innerHTML += `<div id = "lineNr${i}"><tr><td><input type="checkbox" employeeID="${arr[i].id}"></td><td>${arr[i].name}</td><td>${arr[i].year}</td><td>${arr[i].date}</td><td>${arr[i].sum}</td></div`;
  const count = arr.length;
  quantity.innerHTML = `Количество сотрудников: ${count}`;
}

deleteBtn.addEventListener("click", () => {
  let selectedCheckBoxes = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  let ids = [];
  selectedCheckBoxes.forEach((box) => {
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

sortBtnYearsAppend.addEventListener("click", () => {
  function compareYearsAppend(a, b) {
    if (a.year > b.year) return 1;
    if (a.year == b.year) return 0;
    if (a.year < b.year) return -1;
  }
  arr.sort(compareYearsAppend);
  addInfo();
});

sortBtnYearsDescend.addEventListener("click", () => {
  function compareYearsDescend(a, b) {
    if (a.year > b.year) return -1;
    if (a.year == b.year) return 0;
    if (a.year < b.year) return 1;
  }
  arr.sort(compareYearsDescend);
  addInfo();
});

sortBtnDateAppend.addEventListener("click", () => {
  function compareDateAppend(a, b) {
    if (a.date > b.date) return 1;
    if (a.date == b.date) return 0;
    if (a.date < b.date) return -1;
  }
  arr.sort(compareDateAppend);
  addInfo();
});

sortBtnDateDescend.addEventListener("click", () => {
  function compareDateDescend(a, b) {
    if (a.date > b.date) return -1;
    if (a.date == b.date) return 0;
    if (a.date < b.date) return 1;
  }
  arr.sort(compareDateDescend);
  addInfo();
});
