import "./app.css";
import "./netflix.css";

import MotivoOne from "../../assets/img/motivo-1.png";

import Button from "../../components/Button";
import Section from "../../components/Section";
import Header from "../../components/Header";
import MOTIVOS from "../../constants/motivos";

export default function Home() {
  const idioma = "PT";

  return (
    <div>
      <Header />
      <section id="banner">
        <h1>
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        <h3>Assista onde quiser. Cancele quando quiser.</h3>
        <small>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </small>

        <div>
          <input type="email" placeholder="Email" />
          <Button text="Vamos Lá" variante="alerta" />
        </div>
      </section>
      <hr className="divisor" />
      <Section
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={MotivoOne}
      />
      <hr className="divisor" />
      <Section
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={MotivoOne}
        alterna={true}
      />
      <hr className="divisor" />

      <Section
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={MotivoOne}
      />
      <hr className="divisor" />
      <Section
        title={MOTIVOS[idioma].ONE.TITLE}
        description={MOTIVOS[idioma].ONE.DESCRIPTION}
        image={MotivoOne}
      />
      <hr className="divisor" />

      <div>
        <h1>teste</h1>
      </div>
    </div>
  );
}
