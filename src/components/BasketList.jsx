import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    basketQuantityChanger = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item  active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromBasket={removeFromBasket}
            basketQuantityChanger={basketQuantityChanger}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item  active">
        Общая стоимость: {totalPrice}{" "}
        <button
          className="btn"
          style={{ position: "absolute", bottom: "0.2rem", right: "0.5rem" }}
        >
          Оформить заказ
        </button>
      </li>

      <i className="material-icons close-basket" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
