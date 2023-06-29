export default function Website(props) {
  return (
    <div className="website">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.name}
      </a>
    </div>
  );
}
