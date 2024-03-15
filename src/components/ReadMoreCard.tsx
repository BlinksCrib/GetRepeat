import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ReadMoreCard: React.FC<any> = ({ image, header, content }) => {
  return (
    <div className="border border-based cursor-pointer overflow-hidden rounded-[25px] min-h-[456px] md:max-w-[276px] w-full">
      <div className="">
        <img
          src={image}
          alt="readmore-image"
          className="lmd:h-[240px] object-cover object-center w-full"
          loading="lazy"
        />
      </div>
      <div className="p-4 hover:bg-[#f7f5f5] transition-all">
        <p className="text-17 font-poppins font-medium text-based">{header}</p>
        <p className=" text-left pr-2 font-montserrat text-[12.8px] text-based">
          {content}
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

export default ReadMoreCard;
