import styles from "../style";

const Card: React.FC<any> = ({
  cardType,
  key,
  title,
  description,
  service,
  showcaseCard,
  logoImage,
}) => {
  return (
    <div>
      {showcaseCard ? (
        <div
          key={key}
          className={`border-solid border border-black rounded-3xl py-4 px-5 
            bg-white hover:bg-[#f6f5f4] transition duration-150 cursor-pointer h-full`}
        >
          <div className="flex">
            <img
              src={
                cardType === "toplin"
                  ? "https://www.notion.so/icons/playback-play-button_gray.svg"
                  : "https://www.notion.so/icons/clock_lightgray.svg"
              }
              alt={cardType === "toplin" ? "play" : "clock"}
              className="w-[20px] mr-1"
            />
            <h4 className={`text-lg font-semibold pb-1`}>
              {title} {(cardType !== "toplin" && cardType !== "topling") && "Moment"}
            </h4>
          </div>
          {cardType === "toplin" && (
            <div className="flex flex-wrap mb-2 mt-4">
              {service?.map((item: String, i: any) => (
                <div className="bg-[#E2D8FF] last:bg-[#C3D5FC] mr-2  min-w-[60px] text-center rounded-full px-4 mt-2 " key={i}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          <p className={`${styles.paragraph1}`}>{description}</p>
          <a href="" className="text-sm underline">
            {cardType === "toplin" ? `Explore this play` : cardType === "topling" ? "Explore play" :`Explore ${title === "Subscription Upsell" ? "Subsrciption" : title}`}
          </a>
        </div>
      ) : (
        <div className={`${styles.flexCenter} lg:w-[180px] h-[110px]`}>
          <img
            src={logoImage}
            alt={logoImage}
            className="object-center object-cover rounded-3xl w-full h-full"
          />
          {/* <h3 className={`${styles.heading4} text-white`}>{logoImage}</h3> */}
        </div>
      )}
    </div>
  );
};

export default Card;
