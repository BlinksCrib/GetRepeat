import { img1 } from "../assets/images";
import MomentCard from "../components/MomentCard";
import { cardInfoShowcase1 } from "../utils";

const DriveMore = () => {
  const driveMoreImage = img1 as unknown as string;
  return (
    <div className="py-8 sm:my-0 -mx-4 sm:mx-0 px-4 min-h-[1203px] bg-[#EDE7E2] flex items-center">
      <div className="w-full max-w-[908px] mx-auto">
        <header className=" text-[24px] md:text-[43.9875px] font-semibold font-poppins leading-[32px] md:leading-[57.1838px] text-based text-center sm:text-start max-w-[25ch]">
          DRIVE MORE SECOND ORDERS WITH MOMENTS THAT MATTER
        </header>
        <div className="flex flex-col lg:flex-row gap-10 my-8">
          <p className="text-17 font-montserrat lg:max-w-[38ch] text-based leading-[25.5px]">
            Repeat monitors when customers enter key Moments—think
            cross-selling, replenishment, lapsing—and passes that intelligence
            to the email and SMS platforms you use today. The result is{" "}
            <span className="font-semibold">
              more personalized campaigns, smarter flows,
            </span>{" "}
            and an{" "}
            <span className="font-semibold">easier retention workflow</span>.{" "}
            <p className="mt-2">
              Moments make it a breeze to create the kind of hyper-personalized
              messaging that used to require complicated if/else logic, rigid
              timing, and burdensome setup.
            </p>
          </p>
          <div className="pt-1">
            <img src={driveMoreImage} alt="drive-more" loading="lazy" />
          </div>
        </div>
        <div>
          <p className="font-poppins text-[20px] md:text-[29.325px] font-semibold leading-[38.1px] text-based mb-6">
            FEATURED MOMENTS
          </p>
          <div className="flex flex-wrap gap-10">
            {cardInfoShowcase1?.map((item, i) => (
              <MomentCard
                key={i}
                header={`${item.title} Moment`}
                content={item.description}
                link={`Explore ${item.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveMore;
