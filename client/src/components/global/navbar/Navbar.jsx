import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Interviews", href: "/interviews" },
  {
    label: "Awards",
    href: "/awards",
    submenu: [
      { label: "Mena Excellence", href: "/awards" },
      { label: "Business Excellence", href: "/business-excellence" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();

  const isActive = (href, childHrefs = []) =>
    location.pathname === href ||
    childHrefs.some((path) => location.pathname === path) ||
    location.pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownOpen = (label) => {
    clearHoverTimeout();
    setOpenDropdown(label);
  };

  const handleDropdownClose = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  // Close the mobile menu automatically whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>
            <span className={styles.logoMarkLine} />
          </span>
          <span className={styles.logoText}>
            The Leadership
            <span className={styles.logoAccent}>Gazette</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.navLinks} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => {
              const childHrefs = link.submenu?.map((item) => item.href) ?? [];
              const isParentActive = isActive(link.href, childHrefs);

              return (
                <li
                  key={link.label}
                  className={link.submenu ? styles.navItem : ""}
                  onMouseEnter={() => link.submenu && handleDropdownOpen(link.label)}
                  onMouseLeave={() => link.submenu && handleDropdownClose()}
                >
                  {link.submenu ? (
                    <>
                      <Link
                        to={link.href}
                        className={`${styles.navLink} ${
                          isParentActive ? styles.navLinkActive : ""
                        }`}
                        aria-current={isParentActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>

                      <ul
                        className={`${styles.submenu} ${
                          openDropdown === link.label ? styles.submenuOpen : ""
                        }`}
                        onMouseEnter={() => link.submenu && clearHoverTimeout()}
                        onMouseLeave={() => link.submenu && handleDropdownClose()}
                      >
                        {link.submenu.map((item) => {
                          const isSubLinkActive = isActive(item.href);

                          return (
                            <li key={item.label}>
                              <Link
                                to={item.href}
                                className={`${styles.submenuLink} ${
                                  isSubLinkActive ? styles.submenuLinkActive : ""
                                }`}
                                aria-current={isSubLinkActive ? "page" : undefined}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`${styles.navLink} ${
                        isActive(link.href) ? styles.navLinkActive : ""
                      }`}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/subscribe" className={styles.subscribeBtn}>
            Subscribe <FaArrowRight className={styles.subscribeIcon} />
          </Link>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul>
          {NAV_LINKS.map((link, index) => (
            <li key={link.label} style={{ transitionDelay: `${index * 60}ms` }}>
              <Link
                to={link.href}
                className={isActive(link.href) ? styles.mobileLinkActive : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/subscribe" className={styles.mobileSubscribe}>
          Subscribe Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;