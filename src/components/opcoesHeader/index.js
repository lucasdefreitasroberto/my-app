import "./style.css";

const textoOpcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

function opcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map(function (lista) {
        return (
          <li className="opcao">
            <p>{lista}</p>
          </li>
        );
      })}
    </ul>
  );
}

// function opcoesHeader2() {
//   return (
//     <ul className="opcoes">
//       {textoOpcoes.map((lista) => (
//         <li className="opcao"><p>{lista}</p></li>
//       ))}
//     </ul>
//   );
// }

export default opcoesHeader;
