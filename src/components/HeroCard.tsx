import styles from "../style";
import { heroLinks } from "../utils";
import Button from "./Button";

const HeroCard: React.FC<any> = ({ num }) => {
  return (
    <div>
      {/* HEADING */}

      <h1 className={`${styles.heading1}`}>{heroLinks[num].title}</h1>

      {/* PARAGRAPH */}

      <p className={`${styles.paragraph} pb-4 pt-3 max-w-[600px]`}>
        {heroLinks[num].paragraph}
      </p>

      {/* BUTTON */}

      <Button
        fontSize="text-3xl"
        fontWeight="font-medium"
        bgColor="bg-white"
        border="border"
        borderColor="border-black"
        borderRadius="rounded-full"
        hero="hero"
      />

      {/* LINK */}

      <div className="flex justify-center py-4">
        <a href="/" className="underline underline-offset-1">
          Or, book a demo
        </a>
      </div>
    </div>
  );
};

export default HeroCard;
