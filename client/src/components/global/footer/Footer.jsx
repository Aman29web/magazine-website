import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Interviews", href: "/interviews" },
  { label: "Awards", href: "/awards" },
];

const EXPLORE_LINKS = [
  { label: "Latest News", href: "/news" },
  { label: "Featured Leaders", href: "/featured-leaders" },
  { label: "Business Hub", href: "/business" },
  { label: "Women in Business", href: "/women-in-business" },
];

const SOCIALS = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      {/* Floating newsletter card */}
      <div className={styles.newsletterWrap}>
        <div className={styles.newsletterCard}>
          <div className={styles.newsletterText}>
            <span className={styles.eyebrow}>Stay Ahead</span>
            <h3>Get exclusive interviews &amp; award updates in your inbox</h3>
          </div>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <button type="submit">
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <span className={styles.logoMarkLine} />
              </span>
              <span className={styles.logoText}>
                The Leadership<span className={styles.logoAccent}>Gazette</span>
              </span>
            </a>
            <p className={styles.brandDesc}>
              A global business magazine bringing you exclusive interviews, in-depth
              features, and stories on the leaders shaping industries worldwide.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className={styles.socialIcon}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.linkCol}>
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className={styles.linkCol}>
            <h4>Explore</h4>
            <ul>
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>402 Business Avenue, New Delhi, India</span>
              </li>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:hello@thevantagepost.com">hello@thevantagepost.com</a>
              </li>
              <li>
                <FaPhoneAlt className={styles.contactIcon} />
                <a href="tel:+911234567890">+91 12345 67890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>© {year} The Vantage Post Media LLC. All rights reserved.</p>
        <ul className={styles.legalLinks}>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;