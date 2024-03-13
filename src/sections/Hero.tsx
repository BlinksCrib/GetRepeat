import HeroCard from "../components/HeroCard";

const Hero: React.FC<any> = ({ num }) => {
  return (
    <section className="flex flex-col max-w-[800px]">
      <HeroCard num={num} />
    </section>
  );
};

export default Hero;
