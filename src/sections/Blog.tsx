import {
  blogLinks,
  logo,
} from "../utils";
import styles from "../style";
import { BlogCard, Card } from "../components";

const Blog = () => {
  return (
    <section className="py-[40px]">
      <div className="">
        <div>
          {/* HEADING */}

          <h2 className={`${styles.heading2} max-w-[600px] py-[20px]`}>
            your favorite brands are having a moment
          </h2>

          {/* BLOG CONTENT */}

          <BlogCard links={blogLinks} />

          {/* CARD */}

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-9 pt-2 pb-5 justify-evenly ">
            {logo.map((image, i) => (
              <div key={i}>
                <Card logoImage={image.logoImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
// {cardInfoShowcase1.map((cardInfo) => (
//   <Card
//   title={cardInfo.title}
//   description={cardInfo.description}
//   />
// ))}

export default Blog;
