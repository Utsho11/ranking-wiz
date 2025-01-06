import { Image } from "@nextui-org/image";

import serviceData from "./data.json";
const Services = () => {
  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold mb-4 text-center">
        What we <span className="text-[#BA68C8]">offer</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-8">
        {serviceData.map((service, idx) => (
          <div
            key={idx + 1}
            className="flex flex-col gap-4 p-6 rounded-md border-x-2 border-x-[#BA68C8] shadow-md hover:shadow-lg hover:shadow-[#BA68C8]"
          >
            <div className="flex items-center gap-3">
              <Image
                alt={service.name}
                className="rounded-lg"
                height={50}
                src={service.icon}
              />
              <h3 className="text-xl font-bold">{service.name}</h3>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
