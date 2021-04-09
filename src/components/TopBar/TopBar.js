import "./topBar.css";

const TopBar = () => {
  return (
    <header>
      <aside>
        <h1>
          <span className="logo">{"{ }"}</span>
          JSD BUZZ
        </h1>
      </aside>
      <aside>
        <p>
          Super Powered By{" "}
          <a
            href="https://galaxieon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Galaxieon ⚡
          </a>
        </p>
      </aside>
    </header>
  );
};

export default TopBar;
