import ThumbnailImages from "./ThumbnailImages";

const Thumbnails = () => {
  return (
    <>
      <ThumbnailImages />

      <div className="min-h-full self-stretch px-5 lg:w-1/3  bg-gray-50 flex items-center mt-4 justify-center order-2 lg:mt-0 lg:order-2">
        <img src="/images/mainimage.png" className="object-cover" alt="" />
      </div>
    </>
  );
};

export default Thumbnails;
