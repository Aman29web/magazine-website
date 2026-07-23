import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage} />
      <div className={styles.duotone} />

      <p className={styles.eyebrow}>
        Honouring the people shaping the future of work across MENA
      </p>

      <h1 className={styles.headline} aria-label="The Global Voice of Leadership">
        <span className={styles.line}>THE GLOBAL</span>
        <span className={styles.line}>VOICE OF</span>
        <span className={`${styles.line} ${styles.lineAccent}`}>LEADERSHIP</span>
      </h1>

      <div className={styles.bottomRow}>
        <p className={styles.subtext}>
          Where influential leaders are discovered, their stories are told,
          their ideas inspire, and their achievements are celebrated.
        </p>
        <a href="#explore" className={styles.cta}>
          Enter the Platform
        </a>
      </div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          <span>MENA&nbsp;LEADERSHIP</span>
          <span>·</span>
          <span>FUTURE&nbsp;OF&nbsp;WORK</span>
          <span>·</span>
          <span>2026&nbsp;EDITION</span>
          <span>·</span>
          <span>MENA&nbsp;LEADERSHIP</span>
          <span>·</span>
          <span>FUTURE&nbsp;OF&nbsp;WORK</span>
          <span>·</span>
          <span>2026&nbsp;EDITION</span>
          <span>·</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;