import { FaArrowRight } from "react-icons/fa"

const Customs = () => {
  return (
    <section className="-mx-4 sm:mx-0 px-4 min-h-[390px] bg-[#F5FF7D] flex items-center">
        <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-4">
            <header className="font-poppins font-semibold text-[24px] md:text-[44px] text-based" >UNLOCK YOUR CUSTOMER MOMENTS</header>
            <p className="font-montserrat text-[17px] max-w-[43ch]">Start activating the Moments that matter. Get started now to see how Repeat can <span className="font-semibold">simplify</span> and <span className="font-semibold">supercharge</span> your retention workflow.</p>
            <div className="flex flex-col gap-4 w-full max-w-[484px]">
            <button className=" text-left font-montserrat flex gap-3 items-center text-based font-semibold text-[24px] md:text-[34px] py-[17px] px-[34px] bg-white border border-based rounded-full w-full max-w-[484px]"> <FaArrowRight size={17} /> GET STARTED</button>
                <a href="#" className=" font-montserrat underline self-center text-based text-[17px]">Or, book a demo</a>
        </div>
        </div>
    </section>
  )
}

export default Customs
