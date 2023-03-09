function BasketItem(props) {
  const {
    mainId,
    displayName,

    price: { regularPrice },
    quantity,
    removeFromBasket = Function.prototype,
    basketQuantityChanger = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {displayName}{" "}
      <span
        className="material-icons"
        onClick={() => basketQuantityChanger(props, 1)}
        style={{
          cursor: "pointer",

          margin: "0 2px",
          color: "#fff",
          background: "#00796b",
          fontSize: "16px",
        }}
      >
        add
      </span>{" "}
      x{quantity}
      <span
        className="material-icons"
        onClick={() => basketQuantityChanger(props, -1)}
        style={{
          cursor: "pointer",

          margin: "0 2px",
          color: "#ffff",
          background: "#00796b",
          fontSize: "16px",
        }}
      >
        remove
      </span>{" "}
      = {quantity * regularPrice}руб.
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons delete-item">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
