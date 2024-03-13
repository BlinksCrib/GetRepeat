import styles from "../style";
import { cardInfoShowcase1, cardInfoShowcase2, cardInfoShowcase2_1, showcase } from "../utils";
import { Card } from "../components";

const Showcase: React.FC<any> = ({ num }) => {
  // const imageUrl = typeof showcase[num].image === 'string' ? showcase[num].image : '';
  const imageUrl = showcase[num].image as unknown as string;


  return (
    <section className="py-[40px]">
      {/* MAIN CONTENT */}

      <h2
        className={`${styles.heading2}  ${
          num === 0 ? "max-w-[610px]" : "max-w-[680px]"
        } pt-6`}
      >
        {showcase[num].title}
      </h2>
      <div className="flex pt-[30px] pb-[20px]">
        <div>
          <p
            className={`${styles.paragraph} max-w-[410px]`}
            dangerouslySetInnerHTML={{ __html: showcase[num].paragraph }}
          />
          <p className={`${styles.paragraph} max-w-[410px] mt-2`}>
            {showcase[num].paragraph2}
          </p>
        </div>
        {/* {showcase[num].paragraph}
          <br />
        {/* </p> */}
        <div>
          <img
            src={imageUrl}
            alt="image"
            width={440}
            height={550}
            className="pl-3"
          />
        </div>
      </div>

      {/* FEATURED */}

      {num === 0 ? (
        <div>
          <h3 className={`${styles.heading3} py-2`}>featured moments</h3>

          <div className="grid grid-cols-2 gap-12 pt-2 pb-5 justify-evenly">
            {cardInfoShowcase1?.map((card, i) => (
              // <div key={i} className="">
              <Card
                showcaseCard="True"
                key={i}
                title={card.title}
                description={card.description}
              />
              // </div>
            ))}
          </div>
        </div>
      ) : (
        <section>
          <div>
            <h3 className={`${styles.heading3} py-2`}>featured plays</h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-2 pb-2 justify-evenly h-full">
              {cardInfoShowcase2?.map((card, i) => (
                // <div key={i} className="h-full">
                <Card
                  showcaseCard="True"
                  cardType="toplin"
                  key={i}
                  title={card.title}
                  description={card.description}
                  service={card.service}
                />
                // </div>
              ))}
            </div>
            <a href="" className="font-semibold text-xl text-[#7e7e7e] border-b border-[#7e7e7e] font-monserrat">Explore more plays <i className="fa-solid fa-arrow-right text-xs"></i></a>
          </div>
          <div className="mt-4">
            <h3 className={`${styles.heading3} py-2`}>SEE HOW REPEAT CAN HELP YOU</h3>{" "}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-2 pb-2 justify-evenly h-full">
              {cardInfoShowcase2_1?.map((card, i) => (
                // <div key={i} className="h-full">
                <Card
                  showcaseCard="True"
                  cardType="topling"
                  key={i}
                  title={card.title}
                  description={card.description}
                  // service={card.service}
                />
                // </div>
              ))}
            </div>
              <a href="" className="font-semibold text-xl text-[#7e7e7e] border-b border-[#7e7e7e] font-monserrat">Explore more goals <i className="fa-solid fa-arrow-right text-xs"></i></a>
          </div>
        </section>
      )}
    </section>
  );
};

export default Showcase;
