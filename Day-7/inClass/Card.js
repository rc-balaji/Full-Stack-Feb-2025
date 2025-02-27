export default function Card(name, destination) {
  return `
  <div class="card">
       
        <div class="details">
            <div class="pers-details">
                <h3 class="name">${name}</h3>
                <h5 class="dest">${destination}</h5>
            </div>
            <button class="btn">Press</button>
        </div>
    </div>  `;
}
