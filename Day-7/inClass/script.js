import Carddata from "./cardData.js";
import Card from "./makeTemplate.js";

var container = document.getElementById("container");

let finalTemplate = "";

for (let i = 0; i < Carddata.length; i++) {
  finalTemplate = finalTemplate + Card(Carddata[i]);
}

container.innerHTML = finalTemplate;
