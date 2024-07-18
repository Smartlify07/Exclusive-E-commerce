import CarouselControls from "../../components/CarouselControls";
import FeaturedProduct from "./FeaturedProduct";

const PromoCarousel = () => {
  return (
    <section className="bg-black py-8 px-10 font-poppins flex flex-col gap-8 justify-around  md:w-11/12 lg:gap-2 lg:py-5 lg:w-9/12">
      <FeaturedProduct />
      <CarouselControls />
    </section>
  );
};

export default PromoCarousel;
