import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Card from "./Card.js";

let root = document.getElementById("root");

var template = `
${About()}
    ${Home()}
    ${Contact()}

    ${Card("Sam", "Software Developer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}
    ${Card("Arun", " Engineer")}

`;

root.innerHTML = template;
