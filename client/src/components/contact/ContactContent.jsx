import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronDown,
  FaGlobeAmericas,
  FaRegClock,
  FaRegCommentDots,
  FaBolt,
  FaSmile,
  FaHeadset,
  FaUsers,
  FaCalendarAlt,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./Contact.module.css";

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: "Email Us",
    value: "hello@theleadershipgazette.com",
    href: "mailto:hello@theleadershipgazette.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Call Us",
    value: "+91 12345 67890",
    href: "tel:+911234567890",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Visit Us",
    value: "402 Business Avenue, New Delhi, India",
    href: "#",
  },
];

const REASONS = [
  "Feature or interview nomination",
  "Leadership award submission",
  "Media & brand partnerships",
  "Press and general inquiries",
];

const QUICK_STATS = [
  { icon: FaBolt, value: "2-3 Days", label: "Avg. Response Time" },
  { icon: FaUsers, value: "4", label: "Global Desks" },
  { icon: FaHeadset, value: "100%", label: "Editorial Follow-up" },
  { icon: FaSmile, value: "1,200+", label: "Leaders Connected" },
];

const CHANNELS = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    desc: "Quick questions? Message our team directly for a fast reply.",
    href: "#",
  },
  {
    icon: FaComments,
    title: "Live Chat",
    desc: "Chat with our editorial desk in real time during business hours.",
    href: "#",
  },
  {
    icon: FaCalendarAlt,
    title: "Schedule a Call",
    desc: "Book a slot with our partnerships team at a time that suits you.",
    href: "#",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    desc: "Prefer writing? Drop us a note anytime, we read every message.",
    href: "mailto:hello@theleadershipgazette.com",
  },
];

const OFFICES = [
  { city: "New Delhi", region: "South Asia HQ", detail: "402 Business Avenue" },
  { city: "Dubai", region: "MEA Desk", detail: "Business Bay District" },
  { city: "Nairobi", region: "East Africa Desk", detail: "Westlands Business Park" },
  { city: "Singapore", region: "APAC Desk", detail: "Raffles Place" },
];

const FAQS = [
  {
    q: "How do I nominate a leader for a feature?",
    a: "Send us a short brief through the form below, selecting 'Interview Request' or 'Award Nomination'. Our editorial team reviews every submission personally.",
  },
  {
    q: "What is your typical response time?",
    a: "We respond to all inquiries within 2–3 business days. Award and partnership submissions may take slightly longer as they go through editorial review.",
  },
  {
    q: "Can we explore a brand or media partnership?",
    a: "Absolutely. Select 'Partnership' in the form and share a few details about your organization—our partnerships desk will follow up directly.",
  },
  {
    q: "Do you accept unsolicited story pitches?",
    a: "Yes. We welcome pitches that align with our focus on authentic, impact-driven leadership stories from across industries and regions.",
  },
];

const ContactContent = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>Get In Touch</span>
          <h1 className={styles.heroTitle}>
            Let&rsquo;s Start a
            <span className={styles.heroHighlight}>Conversation</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Whether it&rsquo;s a story idea, an award nomination, or a
            partnership—our team would love to hear from you.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <FaRegClock className={styles.heroStatIcon} />
              <span>2–3 Day Response</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <FaGlobeAmericas className={styles.heroStatIcon} />
              <span>4 Global Desks</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <FaRegCommentDots className={styles.heroStatIcon} />
              <span>Direct to Editorial</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollCue}>
          <span className={styles.scrollCueLine} />
          <FaChevronDown className={styles.scrollCueIcon} />
        </div>
      </section>

      <main className={styles.page}>
        {/* Info cards */}
        <section className={styles.infoStrip}>
          {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className={styles.infoCard}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span className={styles.infoIcon}>
                <Icon />
              </span>
              <span className={styles.infoLabel}>{label}</span>
              <span className={styles.infoValue}>{value}</span>
            </a>
          ))}
        </section>

        {/* NEW: Quick stats */}
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            {QUICK_STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className={styles.statItem}>
                <Icon className={styles.statIcon} />
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Form + side panel */}
        <section className={styles.formSection}>
          <div className={styles.formGrid}>
            {/* Left panel */}
            <div className={styles.sidePanel}>
              <span className={styles.kicker}>Why Reach Out</span>
              <h2>We&rsquo;d love to hear your story</h2>
              <p className={styles.sideDesc}>
                From nominating a visionary leader to exploring a partnership,
                every message reaches our editorial desk directly.
              </p>

              <ul className={styles.reasonList}>
                {REASONS.map((reason) => (
                  <li key={reason}>
                    <FaCheckCircle className={styles.reasonIcon} />
                    {reason}
                  </li>
                ))}
              </ul>

              <div className={styles.sideFooter}>
                <div>
                  <span className={styles.sideFooterLabel}>Response Time</span>
                  <span className={styles.sideFooterValue}>
                    Within 2–3 business days
                  </span>
                </div>
                <div className={styles.sideSocials}>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className={styles.formCard}>
              {status === "sent" ? (
                <div className={styles.successState}>
                  <FaCheckCircle className={styles.successIcon} />
                  <h3>Message Sent</h3>
                  <p>
                    Thank you for reaching out. Our editorial team will get
                    back to you shortly.
                  </p>
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="subject">I&rsquo;m Reaching Out About</label>
                    <select id="subject" name="subject" defaultValue="">
                      <option value="" disabled>
                        Select a reason
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Interview Request">Interview Request</option>
                      <option value="Award Nomination">Award Nomination</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us a little about your story or request..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <FaPaperPlane className={styles.submitIcon} />
                  </button>

                  {status === "error" && (
                    <p className={styles.errorText}>
                      Something went wrong. Please try again in a moment.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>

        {/* NEW: Other ways to connect */}
        <section className={styles.channels}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>More Ways To Talk</span>
            <h2>Pick whatever&rsquo;s easiest for you</h2>
            <p className={styles.sectionSub}>
              The form works great, but if you&rsquo;d rather connect another
              way, we&rsquo;re just as reachable here.
            </p>
          </div>

          <div className={styles.channelsGrid}>
            {CHANNELS.map(({ icon: Icon, title, desc, href }) => (
              <a key={title} href={href} className={styles.channelCard}>
                <div className={styles.channelIconWrap}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Global presence */}
        <section className={styles.offices}>
          <div className={styles.sectionHead}>
            <span className={styles.kicker}>Global Presence</span>
            <h2>Editorial desks across the world</h2>
            <p className={styles.sectionSub}>
              Our correspondents and editorial partners work across regions to
              surface leadership stories wherever they happen.
            </p>
          </div>

          <div className={styles.officesGrid}>
            {OFFICES.map((office) => (
              <div key={office.city} className={styles.officeCard}>
                <FaMapMarkerAlt className={styles.officeIcon} />
                <h3>{office.city}</h3>
                <span className={styles.officeRegion}>{office.region}</span>
                <p>{office.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <div className={styles.sectionHead}>
            <span className={styles.kickerLight}>Before You Reach Out</span>
            <h2>Quick answers to common questions</h2>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.q}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <FaChevronDown className={styles.faqChevron} />
                  </button>
                  <div className={styles.faqAnswerWrap}>
                    <p className={styles.faqAnswer}>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing statement / CTA */}
        <section className={styles.closing}>
          <p className={styles.closingLead}>Every great feature starts with a message.</p>
          <h2 className={styles.closingStatement}>
            <span>Tell us your story.</span>
            <span className={styles.closingAccent}>
              We&rsquo;ll help the world <em>hear it.</em>
            </span>
          </h2>
          <a href="mailto:hello@theleadershipgazette.com" className={styles.closingCta}>
            Start The Conversation <FaArrowRight />
          </a>
        </section>
      </main>
    </>
  );
};

export default ContactContent;