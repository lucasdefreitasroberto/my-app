import IconesHeader from "../../components/IconesHeader";
import { logo as Logo } from "../../components/logo";
import OpcoesHeader from "../../components/opcoesHeader";
import "./style.css";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
    
  );
}

export default Header;
