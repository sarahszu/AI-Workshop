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

        {/* Placeholder content: these three items are examples and should be replaced with Sarah's real coursework and activities. */}
        <section className="semester" aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>Advanced Korean Language coursework</li>
            <li>Second Language Acquisition Theory and Methods seminar</li>
            <li>Teaching practicum in a language classroom setting</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          Sarah Szu &copy; {currentYear}
        </p>
      </footer>
    </>
  );
}
