import "../Header/Header.scss"

function Header() {
  const header1 = ["BANIPAL"];

  return (
    <header>
      <h1 className="headerH1">
        {header1[0].split('').map((char, index) => (
          <span className="headerChar" key={index}>{char}</span>
        ))}
      </h1>      
    </header>
  );
}
export default Header;