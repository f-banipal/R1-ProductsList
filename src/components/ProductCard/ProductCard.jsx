import { fruits } from "../../helper/data2";
import "../ProductCard/ProductCard.scss";

function ProductCard() {
  return (
    <div className="cards">
      {fruits.map((item) => (
        <div className="cards__item" key={item.id}>
          <div className="cards__item__image">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="cards__item__over">

            <div className="cards__item__over__header">
              <span className="cards__item__over__header__title">
                {item.title}
              </span>
              <span className="cards__item__over__header__price">
                ${" "}
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}{" "}
                / kg
              </span>
            </div>

            <div className="cards__item__over__description">
              {item.description.split("").map((char) => (
                <span className="cards__item__over__description__char">{char}</span>
              ))}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductCard;
