import { LinkedIn, X, Instagram, Tiktok } from '../assets/icons'

const Footer = () => {
  const year = new Date().getFullYear();
  const linkedIn = LinkedIn as unknown as string;
  const x = X as unknown as string;
  const instagram = Instagram as unknown as string;
  const tikTok = Tiktok as unknown as string;

  return (
    <footer className="-mx-4 sm:mx-0 min-h-[340px] bg-based flex items-center">
      <div className="w-[90%] mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row gap-8 md:justify-between">
          <div>
            <img
              src="https://assets.super.so/18f07db5-d58c-4144-a891-0df945119dae/uploads/logo/d1b51549-14d0-4e6e-83f8-e947eb2a3df5.svg"
              alt="cart-icon"
              loading="lazy"
            />
          </div>
          <div className="flex  gap-4">
            <a href="#">
              <img src={linkedIn} alt="linkedIn" loading="lazy" />
            </a>
            <a href="#">
              <img src={x} alt="x" loading="lazy" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" loading="lazy" />
            </a>
            <a href="#">
              <img src={tikTok} alt="tikTok" loading="lazy" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ul className="flex flex-wrap gap-5 items-center font-montserrat text-white text-[16px] md:text-[18px]">
            <li>Blog</li>
            <li>Podcast</li>
            <li>Newsletter</li>
            <li>Jobs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <p className="font-montserrat text-[15px] text-white">
            &copy; {year} REPEAT INC. Moments is a trademark of Repeat, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
