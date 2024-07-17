/* eslint-disable react/prop-types */
const ServiceHighlights = () => {
  const serviceHighlights = [
    {
      name: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
      icon: "icon-customer-service",
    },
    {
      name: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
      icon: "icon-delivery",
    },
    {
      name: "MONEY BACK GUARANTEE",
      text: "We reurn money within 30 days",
      icon: "icon-secure",
    },
  ];

  const renderedServices = serviceHighlights.map((item) => (
    <ServiceFeature {...item} key={item.name} />
  ));
  return (
    <section className="py-20">
      <div className="grid grid-auto-fit  justify-center items-center lg:gap-[40px] lg:grid-auto-fit">
        {renderedServices}
      </div>
    </section>
  );
};

export const ServiceFeature = ({ name, icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
        <div className="bg-black rounded-full flex items-center justify-center w-10 h-10">
          <img
            src={`/images/icons/${icon}.svg`}
            className="w-[30px]"
            alt="icon"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="mt-2 uppercase text-black font-semibold text-[20px]">
          {name}
        </p>

        <p className="text-black text-sm font-normal">{text}</p>
      </div>
    </div>
  );
};

export default ServiceHighlights;
