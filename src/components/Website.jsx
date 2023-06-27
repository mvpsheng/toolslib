export default function Website(props) {
  return (
    <div className="website">
      <a href={props.url} target="_blank">
        {props.name}
      </a>
    </div>
  );
}
