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
          I'm a software engineer interested in distributed systems,
          quantitative finance, and open-source tools. I've interned at&nbsp;
          <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
            Snapchat
          </a>
          ,&nbsp;
          <a href="https://www.drw.com" target="_blank" rel="noreferrer">
            DRW
          </a>
          ,&nbsp;
          <a href="https://aws.amazon.com/backup/" target="_blank" rel="noreferrer">
            AWS
          </a>
          ,&nbsp;
          <a
            href="https://developer.amazon.com/en-US/alexa"
            target="_blank"
            rel="noreferrer"
          >
            Amazon&nbsp;Alexa
          </a>
          , and&nbsp;
          <a href="https://www.sap.com" target="_blank" rel="noreferrer">
            SAP
          </a>
          . I'm currently focused on low-latency infrastructure and tinkering
          with new technology to make everyday developer workflows smoother.
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
