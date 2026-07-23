import { useEffect, useRef, useState } from 'react';
import styles from './Hero6.module.css';

const SLIDES = ['/a6.jpg', '/a8.jpg', '/a16.jpg', '/a19.jpg', '/a14.avif', '/a17.jpg'];
// Slides whose photos run dark — structural lines switch to ink here
const DARK_LINE_SLIDES = [1, 3];
const INTERVAL = 5500;

const Hero6 = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    clearInterval(timerRef.current);
    setActive(index);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
  };

  const isDarkLineSlide = DARK_LINE_SLIDES.includes(active);

  return (
    <section
      className={`${styles.hero} ${isDarkLineSlide ? styles.heroDarkLines : ''}`}
    >
      <div className={styles.slides}>
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={i !== active}
          />
        ))}
        <div className={styles.overlay} />
        <div className={styles.grain} aria-hidden="true" />
      </div>

      <header className={styles.topBar}>
        <span className={styles.folio}>MENA</span>
        <span className={styles.folio}>2026 Edition</span>
      </header>

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          Honouring the people shaping the future of work across MENA
        </p>

        <h1 className={styles.headline}>
          <span className={styles.line}>THE LEADERSHIP</span>
          <span className={`${styles.line} ${styles.lineAccent}`}>GAZETTE</span>
        </h1>

        <p className={styles.subtext}>
          Where influential leaders are discovered, their stories are told,
          their ideas inspire, and their achievements are celebrated.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>
            Contact Us
          </a>
        </div>
      </div>

      <div className={styles.carouselBar}>
        <span className={styles.slideCount}>
          {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
        <div className={styles.progressGroup} role="tablist" aria-label="Carousel slides">
          {SLIDES.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show slide ${i + 1}`}
              className={styles.progressTrack}
              onClick={() => goTo(i)}
            >
              <span
                className={`${styles.progressFill} ${i === active ? styles.progressFillActive : ''}`}
                style={i === active ? { animationDuration: `${INTERVAL}ms` } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero6;