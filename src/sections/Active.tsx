import { FaArrowRight } from "react-icons/fa";
import RepCard from "../components/RepCard";
import Feature from "../components/Feature";
import { cardInfoShowcase2, cardInfoShowcase2_1 } from "../utils";
import { img2 } from "../assets/images";

const Active = () => {
  const activateMomentLogo = img2 as unknown as string;
  return (
    <section className="my-14 flex flex-col justify-center items-center w-full max-w-[908px] mx-auto">
      <div className="flex justify-center items-start llg:w-[90%] flex-col">
        <header className="font-poppins text-[21px] md:text-[43.9875px] font-semibold leading-[28px] md:leading-[57.183px] text-based">
          ACTIVATE MOMENTS WITH PLAYS
        </header>
        <div className="my-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <p className="lg:max-w-[37ch] text-based font-montserrat">
              <span className="font-semibold">
                The key to simplifying your work without sacrificing performance
              </span>
              : ready-made Plays, like Moment-specific flows, dynamic email
              banners, and personalized direct mail, make it easy to leverage
              the Moments that Repeat surfaces. They&apos;ll help you{" "}
              <span className="font-semibold">
                quickly create campaigns and flows{" "}
              </span>
              that resonate with your customers, no matter what stage of the
              lifecycle they&apos;re in.
            </p>
            <div>
              <img
                src={activateMomentLogo}
                // width={"434px"}
                className="lg:w-[434px]"
                height={"496.34px"}
                alt="activate-logo"
                loading="lazy"
              />
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col ">
          <div className="my-4 flex flex-col gap-4">
            <header className="font-poppins text-[20px] md:text-[29.325px] font-semibold leading-[38.12px] text-center sm:text-start text-based">
              FEATURED PLAYS
            </header>
            <div className="flex flex-wrap justify-center sm:justify-normal gap-8">
              {cardInfoShowcase2?.map((item, i) => (
                <Feature
                  key={i}
                  header={item.title}
                  // subText="Subscription-Ready Customers"
                  content={item.description}
                />
              ))}
            </div>
            <a
              href="#"
              className="moment-link self-start gap-1 inline-block font-montserrat mt-1 text-based text-17 font-semibold opacity-[0.7]"
            >
              <span className="flex items-center gap-1">
                {" "}
                Explore more plays <FaArrowRight size={7} />
              </span>
            </a>
          </div>
          <div className="my-4 flex flex-col gap-2">
            <header className="font-poppins text-[21px] md:text-[29.325px] font-semibold leading-[38.12px] text-based">
              SEE HOW REPEAT CAN HELP YOU
            </header>
            <div className="flex flex-wrap gap-8">
              {cardInfoShowcase2_1.map((item, i) => (
                <RepCard
                  key={i}
                  header={item.title}
                  // subText="churn"
                  content={item.description}
                />
              ))}
            </div>
            <a
              href="#"
              className="moment-link self-start gap-1 inline-block font-montserrat mt-1 text-based text-17 font-semibold opacity-[0.7]"
            >
              <span className="flex items-center gap-1">
                {" "}
                Explore more goals
                <FaArrowRight size={7} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Active;
