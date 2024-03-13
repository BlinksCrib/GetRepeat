import styles from "../style"
import PurposeCard from '../components/PurposeCard'

const Purpose = () => {
  return (
    <section className="py-[50px]">
        <h2 className={`${styles.heading2} `}>
            how repeat works
        </h2>
        <PurposeCard 
        num={0}
        />
        <PurposeCard 
        num={1}
        />
        <PurposeCard 
        num={2}
        />
    </section>
  )
}

export default Purpose