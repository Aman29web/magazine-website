import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCalendar,
  FiUser
} from "react-icons/fi";

import interviews from "../../data/interviews";
import styles from "./InterviewDetail.module.css";
import Navbar from "../../components/global/navbar/Navbar";
import Footer from "../../components/global/footer/Footer";

const InterviewDetail = () => {
  const { id } = useParams();

  const interview = interviews.find((item) => item.id === id);

  if (!interview) {
    return (
      <main className={styles.notFound}>
        <span className={styles.kicker}>Interview</span>

        <h1>Interview not found</h1>

        <p>
          The interview you are looking for may have been removed or the link
          may be incorrect.
        </p>

        <Link to="/interviews" className={styles.backButton}>
          <FiArrowLeft />
          Back to Interviews
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
        <Navbar></Navbar>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img
            src={interview.image}
            alt={`${interview.person} - ${interview.title}`}
          />
        </div>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <Link to="/interviews" className={styles.backLink}>
            <FiArrowLeft />
            Back to Interviews
          </Link>

          <div className={styles.heroMeta}>
            <span>{interview.category}</span>
            <span>•</span>
            <span>{interview.date}</span>
          </div>

          <h1>{interview.title}</h1>

          <div className={styles.person}>
            <div className={styles.personIcon}>
              <FiUser />
            </div>

            <div>
              <strong>{interview.person}</strong>
              <span>
                {interview.designation}
                {interview.company && ` · ${interview.company}`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.introduction}>
        <div className={styles.introductionInner}>
          <span className={styles.kicker}>The Conversation</span>

          <p>{interview.introduction}</p>
        </div>
      </section>

      {/* INTERVIEW */}
      <section className={styles.interviewContent}>
        <div className={styles.contentGrid}>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <span className={styles.sidebarLabel}>Interview</span>

              <strong>{interview.person}</strong>

              <span>{interview.designation}</span>

              <div className={styles.sidebarLine}></div>

              <div className={styles.sidebarMeta}>
                <span>
                  <FiCalendar />
                  {interview.date}
                </span>

                <span>
                  <FiArrowUpRight />
                  {interview.category}
                </span>
              </div>
            </div>
          </aside>

          <div className={styles.questions}>
            {interview.questions.map((item, index) => (
              <article
                className={styles.questionBlock}
                key={`${interview.id}-${index}`}
              >
                <span className={styles.questionNumber}>
                  0{index + 1}
                </span>

                <div>
                  <h2>{item.question}</h2>

                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={styles.bottomCta}>
        <div>
          <span className={styles.kickerLight}>More Conversations</span>

          <h2>
            Continue exploring
            <em> new perspectives.</em>
          </h2>
        </div>

        <Link to="/interviews" className={styles.exploreButton}>
          View All Interviews
          <FiArrowUpRight />
        </Link>
      </section>
<Footer></Footer>
    </main>
  );
};

export default InterviewDetail;