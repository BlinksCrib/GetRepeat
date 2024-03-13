import React from "react";

const Button: React.FC<any> = ({
  bgColor,
  textColor,
  fontSize,
  border,
  borderColor,
  borderRadius,
  fontWeight,
  hero
}) => {
  return (
    <button
      type="submit"
      className={`${
        fontSize
          ? `${fontSize} ${bgColor} ${textColor} ${border} ${borderColor} ${borderRadius} ${fontWeight} py-5 px-14`
          : "bg-[#38342c] text-white py-1.5 px-4 mr-4 hover:brightness-50 transition duration-200 borderRadius rounded-full text-base"
      } 
                uppercase fon-poppins flex `}
    >
      {hero ? <span className="font-monserrat">→ Get Started</span> : "Get Started"}
      
    </button>
  );
};

export default Button;
