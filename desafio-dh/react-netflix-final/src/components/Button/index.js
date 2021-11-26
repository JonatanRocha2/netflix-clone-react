import "./style.css";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className={props.variante}>
      {props.text}
    </button>
  );
}
