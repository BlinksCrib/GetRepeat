import { FaArrowRight } from "react-icons/fa";

const FavBrandCard: React.FC<any> = ({
  image,
  header,
  content,
  name,
  brand,
}) => {
  return (
    <div className="cursor-pointer min-h-[460px] md:max-w-[265px] w-full border border-based rounded-[25px] overflow-hidden">
      <img
        src={image}
        alt="brand-image"
        className="lmd:h-[240px] object-cover object-center w-full"
        loading="lazy"
      />
      <div className="p-4 hover:bg-[#f7f5f5] transition-all">
        <p className="text-[17px] font-poppins font-medium text-based">{header}</p>
        <p className=" text-left pr-2 font-montserrat text-[12.8px] text-based">
          {content}
        </p>
        <p className=" text-left font-montserrat text-[12.8px] text-based italic">
          {name}
        </p>
        <p className=" text-left py-1 font-montserrat text-[12.8px] text-based font-semibold">
          {brand}
        </p>
        <a
          href="#"
          className="text-left inline-block font-montserrat text-[12.8px] text-based border-b border-based border-opacity-[0.7] opacity-[0.7]"
        >
          <span className=" flex  items-center gap-1 ">
            {" "}
            Read more <FaArrowRight size={6} style={{ opacity: 0.7 }} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default FavBrandCard;
