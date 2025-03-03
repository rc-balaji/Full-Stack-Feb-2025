import Section from "./Section.js";
import NavBar from "./NavBar.js";

function App() {
  return `
    ${NavBar()}
    <div>
        ${Section("home", "Home")}
        ${Section("about", "About")}
        ${Section("project", "Project")}
        ${Section("contact", "Contact")}
    </div>
        
    `;
}

export default App;
