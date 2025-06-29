import css from './page.module.scss';

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h1>Quess the song</h1>
        <p>Search for an artist and quess the song!</p>
      </main>
      <footer className={css.footer}></footer>
    </div>
  );
}
