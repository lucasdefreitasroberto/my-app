import imgLogo from "../../img/logo.svg";
import "./style.css";

function logo() {
  return (
    <div className="Logo">
      <img src={imgLogo} alt="logo" className="logo-img"></img>
      <p>
        <strong>Ativa</strong>
        <u>Books</u>
      </p>
    </div>
  );
}

function lucas() {
  return (
    <div className="Logo">
      <img src={imgLogo} alt="logo" className="logo-img"></img>
      <p>
        <strong>Ativa</strong>
        <u>Books</u>
      </p>
    </div>
  );
}

// export default Logo;
export { lucas, logo };
