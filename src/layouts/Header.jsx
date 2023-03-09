function Header() {
  return (
    <nav className="teal darken-2 _container">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/ISL2F/fortnite_shop/"
              rel="noreferrer"
              target="_blank"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
