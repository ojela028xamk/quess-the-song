import Image from 'next/image';
import css from './page.module.scss';

export default function Home() {
  return (
    <div className={css.page}>
      <header className={css.header}>
        <Image
          className={css.main_logo}
          src="/spotify_logo.png"
          alt="Website logo"
          width={3000}
          height={2000}
        />
        <h1>Quess the song</h1>
      </header>
      <main className={css.main}></main>
      <footer className={css.footer}></footer>
    </div>
  );
}
