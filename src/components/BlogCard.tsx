import React from "react";
import styles from "../style";

interface Blog {
  image: any;
  title: string;
  description: string;
  descriptionBy: string;
  by: string;
}

const BlogCard: React.FC<{ links: Blog[] }> = ({ links }) => {
  return (
    // BLOG CONTENT

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-4 py-3">
      {links?.map((link, i) => (
        <div
          className="font-monserrat border-solid border border-black rounded-3xl md:max-w-[260px] h-full"
          key={i}
        >
          <a href="" className="">
            {/* IMAGE */}

            <div className="">
              <img src={link.image} alt="image" className="rounded-t-3xl " />
            </div>

            {/* TITLE & DESCRIPTION */}

            <div className="p-5 lg:max-w-[260px]">
              <h4 className={`${styles.heading4} pb-2`}>{link.title}</h4>
              <p className={`${styles.paragraph1} pb-2 leading-6`}>
                {link.description}
                <p className={`${styles.paragraph1} pt-1 italic`}>
                  {link.descriptionBy}
                </p>
              </p>
              <p className={`${styles.paragraph1} font-semibold`}>{link.by}</p>
              <a href="" className="font-monserrat text-[#7e7e7e] border-b border-[#7e7e7e] mt-1 font-light text-sm">
                Read more
              </a>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
