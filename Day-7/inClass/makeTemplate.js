export default function Card({
  imageUrl,
  name,
  destination,
  college,
  hobbies,
}) {
  return `
<div class="card">
        <div class="img-div"><img class="img" src="${imageUrl}" alt="">
            Google
        </div>
        <div class="details">
            <div class="pers-details">
                <h3 class="name">${name}</h3>
                <h5 class="dest">${destination}</h5>
            </div>
            <p class="college-name">College Name : ${college}</p>
            <div class="hoppies">
                <h3>Hoppies:-</h3>
                <ol class="list">
                    ${hobbies.map((hoppy) => `<li>${hoppy}</li>`).join("")}
                </ol>
            </div>
            <button class="btn">Click</button>
        </div>
    </div>  
`;
}

export function sampleCall() {
  console.log("Hell WOrld ");
}
