const firebaseConfig = {
  apiKey: "AIzaSyBfgRWuQI1W8HZGeKESF-GoY0FFlHfd6yI",
  authDomain: "todo-project-5cd89.firebaseapp.com",
  projectId: "todo-project-5cd89",
  storageBucket: "todo-project-5cd89.firebasestorage.app",
  messagingSenderId: "407000089847",
  appId: "1:407000089847:web:4ea4cc9da2293c66ba7ff2",
  measurementId: "G-CMJSTND3TT",
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const task = [];
var ol = document.getElementById("ol");
let inputText = document.getElementById("textInput");
let inputTime = document.getElementById("timeInput");

const collection = db.collection("todo-collection");

async function getTodos() {
  const querySnapshot = await collection.get();

  querySnapshot.forEach((doc) => {
    task.push({ id: doc.id, ...doc.data() });
  });

  makeList();
}

async function addTodo(doc) {
  collection
    .add(doc)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      inputText.value = "";
      inputTime.value = "";
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  makeList();
}

function makeList() {
  console.log(task);
  let template = "";

  for (let i = 0; i < task.length; i++)
    template =
      template +
      `<li>${task[i].text} - ${task[i].time} <button onclick='deleteTask(${i})' >Delete</button> <button onclick='updateTask(${i})' >Update</button> </li>  `;

  ol.innerHTML = template;
}

function addTask() {
  if (!inputText.value) return;

  task.push({
    text: inputText.value,
    time: inputTime.value,
  });

  addTodo({
    text: inputText.value,
    time: inputTime.value,
  });

  makeList();
}

async function updateTodo(docId, newDoc) {
  try {
    await collection.doc(docId).update(newDoc);
    console.log(`Document with ID ${docId} updated successfully.`);
    makeList();
  } catch (error) {
    console.error("Error updating document:", error);
  }
}
async function deleteTodo(docId) {
  try {
    await collection.doc(docId).delete();
    console.log(`Document with ID ${docId} deleted successfully.`);
    makeList();
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}

function deleteTask(index) {
  let id = task[index].id;

  console.log(id);

  task.splice(index, 1);

  deleteTodo(id);
}
function updateTask(index) {
  let newText = prompt("Enter new text ");

  task[index].text = newText;

  let newDocs = task[index];
  let id = newDocs.id;

  updateTodo(id, newDocs);
}

makeList();

getTodos();
