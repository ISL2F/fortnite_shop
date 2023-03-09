function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets: [{ full_background }],
    addToBasket = Function.prototype,
  } = props;

  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column" }}
      id={mainId}
    >
      <div className="card-image">
        <img alt="" src={full_background} />
      </div>
      <div className="card-content" style={{ flexGrow: "1" }}>
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() =>
            addToBasket({ mainId, displayName, price: { regularPrice } })
          }
          className="btn"
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
