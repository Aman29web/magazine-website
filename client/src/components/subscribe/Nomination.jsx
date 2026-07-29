import { useState } from "react";
import {
  FiClock,
  FiShield,
  FiUsers,
  FiTarget,
  FiBarChart2,
  FiHeart,
  FiArrowRight,
  FiCheckCircle,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import styles from "./Nomination.module.css";
import Navbar from "../global/navbar/Navbar";

const INITIAL_STATE = {
  fullName: "",
  jobTitle: "",
  organisation: "",
  country: "",
  email: "",
  phone: "",
  linkedin: "",
  programme: "",
  track: "",
  category: "",
  why: "",
  achievement: "",
  consent: false,
  website: "", // honeypot — real visitors never see or fill this
};

const CRITERIA = [
  {
    icon: <FiTarget />,
    label: "01 · Specific",
    value: "Name the challenge you addressed.",
  },
  {
    icon: <FiBarChart2 />,
    label: "02 · Evidence-led",
    value: "Share one measurable outcome.",
  },
  {
    icon: <FiHeart />,
    label: "03 · Human",
    value: "Explain who benefited from your work.",
  },
];

export default function Nomination() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = "Enter your full name.";
    if (!formData.jobTitle.trim()) next.jobTitle = "Enter your current job title.";
    if (!formData.organisation.trim()) next.organisation = "Enter your organisation.";
    if (!formData.country.trim()) next.country = "Enter your country.";
    if (!formData.email.trim()) {
      next.email = "Enter your work email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!formData.programme) next.programme = "Select a programme.";
    if (!formData.track) next.track = "Select your track.";
    if (!formData.why.trim()) next.why = "Tell us why you should be considered.";
    if (!formData.achievement.trim()) next.achievement = "Share one measurable achievement.";
    if (!formData.consent) next.consent = "Please confirm before submitting.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: if this hidden field was filled, silently drop the submission.
    if (formData.website) {
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      // Wire up EmailJS (or your form endpoint) here, e.g.:
      // await emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY");
      setSubmitted(true);
    } catch (err) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className={styles.page} id="top">
      {/* ============ HERO ============ */}
      <Navbar></Navbar>
      <section className={styles.hero}>
        <div className={styles.brandBar}>
          <a href="#top" className={styles.brandMark}>
            <span className={styles.brandLogo}>LG</span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>The Leadership Gazette</span>
              <span className={styles.brandTagline}>
                Celebrating Leadership. Creating Influence.
              </span>
            </span>
          </a>
        </div>

        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>Self-Nomination</span>
          <span className={styles.heroBadge}>
            MENA People Excellence Awards · MENA Top 100
          </span>
          <h1 className={styles.heroTitle}>
            Put your leadership
            <span className={styles.heroHighlight}>forward.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Self-nominate in a few clear steps. Tell us what you changed, who
            benefited and why your work deserves wider recognition.
          </p>

          <div className={styles.heroStats}>
            <span className={styles.heroStat}>
              <span className={styles.heroStatIcon}>
                <FiClock />
              </span>
              Approx. 4 minutes
            </span>
            <span className={styles.heroStatDivider} />
            <span className={styles.heroStat}>
              <span className={styles.heroStatIcon}>
                <FiShield />
              </span>
              Confidential review
            </span>
            <span className={styles.heroStatDivider} />
            <span className={styles.heroStat}>
              <span className={styles.heroStatIcon}>
                <FiUsers />
              </span>
              Senior + rising tracks
            </span>
          </div>
        </div>

        <div className={styles.scrollCue}>
          <span className={styles.scrollCueLine} />
        </div>
      </section>

      {/* ============ A STRONG NOMINATION IS ============ */}
      <div className={styles.infoStrip}>
        {CRITERIA.map((item) => (
          <div className={styles.infoCard} key={item.label}>
            <span className={styles.infoIcon}>{item.icon}</span>
            <span className={styles.infoLabel}>{item.label}</span>
            <span className={styles.infoValue}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* ============ NOMINATION FORM ============ */}
      <section className={styles.formSection}>
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>01 — Nomination details</span>
          <h2>Tell us about your leadership</h2>
          <p className={styles.sectionSub}>Fields marked * are required.</p>
        </div>

        <div className={styles.formGrid}>
          <aside className={styles.sidePanel}>
            <h2>What happens after you submit</h2>
            <p className={styles.sideDesc}>
              Every self-nomination is read in full by our editorial panel.
              We look for clear, evidence-backed leadership stories — not
              titles or seniority alone.
            </p>

            <ul className={styles.reasonList}>
              <li>
                <span className={styles.reasonIcon}>
                  <FiCheckCircle />
                </span>
                Your nomination is logged and reviewed confidentially.
              </li>
              <li>
                <span className={styles.reasonIcon}>
                  <FiCheckCircle />
                </span>
                Our panel scores entries against the criteria above.
              </li>
              <li>
                <span className={styles.reasonIcon}>
                  <FiCheckCircle />
                </span>
                Shortlisted leaders are contacted directly by our team.
              </li>
            </ul>

            <div className={styles.sideFooter}>
              <div>
                <span className={styles.sideFooterLabel}>Questions?</span>
                <a
                  href="mailto:nominations@leadershipgazette.com"
                  className={styles.sideFooterValue}
                >
                  nominations@leadershipgazette.com
                </a>
              </div>
              <div className={styles.sideSocials}>
                <a href="#top" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="#top" aria-label="Twitter / X">
                  <FiTwitter />
                </a>
                <a href="#top" aria-label="Instagram">
                  <FiInstagram />
                </a>
              </div>
            </div>
          </aside>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <FiCheckCircle />
                </div>
                <h3>Nomination received</h3>
                <p>
                  Thank you for putting your leadership forward. Our panel
                  will review your submission and reach out if you're
                  shortlisted.
                </p>
                <button className={styles.resetBtn} onClick={handleReset}>
                  Submit another nomination
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {/* Honeypot field — hidden from real visitors */}
                <div className={styles.honeypot} aria-hidden="true">
                  <label htmlFor="website">Company website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <h3 className={styles.formGroupTitle}>About you</h3>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="fullName">Full name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      className={errors.fullName ? styles.fieldInvalid : ""}
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <p className={styles.errorText}>{errors.fullName}</p>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="jobTitle">Current job title *</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="e.g. Chief Operating Officer"
                      className={errors.jobTitle ? styles.fieldInvalid : ""}
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                    {errors.jobTitle && (
                      <p className={styles.errorText}>{errors.jobTitle}</p>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="organisation">Organisation *</label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      placeholder="Your organisation"
                      className={errors.organisation ? styles.fieldInvalid : ""}
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                    {errors.organisation && (
                      <p className={styles.errorText}>{errors.organisation}</p>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="e.g. United Arab Emirates"
                      className={errors.country ? styles.fieldInvalid : ""}
                      value={formData.country}
                      onChange={handleChange}
                    />
                    {errors.country && (
                      <p className={styles.errorText}>{errors.country}</p>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="email">Work email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      className={errors.email ? styles.fieldInvalid : ""}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className={styles.errorText}>{errors.email}</p>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Mobile / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+971 5X XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="linkedin">LinkedIn profile</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="linkedin.com/in/yourname"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>

                <h3 className={styles.formGroupTitle}>Recognition sought</h3>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="programme">Programme *</label>
                    <select
                      id="programme"
                      name="programme"
                      className={errors.programme ? styles.fieldInvalid : ""}
                      value={formData.programme}
                      onChange={handleChange}
                    >
                      <option value="">Select a programme</option>
                      <option value="mena-people-excellence">
                        MENA People Excellence Awards
                      </option>
                      <option value="mena-top-100">MENA Top 100</option>
                      <option value="both">Both programmes</option>
                    </select>
                    {errors.programme && (
                      <p className={styles.errorText}>{errors.programme}</p>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="track">Leadership track *</label>
                    <select
                      id="track"
                      name="track"
                      className={errors.track ? styles.fieldInvalid : ""}
                      value={formData.track}
                      onChange={handleChange}
                    >
                      <option value="">Select your track</option>
                      <option value="senior">Senior leader</option>
                      <option value="rising">Rising leader</option>
                      <option value="unsure">I am not sure</option>
                    </select>
                    {errors.track && (
                      <p className={styles.errorText}>{errors.track}</p>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="category">Preferred award category</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="e.g. Transformational Leadership"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </div>

                <h3 className={styles.formGroupTitle}>Your leadership case</h3>

                <div className={styles.field}>
                  <label htmlFor="why">
                    Why should you be considered? *
                    <span className={styles.fieldHint}>
                      {" "}
                      Recommended: 150–300 words
                    </span>
                  </label>
                  <textarea
                    id="why"
                    name="why"
                    rows={5}
                    placeholder="Describe the challenge you addressed and the leadership approach you took."
                    className={errors.why ? styles.fieldInvalid : ""}
                    value={formData.why}
                    onChange={handleChange}
                  />
                  {errors.why && <p className={styles.errorText}>{errors.why}</p>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="achievement">
                    One measurable achievement *
                  </label>
                  <textarea
                    id="achievement"
                    name="achievement"
                    rows={3}
                    placeholder="Share one specific, measurable outcome of your work."
                    className={errors.achievement ? styles.fieldInvalid : ""}
                    value={formData.achievement}
                    onChange={handleChange}
                  />
                  {errors.achievement && (
                    <p className={styles.errorText}>{errors.achievement}</p>
                  )}
                </div>

                <label className={styles.checkboxField} htmlFor="consent">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  I confirm that the information provided is accurate and
                  consent to being contacted about this nomination. *
                </label>
                {errors.consent && (
                  <p className={styles.errorText}>{errors.consent}</p>
                )}

                <p className={styles.disclaimer}>
                  Submitting a nomination does not guarantee shortlisting or
                  recognition. All entries are subject to independent review.
                </p>

                {errors.form && (
                  <p className={styles.errorText}>{errors.form}</p>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={submitting}
                >
                  {submitting ? "Submitting…" : "Submit my nomination"}
                  <span className={styles.submitIcon}>
                    <FiArrowRight />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className={styles.closing}>
        <p className={styles.closingLead}>The Leadership Gazette</p>
        <p className={styles.closingStatement}>
          Independent recognition for the people shaping MENA workplaces.
        </p>
        <p className={styles.copyrightText}>
          © 2026 The Leadership Gazette. All rights reserved.
        </p>
      </footer>
    </div>
  );
}