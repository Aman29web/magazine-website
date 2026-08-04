// BusunessAward.jsx
import React from "react";
import {
  FaChevronDown,
  FaTrophy,
  FaCrown,
  FaBuilding,
  FaUserTie,
  FaLightbulb,
  FaHandsHelping,
  FaGlobeAmericas,
  FaRegClock,
  FaRegFileAlt,
  FaGavel,
  FaAward,
  FaUsers,
  FaMapMarkedAlt,
  FaCheck,
  FaEye,
  FaShieldAlt,
  FaNetworkWired,
} from "react-icons/fa";
import styles from "./BusunessAward.module.css";
import Navbar from "../global/navbar/Navbar";
import Footer from "../global/footer/Footer";

// Flagship, standalone recognition — sits above the six award pillars.
const SPECIAL_AWARD = {
  icon: FaCrown,
  title: "Top 100 Business Leaders",
  desc: "A definitive annual recognition of the 100 business leaders shaping industries through vision, innovation, and transformational leadership.",
};

// Six pillars, straight from the official category list.
const PILLARS = [
  {
    icon: FaBuilding,
    title: "Organisational Excellence",
    items: [
      "Business of the Year – Large Enterprise",
      "Business of the Year – SME",
      "Business of the Year – Public Sector",
      "Business of the Year – Start-up",
      "Business Transformation of the Year",
      "Operational Excellence Award",
      "Customer Excellence Award",
      "Best Workplace Culture",
      "Excellence in Corporate Governance",
      "Sustainability Leadership Award",
    ],
  },
  {
    icon: FaUserTie,
    title: "Leadership Excellence",
    items: [
      "CEO of the Year",
      "Business Leader of the Year",
      "Emerging Business Leader of the Year",
      "Entrepreneur of the Year",
      "Women Business Leader of the Year",
      "Family Business Leader of the Year",
      "Business Innovator of the Year",
      "Sales Leader of the Year",
      "Operations Leader of the Year",
      "Strategy Leader of the Year",
    ],
  },
  {
    icon: FaLightbulb,
    title: "Innovation & Growth",
    items: [
      "Excellence in Digital Transformation",
      "Excellence in Innovation",
      "Best AI Implementation in Business",
      "Excellence in Customer Experience",
      "Excellence in Product Innovation",
      "Excellence in Business Expansion",
      "Excellence in Marketing Strategy",
      "Excellence in Brand Building",
      "Excellence in Research & Development",
      "Excellence in Business Agility",
    ],
  },
  {
    icon: FaHandsHelping,
    title: "People & Workplace Excellence",
    items: [
      "Best Employer",
      "Excellence in Leadership Development",
      "Excellence in Employee Experience",
      "Excellence in Learning & Development",
      "Excellence in Diversity & Inclusion",
      "Excellence in Employee Wellbeing",
      "Excellence in Talent Management",
      "Excellence in Workplace Innovation",
      "Excellence in Organisational Culture",
      "Excellence in Workforce Development",
    ],
  },
  {
    icon: FaGlobeAmericas,
    title: "Industry & Social Impact",
    items: [
      "Excellence in ESG",
      "Excellence in Corporate Social Responsibility",
      "Excellence in Community Impact",
      "Excellence in Sustainability",
      "Excellence in Ethical Business Practices",
      "Excellence in Supply Chain Management",
      "Excellence in Financial Performance",
      "Excellence in Business Resilience",
      "Lifetime Achievement in Business",
      "Outstanding Contribution to Industry",
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
    desc: "Submit your nomination by sharing the achievements, impact, and success story behind the individual or organization.",
  },
  {
    step: "02",
    icon: FaGavel,
    title: "Independent Review",
    desc: "Every submission is carefully assessed against our judging framework, ensuring fairness, credibility, and consistency.",
  },
  {
    step: "03",
    icon: FaRegClock,
    title: "Shortlisting",
    desc: "The highest-scoring entries are shortlisted and reviewed by an independent panel of respected business leaders and industry experts.",
  },
  {
    step: "04",
    icon: FaAward,
    title: "Recognition",
    desc: "Winners are celebrated at an exclusive awards ceremony and showcased across our global platform.",
  },
];

const CRITERIA = [
  { num: "01", label: "Impact", desc: "Demonstrated business results, measurable growth, and meaningful industry contribution." },
  { num: "02", label: "Leadership", desc: "Visionary leadership that inspires teams, drives change, and delivers sustainable success." },
  { num: "03", label: "Innovation", desc: "Creative thinking, transformative ideas, and forward-looking strategies that redefine business performance." },
  { num: "04", label: "Legacy", desc: "A lasting contribution to customers, employees, industry, and society beyond commercial success." },
];

const STATS = [
  { icon: FaAward, value: `${TOTAL_CATEGORIES}`, label: "Award Categories" },
  { icon: FaGlobeAmericas, value: "Global", label: "Industry-Wide Reach" },
  { icon: FaUsers, value: "500+", label: "Nominees Yearly" },
  { icon: FaTrophy, value: "6", label: "Award Pillars" },
];

const VALUE_PROPS = [
  {
    icon: FaEye,
    title: "Industry Visibility",
    desc: "Winners are featured across our platform, showcasing their achievements to business leaders, investors, partners, and decision-makers worldwide.",
  },
  {
    icon: FaShieldAlt,
    title: "Independent Judging",
    desc: "Every submission is evaluated through a transparent, merit-based process by an independent panel of experienced business professionals.",
  },
  {
    icon: FaNetworkWired,
    title: "An Exclusive Business Community",
    desc: "Recognition extends beyond the awards. Winners become part of a growing network of distinguished business leaders, innovators, and organizations featured across our awards, events, and editorial platforms.",
  },
];

const BusunessAward = () => {
  return (
    <>
      {/* Hero */}
      <Navbar></Navbar>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>Annual Awards Programme</span>
          <h1 className={styles.heroTitle}>
            Business Excellence
            <span className={styles.heroHighlight}>Awards</span>
          </h1>
          <p className={styles.heroSubtitle}>
            An annual celebration recognizing the leaders, organizations, and
            teams driving innovation, sustainable growth, and business
            excellence across industries.
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
              The Business Excellence Awards honor organizations and business
              leaders whose vision, leadership, innovation, and operational
              excellence are setting new benchmarks for success.
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
            <h2>{TOTAL_CATEGORIES} categories, six pillars of excellence</h2>
            <p className={styles.sectionSub}>
              From prestigious leadership honors to organization-wide
              excellence awards, every category is evaluated independently
              against a consistent and transparent judging framework.
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
              Every nomination is evaluated using the same core
              principles—because true business excellence is defined by
              measurable impact and lasting value.
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
              Celebrating business excellence across industries, recognizing
              organizations and leaders wherever exceptional businesses are
              being built, transformed, and inspired.
            </h2>
          </div>
        </section>

        {/* Why recognition matters */}
        <section className={styles.valueSection}>
          <div className={styles.sectionHead}>
            <h2>Recognition that matters</h2>
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
              Nominate them for this year&rsquo;s Business Excellence Awards
              and help their story reach a global audience.
            </p>
            <a href="/nomination" className={styles.nominateBtn}>
              <FaTrophy className={styles.nominateBtnIcon} />
              Submit a Nomination
            </a>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
};

export default BusunessAward;