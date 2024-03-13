import { footerLinks } from "../utils";
import styles from "../style";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white">
      {/* FOOTER CONTENT */}

      <div className="flex items-center justify-between">
        {/* LOGO IMAGE*/}

        <div>
          <img
            src="https://assets.super.so/18f07db5-d58c-4144-a891-0df945119dae/uploads/logo/d1b51549-14d0-4e6e-83f8-e947eb2a3df5.svg"
            alt="image"
          />
        </div>

        {/* SOCIAL LINKS */}

        <div className="flex text-3xl space-x-6">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>

      {/* FOOTER LINKS */}

      <div className="flex gap-4 py-8">
        {footerLinks.map((link, i) => (
          <h4
            key={i}
            className={`${styles.heading4} text-white font-light cursor-pointer`}
          >
            {link.title}
          </h4>
        ))}
      </div>

      {/* TERMS & CONDITIONS */}

      <div>
        <p className={`${styles.paragraph}`}>
          © {year} REPEAT INC. Moments is a trademark of Repeat, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
