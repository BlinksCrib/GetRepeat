import React from "react";
import styles from "../style";
import { purposeInfo } from "../utils";

const PurposeCard: React.FC<any> = ({ num }) => {
  const imageUrl = purposeInfo[num].image as unknown as string;

  return (
    // PURPOSE CARD

    <div className="flex py-5">
      {/* TITLE & DESCRIPTION */}

      <div className="max-w-[410px]">
        <h3 className={`${styles.heading3} pb-3`}>{purposeInfo[num].title}</h3>
        <p className={`${styles.paragraph}`}>{purposeInfo[num].paragraph}</p>
      </div>

      {/* IMAGE */}

      <div>
        <img
          src={imageUrl}
          alt="image"
          className="rounded-3xl pl-2"
        />
      </div>
    </div>
  );
};

export default PurposeCard;
