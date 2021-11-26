import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
        <a href="/about">Link pra About</a>
        <Link to="/about">Link pra About</Link>
      </div>
      <div id="login">
        <select id="idioma">
          <option value="PT">Português</option>
          <option value="ING">Ingles</option>
        </select>
        <Button text="Entrar" />
      </div>
    </header>
  );
}
