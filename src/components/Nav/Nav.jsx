import { categories } from "../../helper/data2";
import "../Nav/nav.scss"

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {categories.map((category, index) => (
          <li key={index} className="nav__item">
             <a
              href={`#${category}`}
              className={`nav__link ${index === 0 ? 'nav__link--active' : ''}`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;

/*

*/