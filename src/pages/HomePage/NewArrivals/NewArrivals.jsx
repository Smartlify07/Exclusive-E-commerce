import { Link } from "react-router-dom";
import Ribbon from "../../../components/Ribbon";

const NewArrivals = () => {
  return (
    <section className="py-20 flex flex-col items-center">
      <div className="flex flex-col w-10/12 lg:w-full">
        <header className="flex items-center gap-3">
          <Ribbon />
          <h1 className="text-red font-semibold text-base">Featured</h1>
        </header>
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-black font-semibold text-4xl">New Arrivals</h1>
        </div>
        <div className="flex flex-col gap-4 mt-10 lg:flex-row">
          <div className=" bg-black w-full lg:w-8/12 flex-grow relative pt-10 px-5">
            <img src="/images/playstation5.png" alt="" className="z-10" />
            <div className="flex flex-col gap-1 absolute top-[50%] left-10 z-[1000] lg:top-[70%]">
              <h3 className="text-white font-semibold text-2xl">
                PlayStation 5
              </h3>
              <p className="text-white text-sm w-[70%]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link className="border-b py-1 self-start border-b-white text-white font-medium text-base">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="grid w-full lg:w-10/12 relative grid-col gap-[30px] ">
            <div className="flex w-full row-span-8 relative overflow-hidden rounded-sm bg-black z-[1000]  px-5 pt-5 before:content-[''] before:w-full before:h-[450px] before:bg-white before:blur-lg before:bg-opacity-5  before:absolute before:left-0 before:bottom-0 ">
              <div className="  z-[1000] flex flex-col gap-1 bottom-5 absolute lg:left-7">
                <h1 className="text-white font-semibold text-2xl">
                  Women&apos; Collections
                </h1>
                <p className="text-white text-sm w-[75%]">
                  Featured woman collections that give you another vibe.
                </p>
                <Link className="border-b py-1 self-start border-b-white text-white font-medium text-base">
                  Shop Now
                </Link>
              </div>
              <img
                src="/images/womencollection.png"
                className="object-cover absolute  right-0 bottom-0"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[10px] lg:flex-row">
              <div className="bg-black py-5 rounded-md flex flex-col lg:w-1/2 relative">
                <img
                  src="/images/speakers.png"
                  className="self-center"
                  alt="speakers"
                />
                <div className="absolute bottom-7 left-7 flex flex-col gap-1">
                  <h3 className="text-white font-semibold text-2xl">
                    Speakers
                  </h3>
                  <p className="text-white text-sm">Amazon wireless speakers</p>
                  <Link className="text-white self-start border-b-white border-b">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="bg-black py-5 rounded-md flex flex-col lg:w-1/2 relative">
                <img
                  src="/images/perfumes.png"
                  className="self-center"
                  alt="speakers"
                />
                <div className="absolute bottom-10 flex flex-col gap-2 left-7">
                  <h3 className="text-white font-semibold text-2xl">
                    Perfumes
                  </h3>
                  <p className="text-white text-sm">GUCCI INTENSE OUD EDP</p>
                  <Link className="text-white self-start border-b-white border-b">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
