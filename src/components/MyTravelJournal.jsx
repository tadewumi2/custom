import "../css/index.css";

function MyTravelJournal(props) {
  return (
    <div className="journalBody">
      <div className="mountImage">
        <img src={props.journal.img} className="mount" />
      </div>
      <div className="text">
        <p>{props.journal.location}</p>
        <a href={props.journal.googleLink}>View on Google Map</a>
        <h2>{props.journal.venue}</h2>
        <h4>{props.journal.date}</h4>
        <p>{props.journal.essay}</p>
      </div>
    </div>
  );
}
export default MyTravelJournal;
