var data = [
  {
    imageUrl: "./icon.png",
    name: "Balaji",
    destination: "Software Developer",
    college: "NGP IT",
    hobbies: ["reading", "writing", "playing"],
  },
  {
    imageUrl: "./icon.png",
    name: "Arun",
    destination: "Data Analyst",
    college: "IIT Madras",
    hobbies: ["chess", "coding", "cycling"],
  },
  {
    imageUrl: "./icon.png",
    name: "Sneha",
    destination: "UX Designer",
    college: "MIT",
    hobbies: ["painting", "traveling", "blogging"],
  },
  {
    imageUrl: "./icon.png",
    name: "Karthik",
    destination: "Cyber Security Analyst",
    college: "Anna University",
    hobbies: ["hacking", "gaming", "reading"],
  },
  {
    imageUrl: "./icon.png",
    name: "Priya",
    destination: "AI Engineer",
    college: "Stanford",
    hobbies: ["AI research", "writing", "movies"],
  },
  {
    imageUrl: "./icon.png",
    name: "Vikram",
    destination: "Mechanical Engineer",
    college: "IISc Bangalore",
    hobbies: ["automobiles", "cricket", "gym"],
  },
  {
    imageUrl: "./icon.png",
    name: "Divya",
    destination: "Doctor",
    college: "AIIMS Delhi",
    hobbies: ["singing", "dancing", "reading"],
  },
  {
    imageUrl: "./icon.png",
    name: "Rajesh",
    destination: "Civil Engineer",
    college: "NIT Trichy",
    hobbies: ["traveling", "photography", "sketching"],
  },
  {
    imageUrl: "./icon.png",
    name: "Swathi",
    destination: "Marketing Manager",
    college: "IIM Bangalore",
    hobbies: ["public speaking", "networking", "music"],
  },
  {
    imageUrl: "./icon.png",
    name: "Manoj",
    destination: "Entrepreneur",
    college: "Harvard Business School",
    hobbies: ["startups", "investing", "sports"],
  },
  {
    imageUrl: "./icon.png",
    name: "Manoj2",
    destination: "Entrepreneu22r",
    college: "Harvard Business 2222School",
    hobbies: ["startups", "investing", "sports", "TV"],
  },
];

function makeTemplate(item) {
  var template = `
<div class="card">
        <div class="img-div"><img class="img" src="${item.imageUrl}" alt="">
            Google
        </div>
        <div class="details">
            <div class="pers-details">
                <h3 class="name">${item.name}</h3>
                <h5 class="dest">${item.destination}</h5>
            </div>
            <p class="college-name">College Name : ${item.college}</p>
            <div class="hoppies">
                <h3>Hoppies:-</h3>
                <ol class="list">
                    ${item.hobbies.map((hoppy) => `<li>${hoppy}</li>`).join("")}
                </ol>
            </div>
            <button class="btn">Click</button>
        </div>
    </div>
    
`;
  return template;
}

let finalTemplate = "";

for (let i = 0; i < data.length; i++) {
  finalTemplate = finalTemplate + makeTemplate(data[i]);
}

container.innerHTML = finalTemplate;
