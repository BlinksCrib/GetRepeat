// import { BlogCard } from "../components";
import { readMoreLinks } from "../utils";
// import styles from "../style";
import ReadMoreCard from "../components/ReadMoreCard";

const ReadMore = () => {
  return (
    <section className="min-h-[653px] flex justify-center items-center py-8 sm:py-0 ">
      <div className="w-full max-w-[908px] mx-auto flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-start llg:w-[90%] flex-col">
          <header className="font-poppins text-[24px] md:text-[44px] font-semibold text-based text-center sm:text-start ">
            READ MORE
          </header>
          <div className="flex flex-wrap justify-start gap-10">
            {readMoreLinks
              ?.filter((item) => item !== undefined)
              .map((item, i) => (
                <ReadMoreCard
                  key={i}
                  image={item?.image}
                  header={item?.title}
                  content={item?.description}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
