var ol = document.getElementById("ol");

let task = [];

function loadData() {
  let local_data = localStorage.getItem("task");

  let parsedData = JSON.parse(local_data);

  task = parsedData || [];

  makeList();
}

function deleteTask(index) {
  task.splice(index, 1);
  makeList();
}
function updateTask(index) {
  let newText = prompt("Enter new text ");

  task[index].text = newText;

  makeList();
}

function makeList() {
  let template = "";

  for (let i = 0; i < task.length; i++)
    template =
      template +
      `<li>${task[i].text} - ${task[i].time} <button onclick='deleteTask(${i})' >Delete</button> <button onclick='updateTask(${i})' >Update</button> </li>  `;

  ol.innerHTML = template;

  localStorage.setItem("task", JSON.stringify(task));
}

function addTask() {
  let inputText = document.getElementById("textInput");
  let inputTime = document.getElementById("timeInput");

  if (!inputText.value) return;

  task.push({
    text: inputText.value,
    time: inputTime.value,
  });

  makeList();

  inputText.value = "";
  inputTime.value = "";
}

loadData();
