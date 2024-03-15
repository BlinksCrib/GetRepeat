import { FaArrowRight } from "react-icons/fa";

const RepeatCard: React.FC<any> = ({ header, subText, content }) => {
  return (
    <div className="border border-based rounded-[25px] w-full sm:max-w-[270px] md:max-w-[276px] p-3 hover:bg-[#f7f5f5] transition-all cursor-pointer">
      <header className="flex items-center gap-2">
        {" "}
        <img
          src="data:image/svg+xml,%3csvg%20width='21'%20height='22'%20viewBox='0%200%2021%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3_268)'%3e%3cg%20clip-path='url(%23clip1_3_268)'%3e%3cpath%20d='M13.6809%2013.031L18.1412%208.57069V15.3153C18.1412%2016.8892%2017.1663%2017.8641%2015.5925%2017.8641H5.39747C3.82362%2017.8641%202.84872%2016.8892%202.84872%2015.3153V13.6682L4.76029%2011.7566L7.30904%2014.3054L11.1322%2010.4823L13.6809%2013.031ZM15.5925%203.84595H5.39747C3.82362%203.84595%202.84872%204.82084%202.84872%206.3947V11.865L4.76029%209.95339L7.30904%2012.5021L11.1322%208.67901L13.6809%2011.2278L18.1412%206.76745V6.3947C18.1412%204.82084%2017.1663%203.84595%2015.5925%203.84595Z'%20fill='%2355534E'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3_268'%3e%3crect%20x='0.299988'%20y='0.659912'%20width='20.39'%20height='20.39'%20rx='3'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_3_268'%3e%3crect%20width='20.39'%20height='20.39'%20fill='white'%20transform='translate(0.299988%200.659912)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
          alt="repeat-icon"
        />{" "}
        <span className="font-poppins text-17 text-based font-medium">
          {header}
        </span>
      </header>
      <p className="font-poppins text-17 text-based font-medium">{subText}</p>
      <p className="mt-1 font-montserrat text-[12.8px] max-w-[25ch]">
        {content}
      </p>
      <a
        href="#"
        className="moment-link gap-1 inline-block font-montserrat text-based text-[12.8px]"
      >
        <span className="flex items-center gap-1">
          {" "}
          Explore plays <FaArrowRight size={7} />
        </span>
      </a>
    </div>
  );
};

export default RepeatCard;
