import FavBrandCard from "../components/FavBrandCard";
// import olipopLogo from "../assets/olipop.png";
// import auraLogo from "../assets/aura.png";
// import hydrantLogo from "../assets/hydrant.png";
// import oseaLogo from "../assets/osea.png";
import { blogLinks, logo } from "../utils";

const FavBrands = () => {
  return (
    <section className="min-h-[942.94px]">
      <div className="flex flex-col gap-6 w-full max-w-[908px] mx-auto  items-center py-[80px]">
        <div className="flex justify-center items-start llg:w-[90%] flex-col">
          <header className=" text-[24px] md:text-[43.98px] font-poppins text-based font-semibold text-center sm:text-start max-w-[25ch] mb-8">
            YOUR FAVORITE BRANDS ARE HAVING A MOMENT
          </header>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-start gap-10">
              {blogLinks?.map((item, i) => (
                <FavBrandCard
                  key={i}
                  image={item.image}
                  header={item.title}
                  content={item.description}
                  name={item.descriptionBy}
                  brand={item.by}
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex gap-10">
                {logo?.map((item, i) => (
                  <div key={i} className=" rounded-3xl overflow-hidden">
                    <img
                      src={item?.logoImage as unknown as string}
                      alt="logo"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* <div className="rounded-3xl overflow-hidden">
                {" "}
                <img src={auraLogo} alt="logo" loading="lazy" />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="rounded-3xl overflow-hidden">
                {" "}
                <img src={hydrantLogo} alt="logo" loading="lazy" />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img src={oseaLogo} alt="logo" loading="lazy" />
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavBrands;
