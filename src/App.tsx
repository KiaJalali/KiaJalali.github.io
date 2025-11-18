import "./App.css";

function App() {
  return (
    <main className="intro">
      <header className="prompt" aria-label="terminal prompt">
        <span className="prompt__user">kia@jalali:~$</span>&nbsp;
        <span className="prompt__cursor">▊</span>
      </header>

      <nav className="site-nav" aria-label="primary">
        <a target="_blank" href="resume.pdf" rel="noreferrer">resume</a>
        <a
          href="https://linkedin.com/in/kiajalali"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://github.com/kiajalali"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a href="mailto:kia.jjalali@gmail.com">email</a>
      </nav>

      <section className="blurb">
        <h1>Kia&nbsp;Jalali</h1>
        <p>
          Hi there! I'm currently travelling around the world before starting full-time work!
        </p>
        <p>
          Feel free to check out my work on&nbsp;
          <a
            href="https://github.com/kiajalali"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <footer className="site-footer">
        <span className="site-footer__bear" aria-hidden="true">
          ʕ•ᴥ•ʔ
        </span>
        ©&nbsp;{new Date().getFullYear()}&nbsp;Kia&nbsp;Jalali
      </footer>
    </main>
  );
}

export default App;
