import Website from "./Website";
export default function Subject(props) {
  return (
    <div className="subject">
      <h1>{props.name}</h1>
      <div className="websites">
        {props.websites.map((website) => (
          <Website
            key={website.name}
            name={website.name}
            url={website.url}
          ></Website>
        ))}
      </div>
      <hr />
    </div>
  );
}
