import { Navbar, Hero, Showcase, Blog, ReadMore, Footer, Purpose } from './sections'
import styles from './style'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>

      {/* NAVBAR */}
      
      <div className='p-3 bg-primary'>
        <div className="">
          <Navbar />
        </div>
      </div>

      {/* HERO */}

      <div className={`${styles.flexStart} ${styles.padding} pt-24 bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero 
          num={0}
          />
        </div>
      </div>

      {/* BLOG */}

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} px-[50px] `}>
          <Blog />
        </div>
      </div>

      {/* SHOWCASE */}

      <div className={`${styles.flexStart} bg-secondary`}>
        <div className={`${styles.boxWidth} px-[50px] `}>
          <Showcase 
          num={0}/>
        </div>
      </div>

      {/* SHOWCASE 2 */}

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} px-[50px] `}>
          <Showcase 
          num={1}/>
        </div>
      </div>

      {/* PURPOSE */}

      <div className={`${styles.flexStart} bg-secondary`}>
        <div className={`${styles.boxWidth} px-[50px] `}>
          <Purpose />
        </div>
      </div>

      {/* CTA */}

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth} px-[50px] `}>
          <ReadMore />
        </div>
      </div>

      {/* CTA */}

      <div className={`${styles.flexStart} ${styles.padding} pt-10 bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero 
          num={1}
          />
        </div>
      </div>

      {/* FOOTER */}

      <div className={`bg-black`}>
        <div className={`p-[80px]`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App