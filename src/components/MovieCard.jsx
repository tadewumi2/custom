import "../css/index.css";

function MovieCard(props) {
  return (
    <div className="contacts">
      <article className="contact-card">
        <img src={props.img} className="mount" />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img
            src="../src/images/globe.png"
            className="globe"
            alt="phone-icon"
          />
          <p>{props.number}</p>
        </div>
        <div className="info-group">
          <img
            src="../src/images/mount.jpg"
            className="globe"
            alt="phone-icon"
          />
          <p>{props.email}</p>
        </div>
      </article>
    </div>
  );
}

export default MovieCard;
