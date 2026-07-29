import React from "react";
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
  FaCheck,
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
} from "react-icons/fa";
import styles from "./Award.module.css";
import Navbar from "../global/navbar/Navbar";

// Flagship, standalone recognition — sits above the six award pillars.
const SPECIAL_AWARD = {
  icon: FaCrown,
  title: "Top 100 HR Leaders",
  desc: "A definitive ranking of the 100 HR leaders shaping the future of work across the MENA region.",
};

// Six pillars, straight from the official 2026 category list.
const PILLARS = [
  {
    icon: FaBriefcase,
    title: "Organisational Excellence",
    items: [
      "MENA Employer of the Year – Large Enterprise",
      "MENA Employer of the Year – SME",
      "MENA Employer of the Year – Public Sector",
      "MENA Employer of the Year – Start-up",
      "HR Team of the Year",
      "People & Culture Team of the Year",
      "Best Organisational Culture",
      "Best Workplace Transformation",
      "Best Employee Experience Strategy",
      "Best HR Transformation Programme",
    ],
  },
  {
    icon: FaUserTie,
    title: "Talent and People Practices",
    items: [
      "Excellence in Talent Acquisition",
      "Excellence in Talent Management",
      "Excellence in Learning & Development",
      "Excellence in Leadership Development",
      "Excellence in Employee Engagement",
      "Excellence in Employee Wellbeing",
      "Excellence in Employer Branding",
      "Excellence in Rewards & Recognition",
      "Excellence in Performance Management",
      "Excellence in Workforce Planning",
    ],
  },
  {
    icon: FaHandsHelping,
    title: "Inclusion and Employee Development",
    items: [
      "Best Diversity, Equity & Inclusion Strategy",
      "Best Women's Leadership Development Initiative",
      "Best Graduate Development Programme",
      "Best Early-Career Talent Programme",
      "Best Employee Retention Strategy",
      "Best Coaching and Mentoring Programme",
      "Best Internal Mobility Programme",
      "Best Learning Culture",
      "Best Mental Health and Wellbeing Initiative",
      "Best Employee Communication Strategy",
    ],
  },
  {
    icon: FaLightbulb,
    title: "Future of Work and Innovation",
    items: [
      "Best Use of AI in HR",
      "Best HR Technology Transformation",
      "Best People Analytics Initiative",
      "Best Future Skills Development Programme",
      "Best Hybrid or Flexible Workplace Strategy",
      "Best Digital Learning Initiative",
      "Best Change Management Initiative",
      "Best People Sustainability and ESG Initiative",
      "Best HR Innovation of the Year",
      "Best Employee Listening and Feedback Programme",
    ],
  },
  {
    icon: FaGlobeAmericas,
    title: "MENA Leadership and Regional Impact",
    items: [
      "MENA CHRO of the Year",
      "MENA People Leader of the Year",
      "MENA HR Changemaker of the Year",
      "MENA Emerging People Leader of the Year",
      "MENA HR Business Partner of the Year",
      "MENA Learning & Development Leader of the Year",
      "MENA Talent Acquisition Leader of the Year",
      "Best Nationalisation Programme",
      "People Leadership Lifetime Achievement Award",
      "CEO Champion of People and Culture",
    ],
  },
];

const TOTAL_CATEGORIES =
  1 + PILLARS.reduce((sum, pillar) => sum + pillar.items.length, 0);

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
  { icon: FaAward, value: `${TOTAL_CATEGORIES}`, label: "Award Categories" },
  { icon: FaGlobeAmericas, value: "MENA", label: "Region-Wide Reach" },
  { icon: FaUsers, value: "500+", label: "Nominees Yearly" },
  { icon: FaTrophy, value: "6", label: "Award Pillars" },
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
            {/* <span className={styles.kicker}>Award Categories</span> */}
            <h2>{TOTAL_CATEGORIES} categories, six pillars of excellence</h2>
            <p className={styles.sectionSub}>
              From flagship recognition to region-specific leadership
              honors, every category is judged on its own merit against a
              consistent standard.
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

          <div className={styles.pillarsGrid}>
            {PILLARS.map(({ icon: Icon, title, items }, i) => (
              <div key={title} className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <span className={styles.pillarNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.pillarIconWrap}>
                    <Icon />
                  </div>
                </div>
                <h3>{title}</h3>
                <span className={styles.pillarCount}>
                  {items.length} categories
                </span>
                <ul className={styles.pillarList}>
                  {items.map((item) => (
                    <li key={item}>
                      <FaCheck className={styles.pillarBullet} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selection process */}
        <section className={styles.process}>
          <div className={styles.sectionHead}>
            {/* <span className={styles.kickerLight}>How It Works</span> */}
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

        {/* Testimonials */}
       

        {/* Global reach banner */}
        <section className={styles.reach}>
          <div className={styles.reachInner}>
            <FaMapMarkedAlt className={styles.reachIcon} />
            {/* <span className={styles.kickerLight}>Regional Recognition</span> */}
            <h2>
              Celebrated on stages across the MENA region, honoring HR
              leaders wherever bold decisions about people are being made.
            </h2>
          </div>
        </section>
 {/* Why recognition matters */}
        <section className={styles.valueSection}>
          <div className={styles.sectionHead}>
            {/* <span className={styles.kicker}>Why It Matters</span> */}
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
            {/* <span className={styles.kickerLight}>Nominations Open</span> */}
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