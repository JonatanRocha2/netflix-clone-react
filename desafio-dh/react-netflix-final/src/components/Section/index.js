import "./style.css";

export default function Section({ title, description, image, alterna }) {
  function zoom(event) {
    const { target: img } = event;
    img.style.transform = "scale(1.5)";
    img.style.cursor = "pointer";
  }

  function outZoom(event) {
    event.target.style.transform = "scale(1)";
  }

  return (
    <section className={`motivos ${alterna && "alterna"}`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img
          src={image}
          alt="Motivo 1"
          onMouseMove={zoom}
          onMouseLeave={outZoom}
        />
      </div>
    </section>
  );
}
