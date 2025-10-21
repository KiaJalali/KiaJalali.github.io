import "./App.css";

const posts = [
  {
    title: "Building a latency-aware matching engine",
    date: "April 2024",
    dateTime: "2024-04-12",
    description:
      "Design notes from a side-project exploring optimistic order matching, kernel bypass, and pragmatic observability for low-latency services.",
    url: "https://medium.com/@kiajalali/latency-aware-matching-engine",
  },
  {
    title: "Operator tooling for resilient distributed jobs",
    date: "January 2024",
    dateTime: "2024-01-19",
    description:
      "Lessons learned while developing self-healing job orchestration, and the CLI ergonomics that keep on-call rotations calm.",
    url: "https://medium.com/@kiajalali/operator-tooling-distributed-jobs",
  },
  {
    title: "Caring about cache coherency",
    date: "September 2023",
    dateTime: "2023-09-07",
    description:
      "A quick tour through profiling an edge cache, spotting false sharing, and making little wins add up for global latency SLOs.",
    url: "https://medium.com/@kiajalali/cache-coherency",
  },
];

function App() {
  return (
    <main className="layout">
      <header className="site-header">
        <div className="prompt" aria-label="terminal prompt">
          <span className="prompt__user">kia@jalali:~$</span>&nbsp;
          <span className="prompt__cursor">▊</span>
        </div>

        <nav className="site-nav" aria-label="primary">
          <a target="_blank" href="resume.pdf" rel="noreferrer">
            resume
          </a>
          <a href="#blog">blog</a>
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
      </header>

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

      <section className="blog" id="blog" aria-labelledby="blog-heading">
        <div className="blog__header">
          <h2 id="blog-heading">Writing &amp; notes</h2>
          <p className="blog__intro">
            Occasional essays about building dependable systems, trading
            infrastructure, and the ergonomics that make engineers fast.
          </p>
        </div>

        <ol className="blog__list">
          {posts.map((post) => (
            <li key={post.title} className="blog__item">
              <article className="blog-card">
                <header className="blog-card__header">
                  <time className="blog-card__date" dateTime={post.dateTime}>
                    {post.date}
                  </time>
                  <h3 className="blog-card__title">
                    <a href={post.url} target="_blank" rel="noreferrer">
                      {post.title}
                    </a>
                  </h3>
                </header>
                <p className="blog-card__description">{post.description}</p>
                <a
                  className="blog-card__link"
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  read essay ↗
                </a>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <footer className="site-footer">
        <span className="site-footer__bear" aria-hidden="true">
          ʕ•ᴥ•ʔ
        </span>
        <span>©&nbsp;{new Date().getFullYear()}&nbsp;Kia&nbsp;Jalali</span>
      </footer>
    </main>
  );
}

export default App;
