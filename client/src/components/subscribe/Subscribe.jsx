import React, { useState } from "react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you for subscribing!");

    setFormData({
      name: "",
      email: "",
      company: "",
      mobile: "",
    });
  };

  return (
    <section
      style={{
        background: "#fffcf6",
        padding: "100px 20px",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "auto",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#ff4d5e",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Newsletter
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "44px",
              color: "#17123a",
              marginBottom: "18px",
            }}
          >
            Stay Updated With Our Latest News
          </h2>

          <p
            style={{
              color: "#5b5876",
              maxWidth: "650px",
              margin: "auto",
              lineHeight: 1.8,
            }}
          >
            Subscribe to receive event updates, announcements, exclusive
            content and early access to upcoming conferences.
          </p>
        </div>

        {/* Card */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 30px 70px rgba(0,0,0,.15)",
          }}
        >
          {/* LEFT */}

          <div
            style={{
              background: "#0d0a24",
              color: "#fff",
              padding: "60px 50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,77,94,.2), transparent 45%), radial-gradient(circle at 90% 90%, rgba(47,92,255,.18), transparent 45%)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "34px",
                marginBottom: "20px",
              }}
            >
              Why Subscribe?
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,.75)",
                lineHeight: 1.8,
                marginBottom: "35px",
              }}
            >
              Never miss an important update. Join thousands of professionals
              receiving our latest event news and exclusive insights.
            </p>

            {[
              "Early Event Announcements",
              "Speaker Updates",
              "Special Invitations",
              "Exclusive Industry Insights",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                <FaCheckCircle color="#ffc93c" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* RIGHT */}

          <div
            style={{
              background: "#fff",
              padding: "60px 50px",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >
              <Input
                label="Full Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                label="Email Address *"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Company Name (Optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              <Input
                label="Mobile Number (Optional)"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />

              <button
                type="submit"
                style={{
                  border: "none",
                  padding: "16px 30px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  background:
                    "linear-gradient(120deg,#ff4d5e 0%,#ff8a3d 45%,#ffc93c 100%)",
                  color: "#0d0a24",
                  fontWeight: "800",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: ".3s",
                }}
              >
                Subscribe Now
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}
  >
    <label
      style={{
        fontSize: "13px",
        fontWeight: "700",
        color: "#17123a",
        letterSpacing: ".5px",
        textTransform: "uppercase",
      }}
    >
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
      style={{
        padding: "15px 18px",
        borderRadius: "6px",
        border: "1px solid rgba(23,18,58,.15)",
        background: "#fff1e2",
        outline: "none",
        fontSize: "15px",
        transition: ".3s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#ff4d5e")}
      onBlur={(e) => (e.target.style.borderColor = "rgba(23,18,58,.15)")}
    />
  </div>
);

export default Subscribe;