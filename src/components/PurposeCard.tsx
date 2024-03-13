import styles from "../style"
import { purposeInfo } from "../utils"

const PurposeCard = ({num}) => {
  return (

    // PURPOSE CARD

    <div className="flex py-5">

        {/* TITLE & DESCRIPTION */}

        <div className="max-w-[410px]">
            <h3 className={`${styles.heading3} pb-3`}>
                {purposeInfo[num].title}
            </h3>
            <p className={`${styles.paragraph}`}>
                {purposeInfo[num].paragraph}
            </p>
        </div>

        {/* IMAGE */}
        
        <div>
            <img 
            src={purposeInfo[num].image} 
            alt="image" 
            className="rounded-3xl pl-2"
            />
        </div>
    </div>
  )
}

export default PurposeCard