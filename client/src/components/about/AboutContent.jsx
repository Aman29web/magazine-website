import React from "react";
import {
  FaCompass,
  FaBriefcase,
  FaLandmark,
  FaLightbulb,
  FaRocket,
  FaGlobeAmericas,
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaChevronDown,
  FaQuoteLeft,
  FaMapMarkedAlt,
  FaArrowRight,
  FaPenNib,
  FaBookOpen,
  FaBullhorn,
} from "react-icons/fa";
import styles from "./About.module.css";
import Hero from "./Hero/Hero";
import Hero6 from "./Hero/Hero6";

const AUDIENCE = [
  { icon: FaCompass, label: "Visionaries" },
  { icon: FaRocket, label: "Entrepreneurs" },
  { icon: FaBriefcase, label: "Corporate Executives" },
  { icon: FaLandmark, label: "Policymakers" },
  { icon: FaLightbulb, label: "Innovators" },
  { icon: FaGlobeAmericas, label: "Changemakers" },
];

const BEYOND = [
  {
    icon: FaTrophy,
    title: "Leadership Awards",
    desc: "Prestigious recognitions that celebrate individuals and organizations driving positive change across industries.",
  },
  {
    icon: FaUsers,
    title: "Curated Forums",
    desc: "Intimate, high-value gatherings that bring visionary minds together to exchange ideas and shape the future.",
  },
  {
    icon: FaHandshake,
    title: "Networking Experiences",
    desc: "Exclusive access to a global community of leaders, innovators, and changemakers who lead with purpose.",
  },
];

const VALUES = [
  { num: "01", label: "Excellence" },
  { num: "02", label: "Integrity" },
  { num: "03", label: "Innovation" },
  { num: "04", label: "Impact" },
];

const FOCUS = [
  {
    icon: FaPenNib,
    title: "Original Storytelling",
    desc: "In-depth interviews and features crafted around the real decisions and turning points behind each leader's journey.",
  },
  {
    icon: FaGlobeAmericas,
    title: "Global Perspective",
    desc: "Voices from across industries and regions, reflecting how leadership looks different depending on where you sit.",
  },
  {
    icon: FaBookOpen,
    title: "Depth Over Headlines",
    desc: "We favor considered, long-form conversations over quick takes—stories built to be read, not skimmed.",
  },
  {
    icon: FaBullhorn,
    title: "A Platform, Not Just a Publication",
    desc: "Awards, forums, and features designed to amplify leaders' work well beyond the page.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Being featured gave our mission a global stage and connected us with partners we never imagined reaching.",
    name: "Amara Okafor",
    role: "Founder, Solaris Health Collective",
  },
  {
    quote:
      "The Gazette doesn't just report leadership—it captures the judgment calls that never make it into a press release.",
    name: "Daniel Cho",
    role: "CEO, Northwind Robotics",
  },
  {
    quote:
      "Every conversation felt like a masterclass. This is where real leadership stories live.",
    name: "Priya Raman",
    role: "Managing Partner, Vantage Capital",
  },
];

const AboutContent = () => {
  return (
    <>
{/* <Hero></Hero> */}
<Hero6></Hero6>
      <main className={styles.page}>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <span className={styles.kicker}>Who We Are</span>
            <p className={styles.introText}>
              The Leadership Gazette is a global leadership platform dedicated to
              discovering, celebrating, and amplifying the voices of exceptional
              leaders who are shaping industries, communities, and the future.
            </p>
          </div>
        </section>

        {/* What we believe - split layout */}
        <section className={styles.believe}>
          <div className={styles.believeGrid}>
            <div className={styles.believeLeft}>
              <span className={styles.kicker}>What We Believe</span>
              <h2 className={styles.believeQuote}>
                Leadership is more than a title
                <span className={styles.believeQuoteAccent}>
                  —it&rsquo;s a lasting legacy.
                </span>
              </h2>
            </div>
            <div className={styles.believeRight}>
              <p>
                It is the ability to inspire, create meaningful impact, challenge
                conventions, and leave a lasting legacy. Through exclusive
                interviews, thought-provoking conversations, insightful features,
                and in-depth leadership stories, we bring our audience closer to
                the people behind transformative ideas and extraordinary
                achievements.
              </p>
              <ul className={styles.believeTags}>
                <li>Inspire</li>
                <li>Impact</li>
                <li>Challenge</li>
                <li>Legacy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* By the numbers */}
{/* Editorial focus */}
        <section className={styles.focus}>
          <div className={styles.sectionHead}>
            <span className={styles.kickerLight}>What Drives Us</span>
            <h2 className={styles.focusHeading}>Our editorial focus</h2>
          </div>
          <div className={styles.focusGrid}>
            {FOCUS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.focusItem}>
                <Icon className={styles.focusIcon} />
                <span className={styles.focusTitle}>{title}</span>
                <p className={styles.focusDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who we feature */}
        <section className={styles.audience}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>Who We Feature</span>
            <h2>
              A meeting point for the world&rsquo;s most influential minds
            </h2>
            <p className={styles.sectionSub}>
              We explore not only their professional journeys but also the
              values, experiences, and decisions that define authentic
              leadership.
            </p>
          </div>

          <div className={styles.audienceGrid}>
            {AUDIENCE.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.audienceCard}>
                <Icon className={styles.audienceIcon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond storytelling */}
        <section className={styles.beyond}>
          <div className={styles.sectionHead}>
            <span className={styles.kickerLight}>Beyond Storytelling</span>
            <h2>Recognizing excellence, wherever it leads</h2>
          </div>

          <div className={styles.beyondGrid}>
            {BEYOND.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.beyondCard}>
                <div className={styles.beyondIconWrap}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>What Leaders Say</span>
            <h2>Stories, in their own words</h2>
          </div>

          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map(({ quote, name, role }) => (
              <div key={name} className={styles.testimonialCard}>
                <FaQuoteLeft className={styles.testimonialQuoteIcon} />
                <p className={styles.testimonialQuote}>{quote}</p>
                <div className={styles.testimonialFooter}>
                  <span className={styles.testimonialName}>{name}</span>
                  <span className={styles.testimonialRole}>{role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our purpose / values */}
        <section className={styles.purpose}>
          <div className={styles.purposeText}>
            <span className={styles.kicker}>Our Purpose</span>
            <p>
              Every conversation we publish, every leader we feature, and every
              award we present is guided by a single purpose—to inspire the
              next generation of leaders while building a global community
              founded on excellence, integrity, innovation, and impact.
            </p>
          </div>

          <div className={styles.valuesRow}>
            {VALUES.map((v) => (
              <div key={v.num} className={styles.valueItem}>
                <span className={styles.valueNum}>{v.num}</span>
                <span className={styles.valueLabel}>{v.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Global reach */}
        <section className={styles.reach}>
          <div className={styles.reachInner}>
            <FaMapMarkedAlt className={styles.reachIcon} />
            <span className={styles.kickerLight}>Global Reach</span>
            <h2>
              Leadership stories from every corner of the globe, delivered to
              a worldwide audience of decision-makers.
            </h2>
          </div>
        </section>

        {/* Manifesto */}
        <section className={styles.manifesto}>
          <p className={styles.manifestoLead}>
            At The Leadership Gazette, we don&rsquo;t just report on leadership.
          </p>
          <h2 className={styles.manifestoStatement}>
            <span>We celebrate it.</span>
            <span>We document it.</span>
            <span>
              We help shape <em>its future.</em>
            </span>
          </h2>
        </section>

        {/* Join the movement / CTA */}
        <section className={styles.join}>
          <div className={styles.joinInner}>
            <span className={styles.kicker}>Join The Movement</span>
            <h2 className={styles.joinTitle}>
              Know a leader whose story deserves to be told?
            </h2>
            <p className={styles.joinSub}>
              Nominate a visionary, pitch a story, or partner with us on our
              next forum or awards program.
            </p>
            <a href="#contact" className={styles.joinCta}>
              Get In Touch <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutContent;