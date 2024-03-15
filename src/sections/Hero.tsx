import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="-mx-4 sm:mx-0 px-4 min-h-[492px] flex items-end bg-custom-yellow">
      <div className="hero flex flex-col gap-4 w-full max-w-[1000px] llg:w-[80%] mx-auto pb-[45px] ">
        <header className="font-semibold text-based text-[29px] md:text-[48.875px] leading-[40px] md:leading-[64.5375px] font-poppins max-w-[20ch]">
          SUPERCHARGED LIFECYCLE MARKETING
        </header>
        <p className="text-based font-montserrat text-[20px] max-w-[60ch]">
          <span className="font-semibold">Repeat boosts repurchase rate</span>{" "}
          by automatically delivering personalized messaging at high-leverage
          Moments<sup className="font-semibold">TM</sup>.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-[665px]">
          <button className=" text-left font-montserrat flex gap-3 items-center text-based font-semibold text-[25px] md:text-[34px] py-[17px] px-[34px] bg-white border border-based rounded-full w-full max-w-[665px]">
            {" "}
            <FaArrowRight size={17} /> GET STARTED
          </button>
          <a
            href="#"
            className=" font-montserrat underline self-center text-based text-[17px]"
          >
            Or, book a demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
