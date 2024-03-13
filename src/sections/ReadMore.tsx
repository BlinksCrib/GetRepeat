import { BlogCard } from "../components"
import { readMoreLinks } from "../utils"
import styles from "../style"

const ReadMore = () => {
  return (
    <section className="py-[50px]">
      <h2 className={`${styles.heading2} pb-3`}>
        Read More
      </h2>
      <BlogCard 
      links={readMoreLinks}
      />
    </section>
  )
}

export default ReadMore