function Jokes(props) {
  return (
    <>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <hr />
    </>
  );
}

export default Jokes;
