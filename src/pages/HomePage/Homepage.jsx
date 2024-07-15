import Categories from "./Categories";
import FlashSales from "./Flashsales/FlashSales";
import ProductList from "./ProductList/ProductList";
import PromoCarousel from "./PromoCarousel";

const Homepage = () => {
  return (
    <main className="py-10 font-poppins flex flex-col items-center">
      <div className="md:w-10/12">
        <div className="flex justify-between">
          <Categories />
          <PromoCarousel />
        </div>

        <FlashSales />
        <ProductList />
      </div>
    </main>
  );
};

export default Homepage;
