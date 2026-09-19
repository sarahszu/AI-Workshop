export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <h1>Sarah Szu</h1>
        <p className="tagline">
          a senior at UH Manoa studying Korean and Second Language Studies
          Teaching
        </p>
      </header>

      <main>
        <section className="semester" aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>
              Advanced Korean language study to prepare for a year overseas
            </li>
            <li>Learning to code and use AI in SLS480E</li>
            <li>
              Learning how to teach a second language via a teaching
              practicum!
            </li>
          </ul>
        </section>

        <section className="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            Sarah Szu is a senior at the University of Hawaii at Manoa,
            studying Korean and Second Language Studies Teaching. Her
            coursework blends language study with the theory and practice of
            teaching, giving her a foundation in both fluency and pedagogy.
            She is drawn to the ways language connects people across cultures
            and hopes to bring that perspective into her future teaching
            career.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          Sarah Szu &copy; {currentYear}
        </p>
        <p>Built with Claude Code</p>
      </footer>
    </>
  );
}
