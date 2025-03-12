export default function Card({
  imageUrl,
  name,
  destination,
  college,
  hobbies,
}) {
  return (
    <div className="card">
      <div className="img-div">
        <img className="img" src={imageUrl} alt="" />
        Google
      </div>
      <div className="details">
        <div className="pers-details">
          <h3 className="name">{name}</h3>
          <h5 className="dest">{destination}</h5>
        </div>
        <p className="college-name">Colleg Name : {college}</p>
        <div className="hoppies">
          <h3>Hoppies:-</h3>
          <ol className="list">
            {hobbies.map((hoppy) => (
              <li>{hoppy}</li>
            ))}
          </ol>
        </div>
        <button className="btn">Click</button>
      </div>
    </div>
  );
}
