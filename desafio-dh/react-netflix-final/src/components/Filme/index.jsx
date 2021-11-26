import "./style.css";

export default function Filme({ titulo, data, poster, duracao }) {
  return (
    <div className="filme">
      <img className="poster" src={poster} alt={titulo} />
      <h5>{titulo}</h5>
      <div className="specs">
        <p>{data}</p>
        <p>{duracao}</p>
      </div>
    </div>
  );
}
