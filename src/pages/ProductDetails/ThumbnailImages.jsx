const ThumbnailImages = () => {
  const thumbnails = [
    "/images/thumbnail-1.png",
    "/images/thumbnail-2.png",
    "/images/thumbnail-3.png",
    "/images/thumbnail-4.png",
  ];
  const renderedThumbnailImages = thumbnails.map((thumbnail, index) => (
    <div key={index} className="bg-gray-50  rounded-sm px-5 py-4 lg:w-[140px] ">
      <img src={thumbnail} alt={thumbnail} />
    </div>
  ));
  return (
    <div className="flex items-center gap-4 order-3   lg:w-1/6 lg:flex-col   lg:order-1">
      {renderedThumbnailImages}
    </div>
  );
};

export default ThumbnailImages;
