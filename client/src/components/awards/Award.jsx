import React, { useState } from "react";
import {
  FaChevronDown,
  FaTrophy,
  FaCrown,
  FaBriefcase,
  FaUserTie,
  FaHandsHelping,
  FaLightbulb,
  FaGlobeAmericas,
  FaRegClock,
  FaRegFileAlt,
  FaGavel,
  FaAward,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkedAlt,
  FaArrowRight,
  FaBuilding,
  FaHandshake,
  FaRocket,
  FaStar,
  FaVideo,
  FaMapPin,
  FaBullhorn,
  FaCalendarCheck,
  FaEye,
  FaShieldAlt,
  FaNetworkWired,
  FaCommentDots,
  FaBalanceScale,
  FaCogs,
} from "react-icons/fa";
import styles from "./Award.module.css";
import Navbar from "../global/navbar/Navbar";

// Flagship, standalone recognition — sits above the 15 award categories.
const SPECIAL_AWARD = {
  icon: FaCrown,
  title: "Top 100 HR Leaders",
  desc: "A definitive ranking of the 100 HR leaders shaping the future of work across the MENA region.",
};

// 15 award categories, straight from the official 2026 category list.
const AWARD_CATEGORIES = [
  {
    icon: FaBriefcase,
    title: "Organisational Excellence & Employer of the Year",
    desc: "Honoring organizations, of every size and sector, that set the benchmark for people-first excellence across the MENA region.",
  },
  {
    icon: FaUsers,
    title: "HR & People Team Excellence",
    desc: "Celebrating HR and People teams whose collective impact elevates culture, capability, and business outcomes.",
  },
  {
    icon: FaHandsHelping,
    title: "Organisational Culture & Employee Experience",
    desc: "Recognizing cultures and experiences deliberately designed to help people do their best work.",
  },
  {
    icon: FaRocket,
    title: "Workplace Transformation & Future of Work",
    desc: "Spotlighting bold shifts in how, where, and why work gets done.",
  },
  {
    icon: FaBullhorn,
    title: "Talent Acquisition & Employer Branding",
    desc: "Honoring the strategies that attract, convert, and retain exceptional talent.",
  },
  {
    icon: FaUserTie,
    title: "Talent Management & Workforce Planning",
    desc: "Recognizing disciplined approaches to building and deploying the workforce of tomorrow.",
  },
  {
    icon: FaLightbulb,
    title: "Learning, Development & Future Skills",
    desc: "Celebrating programmes that close skills gaps and build lasting capability.",
  },
  {
    icon: FaCrown,
    title: "Leadership Development & People Leadership",
    desc: "Honoring the development of leaders — and the leaders themselves — shaping people-first organizations.",
  },
  {
    icon: FaCommentDots,
    title: "Employee Engagement, Listening & Communication",
    desc: "Recognizing how organizations listen to, engage, and communicate with their people.",
  },
  {
    icon: FaShieldAlt,
    title: "Employee Wellbeing, Mental Health & Sustainability",
    desc: "Celebrating initiatives that protect and sustain the wellbeing of the workforce.",
  },
  {
    icon: FaBalanceScale,
    title: "Diversity, Equity, Inclusion & Women's Leadership",
    desc: "Honoring organizations building equitable, representative workplaces — and the women leading them.",
  },
  {
    icon: FaStar,
    title: "Employee Performance, Rewards & Retention",
    desc: "Recognizing approaches that fairly measure, reward, and retain top talent.",
  },
  {
    icon: FaNetworkWired,
    title: "HR Technology, AI & People Analytics",
    desc: "Celebrating the technology and data driving smarter people decisions.",
  },
  {
    icon: FaCogs,
    title: "HR Innovation, Transformation & Change",
    desc: "Honoring bold, original thinking that moves HR practice forward.",
  },
  {
    icon: FaGlobeAmericas,
    title: "MENA People Leadership & Regional Impact",
    desc: "Recognizing the individuals whose leadership is shaping the future of work across the region.",
  },
];

const PROCESS = [
  {
    step: "01",
    icon: FaRegFileAlt,
    title: "Nomination",
    desc: "Submit a nomination through our form, sharing the story and achievements behind your candidate.",
  },
  {
    step: "02",
    icon: FaGavel,
    title: "Editorial Review",
    desc: "Our editorial board evaluates each submission against our criteria of impact, integrity, and influence.",
  },
  {
    step: "03",
    icon: FaRegClock,
    title: "Shortlisting",
    desc: "A curated shortlist is compiled and shared with an independent panel of industry experts.",
  },
  {
    step: "04",
    icon: FaAward,
    title: "Recognition",
    desc: "Winners are honored at an exclusive ceremony and featured across our global platform.",
  },
];

const CRITERIA = [
  { num: "01", label: "Impact", desc: "Measurable influence on people, industry, or community." },
  { num: "02", label: "Integrity", desc: "A track record of ethical, principled leadership." },
  { num: "03", label: "Innovation", desc: "Bold thinking that moves an industry forward." },
  { num: "04", label: "Legacy", desc: "A lasting contribution that outlives a single achievement." },
];

const STATS = [
  { icon: FaAward, value: `${AWARD_CATEGORIES.length}`, label: "Award Categories" },
  { icon: FaGlobeAmericas, value: "MENA", label: "Region-Wide Reach" },
  { icon: FaUsers, value: "500+", label: "Nominees Yearly" },
  { icon: FaCalendarAlt, value: "2026", label: "Awards Edition" },
];

const VALUE_PROPS = [
  {
    icon: FaEye,
    title: "Regional Visibility",
    desc: "Winners are featured across our platform, putting their work in front of HR leaders and decision-makers throughout the MENA region.",
  },
  {
    icon: FaShieldAlt,
    title: "Credible Judging",
    desc: "Every submission is reviewed against the same set of principles—impact, integrity, innovation, and legacy—by an independent panel.",
  },
  {
    icon: FaNetworkWired,
    title: "A Standing Community",
    desc: "Recognition here isn't a one-off moment. Winners join a growing network of MENA HR leaders featured across our awards, forums, and editorial coverage.",
  },
];

const Award = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>2026 Awards Programme</span>
          <h1 className={styles.heroTitle}>
            MENA People
            <span className={styles.heroHighlight}>Excellence Awards</span>
          </h1>
          <p className={styles.heroSubtitle}>
            An annual celebration honoring the HR leaders, teams, and
            organizations redefining what it means to put people first
            across the MENA region.
          </p>
        </div>

        <div className={styles.scrollCue}>
          <span className={styles.scrollCueLine} />
          <FaChevronDown className={styles.scrollCueIcon} />
        </div>
      </section>

      <main className={styles.page}>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <span className={styles.kicker}>About The Awards</span>
            <p className={styles.introText}>
              The MENA People Excellence Awards celebrate the individuals,
              teams, and organizations whose HR practices, culture, and
              leadership set a new standard across the region.
            </p>
          </div>
        </section>

        {/* By the numbers */}
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className={styles.statItem}>
                <Icon className={styles.statIcon} />
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className={styles.categories}>
          <div className={styles.sectionHead}>
            <h2>{AWARD_CATEGORIES.length} categories, one standard of excellence</h2>
            <p className={styles.sectionSub}>
              Tap a category to see what it recognizes. Every category is
              judged on its own merit against a consistent standard.
            </p>
          </div>

          {/* Flagship award */}
          <div className={styles.specialAward}>
            <div className={styles.specialAwardIconWrap}>
              <SPECIAL_AWARD.icon />
            </div>
            <div>
              <span className={styles.specialAwardKicker}>
                Flagship Recognition
              </span>
              <h3>{SPECIAL_AWARD.title}</h3>
              <p>{SPECIAL_AWARD.desc}</p>
            </div>
          </div>

          <div className={styles.categoryGrid}>
            {AWARD_CATEGORIES.map(({ icon: Icon, title, desc }, i) => {
              const isActive = activeCategory === i;
              return (
                <button
                  key={title}
                  type="button"
                  className={`${styles.categoryCard} ${
                    isActive ? styles.categoryCardActive : ""
                  }`}
                  onClick={() => toggleCategory(i)}
                  aria-expanded={isActive}
                >
                  <div className={styles.categoryTop}>
                    <span className={styles.categoryNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.categoryIconWrap}>
                      <Icon />
                    </div>
                  </div>
                  <h3>{title}</h3>
                  <span className={styles.categoryToggle}>
                    <FaChevronDown
                      className={isActive ? styles.categoryChevronOpen : ""}
                    />
                  </span>
                  <div className={styles.categoryDescWrap}>
                    <p className={styles.categoryDesc}>{desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selection process */}
        <section className={styles.process}>
          <div className={styles.sectionHead}>
            <h2>From nomination to recognition</h2>
          </div>

          <div className={styles.processGrid}>
            {PROCESS.map(({ step, icon: Icon, title, desc }, i) => (
              <div key={step} className={styles.processCard}>
                <div className={styles.processTop}>
                  <span className={styles.processStep}>{step}</span>
                  <div className={styles.processIconWrap}>
                    <Icon />
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {i < PROCESS.length - 1 && (
                  <span className={styles.processConnector} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Judging criteria */}
        <section className={styles.criteria}>
          <div className={styles.criteriaText}>
            <span className={styles.kicker}>What We Look For</span>
            <p>
              Every nomination is measured against a consistent set of
              principles—because true leadership is judged not by title, but
              by the difference it makes.
            </p>
          </div>

          <div className={styles.criteriaRow}>
            {CRITERIA.map((c) => (
              <div key={c.num} className={styles.criteriaItem}>
                <span className={styles.criteriaNum}>{c.num}</span>
                <span className={styles.criteriaLabel}>{c.label}</span>
                <p className={styles.criteriaDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global reach banner */}
        <section className={styles.reach}>
          <div className={styles.reachInner}>
            <FaMapMarkedAlt className={styles.reachIcon} />
            <h2>
              Celebrated on stages across the MENA region, honoring HR
              leaders wherever bold decisions about people are being made.
            </h2>
          </div>
        </section>

        {/* Why recognition matters */}
        <section className={styles.valueSection}>
          <div className={styles.sectionHead}>
            <h2>Recognition built to carry weight</h2>
          </div>

          <div className={styles.valueGrid}>
            {VALUE_PROPS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.valueCard}>
                <div className={styles.valueIconWrap}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nomination CTA */}
        <section id="nominate" className={styles.nominateCta}>
          <div className={styles.nominateInner}>
            <h2 className={styles.nominateTitle}>
              Know a leader who deserves the spotlight?
            </h2>
            <p className={styles.nominateSub}>
              Nominate them for this year&rsquo;s MENA People Excellence
              Awards and help their story reach a region-wide audience.
            </p>
            <a href="/nomination" className={styles.nominateBtn}>
              <FaTrophy className={styles.nominateBtnIcon} />
              Submit a Nomination
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Award;