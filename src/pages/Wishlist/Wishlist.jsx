import JustForYou from "./JustForYou";
import WishListTopNav from "./WishListTopNav";

const Wishlist = () => {
  return (
    <main className="py-5 font-poppins flex flex-col items-center justify-center  lg:px-0 lg:py-10">
      <div className="w-10/12">
        <WishListTopNav />

        <JustForYou />
      </div>
    </main>
  );
};

export default Wishlist;
