import IconesHeader from "../../components/IconesHeader";
import { logo as Logo } from "../../components/logo";
import OpcoesHeader from "../../components/opcoesHeader";
// import "./style.css";
import Style from "styled-components";

const HeaderContainer = Style.header`
  display: flex; 
  background-color: #fff;
  justify-content: center;
`;

function Header() {
  return (
    <header className="App-header">
      <HeaderContainer>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </HeaderContainer>
    </header>
  );
}

export default Header;
