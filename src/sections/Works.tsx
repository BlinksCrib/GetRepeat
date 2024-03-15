import HowItWorksCard from "../components/WorksCard";
import { purposeInfo } from "../utils";

const Works = () => {
  return (
    <section className="py-8 sm:py-0 -mx-4 sm:mx-0 px-4 flex items-center bg-[#EDE7E2] min-h-[1200px]">
      <div className="w-full max-w-[908px] mx-auto">
        <header className="font-poppins text-[23px] md:text-[44px] text-based font-semibold">
          HOW REPEAT WORKS
        </header>
        <div className="mt-6 flex flex-col gap-10">
          {purposeInfo?.map((item, i) => (
            <HowItWorksCard
              key={i}
              header={item.title}
              content={item.paragraph}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
