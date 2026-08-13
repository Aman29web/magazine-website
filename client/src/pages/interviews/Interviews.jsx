import { Link } from "react-router-dom";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import interviews from "../../data/interviews";
import styles from "./Interviews.module.css";
import Navbar from "../../components/global/navbar/Navbar";
import Footer from "../../components/global/footer/Footer";

const Interviews = () => {
  return (
    <main className={styles.page}>
        <Navbar></Navbar>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          {/* <span className={styles.heroKicker}>Conversations</span> */}

          <h1 className={styles.heroTitle}>
           
            <span className={styles.heroHighlight}> Voices That Shape Tomorrow, Conversations that go beyond the headlines.</span>
          </h1>

          <p className={styles.heroSubtitle}>
Explore conversations with the people, leaders and innovators shaping industries, ideas and the future. Discover perspectives, experiences and ideas from leaders and changemakers across different industries.
          </p>
        </div>

        <div className={styles.scrollCue}>
          <span className={styles.scrollCueLine}></span>
          {/* <span>Explore</span> */}
          <span className={styles.scrollCueIcon}>↓</span>
        </div>
      </section>

      {/* INTRO */}
    

      {/* INTERVIEWS */}
      <section className={styles.interviewsSection}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.kicker}>Featured Conversations</span>

            <h2>Meet the minds behind the ideas.</h2>
          </div>

          <p>
            A collection of thoughtful conversations exploring leadership,
            technology, business, people and innovation.
          </p>
        </div>

        <div className={styles.interviewGrid}>
          {interviews.map((interview, index) => (
            <Link
              key={interview.id}
              to={`/interviews/${interview.id}`}
              className={styles.interviewCard}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={interview.image}
                  alt={`${interview.person} - ${interview.title}`}
                  className={styles.interviewImage}
                  loading={index < 2 ? "eager" : "lazy"}
                />

                <div className={styles.imageOverlay}></div>

                <div className={styles.playButton}>
                  <FiPlay />
                </div>

                <span className={styles.category}>
                  {interview.category}
                </span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span>{interview.date}</span>
                  <span className={styles.metaDot}>•</span>
                  <span>{interview.category}</span>
                </div>

                <h3>{interview.title}</h3>

                <div className={styles.personInfo}>
                  <div>
                    <strong>{interview.person}</strong>
                    <span>{interview.designation}</span>
                  </div>

                  <span className={styles.cardArrow}>
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DARK CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.kickerLight}>Keep Exploring</span>

          <h2>
            Every conversation
            <em> opens a new perspective.</em>
          </h2>

          <p>
            Continue exploring stories, ideas and conversations from
            influential voices across industries.
          </p>
        </div>
      </section>
<Footer></Footer>
    </main>
  );
};

export default Interviews;