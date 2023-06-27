export default function Nav(props) {
  function handleClick() {
    props.onclick();
  }
  return (
    <div className="nav" onClick={handleClick}>
      {props.name}
    </div>
  );
}
