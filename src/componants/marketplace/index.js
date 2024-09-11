import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const MarketPlace = () => {
    return (
        <div className='md:pt-20 pt-4'>
            <p className="text-4xl mt-2 font-bold">MARKETPLACE</p>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    );
};

export default MarketPlace;