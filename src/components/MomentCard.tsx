import { FaArrowRight } from "react-icons/fa";

const MomentCard: React.FC<any> = ({ header, content, link }) => {
  return (
    <div className="border bg-white border-based rounded-[25px] w-full lg:max-w-[434px] hover:bg-[#f8f9fa] transition-all cursor-pointer p-4">
      <header className="flex gap-1 items-center">
        <img
          src="https://www.notion.so/icons/clock_lightgray.svg"
          alt="moment-icon"
          loading="lazy"
          className="w-[20px]"
        />
        <span className="font-poppins text-based font-medium text-17">
          {header}
        </span>
      </header>
      <p className="font-montserrat text-based text-[12.8px] lg:max-w-[45ch]">
        {content}
      </p>
      <a
        href="#"
        className="moment-link gap-1 inline-block font-montserrat text-based text-[12.8px]"
      >
        {" "}
        <span className="flex items-center gap-1 ">
          {link} <FaArrowRight size={7} />
        </span>{" "}
      </a>
    </div>
  );
};

export default MomentCard;
