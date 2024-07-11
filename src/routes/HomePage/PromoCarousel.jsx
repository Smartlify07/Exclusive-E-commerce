import CarouselControls from "../../components/CarouselControls";
import FeaturedProduct from "./FeaturedProduct";

const PromoCarousel = () => {
  return (
    <section className="bg-black py-5 px-10 md:w-9/12 font-poppins flex flex-col justify-around gap-2">
      <FeaturedProduct />
      <CarouselControls />
    </section>
  );
};

export default PromoCarousel;
