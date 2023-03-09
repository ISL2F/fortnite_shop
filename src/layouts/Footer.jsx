function Footer() {
  return (
    <div className="footer teal darken-2 _container">
      <div className="footer-copyright">
        © {new Date().getFullYear()} Copyright Text
        <a
          className="grey-text text-lighten-4 right"
          href="https://github.com/ISL2F/fortnite_shop/"
          rel="noreferrer"
          target="_blank"
        >
          Repo
        </a>
      </div>
    </div>
  );
}

export { Footer };
